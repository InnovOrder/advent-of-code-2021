# PART 1
def compute_first_part(lines):
    count = 0
    for i in range(1, len(lines)):
        previousValue = int(lines[i-1])
        value = int(lines[i])
        if value > previousValue:
            count += 1
    print("part 1", count)

# PART 2
def compute_second_part(lines):
    count = 0
    for i in range(3, len(lines)):
        previousValue = int(lines[i-3])
        value = int(lines[i])
        if value > previousValue:
            count += 1
    print("part 2", count)

if __name__ == '__main__':
    file = open("01/01.data.txt", "r")
    lines = file.read().split('\n')
    compute_first_part(lines)
    compute_second_part(lines)
    file.close()