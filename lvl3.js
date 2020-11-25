function level3() {
    p.innerHTML = ''
    multiline = `************S*******.*******.*******.****......**.****.**..***.**..***.***.******T.*************`
    main.appendChild(p)
    joueur.className = 'joueur';
    p.style.width = 'calc(8*48px)'
    p.style.height = 'calc(12*48px)'
    for (let sign of multiline) {
        let tile = document.createElement('div')
        tile.className = 'tile'
        tile.textContent += sign
        p.appendChild(tile);
        if (tile.textContent == '*') {
            tile.className = 'wall';
        } else if (tile.textContent == '.') {
            tile.className = 'path';
        } else if (tile.textContent == 'S') {
            tile.className = 'begin';
        } else if (tile.textContent == 'T') {
            tile.className = 'treasure';
        }
        tile.textContent = '';
    }
    document.querySelector("p > div:nth-child(13)").appendChild(joueur);
}

level3()
lvl = 'lvl4.js'
x = 8
posX = 13