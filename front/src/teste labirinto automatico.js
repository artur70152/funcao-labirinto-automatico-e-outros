import React, { useEffect, useState } from 'react';
import './styles.css';

const MazeGame = () => {

  const [Cancel,setcancel]=useState('false')
  const [vez,setvez]=useState(1)
  const[valore,setvalore]=useState(3)
 


 
  const [playerPosition, setPlayerPosition] = useState({ x: 5, y: 1 });
  const [initialpos,setinitialpos]=useState({x:5,y:1})
  const [maze, setMaze] = useState([
    [1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1],
    [1,0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1],
    [1,1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,1],
    [1,0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1],
    [1,0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1],
    [1,1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,1],
    [1,0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,1],
    [1,0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,1],
    [1,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,1],
    [1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1],
  ]);


const cancel=()=>{
 setcancel(true)
  }

const autoclick=()=>{
setvez(vez+2)
}

useEffect(() => {
if (vez===1||(maze[playerPosition.x][playerPosition.y]===2)||(Cancel===true)) { 
setPlayerPosition({x:5,y:1})
setvalore(3)
setcancel(false)
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
newMaze.map((linha,indexa)=>{linha.map((coluna,index)=>{
if (newMaze[indexa][index]>=3) {
console.log(newMaze[indexa][index])
  newMaze[indexa][index] =2;
}
  })
  })
newMaze[playerPosition.x][playerPosition.y] =valore;
console.log(newMaze[playerPosition.x][playerPosition.y] )
return newMaze; })
  }
else{
const timer = setTimeout(() => {
handle();
setvez(vez +Number(2))
}, 50);
return () => clearTimeout(timer); 
}
}, [vez]);


const handle=()=>{
  setvalore(maze[playerPosition.x][playerPosition.y]+Number(3))
  console.log(valore)
  const x=(maze[playerPosition.x].length)
  console.log(x)
  for (let i = 0; i <x; i++) {
   let linhanova=playerPosition.x+1
   let colunanova=playerPosition.y+1
let linhanovaes=playerPosition.x-1
let colunanovabai=playerPosition.y-1

//ac=ver se quadrado da direita é preto
  let dip=maze[playerPosition.x][colunanova]
//ad=ver se quadrado abaixo é preto
let bp=(maze[linhanova][playerPosition.y])
//ae=ver se quadrado de cima é preto
let cp=maze[linhanovaes][playerPosition.y]
//ab=ver se quadrado da esquerda é preto 
let ep=maze[playerPosition.x][colunanovabai]

let lista1=[dip,bp,cp,ep]
console.log(lista1)

//////////////////////////////////////////////////

if (dip===1 && bp===1 && cp===1) {
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
newMaze[playerPosition.x][playerPosition.y] =  valore ;
console.log(newMaze[playerPosition.x][playerPosition.y] )
return newMaze; })
setPlayerPosition({x:playerPosition.x,y:colunanovabai})
}

if (dip===1 && bp===1 && ep===1) {
   //cima
console.log('cima com todos os quadrados pretos')
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
newMaze[playerPosition.x][playerPosition.y] =valore;
console.log(newMaze[playerPosition.x][playerPosition.y] )
return newMaze; })
setPlayerPosition({x:linhanovaes,y:playerPosition.y})
}

if (ep===1 && bp===1 && cp===1) {
  //direita
console.log('direita com todos os quadrados pretos')
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
newMaze[playerPosition.x][playerPosition.y] =valore;
console.log(newMaze[playerPosition.x][playerPosition.y] )
return newMaze; })
console.log({x:playerPosition.x,y:playerPosition.y})
setPlayerPosition({x:playerPosition.x,y:colunanova})
}

if (dip===1 && ep===1 && cp===1) {
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
newMaze[playerPosition.x][playerPosition.y] =valore;
console.log(newMaze[playerPosition.x][playerPosition.y] )
return newMaze; })
setPlayerPosition({x:linhanova,y:playerPosition.y})
}
//////////////////////////////////////////////////
const listaFiltrada = lista1.filter((item) => item !== 1);
const valorSelecionado = Math.min(...listaFiltrada);
  
if (valorSelecionado===dip) {
console.log(' direita aleatorio')
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
if (ep===1 && bp===1 && cp===1) {
newMaze[playerPosition.x][playerPosition.y] =1;
if ((ep===1 && bp===1 && cp===1)&&(playerPosition.x===initialpos.x && playerPosition.y===initialpos.y )) {
newMaze[playerPosition.x][playerPosition.y] =3;
  }
  return newMaze; 
}
newMaze[playerPosition.x][playerPosition.y] =valore;
console.log(newMaze[playerPosition.x][playerPosition.y] )
return newMaze; })
setPlayerPosition({x:playerPosition.x,y:colunanova})
}

if (valorSelecionado===bp) {
      //baixo
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
if (dip===1 && ep===1 && cp===1) {
newMaze[playerPosition.x][playerPosition.y] =1;
if ((dip===1 && ep===1 && cp===1)&&(playerPosition.x===initialpos.x && playerPosition.y===initialpos.y )) {
newMaze[playerPosition.x][playerPosition.y] =3;
}
return newMaze; 
}
newMaze[playerPosition.x][playerPosition.y] =valore;
console.log(valore)
console.log(newMaze[playerPosition.x][playerPosition.y] )
return newMaze; })
setPlayerPosition({x:linhanova,y:playerPosition.y})
    }

if (valorSelecionado===cp) {
      //cima
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
if (dip===1 && bp===1 && ep===1) {
newMaze[playerPosition.x][playerPosition.y] =1;
if ((dip===1 && bp===1 && ep===1)&&(playerPosition.x===initialpos.x && playerPosition.y===initialpos.y )) {
newMaze[playerPosition.x][playerPosition.y] =3;
}
return newMaze; 
}
newMaze[playerPosition.x][playerPosition.y] =  valore ;
console.log(newMaze[playerPosition.x][playerPosition.y] )
return newMaze; })
setPlayerPosition({x:linhanovaes,y:playerPosition.y})
}

if (valorSelecionado===ep) {
setMaze((prevMaze) => {
const newMaze = [...prevMaze];
if (dip===1 && bp===1 && cp===1) {
newMaze[playerPosition.x][playerPosition.y] =1;
if ((dip===1 && bp===1 && cp===1)&&(playerPosition.x===initialpos.x && playerPosition.y===initialpos.y )) {
newMaze[playerPosition.x][playerPosition.y] =3;
}
return newMaze; 
}
newMaze[playerPosition.x][playerPosition.y] =  valore ;
return newMaze; })
setPlayerPosition({x:playerPosition.x,y:colunanovabai})
}
}
}
return (
<div className="maze-container">
<button onClick={autoclick}>autoclick</button>
<button onClick={handle}>click</button>
<button onClick={cancel}>cancelar</button>
{maze.map((row, rowIndex) => (
<div className="maze-row" key={rowIndex}>
{row.map((cell, columnIndex) => (
<div
className={`maze-cell ${cell === 1 ? 'wall' : ''} ${cell === 2 ? 'exit' : ''} ${
playerPosition.x === rowIndex && playerPosition.y === columnIndex ? 'player' : ''
}`}
key={columnIndex}
>{cell}</div>
))}
</div>
))}
</div>
);
};
export default MazeGame;