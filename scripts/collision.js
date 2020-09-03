function checkForWall(positionToCheck) {
    var wallCheck = getData(positionToCheck);
    if(typeof(wallCheck) == 'object') {
        if(wallCheck.tile == 'wall') {
            return 'wall';
        } else {
            return 'clear';
        }
    } else {
        if(wallCheck == 'wall') {
            return 'wall';
        } else {
            return 'clear';
        }
    }
    
}

function checkBounds(positionToCheck) {
    if(positionToCheck.position.left > 15 ||
        positionToCheck.position.top > 15 ||
        positionToCheck.position.left < 0 ||
        positionToCheck.position.top < 0) {
            return 'out of bounds';
    } else return 'in bounds';
}