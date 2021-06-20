var playerOne = {
    playerSize : 20,
    playerSpeed : 10,
    playerHealth : 12
};
var playerTwo = {
    playerSize : 13,
    playerSpeed : 15,
    playerHealth : 8
};
var playerThree = {
    playerSize : 30,
    playerSpeed : 6,
    playerHealth : 18
};
const keyup1 = document.getElementById("keyup1");
const keydown1 = document.getElementById("keydown1");
const keyleft1 = document.getElementById("keyleft1");
const keyright1 = document.getElementById("keyright1");
const fire1 = document.getElementById("fire1");
const dash1 = document.getElementById("dash1");
const keyup2 = document.getElementById("keyup2");
const keydown2 = document.getElementById("keydown2");
const keyleft2 = document.getElementById("keyleft2");
const keyright2 = document.getElementById("keyright2");
const fire2 = document.getElementById("fire2");
const dash2 = document.getElementById("dash2");
const imageone = document.getElementById("imageone");
const imagetwo = document.getElementById("imagetwo");
const imagethree = document.getElementById("imagethree");
const start = document.getElementById("start");
const changePlayer = document.getElementById("changePlayer");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let keyboardArray = [keyup1, keydown1, keyleft1, keyright1, fire1, dash1, keyup2, keydown2, keyleft2, keyright2, fire2, dash2]
let numberPlayer = 2;
let agentpicked = 1;
imageone.style.backgroundColor = "blue";
let blank = 0;
let n = '';
const check = (x) => {
    for(let i = 0; i < keyboardArray.length; i += 1) {
        if (x == keyboardArray[i]) {
        }
        else if (x.value == keyboardArray[i].value){
            keyboardArray[i].value = '';
        }
    }
}
for (let y = 0; y < keyboardArray.length; y += 1) {
    keyboardArray[y].addEventListener('keypress', (e) => {
        keyboardArray[y].value = '';
        setTimeout(function () {
            check(keyboardArray[y]);
        }, 10)
    })
}
imageone.addEventListener('click',() => {
    agentpicked = 1;
    imageone.style.backgroundColor = "blue";
    imagetwo.style.backgroundColor = "white";
    imagethree.style.backgroundColor = "white";
})
imagetwo.addEventListener('click',() => {
    agentpicked = 2;
    imageone.style.backgroundColor = "white";
    imagetwo.style.backgroundColor = "blue";
    imagethree.style.backgroundColor = "white";
})
imagethree.addEventListener('click',() => {
    agentpicked = 3;
    imageone.style.backgroundColor = "white";
    imagetwo.style.backgroundColor = "white";
    imagethree.style.backgroundColor = "blue";
})
changePlayer.addEventListener('click',() =>{
    if (numberPlayer == 1) {
    keyboardArray = [keyup1, keydown1, keyleft1, keyright1, fire1, dash1, keyup2, keydown2, keyleft2, keyright2, fire2, dash2];
    numberPlayer = 2;
    player2.style.display = "block";
    changePlayer.innerHTML = '1P';
    }
    else if (numberPlayer == 2) {
    keyboardArray = [keyup1, keydown1, keyleft1, keyright1, fire1, dash1];
    numberPlayer = 1;
    player2.style.display = "none";
    changePlayer.innerHTML = '2P';
    }
})
start.addEventListener('click', () => {
    for(let i = 0; i < keyboardArray.length; i += 1) {
        if(keyboardArray[i].value == ""){
            blank += 1;
            n += `please fill in ${keyboardArray[i].id}\n`;
        }
    }
    if(blank != 0) {
        alert(n);
        blank = 0;
    }
    else if(blank == 0){
        localStorage.clear()
        localStorage.setItem("numberPlayer", numberPlayer)
        for(let i = 0; i < keyboardArray.length; i+=1) {
            localStorage.setItem(`${keyboardArray[i].id}`, keyboardArray[i].value);
        }
        if(agentpicked == 1){
            localStorage.setItem("playerSize", playerOne.playerSize);
            localStorage.setItem("playerSpeed", playerOne.playerSpeed);
        }
        else if(agentpicked == 2){
            localStorage.setItem("playerSize", playerTwo.playerSize);
            localStorage.setItem("playerSpeed", playerTwo.playerSpeed);
        }
        else if(agentpicked == 3){
            localStorage.setItem("playerSize", playerThree.playerSize);
            localStorage.setItem("playerSpeed", playerThree.playerSpeed);
        }
        window.location.href = "asteroid-game/index.html"
    }
})
