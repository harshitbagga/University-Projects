import kotlinx.coroutines.*
import kotlin.random.Random


suspend fun main() {
     sendDataAndAwaitAcknowledge()
    BlockingDispatcher()
    dressingprocess()

}
suspend fun worker1(){

    log("Worker 1 is selecting ingredients")
    delay(30000)
    log("Worker 1 has selected ingridients")


}
suspend fun worker2(){
    log("Worker 2 is selecting ingredients")
    delay(30000)
    log("Worker 2 has selected ingridients")


}

fun log(msg: String) = println("[${Thread.currentThread().name}] $msg")

suspend fun sendDataAndAwaitAcknowledge() = coroutineScope {
    awaitAll(async {
        worker1()

    }, async {
        worker2()
    })

}

fun microwave(status:Int, bread:String, meat:String){
    runBlocking {
        log("Microwave started with Sandwich "+status+"("+bread+"+"+meat+")")
        delay(20000)
        log("Microwave has finished cooking sandwich " +status+"("+bread+"+"+meat+")")
    }

}



fun BlockingDispatcher(){
    var str1:String
    var str2:String
    val rand = Random(System.nanoTime())
    var value1 = (1..2).random(rand)
    var value2 = (1..2).random(rand)
    if(value1 == 1){
        str1 = "Brown Bread "
    }
    else{
        str1 = "White Bread "
    }
    if(value2 == 1){
        str2 = "Chicken "
    }
    else{
        str2 = "Beef "
    }

    runBlocking(Dispatchers.Default) {

        microwave(1,str1,str2)

        microwave(2,str1,str2)

    }

}



suspend fun dressingprocess() = coroutineScope {
    awaitAll(async {
        dressing(1)

    }, async {
        dressing(2)
    })

}


suspend fun dressing(dressing_Status:Int){
    log("Dressing has started for sandwich "+dressing_Status)
    delay(10000)
         log("Dressing is done for sandwich "+dressing_Status)
         log("Sandwich"+dressing_Status+" is served")
    //main()
}

