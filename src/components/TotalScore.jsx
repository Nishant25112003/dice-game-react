import '../assets/style/startgame.css'

const TotalScore = ({score}) => {
  

    return (
        <div className='start-game-score-div'>
            <h1 className="value">{score}</h1>
            <p className="total-score">Total Score</p>
        </div>
    );
};

export default TotalScore;
