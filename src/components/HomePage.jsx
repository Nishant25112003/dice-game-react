import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import heading from '../assets/images/gameName.png'
import lines from '../assets/images/lines.png'
import dice1 from '../assets/images/Dice Row1.png'
import dice2 from '../assets/images/Dice Row2.png'
import dice3 from '../assets/images/Dice Row3.png'
import dice4 from '../assets/images/Dice Row4.png'
import cursor from '../assets/images/cursor.png'
import '../assets/style/homepage.css'
import { useState } from 'react';

function HomePage() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='main-div'>
            <div className="game-info">
                <div className='heading'><p>Game Info</p></div>
                <div className='inner-heading'>
                    <img className='lines' src={lines} />
                    <img className='figyah' src={heading} />
                    <img className='lines' src={lines} />
                </div>
                <h3>Click play now to start!</h3>
                <div className='dices'>
                    <img className='dice1' src={dice1} />
                    <img className='dice1' src={dice2} />
                    <img className='dice1' src={dice3} />
                    <img className='dice1' src={dice4} />
                </div>
            </div>
            <div className="title">
                <h1>            Multiplayer, remote-friendly
                dice games to play with 
                your fig-pals!</h1>
            </div>
            <Link
                to='/start'
                className={`play-now-button ${hovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                Play Now
            </Link>
            <img className='cursor' src={cursor} />
        </div>
    )
}

export default HomePage;
