import React from 'react';

function GameSlide({game, active, toggleVideo}) {
    return (

            <div className="gameSlider">
                <img src={game.img} alt="Game Image"/>
                <div className={`video ${active ? 'active' : undefined}`}>
                    <iframe src={game.trailer} width="1280" height="720" title={game.title} allow="accelerometer; clipboard-write; encryted-media; gyroscope; picture-inpicture;" allowFullScreen></iframe>
                </div>
                <div className="content">
                    <h2>{game.title}</h2>
                    <p>{game.description}</p>
                    <div className="buttons">
                        <a href="#" className="orderBtn">Order Now</a>
                        <a href="#" className={`playBtn ${active ? 'active' : undefined}` } onClick={toggleVideo}>
                            <span className="pause"> <i className="bi bi-pause-fill"></i></span>
                            <span className="play"> <i className="bi bi-play-fill"></i></span>
                        </a>
                    </div>
                </div>
            </div>
    );
}

export default GameSlide;