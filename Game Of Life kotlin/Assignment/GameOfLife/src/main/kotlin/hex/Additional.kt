package hex

import javafx.scene.Node
import javafx.scene.layout.GridPane
operator fun GridPane.get(x : Int, y : Int) : Node?
{
    return this.children.find { GridPane.getColumnIndex(it) === x && GridPane.getRowIndex(it) === y }
}
operator fun GridPane.set(x : Int, y : Int, node : Node) = this.add(node, x, y)

val GridPane.columns : Int
    get() {
        var MyColumns = this.rowConstraints.size
        for (i in 0 .. this.children.size - 1)
        {
            val child = this.children[i]
            if (child.isManaged)
            {
                val rowIndex = GridPane.getColumnIndex(child)
                if (rowIndex != null)
                {
                    MyColumns = Math.max(MyColumns, rowIndex + 1)
                }
            }
        }
        return MyColumns
    }

val GridPane.rows : Int
    get() {
        var MyRows = this.rowConstraints.size
        for (i in 0 .. this.children.size - 1)
        {
            val child = this.children[i]
            if (child.isManaged)
            {
                val rowIndex = GridPane.getRowIndex(child)
                if (rowIndex != null)
                {
                    MyRows = Math.max(MyRows, rowIndex + 1)
                }
            }
        }
        return MyRows
    }