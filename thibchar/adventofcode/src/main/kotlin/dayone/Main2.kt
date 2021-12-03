import java.io.File

fun main(args: Array<String>) {
    val depths = File("src/main/kotlin/dayone/input.txt").readLines().map(String::toInt)
    var returnValue = 0
    var previousTripletSum= 0

    for (i in 0..depths.size-3) {
        val currentTripletSum = depths[i] + depths[i+1] + depths[i+2]

        if (i > 0 && currentTripletSum > previousTripletSum) {
            returnValue++
        }
        previousTripletSum = currentTripletSum
    }

    println(returnValue)
}