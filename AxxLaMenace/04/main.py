# COMMON FUNCTIONS
def create_grids(blocks):
    return [[[num for num in row.split()] for row in block.split('\n')] for block in blocks]

def mark_number_in_grid(grid, num):
    return [[elem+"*" if elem == num else elem for elem in row] for row in grid]

def is_grid_victorious(grid):
    victory_by_row = any(all("*" in grid[i][j] for j in range(len(grid[i]))) for i in range(len(grid)))
    victory_by_col = any(all("*" in grid[i][j] for i in range(len(grid))) for j in range(len(grid[0])))
    return victory_by_row or victory_by_col

def sum_unmarked_numbers(grid):
    return sum(sum(int(elem) for elem in row if "*" not in elem) for row in grid)

# PART 1
def first_puzzle(blocks):
    number_inputs = blocks[0].split(',')
    grids = create_grids(blocks[1:])
    for number in number_inputs:
        for g in range(len(grids)):
            grids[g]=mark_number_in_grid(grids[g], number)
            if is_grid_victorious(grids[g]):
                sum = sum_unmarked_numbers(grids[g])
                return sum, number, sum*int(number)

# PART 2
def second_puzzle(blocks):
    number_inputs = blocks[0].split(',')
    grids = create_grids(blocks[1:])
    for number in number_inputs:
        elems_to_delete = []
        for g in range(len(grids)):
            grids[g]=mark_number_in_grid(grids[g], number)
            if len(grids) > 1 and is_grid_victorious(grids[g]):
                elems_to_delete.append(grids[g])
        for elem in elems_to_delete:
            grids.remove(elem)
        if is_grid_victorious(grids[0]):
            sum = sum_unmarked_numbers(grids[0])
            return sum, number, sum*int(number)

if __name__ == '__main__':
    file = open("04/data.txt", "r")
    blocks = file.read().split('\n\n')
    print("result first_puzzle:", first_puzzle(blocks))
    print("result second:", second_puzzle(blocks))
    file.close()
