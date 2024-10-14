import '../Styles/styles.css';

const DrumControl = ({ name, power, volume, handleVolumeChange, changeSoundGroups, handlePowerChange }) => {
    return (
        <div id='control'>
            <button onClick={handlePowerChange}>Power: {power ? "ON" : "OFF"}</button>
            <h2>Volume %{Math.round(volume * 100)}</h2>
            <input max="1" min="0" step="0.01" type="range" value={volume} onChange={handleVolumeChange} />
            <h2 id='display'>{name}</h2>
            <button onClick={changeSoundGroups}>Change Sound Groups</button>
        </div>
    );
}

export default DrumControl;