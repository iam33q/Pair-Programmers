function deadOrAlive(cellStatus, neighbours) {

    if (cellStatus === 1) {
        if (neighbours < 2) {
            return false
        } else if (neighbours > 3) {
            return false
        } else {
            return true
        }
        
    } else {
        if (neighbours === 3) {
            return true
        } else {
            return false
        }
    }
}

export { deadOrAlive };