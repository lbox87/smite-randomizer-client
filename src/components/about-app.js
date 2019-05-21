import React from 'react';
import './about-app.css';

export default function AboutApp() {
    return (
        <div className="container about">
            <h2>Welcome to SMITE God Randomizer!</h2>
        <p>
            SMITE God Randomizer is a companion app to HiRez's video game "SMITE" that
            allows you to randomize any God from the game's roster.
            Once a God is randomed, you can also random the God's item build. If you create a profile,
            you will be able to save and revisit your favorite builds! 

        Click "Register" at the top if you don't have an account, or "Continue without log in" if you want to jump 
        right into randomzing.
        </p>
        <p>
            This is a fan-made app from a long time lover of the game.
            I am not affiliated with HiRez and all images are assets belonging to HiRez. 
            You can apply to use their API for both SMITE and Paladins <a 
            href="https://www.hirezstudios.com/wp-content/themes/hi-rez-studios/pdf/smite-api-developer-guide.pdf">here</a>.
            Check out the game <a href="https://www.smitegame.com/">here</a> if you want to learn more about it.
        </p>
        </div>
    );
}