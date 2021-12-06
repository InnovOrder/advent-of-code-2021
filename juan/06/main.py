import data


lanternfishes = data.lanternfishes

""" PART ONE """

def decreaseLanternFishes(lanternfishes):
    updatedLanternfishes = []

    for index in range(len(lanternfishes)):
        lanternfish = lanternfishes[index]

        if lanternfish > 0:
            updatedLanternfishes.append(lanternfish - 1)
        else:
            updatedLanternfishes.append(6)
            updatedLanternfishes.append(8)
    
    return updatedLanternfishes
    

def partOne(lanternfishes, numberOfDays):
    updatedLanternfishes = lanternfishes
    for i in range(numberOfDays):
        print(f"Day {i + 1}")
        updatedLanternfishes = decreaseLanternFishes(updatedLanternfishes)
    
    return updatedLanternfishes

lanternfishes = partOne(lanternfishes, 256)
print(len(lanternfishes))