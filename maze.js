    let main = document.querySelector('main')
    let multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`

    
    let p = document.createElement('p')
    main.appendChild(p)
p.innerHTML = ''
    let joueur = document.createElement('div')
    joueur.style.width = '25px';
    joueur.style.height = '25px';
    joueur.style.backgroundColor = 'red';
    joueur.style.borderRadius = '100%';
    joueur.className = 'joueur';



    for (let sign of multiline) {
        let tile = document.createElement('div')
        tile.textContent += sign
        tile.style.width = '46px'
        tile.style.height = '46px'
        tile.style.display = 'inline-block'
        tile.style.textAlign = 'center'
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
    


    document.querySelector("p > div:nth-child(15)").appendChild(joueur);

let lvl = 'lvl2.js'
let posX = 15;
    let x = 13;
document.body.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        if (document.querySelector("p > div:nth-child(" + (posX + 1) + ")").classList.contains('treasure')) {
            alert("T'as gagne batard");
            posX++
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)
            const level = document.createElement('script')
            level.src = lvl
            main.appendChild(level)

        } else if (document.querySelector("p > div:nth-child(" + (posX + 1) + ")").classList.contains('wall')) {
            console.log('hit the wall')
        } else {
            posX++
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowLeft") {
        if (document.querySelector("p > div:nth-child(" + (posX - 1) + ")").classList.contains('treasure')) {
            alert("T'as gagne batard");
            posX--
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)
            const level = document.createElement('script')
            level.src = lvl
            main.appendChild(level)

        } else if (document.querySelector("p > div:nth-child(" + (posX - 1) + ")").classList.contains('begin')) {
            alert("C'est pas par la couillon");
            posX--
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)

        }
        else if (document.querySelector("p > div:nth-child(" + (posX - 1) + ")").classList.contains('wall')) {
            console.log('hit the wall')
        } else {
            posX--
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowUp") {
       if (document.querySelector("p > div:nth-child(" + (posX - x) + ")").classList.contains('treasure')) {
            alert("T'as gagne batard");
            posX-= x
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)
            const level = document.createElement('script')
            level.src = lvl
            main.appendChild(level)

        } else if (document.querySelector("p > div:nth-child(" + (posX - x) + ")").classList.contains('wall')) {
            console.log('hit the wall')
        } else {
            posX -= x
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowDown") {
       if (document.querySelector("p > div:nth-child(" + (posX + x) + ")").classList.contains('treasure')) {
            alert("T'as gagne batard");
            posX+= x
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)
            const level = document.createElement('script')
            level.src = lvl
            main.appendChild(level)

        } else if (document.querySelector("p > div:nth-child(" + (posX + x) + ")").classList.contains('wall')) {
            console.log('hit the wall')
        } else {
            posX += x
            document.querySelector("p > div:nth-child(" + posX + ")").appendChild(joueur)
            console.log(e.code)
        }
    }


})

