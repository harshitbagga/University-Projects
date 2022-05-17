package hex

import javafx.geometry.HPos
import javafx.geometry.VPos
import javafx.scene.control.Button
import javafx.scene.effect.Glow
import javafx.scene.input.MouseButton
import javafx.scene.layout.AnchorPane
import javafx.scene.layout.ColumnConstraints
import javafx.scene.layout.GridPane
import javafx.scene.layout.RowConstraints
import javafx.scene.paint.Color
import javafx.scene.shape.Rectangle
import javafx.scene.text.Text
import javafx.stage.StageStyle
import tornadofx.View
import tornadofx.tooltip
import java.awt.GraphicsEnvironment
import java.util.*
import kotlin.concurrent.scheduleAtFixedRate
import kotlin.properties.Delegates
import kotlin.system.exitProcess


class WindowView : View("Game of Life By Jhon Horton Conway")
{
    companion object
    {
        @JvmStatic
        val DEFAULT_SIZE = 16



        @JvmStatic
        val DELAY_MS = 250L // pls never go to 0
    }

    // FXML objects.
    override val root : GridPane by fxml()
    val grid : GridPane by fxid()
    val title_Bar : AnchorPane by fxid()
    val size_Indication : Text by fxid()
    val play_Button  : Button by fxid()
    val reset_Button : Button by fxid()
    val close_Button : Button by fxid()
    var window : Window by Delegates.notNull()

    // Timer to play.
    private val timer = Timer() //starts a timer when we play
    private var task : TimerTask? = null //A task that can be scheduled for one-time or repeated execution by a Timer.

    // Colors of each displayed cell.
    private var offColor = Color.valueOf("#FFFFFF") //displays the cells color when they are in dead state
    private var onColor = Color.valueOf("#000000")  //displays the cells color when they are in alive state

    // Size of the grid.
    var size = DEFAULT_SIZE


    // For dragging the title bar.
    private var xOffset = 0.0
    private var yOffset = 0.0

    init
    {
        primaryStage.resizableProperty().set(false)
        primaryStage.initStyle(StageStyle.TRANSPARENT) //to keep pane area transparent else it will show white color by default

        title_Bar.setOnMousePressed { event ->      //this allows the tiles of x axis and y axis to be clickable in title_Bar
            xOffset = event.sceneX
            yOffset = event.sceneY
        }

        title_Bar.setOnMouseDragged { event -> // it allows the mouse to use the drag function of the mouse on the pane
            primaryStage.x = event.screenX - xOffset
            primaryStage.y = event.screenY - yOffset
        }
        resetStagePosition() // to set the position of the application on open

        // MAIN SETUP
        gridSetup(size)



        /*on click it will check */

        play_Button.setOnMouseClicked()
        {
            if (task !== null)
            {
                play_Button.text = "▶"
                task?.cancel()
                task = null
                reset_Button.disableProperty().set(false) //Defines the individual disabled state of this Node.
                //basically this function is disabling the reset button when it is in play mode
            }
            else
            {
                play_Button.text = "⏸"
                ////basically this function is enabling the reset button when it is in play mode
                task = timer.scheduleAtFixedRate(0L, DELAY_MS)
                {
                    val changes = window.NextGen()
                    updateGrid()

                }

                reset_Button.disableProperty().set(true)
                size_Indication.text = "$size * $size"
            }
        }


        reset_Button.setOnMouseClicked()
        {
            window.clear()
            updateGrid()
        }

        close_Button.setOnMouseClicked()
        {
            if (it.button == MouseButton.PRIMARY)
            {
                // closeModal()
                exitProcess(0)
            }
        }
    }

    // Setup the grid.
    private fun gridSetup(size : Int)
    {
        size_Indication.text = "$size * $size" // here we get size from the WindowView.FXML file where the text has id = size_Indication

        for (i in 1 .. size)
        {
            grid.columnConstraints.add(ColumnConstraints().apply {           //grid returns the column constraints
                halignment = HPos.CENTER  //alignment of the column is set to center
                prefWidth = 100.0  //preferred width of each cell
            })

            grid.rowConstraints.add(RowConstraints().apply {
                valignment = VPos.CENTER
                prefHeight = 100.0 ////preferred width of each cell
            })
        }

        window = Window(grid.columns, grid.rows)

        val width = (300.0 - 10) / grid.columns - 2
        val height = (300.0 - 10) / grid.rows - 2

        for (x1 in 0 .. grid.columns - 1) for (y1 in 0 .. grid.rows - 1)
        {
            val cell = Rectangle(width, height, offColor).apply { arcHeight = 5.0; arcWidth = 5.0 }

            grid[x1, y1] = cell.apply {

                setOnMouseEntered {
                    cell.effect = Glow(1.0)
                }

                setOnMouseExited {
                    if (window[x1, y1].alive)
                    {
                        fill = onColor
                    }
                    else
                    {
                        fill = offColor
                    }
                    effect = null
                }

                setOnMouseClicked {
                    window[x1, y1].Switcher()

                    if (window[x1, y1].alive)
                    {
                        fill = onColor
                    }
                    else
                    {
                        fill = offColor
                    }

                }
            }
        }
    }

    // Update the displayed window base on
    // the pane instance.
    fun updateGrid()
    {
        for (x in 0 .. grid.columns - 1) for (y in 0 .. grid.rows - 1)
        {
            if (window[x, y].alive)
            {
                (grid[x, y] as Rectangle).fill = onColor  //filling the color of the tile as oncolor
            }
            else
            {
                (grid[x, y] as Rectangle).fill = offColor //filling the color of the tile as offcolor
            }
        }
    }

    // Set position of window to top-right when the application starts
    private fun resetStagePosition()
    {
        val gd = GraphicsEnvironment.getLocalGraphicsEnvironment().defaultScreenDevice
        val desktopWidth = gd.displayMode.width

        primaryStage.x = desktopWidth - 320.0
        primaryStage.y = 20.0
    }


}

