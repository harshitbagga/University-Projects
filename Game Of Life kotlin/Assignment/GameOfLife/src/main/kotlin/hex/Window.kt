package hex

import java.io.Serializable

/*Conway's Game of Life at first there are parameters which have sizeX Width of board. sizeY Height of board. other_side Will the board loop over on the other side?
 */
open class Window(val sizeX : Int, val sizeY : Int, var other_side : Boolean = true)
{
    companion object
    {
        //Neighbor relative locations.
        @JvmStatic
        private val NEIGHBOURS = arrayOf(
                intArrayOf(-1, -1), intArrayOf(-1, 0), intArrayOf(-1, +1),
                intArrayOf(0, -1), intArrayOf(0, +1),
                intArrayOf(+1, -1), intArrayOf(+1, 0), intArrayOf(+1, +1))
    }

    val DEAD_CELL = object : Cell(-1, -1, false)
    {
        override var alive : Boolean
            get() = false
            set(b) { alive = false }
    }

    //it gives values to the 2D array of the cells on the board.
    var array = Array(sizeY) { x -> Array(sizeX) { y -> Cell(x, y) } }
        private set

    //see Cell.alive Set the state of the cell at location [x],[y].
    operator fun set(x : Int, y : Int, state : Boolean)
    {
        if (other_side)  //  whenever we select the cell it changes the state of the cell to alive
        {
            array(y)(x).alive = state
        }
        else
        {
            try  // if the cells values goes outofbounds
            {
                array[y][x].alive = state
            }
            catch (ignore : ArrayIndexOutOfBoundsException) { }
        }
    }

    //see Cell @return Cell at location [x], [y].
    operator fun get(x : Int, y : Int) : Cell
    {
        if (other_side) //checks the changes in the cell states and then gets the values to the cell
        {
            return array(y)(x)
        }
        else
        {
            try
            {
                return array[y][x]
            }
            catch (ignore : ArrayIndexOutOfBoundsException)
            {
                return DEAD_CELL
            }
        }
    }

    /*based on current generation's. @return Differences between previous generation and new generation.*/
    fun NextGen() : Int
    {
        var cell_changes = 0

        val newBoard = Array(sizeX) { x -> Array(sizeY) { y -> Cell(x, y) } }  //lambda function

        for (x in 0 .. sizeX - 1) for (y in 0 .. sizeY - 1)  //
        {
            val n = array[y][x].neighbors

            // Here all new cells start as dead.
            if (!this[x, y].alive)
            {
                if (n == 3)
                {
                    newBoard[y][x].alive = true //cells with exactly three values will live
                }
            }
            else if (n == 2 || n == 3) //checks the conditions of two or three neighbours will live on two the next generation
            {
                newBoard[y][x].alive = true
            }

            if (newBoard[y][x].alive !== array[y][x].alive) cell_changes++
        }

        array = newBoard

        return cell_changes
    }

    /*Set all of the cells to dead.*/
    fun clear()
    {
        for (x in 0 .. sizeX - 1) for (y in 0 .. sizeY - 1) array[x][y].alive = false //all cells becomes dead
    }

    override fun toString() : String
    {
        return array
                .map { it.map { if (it.alive) 1 else 0 } }
                .toString()
                .replace("], [", "]\n[")
                .replace("[[","[")
                .replace("]]", "]")
    }

    // EXTENSIONS

    /*other_side getting. */
    private operator fun <T> Array<T>.invoke(index : Int) : T
    {
        return this[index mod this.size]
    }

    /*Real modulus implementation. */
    private infix fun Int.mod(i : Int) : Int = (((this % i) + i) % i)


    //CELL CLASS
    //to make a class inheritable to the other classes, you must mark it with the open keyword
    /*Stores it's location and state.*/
    open inner class Cell(open var x : Int, open var y : Int, open var alive : Boolean = false ) : Serializable
    {
        /**
         * Get neighbors of the current cell.
         */
        open val neighbors : Int
            get()
            {
                var n = 0
                for (arr in NEIGHBOURS)
                {
                    if (this@Window[y + arr[0], x + arr[1]].alive)
                    {
                        n++
                    }
                }
                return n
            }

        /*Changes the state of the cell back to start all cells goes back to dead.*/
        open fun Switcher()
        {
            alive = !alive
        }

        /*Return string representation of cell.*/
        override fun toString() = "($x, $y, $alive)"
    }
}

