

import { useState,useEffect } from 'react';


const  Jogo = ()=>{
 

  const [vez, setVez] = useState('X');
  const [valores, setValores] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState('');

const onSquareClick=async (i)=>{
  if (winner!=='') {
    return
  }
console.log(i)
if (vez==='X') {

   setValores(valores.map((valor, index) => (index === i ? 'X' : valor)));
 
   setVez('O')
   console.log(valores)
 
}

if (vez==='O') {
  setValores(valores.map((valor, index) => (index === i ? 'O' : valor)));
  console.log(valores)
  setVez('X')
}
}
useEffect(() => {
  const matriz=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
    ]
    for (let i = 0; i < matriz.length; i++) {
    let[a,b,c]=matriz[i]
    console.log(valores)
    if (valores[a]===valores[b] && valores[a]===valores[c] && valores[a]!=="" ) {
        setWinner('o vencedor foi' + valores[a])
    }
    } 
  }, [valores]);





    return (
        <div style={{paddingLeft:400,paddingTop:400}}>
          <h1>{winner}</h1>
          <h1>é a vez de {vez}</h1>
        <div>
          <div> 
<button className="square" style={{width:30, height:30}} onClick={()=>onSquareClick(0)}>{valores[0]}</button>
<button className="square" style={{width:30, height:30}} onClick={()=>onSquareClick(1)}>{valores[1]}</button>
<button className="square"style={{width:30, height:30}} onClick={()=>onSquareClick(2)}>{valores[2]}</button>
</div>
<div>
<button className="square"style={{width:30, height:30}} onClick={()=>onSquareClick(3)}>{valores[3]}</button>
<button className="square"style={{width:30, height:30}} onClick={()=>onSquareClick(4)}>{valores[4]}</button>
<button className="square"style={{width:30, height:30}} onClick={()=>onSquareClick(5)}>{valores[5]}</button>
</div>

<div>
<button className="square" style={{width:30, height:30}}onClick={()=>onSquareClick(6)}>{valores[6]}</button>
<button className="square" style={{width:30, height:30}}onClick={()=>onSquareClick(7)}>{valores[7]}</button>
<button className="square" style={{width:30, height:30}}onClick={()=>onSquareClick(8)}>{valores[8]}</button>
</div>
</div>
</div>
      );


}
export default Jogo