from statistics import median, mean

def solve_first_puzzle(crabs):
    goal = int(median(crabs))
    fuel = sum([abs(crab-goal) for crab in crabs])
    return goal, fuel

def fuel_cost(dist):
    return dist*(dist+1)//2

def solve_second_puzzle(crabs):
    goal = int(mean(crabs))
    fuel = sum([fuel_cost(abs(crab-goal)) for crab in crabs])
    return goal, fuel

if __name__ == '__main__':
    file = open("07/data.txt", "r")
    line = file.read()
    crabs = [int(item) for item in line.split(',')]
    print("result first puzzle:", solve_first_puzzle(crabs))
    print("result second puzzle:", solve_second_puzzle(crabs))
    file.close()
