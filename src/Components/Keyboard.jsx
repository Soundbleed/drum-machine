import React, { useEffect, useCallback } from 'react';
import '../Styles/styles.css';

const KeyboardKey = ({ power, playSound, sounds }) => {

    const handleKeyDown = useCallback((e) => {
        const sound = sounds.find((sound) => sound.keyCode === e.keyCode);
        if (sound) {
            playSound(sound.key, sound.id)
        }
    }, [sounds, playSound]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            // Cleanup event listener when component unmounts
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown, sounds]);

    return sounds.map((sound) => {
        return (
            <button key={sound.key} id={sound.id} className="drum-pad" onClick={() => { playSound(sound.key, sound.id) }}>{sound.key}
                <audio className='clip' id={sound.key} src={sound.url}></audio>
            </button>
        )
    })
}

const Keyboard = ({ power, handlePowerChange, playSound, sounds }) => {
    return (
        <div className='keyboard'>
            <KeyboardKey power={power} handlePowerChange={handlePowerChange} playSound={playSound} sounds={sounds} />
        </div>

    )

};

export default Keyboard;