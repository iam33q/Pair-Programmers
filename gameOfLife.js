function deadOrAlive(cellStatus, neighbours) {

    if (cellStatus === 1 && neighbours >= 2) {
        return true
    } else {
        return false
    }
}

export { deadOrAlive };