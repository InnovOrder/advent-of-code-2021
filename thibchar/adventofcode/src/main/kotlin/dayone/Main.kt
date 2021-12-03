import java.io.File

fun main(args: Array<String>) {
    val depths = File("src/main/kotlin/dayone/input.txt").readLines().map(String::toInt)
    var returnValue = 0
    depths.forEachIndexed { index, depth ->
        if (index > 0 && depth > depths[index - 1]) {
            returnValue++
        }
    }
    println(returnValue)
}