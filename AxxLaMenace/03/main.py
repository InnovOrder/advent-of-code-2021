# PART 1
def first_puzzle(lines):
    nb_lines = len(lines)
    counter = [0]*len(lines[0])
    for line in lines:
        for i in range(len(line)):
            char = line[i]
            if char == '1':
                counter[i] += 1
    print(counter)
    gamma_rate_binary = ""
    for elem in counter:
        if elem > nb_lines/2:
            gamma_rate_binary += "1"
        else:
            gamma_rate_binary += "0"
    opposite = { '0':'1', '1':'0'}
    epsilon_rate_binary = ''.join([opposite[c] for c in gamma_rate_binary])
    gamma_rate = int(gamma_rate_binary, 2)
    epsilon_rate = int(epsilon_rate_binary, 2)
    print("gamma_rate_binary", gamma_rate_binary, gamma_rate)
    print("epsilon_rate_binary", epsilon_rate_binary, epsilon_rate)
    print(gamma_rate*epsilon_rate)

# PART 2
def second_puzzle(lines):
    index = 0
    remaining_lines = lines[::]
    while (index <= len(lines[0]) and len(remaining_lines) > 1):
        counter = 0
        print('index', index)
        for line in remaining_lines:
            char = line[index]
            if char == '1':
                counter += 1
        num_to_keep = '1' if counter >= len(remaining_lines)/2 else '0'
        remaining_lines = [elem for elem in remaining_lines if elem[index]==num_to_keep]
        index += 1
        print('remaining_lines', remaining_lines)
    print(remaining_lines)
    oxygen_binary = remaining_lines[0]
    oxygen = int(oxygen_binary, 2)

    index = 0
    remaining_lines = lines[::]
    while (index <= len(lines[0]) and len(remaining_lines) > 1):
        counter = 0
        print('index', index)
        for line in remaining_lines:
            char = line[index]
            if char == '1':
                counter += 1
        num_to_keep = '0' if counter >= len(remaining_lines)/2 else '1'
        remaining_lines = [elem for elem in remaining_lines if elem[index]==num_to_keep]
        index += 1
        print('len(remaining_lines)', len(remaining_lines))
    print(remaining_lines)
    co2_binary = remaining_lines[0]
    co2 = int(co2_binary, 2)
    print('oxygen', oxygen)
    print('co2', co2)
    print(oxygen*co2)


if __name__ == '__main__':
    file = open("03/03.data.txt", "r")
    lines = file.read().split('\n')
    first_puzzle(lines)
    second_puzzle(lines)
    file.close()