function openList() {
    if (event.srcElement.value === "Rap") {
        rapSongs();
    } else if (event.srcElement.value === "HappyHits") {
        HappyHitsSongs();
    } else if (event.srcElement.value === "RoadHits") {
        RoadHitsSongs();
    } else if (event.srcElement.value === "Pop") {
        PopSongs();
    } else {
        ElectronicSongs();
    }
}
function rapSongs() {
    const listOfSongs = document.getElementById("listOfSongs");
    listOfSongs.innerHTML =
    `<div id="listSongs" onClick="openSong()">
        <button value="California">California Love</button>
        <br>
        <button value="KaceyTalk">Kacey Talk</button>
        <br>
        <button value="Circles">Circles</button>
        <br>
        <button value="Stitched">Stitched</button>
        <br>
        <button value="Untouchable">Untouchable</button>
    </div>`;
}
function HappyHitsSongs() {
    const listOfSongs = document.getElementById("listOfSongs");
    listOfSongs.innerHTML =
    `<div id="listSongs" onClick="openSong()">
        <button value="HappyNow">Happy Now</button>
        <br>
        <button value="Remedy">Remedy</button>
        <br>
        <button value="RescueMe">Rescue Me</button>
        <br>
        <button value="Ritual">Ritual</button>
        <br>
        <button value="OnlyHuman">Only Human</button>
    </div>`;
}
function RoadHitsSongs() {
    const listOfSongs = document.getElementById("listOfSongs");
    listOfSongs.innerHTML =
    `<div id="listSongs" onClick="openSong()">
        <button value="Royals">Royals</button>
        <br>
        <button value="SummerOf69">Summer Of 69</button>
        <br>
        <button value="SweetPea">Sweet Pea</button>
        <br>
        <button value="BeAlright">Be Alright</button>
        <br>
        <button value="Renegades">Renegades</button>
    </div>`;
}
function PopSongs() {
    const listOfSongs = document.getElementById("listOfSongs");
    listOfSongs.innerHTML =
    `<div id="listSongs" onClick="openSong()">
        <button value="Falling">Falling</button>
        <br>
        <button value="Cardigan">Cardigan</button>
        <br>
        <button value="Exile">Exile</button>
        <br>
        <button value="BadGuy">Bad Guy</button>
        <br>
        <button value="Easier">Easier</button>
    </div>`;
}
function ElectronicSongs() {
    const listOfSongs = document.getElementById("listOfSongs");
    listOfSongs.innerHTML =
    `<div id="listSongs" onClick="openSong()">
        <button value="ElectronicLife">Electronic Life</button>
        <br>
        <button value="Future">Future</button>
        <br>
        <button value="Insomnia">Insomnia</button>
        <br>
        <button value="TurnUp">Turn Up</button>
        <br>
        <button value="UpLifting">UpLifting</button>
    </div>`;
}
function openSong() {
    const videoFrame = document.getElementById("videoFrame");
    const nameOfSong = event.srcElement.value;
    const songs = {
        California: `<iframe width="560" height="315" src="https://www.youtube.com/embed/5wBTdfAkqGU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        KaceyTalk: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0C80BSgjb8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Circles: `<iframe width="560" height="315" src="https://www.youtube.com/embed/wXhTHyIgQ_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Stitched: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VbfpW0pbvaU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Untouchable: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ipM9SkIkwCY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        HappyNow: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zaIsVnmwdqg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Remedy: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vB67ddBhO1c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        RescueMe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Nym5stAJAt8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Ritual: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ontU9cOg354" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        OnlyHuman: `<iframe width="560" height="315" src="https://www.youtube.com/embed/L3wKzyIN1yk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Royals: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nlcIKh6sBtc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        SummerOf69: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eFjjO_lhf9c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        SweetPea: `<iframe width="560" height="315" src="https://www.youtube.com/embed/f5VfMSVvmBk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        BeAlright: `<iframe width="560" height="315" src="https://www.youtube.com/embed/OymVgai_PVg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Renegades: `<iframe width="560" height="315" src="https://www.youtube.com/embed/8j741TUIET0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Falling: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eIc4mqyN1Q8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Cardigan: `<iframe width="560" height="315" src="https://www.youtube.com/embed/K-a8s8OLBSE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Exile: `<iframe width="560" height="315" src="https://www.youtube.com/embed/osdoLjUNFnA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        BadGuy: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DyDfgMOUjCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Easier: `<iframe width="560" height="315" src="https://www.youtube.com/embed/b1dFSWLJ9wY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        ElectronicLife: `<iframe width="560" height="315" src="https://www.youtube.com/embed/o4LSijBOoR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Future: `<iframe width="560" height="315" src="https://www.youtube.com/embed/l0U7SxXHkPY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        Insomnia: `<iframe width="560" height="315" src="https://www.youtube.com/embed/P8JEm4d6Wu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        TurnUp: `<iframe width="560" height="315" src="https://www.youtube.com/embed/cgrqEuqLU30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        UpLifting: `<iframe width="560" height="315" src="https://www.youtube.com/embed/KK2smasHg6w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    videoFrame.innerHTML = songs[nameOfSong];
}