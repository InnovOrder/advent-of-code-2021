package day10

import readInput

fun main() {

    val illegalCharacterScores = mapOf(')' to 3, ']' to 57, '}' to 1197, '>' to 25137)
    val missingCharacterScores = mapOf('(' to 1, '[' to 2, '{' to 3, '<' to 4)
    val openClosePairs = mapOf('(' to ')', '[' to ']', '{' to '}', '<' to '>')
    val minimalChunks = openClosePairs.map { (a, b) -> "$a$b" }

    fun String.containsNoneOf(elements: Collection<String>): Boolean =
        elements.none { this.contains(it) }

    fun readInput(isTest: Boolean = false) =
        readInput("day10/Day10${if (isTest) "_test" else ""}")

    fun getScoreForLine(line: String, scoreForIncompleteLines: Boolean = false): Long {
        if (line.containsNoneOf(minimalChunks)) {
            return if (scoreForIncompleteLines) {
                line
                    .reversed()
                    .map { missingCharacterScores[it]!!.toLong() }
                    .fold(0L) { sum, charScore -> sum * 5 + charScore }
            } else {
                line
                    .firstOrNull { it in openClosePairs.values }
                    ?.let(illegalCharacterScores::get)
                    ?.toLong() ?: 0L
            }
        }

        var result = line
        minimalChunks.forEach {
            result = result.split(it).joinToString("")
        }
        return getScoreForLine(result, scoreForIncompleteLines)
    }

    fun part1(input: List<String>): Long {
        return input.sumOf(::getScoreForLine)
    }

    fun part2(input: List<String>): Long {
        val a = input
            .filter { getScoreForLine(it) == 0L }
            .map { getScoreForLine(it, true) }
            .sorted()

        return a[a.size / 2]
    }

    // test if implementation meets criteria from the description, like:
    val testInput = readInput(true)
    check(part1(testInput) == 26397L)
    check(part2(testInput) == 288957L)

    val input = readInput()
    println(part1(input))
    println(part2(input))
}