import React from 'react';

// import './about-app.css';

export default function AboutApp() {
    return (
        <div>
            <h2>Welcome to SMITE God Randomizer!</h2>
        <p>
            SMITE God Randomizer is a companion app to HiRez's video game "SMITE" that
            allows you to easily randomize any God from the game's roster.
            You can filter out any classes you do not desire to be part of the randomization,
            and once the God is provided you may opt to random again.
            You may also random the God's item build, and if you create a profile,
            you will be able to save and revisit your favorite builds!
            Log in and let's get random!
        </p>
        <p>
            This is a fan-made app from a long time lover of the game.
            I am not affiliated with HiRez, nor do I own or monetize any of their game assets. 
            <br />
            Check out the game <a href="https://www.smitegame.com/">here</a> 
            if you want to learn more about it.
            <br />
            Check out their API for both SMITE and Paladins 
            <a 
            href="https://www.hirezstudios.com/wp-content/themes/hi-rez-studios/pdf/smite-api-developer-guide.pdf">
            here</a>.
        </p>
        </div>
    );
}
