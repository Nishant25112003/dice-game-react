// RandomDiceRoll.js
import '../assets/style/startgame.css';
import die1 from '../assets/images/randomDie-1.png';
import die2 from '../assets/images/randomDie-2.png';
import die3 from '../assets/images/randomDie-3.png';
import die4 from '../assets/images/randomDie-4.png';
import die5 from '../assets/images/randomDie-5.png';
import die6 from '../assets/images/randomDie-6.png';

const RandomDiceRoll = ({randomNumber, handleClick, resetHandle}) => {

    const diceImages = [die1, die2, die3, die4, die5, die6];    

    return (
        <div className='randomDice'>
            <img onClick={handleClick} src={diceImages[randomNumber - 1]} key={randomNumber} alt={`die-${randomNumber}`} />
            <div className='instructions'>        
                <p>Click on die to roll!</p>
            </div>
            <div className='reset-btns'>
                <button className='reset-button' onClick={resetHandle}>Reset Score</button>
                <button className='rate-button'>Show rules!</button>
            </div>
        </div>
    );
};

export default RandomDiceRoll;
