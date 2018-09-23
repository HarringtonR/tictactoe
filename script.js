//I tried making things with loops but was spending hours not figuring them ....lots of hours... and gave up and this is all i could figure out.  You have to switch players and on the final switch it will check for a winner if there is a winning combo.  Also you can replace boxes. Don't know how to stop that.




// Box variable identifiers are below
let boxOne = document.getElementById('boxOne')
let boxTwo = document.getElementById('boxTwo')
let boxThree = document.getElementById('boxThree')
let boxFour = document.getElementById('boxFour')
let boxFive = document.getElementById('boxFive')
let boxSix = document.getElementById('boxSix')
let boxSeven = document.getElementById('boxSeven')
let boxEight = document.getElementById('boxEight')
let boxNine = document.getElementById('boxNine')

// let boxes = ['boxOne','boxTwo','boxThree','boxFour','boxFive','boxSix','boxSeven', 'boxEight', 'boxNine']

let boxes = [boxOne,boxTwo,boxThree,boxFour,boxFive,boxSix,boxSeven,
boxEight, boxNine];
console.log(boxes);

let allBoxes = document.getElementById('allbox');
let board = document.querySelector('.board')


var Turn = false;

function playerOne(){

boxOne.addEventListener('click', function(){
  boxOne.textContent = 'X';
})
boxTwo.addEventListener('click', function(){
  boxTwo.textContent = 'X';
})
boxThree.addEventListener('click', function(){
  boxThree.textContent = 'X';
})
boxFour.addEventListener('click', function(){
  boxFour.textContent = 'X';
})
boxFive.addEventListener('click', function(){
  boxFive.textContent = 'X';
})
boxSix.addEventListener('click', function(){
  boxSix.textContent = 'X';
})
boxSeven.addEventListener('click', function(){
  boxSeven.textContent = 'X';
})
boxEight.addEventListener('click', function(){
  boxEight.textContent = 'X';
})
boxNine.addEventListener('click', function(){
  boxNine.textContent = 'X';
  // winning();
})

// $(this).one('click', playerTwo());

}



function playerTwo(){

boxOne.addEventListener('click', function(){
  boxOne.textContent = 'O';
})
boxTwo.addEventListener('click', function(){
  boxTwo.textContent = 'O';
})
boxThree.addEventListener('click', function(){
  boxThree.textContent = 'O';
})
boxFour.addEventListener('click', function(){
  boxFour.textContent = 'O';
})
boxFive.addEventListener('click', function(){
  boxFive.textContent = 'O';
})
boxSix.addEventListener('click', function(){
  boxSix.textContent = 'O';
})
boxSeven.addEventListener('click', function(){
  boxSeven.textContent = 'O';
})
boxEight.addEventListener('click', function(){
  boxEight.textContent = 'O';
})
boxNine.addEventListener('click', function(){
  boxNine.textContent = 'O';
  // winning();
})

// $(this).one('click', playerTwo())
}

//had to make buttons because I could not figure out how to rotate two players

// playerTwo();
function playerO() {
    var buttonO = document.querySelector(".buttono");
    var buttonX = document.querySelector(".buttonx");
    buttonX.addEventListener("click", function(){
    buttonX.style.backgroundColor = "blue";
    buttonO.style.backgroundColor = 'white';
   });
  switch(Turn){
    case true: playerOne();
    break;
    case false: playerTwo();
    break;
  }

  winning()
}

function playerX() {
      var buttonO = document.querySelector(".buttono");
      buttonO.addEventListener("click", function(){
      buttonO.style.backgroundColor = "red";
      buttonX.style.backgroundColor = 'white';
   });
  switch(Turn){
    case false: playerOne();
    break;
    case true: playerTwo();
    break;
  }

  winning()
}

//All my loop attempts kept failing so i had to do this

function winning(){
  if(boxOne.textContent === 'X' && boxTwo.textContent === 'X' && boxThree.textContent === 'X'){
    alert('PLAYER X WON')
  } else if(boxFour.textContent === 'X' && boxFive.textContent === 'X' && boxSix.textContent === 'X'){
    alert('PLAYER X WON')
  } else if(boxSeven.textContent === 'X' && boxEight.textContent === 'X' && boxNine.textContent === 'X'){
    alert('PLAYER X WON')
  } else if(boxOne.textContent === 'X' && boxFour.textContent === 'X' && boxSeven.textContent === 'X'){
    alert('PLAYER X WON')
  } else if (boxTwo.textContent === 'X' && boxFive.textContent === 'X' && boxEight.textContent === 'X'){
    alert('PLAYER X WON')
  } else if (boxThree.textContent === 'X' && boxSix.textContent === 'X' && boxNine.textContent === 'X'){
    alert('PLAYER X WON')
  } else if (boxOne.textContent === 'X' && boxFive.textContent === 'X' && boxNine.textContent === 'X'){
    alert('PLAYER X WON')
  } else if (boxSeven.textContent === 'X' && boxFive.textContent === 'X' && boxThree.textContent === 'X'){
    alert('PLAYER X WON')
  }else if(boxOne.textContent === 'O' && boxTwo.textContent === 'O' && boxThree.textContent === 'O'){
    alert('PLAYER O WON')
  } else if(boxFour.textContent === 'O' && boxFive.textContent === 'O' && boxSix.textContent === 'O'){
    alert('PLAYER O WON')
  } else if(boxSeven.textContent === 'O' && boxEight.textContent === 'O' && boxNine.textContent === 'O'){
    alert('PLAYER O WON')
  } else if(boxOne.textContent === 'O' && boxFour.textContent === 'O' && boxSeven.textContent === 'O'){
    alert('PLAYER O WON')
  } else if (boxTwo.textContent === 'O' && boxFive.textContent === 'O' && boxEight.textContent === 'O'){
    alert('PLAYER O WON')
  } else if (boxThree.textContent === 'O' && boxSix.textContent === 'O' && boxNine.textContent === 'O'){
    alert('PLAYER O WON')
  } else if (boxOne.textContent === 'O' && boxFive.textContent === 'O' && boxNine.textContent === 'O'){
    alert('PLAYER O WON')
  } else if (boxSeven.textContent === 'O' && boxFive.textContent === 'O' && boxThree.textContent === 'O'){
    alert('PLAYER O WON')
  }
}

