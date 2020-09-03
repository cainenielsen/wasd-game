var active = true;

$('body').keydown(function(e) {
    if(active == true) {
        active = false;
        switch(e.key) {
        case 'w':
            moveUp(); 
            break;
        case 'a':
            moveLeft();  
            break;
        case 's':
            moveDown();  
            break;
        case 'd':
            moveRight();   
            break;
        default:
            active = true;
            break;
        }
    }
    
});

$('body').keyup(function(e) {

});

function setPosition() {
    playerObj.style.top = player.coordinates.position.top * 64 + 'px';
    playerObj.style.left = player.coordinates.position.left * 64 + 'px';
}








function moveUp() {
    playerObj.style.backgroundImage = 'url(/sprites/player/player-up.png)';
    var positionToCheck = {
        chunk: {top: player.coordinates.chunk.top, left: player.coordinates.chunk.left},
        position: {top: (player.coordinates.position.top - 1), left: player.coordinates.position.left}
    }
    var bounds = checkBounds(positionToCheck);
    if (bounds == 'out of bounds') {
        console.log(bounds);
        positionToCheck.chunk.top = positionToCheck.chunk.top - 1;
        positionToCheck.position.top = 15;
        var path = checkForWall(positionToCheck);
        if(path == 'wall') {
            console.log('wall');
        } else {
            console.log('clear');
            player.coordinates.chunk.top = player.coordinates.chunk.top - 1;
            player.coordinates.position.top = 15;
            setPosition();
            window.scrollBy(0, -64);
            triggerRender();
        }
    } else { // Inbounds
        console.log(bounds);
        var path = checkForWall(positionToCheck);
        if(path == 'wall') {
            console.log('wall');
        } else {
            console.log('clear');
            player.coordinates.position.top = player.coordinates.position.top - 1;
            setPosition();
            window.scrollBy(0, -64);
        }
    }
    setTimeout(function(){active = true}, 120);
}











function moveLeft() {
    playerObj.style.backgroundImage = 'url(/sprites/player/player-left.png)';
    var positionToCheck = {
        chunk: {top: player.coordinates.chunk.top, left: player.coordinates.chunk.left},
        position: {top: player.coordinates.position.top, left: (player.coordinates.position.left - 1)}
    }
    var bounds = checkBounds(positionToCheck);
    if (bounds == 'out of bounds') {
        console.log(bounds);
        positionToCheck.chunk.left = positionToCheck.chunk.left - 1;
        positionToCheck.position.left = 15;
        var path = checkForWall(positionToCheck);
        if(path == 'wall') {
            console.log('wall');
        } else {
            console.log('clear');
            player.coordinates.chunk.left = player.coordinates.chunk.left - 1;
            player.coordinates.position.left = 15;
            setPosition();
            window.scrollBy(-64, 0);
            triggerRender();
        }
    } else { // Inbounds
        console.log(bounds);
        var path = checkForWall(positionToCheck);
        if(path == 'wall') {
            console.log('wall');
        } else {
            console.log('clear');
            player.coordinates.position.left = player.coordinates.position.left - 1;
            setPosition();
            window.scrollBy(-64, 0);
        }
    }
    setTimeout(function(){active = true}, 120);
}












function moveDown() {
    playerObj.style.backgroundImage = 'url(/sprites/player/player-down.png)';
    var positionToCheck = {
        chunk: {top: player.coordinates.chunk.top, left: player.coordinates.chunk.left},
        position: {top: (player.coordinates.position.top + 1), left: player.coordinates.position.left}
    }
    var bounds = checkBounds(positionToCheck);
    if (bounds == 'out of bounds') {
        console.log(bounds);
        positionToCheck.chunk.top = positionToCheck.chunk.top + 1;
        positionToCheck.position.top = 0;
        var path = checkForWall(positionToCheck);
        if(path == 'wall') {
            console.log('wall');
        } else {
            console.log('clear');
            player.coordinates.chunk.top = player.coordinates.chunk.top + 1;
            player.coordinates.position.top = 0;
            setPosition();
            window.scrollBy(0, +64);
            triggerRender();
        }
    } else { // Inbounds
        console.log(bounds);
        var path = checkForWall(positionToCheck);
        if(path == 'wall') {
            console.log('wall');
        } else {
            console.log('clear');
            player.coordinates.position.top = player.coordinates.position.top + 1;
            setPosition();
            window.scrollBy(0, +64);
        }
    }
    setTimeout(function(){active = true}, 120);
}











function moveRight() {
    playerObj.style.backgroundImage = 'url(/sprites/player/player-right.png)';
    var positionToCheck = {
        chunk: {top: player.coordinates.chunk.top, left: player.coordinates.chunk.left},
        position: {top: player.coordinates.position.top, left: (player.coordinates.position.left + 1)}
    }
    var bounds = checkBounds(positionToCheck);
    if (bounds == 'out of bounds') {
        console.log(bounds);
        positionToCheck.chunk.left = positionToCheck.chunk.left + 1;
        positionToCheck.position.left = 0;
        var path = checkForWall(positionToCheck);
        if(path == 'wall') {
            console.log('wall');
        } else {
            console.log('clear');
            player.coordinates.chunk.left = player.coordinates.chunk.left + 1;
            player.coordinates.position.left = 0;
            setPosition();
            window.scrollBy(+64, 0);
            triggerRender();
        }
    } else { // Inbounds
        console.log(bounds);
        var path = checkForWall(positionToCheck);
        if(path == 'wall') {
            console.log('wall');
        } else {
            console.log('clear');
            player.coordinates.position.left = player.coordinates.position.left + 1;
            setPosition();
            window.scrollBy(+64, 0);
        }
    }
    setTimeout(function(){active = true}, 120);
}










function getData(positionToCheck) {
    if(world[positionToCheck.chunk.top]) {
        if(world[positionToCheck.chunk.top][positionToCheck.chunk.left]) {
            return world[positionToCheck.chunk.top][positionToCheck.chunk.left][positionToCheck.position.top][positionToCheck.position.left]
        } else {
            return 'no top';
        }
    } else {
        return 'no side';
    }
}   