import data

directions = data.directions

def formatDirections(directions):
    formattedDirections = []

    for direction in directions:
        splittedDirection = direction.split(" ")
        formattedDirections.append({
            "direction": splittedDirection[0],
            "vector": int(splittedDirection[1])
        })

    return formattedDirections

def partOne(directions):
    horizontalCount = 0
    verticalCount = 0

    for direction in directions:
        if direction["direction"] == "forward":
            horizontalCount += direction["vector"]
        elif direction["direction"] == "up":
            verticalCount -= direction["vector"]
        elif direction["direction"] == "down":
            verticalCount += direction["vector"]
        else:
            print("I should not be here")
    
    return horizontalCount * verticalCount

formattedDirections = formatDirections(directions)

partOneResult = partOne(formattedDirections)
print(partOneResult)