import { useState } from 'react';
import Title from "../components/title";
import Player from "../components/player";
import Score from '../components/score';

import '../styles/display.css'


const MatchScore = () =>{

   const [scorePlayer1, setScorePlayer1] = useState(0);
   const [scorePlayer2, setScorePlayer2] = useState(0);

   const addScore1 = (event) =>{
      setScorePlayer1(scorePlayer1 + 1);
   }

   const addScore2 = (event) => {
      setScorePlayer2(scorePlayer2 + 1);
   }

   const tenisScore = (score) => {
      if(score === 1){

         return 15
      }
      else if(score === 2){

         return 30

      }else if(score >= 3){

         return 40

      }else if(score === 0){
         
         return 0
      }
   }

   const gameState = () =>{
      if(scorePlayer1 >= 3 && scorePlayer1 === scorePlayer2){
         return '¡Empate!'
      }else if(scorePlayer1 === 3 && scorePlayer2 <=1){
         return 'Ganador player 1'
      }else if(scorePlayer2 === 3 && scorePlayer1 <= 1){
         return 'Ganador player 2'
      }else if(scorePlayer1 >= 4 && scorePlayer1 === scorePlayer2 + 1){
         return 'Ventaja player 1'
      }else if(scorePlayer2 >= 4 && scorePlayer2 === scorePlayer1 + 1){
         return 'Ventaja player 2'
      }else if(scorePlayer1 >= 4 && scorePlayer1 === scorePlayer2+2){
         return 'Ganador player 1'
      }else if(scorePlayer2 >=4 && scorePlayer2 === scorePlayer1+2){
         return 'Ganador player 2'
      }else{
         return null
      }
   }
    return(
       <div className = 'parent'>
        <div className = 'div1'>
           <Title title = 'Tennis match'/> 
           <p>{gameState()}</p>
        </div>
        <div className = 'div2'>
           <Player name = 'Player1'/> 
           <Score score = {tenisScore(scorePlayer1)}/>
           <div>
           <button
           onClick = {addScore1}>
            Add</button> 
           </div>
        </div>  
        <div className = 'div3'>
            <Player name = 'Player2'/> 
            <Score score = {tenisScore(scorePlayer2)}/> 
            <div>
              <button
              onClick={addScore2}>Add</button> 
            </div> 
        </div> 
       </div> 
    )
}

export default MatchScore;