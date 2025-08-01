import { useState } from 'react'

const FocusSession = () => {

    const [timer, setTimer] = useState('');

    return (
        <div className='focus-session'>

            <h3>Focus Session</h3>

            <input
                type="time"
                name="timer"
                id="timer"
                value={timer}
                onChange={(e) => setTimer(e.target.value)} />

            <button>Start</button>

        </div>
    )
}

export default FocusSession