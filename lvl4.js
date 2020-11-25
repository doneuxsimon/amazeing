function level4() {
    p.innerHTML = ''
    multiline = `**.....**....********...**....**.......***...***********..***..*****S...****.*****...*****..****.******T*******......***`
    main.appendChild(p)
    joueur.className = 'joueur';
    p.style.width = 'calc(20*48px)'
    p.style.height = 'calc(6*48px)'
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
    document.querySelector("p > div:nth-child(69)").appendChild(joueur);
}
level4()
lvl = 'fin.js'
x = 20
posX = 69