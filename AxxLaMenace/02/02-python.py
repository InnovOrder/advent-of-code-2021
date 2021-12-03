# PART 1
def compute_first_part(lines):
    horizontal = 0
    depth = 0
    for line in lines:
        direction, value = line.split(" ")
        value = int(value)
        if direction == "forward":
            horizontal += value
        elif direction == "down":
            depth += value
        elif direction == "up":
            depth -= value
    print("part 1", horizontal*depth)

# PART 2
def compute_second_part(lines):
    horizontal = 0
    depth = 0
    aim = 0
    for line in lines:
        direction, value = line.split(" ")
        value = int(value)
        if direction == "forward":
            horizontal += value
            depth += value*aim
        elif direction == "down":
            aim += value
        elif direction == "up":
            aim -= value
    print("part 2", horizontal*depth)

if __name__ == '__main__':
    file = open("02/02.data.txt", "r")
    lines = file.read().split('\n')
    compute_first_part(lines)
    compute_second_part(lines)
    file.close()