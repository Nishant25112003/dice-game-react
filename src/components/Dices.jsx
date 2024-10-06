import { useState } from 'react';
import die1 from '../assets/images/die-1.png';
import die2 from '../assets/images/die-2.png';
import die3 from '../assets/images/die-3.png';
import die4 from '../assets/images/die-4.png';
import die5 from '../assets/images/die-5.png';
import die6 from '../assets/images/die-6.png';
import '../assets/style/startgame.css';

const Dices = ({number, selectedDice, handleNumberClick}) => { 
    // Accept setNumber as a prop
    const diceImages = [die1, die2, die3, die4, die5, die6];

    return (
        <div className="dices-div-main">
            <div className="dices-div">
                {diceImages.map((dice, index) => (
                    <button
                        key={index}
                        className={"dice-btn"} 
                        onClick={() => handleNumberClick(index + 1)} // Passing dice number dynamically
                    >
                        <img className={`dice ${selectedDice === index ? 'selected' : ''}`} src={dice} alt={`die${index + 1}`} />
                    </button>
                ))}
            </div>
            {/* Display the selected number */}
            <p className='select-number'>Select Number: {number}</p> 
        </div>
    );
};

export default Dices;
