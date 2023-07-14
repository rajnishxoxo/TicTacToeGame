let currentPlayerStatus = document.querySelector('.player-info-current');
let boxes = document.querySelectorAll('.box');

const newGameButton = document.getElementById('btn');

let gameGrid;

let currentPlayer;

const winningPosition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//Step-1 : To initlize the Game.

 const startGame=(function initlizeGame(){
    currentPlayer ="X"
    currentPlayerStatus.innerHTML=`Current Player : ${currentPlayer}`
    boxes.forEach((box,index)=>{
        box.innerText=""
        boxes[index].style.pointerEvents = "all";
       })
    gameGrid =["","","","","","","","",""]

})();



//Step-2 : To add event listner to all the boxes.

boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    })
})


// define what will handleClick function will do. 

function handleClick(index){

    if(gameGrid[index]===""){
        //this is for Updating UI
       boxes[index].innerHTML=currentPlayer;
       //this is for Updating our Game Logic.

       gameGrid[index]=currentPlayer;

       boxes[index].style.pointerEvents = "none";
       
       swapPlayer();

    //    checkGameOver();

    }
}

//Step-3 : SwapPlayers

function swapPlayer(){
    if(currentPlayer=="X"){
        currentPlayer="O"
        currentPlayerStatus.innerHTML = `Current Player : ${currentPlayer}`
    }else{
        currentPlayer="X"
        currentPlayerStatus.innerHTML = `Current Player : ${currentPlayer}`
    }
}


newGameButton.addEventListener('click' , ()=>{
    currentPlayer ="X"
    currentPlayerStatus.innerHTML=`Current Player : ${currentPlayer}`
    boxes.forEach((box,index)=>{
        box.innerText=""
        boxes[index].style.pointerEvents = "all";
       })
    gameGrid =["","","","","","","","",""]
})


function checkGameOver(){
    console.log("Logic pending")
    
}

