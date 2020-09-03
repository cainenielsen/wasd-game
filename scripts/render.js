var playerObj = document.createElement("player");
playerObj.id = 'player';

function triggerRender() {
    var currentChunks = document.getElementsByClassName('chunk');
    var chunkRefs = [].slice.call(currentChunks);
    console.log(chunkRefs);
    chunkRefs.forEach(function(chunk) {
        refLeft = chunk.id.split("-")[0];
        refRight = chunk.id.split("-")[1];
    });
    var chunksToLoad = [
        {top: player.coordinates.chunk.top, left: player.coordinates.chunk.left, player: true},
        {top: player.coordinates.chunk.top + 1, left: player.coordinates.chunk.left}, 
        {top: player.coordinates.chunk.top - 1, left: player.coordinates.chunk.left},
        {top: player.coordinates.chunk.top, left: player.coordinates.chunk.left + 1},
        {top: player.coordinates.chunk.top, left: player.coordinates.chunk.left - 1},
        {top: player.coordinates.chunk.top + 1, left: player.coordinates.chunk.left + 1},
        {top: player.coordinates.chunk.top - 1, left: player.coordinates.chunk.left - 1},
        {top: player.coordinates.chunk.top + 1, left: player.coordinates.chunk.left - 1},
        {top: player.coordinates.chunk.top - 1, left: player.coordinates.chunk.left + 1}
    ];
    chunksToLoad.forEach(function (chunk, chunkIndex) {
        renderChunk(chunk);
    });
    playerObj.scrollIntoView({behavior: "auto", block: "center", inline: "center"});
}

function renderChunk(chunk) {
    var chunkTop = chunk.top * 64 * 16 + 'px';
    var chunkLeft = chunk.left * 64 * 16 + 'px';
    var region = document.createElement("span");
    region.style.top = chunkTop;
    region.style.left = chunkLeft;
    region.id = chunk.top + '-' + chunk.left;
    var elementExists = document.getElementById(region.id);
    if(elementExists) {
    } else {
        document.getElementById('canvas').appendChild(region);
        region.classList.add('chunk');
        if(world[chunk.top]) {
            if(world[chunk.top][chunk.left]) {
                renderTiles(world[chunk.top][chunk.left], region);
            }
        }
    }
    if(chunk.player) {
        document.getElementById(region.id).appendChild(playerObj);
        setPosition();
    }
};

function renderTiles(chunk, region) {
    chunk.forEach(function (array, mapIndex) {
        array.forEach(function (sector, arrIndex) {
            var top = mapIndex * 64 + 'px';
            var left = arrIndex * 64 + 'px';
            var tile = document.createElement("span");
            
            tile.style.top = top;
            tile.style.left = left;
            tile.classList.add('tile');
            
            if(typeof(sector) == 'object') {
                tile.classList.add(sector.tile);
                document.getElementById(region.id).appendChild(tile);
                if (sector.space != '') {
                    var space = document.createElement("span");
                    space.style.top = top;
                    space.style.left = left;
                    space.classList.add('tile');
                    space.classList.add(sector.space);
    
                    document.getElementById(region.id).appendChild(space);
                } else {
                    
                }                
            } else {
                tile.classList.add(sector);
                document.getElementById(region.id).appendChild(tile);
            }
        })
    });
}

triggerRender();