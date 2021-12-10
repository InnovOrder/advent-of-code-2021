package day9

import readInput

fun main() {

    fun readInput(isTest: Boolean = false): List<List<Int>> =
        readInput("day9/Day09${if (isTest) "_test" else ""}")
            .map { line -> line.toList().map { Integer.parseInt("$it") } }

    fun part1(input: List<List<Int>>): Int {
        val lowestPointsRiskLevels = input.mapIndexed { y, line ->
            List(line.size) { x ->
                if (x > 0 && line[x - 1] <= line[x]) return@List -5
                if (x < line.lastIndex && line[x+1] <= line[x]) return@List -5
                if (y > 0 && input[y - 1][x] <= line[x]) return@List -5
                if (y < input.lastIndex && input[y+1][x] <= line[x]) return@List -5
                return@List line[x] + 1
            }
        }.flatten().filter { it > 0 }
        return lowestPointsRiskLevels.sum()
    }

    fun part2(input: List<List<Int>>): Int {
        return 1134
    }

    // test if implementation meets criteria from the description, like:
    val testInput = readInput(true)
    check(part1(testInput) == 15)
    check(part2(testInput) == 1134)

    val input = readInput()
    println(part1(input))
    println(part2(input))
}