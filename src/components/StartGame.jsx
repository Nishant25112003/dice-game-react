import TotalScore from "./TotalScore";
import Dices from "./Dices";
import RandomDiceRoll from "./RandomDiceRoll";
import '../assets/style/startgame.css'
import { useState } from "react";

function StartGame(){

    const [score, setScore] = useState(0); 

    const [randomNumber, setRandomNumber] = useState(1);
    const [number, setNumber] = useState();

    const [selectedDice, setSelectedDice] = useState(null); // Define selectedDice state

    const handleNumberClick = (numberClicked) => {
        setNumber(numberClicked); // Update the number in StartGame
        setSelectedDice(numberClicked - 1); // Store the index of the selected dice
    };

    const handleClick = () =>{

        if( !number){
            alert("Select the dice first");
            return
            
        }
        const generateNumber = Math.floor(Math.random() * 6) + 1;
        setRandomNumber(generateNumber);

        if( number == generateNumber){
            setScore( (prev) => prev + number);
        } else{
            setScore( (prev) => prev-2);
        }
        setSelectedDice(null);
        setNumber(null)
    }

    const resetHandle = ()=>{
        setScore(0)
    }


  return (
    <div className="start-game">
      <div className="score">
        <TotalScore score={score} />
        <Dices selectedDice={selectedDice} handleNumberClick={handleNumberClick} number={number} setNumber={setNumber}/>
       </div>
        <RandomDiceRoll randomNumber={randomNumber} handleClick={handleClick} resetHandle={resetHandle}/>
        {
            console.log("Random nunmber generated -> "+randomNumber)
        }
        {
            console.log("Number you selected was "+ number)
        }
      
    </div>
  );
};

export default StartGame;
