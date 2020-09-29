//HTML ELEMENTS 
document.querySelector('.o-turn').style.display = 'none'; 
document.querySelector('.o-winner').style.display = 'none'; 
document.querySelector('.x-winner').style.display = 'none'; 
document.querySelector('.tieL').style.display = 'none'; 
document.querySelector('.tieR').style.display = 'none'; 

const cellsDiv = document.querySelectorAll('.game-cell'); 

const turnX =  document.querySelector('.x-turn');
const turnO = document.querySelector('o.turn') ; 


//Game variables 
let gameOn = true; 
let xTurn = true; 



//for each cell in cells div listen for a click 
for(const cellDiv of cellsDiv) {
    
    cellDiv.addEventListener('click' , cellClick)
}


//event handlers 

function cellClick(event) {
    const classList = event.target.classList ; 
    const cell = classList[1]; 
    console.log(cell); 

    if (classList[2] === 'x' || classList[2] === 'o' || gameOn === false) {
        return ; 
    } 
    else {
        if (xTurn) {
            classList.add('x'); 
            checkWinner(); 
            xTurn = false; 
            //document.querySelector('.x-turn').style.display = 'none' ; 
            //document.querySelector('.o-turn').style.display = 'block' 
        }
        else {
            event.target.classList.add('o');
            checkWinner(); 
            xTurn = true; 
            //document.querySelector('.o-turn').style.display = 'none' ; 
            //document.querySelector('.x-turn').style.display = 'block'; 
        }
    } 
}

const checkWinner = () => {
    const a1 = cellsDiv[0].classList[2]; 
    const a2 = cellsDiv[1].classList[2]; 
    const a3 = cellsDiv[2].classList[2]; 
    const b1 = cellsDiv[3].classList[2]; 
    const b2 = cellsDiv[4].classList[2]; 
    const b3 = cellsDiv[5].classList[2]; 
    const c1 = cellsDiv[6].classList[2]; 
    const c2 = cellsDiv[7].classList[2]; 
    const c3 = cellsDiv[8].classList[2]; 
  
    if(a1 === a2 && a1 === a3) {
        if (a1 === 'x'){
            
            document.querySelector('.x-winner').style.display = 'block'; 
            gameOn = false;
        } 
        else if (a1 === 'o') {
           
            document.querySelector('.o-winner').style.display = 'block'; 
            gameOn = false;
        }
       
         
    }
    else if (b1 === b2 && b1 === b3) {
        if (b1 === 'x'){
            
            document.querySelector('.x-winner').style.display = 'block'; 
            gameOn= false; 
        } 
        else if (b1 === 'o') {
            
            document.querySelector('.o-winner').style.display = 'block'; 
            gameOn = false;
        }
    }
    else if (c1 === c2 && c1 === c3) {
        if (c1 === 'x'){
            
            document.querySelector('.x-winner').style.display = 'block'; 
            gameOn = false;
        } 
        else if (c1 === 'o') {
            
            document.querySelector('.o-winner').style.display = 'block';
            gameOn = false; 
            
        } 
    }
    else if (a1 === b1 && a1 === c1) {
        if (a1 === 'x'){
   
            document.querySelector('.x-winner').style.display = 'block'; 
            gameOn = false;
        } 
        else if (a1 === 'o') {
            
            document.querySelector('.o-winner').style.display = 'block'; 
            gameOn = false;
        }
    }
    else if (a2 === b2 && a2 === c2) {
        if (a2 === 'x'){
           
            document.querySelector('.x-winner').style.display = 'block';
            gameOn = false; 
        } 
        else if (a2 === 'o') {
            
            document.querySelector('.o-winner').style.display = 'block'; 
            gameOn = false;
        }
    }
    else if (a3 === b3 && a3 === c3) {
        if (a3 === 'x'){
            
            document.querySelector('.x-winner').style.display = 'block'; 
            gameOn = false;
        } 
        else if (a3 === 'o') {
           
            document.querySelector('.o-winner').style.display = 'block'; 
            gameOn = false;
        }
    }
    else if (a1 === b2 && a1 === c3) {
        if (a1 === 'x'){
       
            document.querySelector('.x-winner').style.display = 'block'; 
            gameOn = false;
        } 
        else if (a1 === 'o') {
            
            document.querySelector('.o-winner').style.display = 'block'; 
            gameOn = false;
        } 
    }
    else if (a3 === b2 && a3 === c1) {
        if (a3 === 'x'){
            
            document.querySelector('.x-winner').style.display = 'block'; 
            gameOn = false;
        } 
        else if (a3 === 'o') {
             
            document.querySelector('.o-winner').style.display = 'block'; 
            gameOn = false;
        }
    }
    else if (a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3 !== null) {
        gameOn = false ; 
        document.querySelector('.tieL').style.display = 'block'; 
        document.querySelector('.tieR').style.display = 'block'; 
        gameOn = false;


    }

   

}