function reload(){
  window.location.reload()
}




// let win1 = [box,boxes[1],boxes[2]]

// const winningCombos = [
// [boxOne,boxTwo,boxThree],
// [boxFour,boxFive,boxSix],
// [seven,eight,nine],
// [one,four,seven],
// [two,five,eight],
// [three,four,nine],
// [one,five,nine],
// [seven,five,three]
// ]



// function winning(){
//   for(i=0; i < winningCombos.length; i++){
//     if(winningCombos[i] == true){
//       alert('you win')
//       console.log('winner')
//     }
//   }
// }

// winning();





//     if(turn = true){
//     playerOne();
//     alert('Player One is up');
//     }else {
//       playerTwo();
//       alert('player two is up');
//    }
//  }
// }








// function runGame2(){
//   Turn = !Turn
//     if(turn = false){
//     playerOne();
//     alert('Player One is up');
//     }else {
//       playerTwo();
//       alert('player two is up');
//    }
//  };

// runGame2()




//BELOW THIS IS TESTED AND FAILED  ATTEMPS AT ALL STEPS

// Turn ? playerTwo() : playerOne();
// $('#boxOne').one('click', playerOne())


// let player1 = true;
// let player2 = true;


// function runGame(){
//   for(i = 0; i < boxes.length; i++){
//   if(player1 === false){
//     playerTwo();
//   } else{
//     playerOne();
//   }
//  }
// }




// runGame();






// let count = 0;
// for(i = 0; i < boxes.length; i++){
//   boxes[i]
//     if (boxes[i] % 2 === 0) {
//         playerOne()
//     } else {
//         playerTwo()
//     }
//   }
//   console.log(count)
// }

















// boxTwo.addEventListener('click', clickedBox)
// boxThree.addEventListener('click', clickedBox)
// boxFour.addEventListener('click', clickedBox)
// boxFive.addEventListener('click', clickedBox)
// boxSix.addEventListener('click', clickedBox)
// boxSeven.addEventListener('click', clickedBox)
// boxEight.addEventListener('click', clickedBox)
// boxNine.addEventListener('click', clickedBox)

// function clickedBox(){
//   for(i = 0; i < boxes.length; i++){
//     if(boxes[i].clicked == true){
//      boxes[i].textContent = 'X';
//        console.log('clicked')
//     }
//    }
//   }


















// boxOne.addEventListener('click', clickedBox)
// boxTwo.addEventListener('click', clickedBox)
// boxThree.addEventListener('click', clickedBox)
// boxFour.addEventListener('click', clickedBox)
// boxFive.addEventListener('click', clickedBox)
// boxSix.addEventListener('click', clickedBox)
// boxSeven.addEventListener('click', clickedBox)
// boxEight.addEventListener('click', clickedBox)
// boxNine.addEventListener('click', clickedBox)



























// function clicked(){
//   alert('you clicked box eight')
// }
// boxEight.addEventListener('click', clicked)

// let box = document.getElementsByClassName('box')
// console.log(box.length)

// function clickedBox(){
// for (i = 0; i < boxes.length; i++){

//    boxes[i].addEventListener('click', function(){
//      x = document.createElement('h1');
//      x.textContent = 'X';
//      boxes[i].appendChild(x)
//      console.log(boxes[i])
//     })
//   }
// }

// duck.addEventListener(‘click’, function() {
//    duck.classlist.add(‘shot’)
//    setTime(function() {
//      duck.remove();
//    }, 1000);

//     checkForWinner();

//    });
// function iclicked(){
//   console.log('i was clicked')
// }

// clickedBox();
//make a function that will place an X on the board

// function placeX(){
//   let x = document.createElement('h1');
//   x.textContent = 'X';
//   boxOne.appendChild(x)
// }


// for (i = 0; box.length < 9 i++){

// }

//make a function that will plae an O on the board
// function placeO(){
//   let o = document.createElement('h1')
//   o.textContent = 'O'
//   boxOne.append('o')

// }

// function toggleXO(){


// }

// function checkForTurn(){
//   if(boxOne.textContent.includes('X')){
//     alert('you already played here')
//    }
//   }
// checkForTurn();
// console.log(box.length)



// boxOne.addEventListener('click', placeO)


//if there is a click toggle function  toggle between x and o function
//create event listeners on every box and if there is a click run the toggle function






//Make a array variable that can detect all the possible variations of 3 in a row


// boxOne boxTwo boxThree
