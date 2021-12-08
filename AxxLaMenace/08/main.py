# PART 1
def solve_first_puzzle(lines):
    outputs = [lines[i].split(' | ')[1] for i in range(len(lines))]
    return sum(sum([1 for elem in output.split() if len(elem) in [2,3,4,7]]) for output in outputs)

# PART 2
def nb_common_letters(word1, word2):
    return len(set(word1).intersection(word2))

def class_words_by_length(words):
    return {length: [word for word in words if len(word) == length] for length in range(2, 8)}

def create_dict_permutations(words_by_length):
    d = {}
    d['1'] = words_by_length[2][0]
    d['7'] = words_by_length[3][0]
    d['4'] = words_by_length[4][0]
    d['8'] = words_by_length[7][0]
    d['3'] = [word for word in words_by_length[5] if (nb_common_letters(word, d['1']) == 2)][0]
    d['2'] = [word for word in words_by_length[5] if (nb_common_letters(word, d['4']) == 2)][0]
    d['5'] = [word for word in words_by_length[5] if word not in [d['2'], d['3']]][0]
    d['6'] = [word for word in words_by_length[6] if (nb_common_letters(word, d['1']) == 1)][0]
    d['9'] = [word for word in words_by_length[6] if (nb_common_letters(word, d['4']) == 4)][0]
    d['0'] = [word for word in words_by_length[6] if word not in [d['6'], d['9']]][0]
    return d

def solve_second_puzzle_hard(lines):
    sum = 0
    for line in lines:
        input, output = line.split(' | ')
        dict_permutations = create_dict_permutations(class_words_by_length(input.split()))
        inv_map = {''.join(sorted(v)): k for k, v in dict_permutations.items()}
        sum += int("".join([inv_map[''.join(sorted(word))] for word in output.split()]))
    return sum

if __name__ == '__main__':
    file = open("08/data.txt", "r")
    lines = file.read().split('\n')
    print("result first puzzle:", solve_first_puzzle(lines))
    print("result second puzzle:", solve_second_puzzle_hard(lines))
    file.close()
