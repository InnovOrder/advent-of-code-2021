def create_points(line):
    point1, point2 = line.split(" -> ")
    xA, yA = [int(elem) for elem in point1.split(',')]
    xB, yB = [int(elem) for elem in point2.split(',')]
    return xA, yA, xB, yB

def compute_points_in_segment(xA, yA, xB, yB, consider_diagonals=False):
    xMin = min(xA, xB)
    xMax = max(xA, xB)
    yMin = min(yA, yB)
    yMax = max(yA, yB)
    if xA==xB:
        return [f"{xA},{y}" for y in range(yMin, yMax+1)]
    elif yA==yB:
        return [f"{x},{yA}" for x in range(xMin, xMax+1)]
    elif consider_diagonals and yMax-yMin == xMax-xMin:
        return [f"{xA+i*(xB-xA)//abs(xB-xA)},{yA+i*(yB-yA)//abs(yB-yA)}" for i in range(xMax-xMin+1)]
    else:
        return []

def solve_puzzle(lines, consider_diagonals=False):
    countDict = {}
    for line in lines:
        points_in_segment = compute_points_in_segment(*create_points(line), consider_diagonals)
        for point in points_in_segment:
            countDict[point] = 1 if point not in countDict else countDict[point]+1
    return sum(1 for i in countDict.values() if i >= 2)

if __name__ == '__main__':
    file = open("05/data.txt", "r")
    lines = file.read().split('\n')
    print("result first_puzzle:", solve_puzzle(lines, consider_diagonals=False))
    print("result second_puzzle:", solve_puzzle(lines, consider_diagonals=True))
    file.close()
