import React, { useState } from 'react';

const Worlds = () => {
    const [value, setValue] = useState(10);
    const increase = () => setValue(value + 1);
    const decrease = () => setValue(value - 1);
    return (
        <div className="border">
            value: {value} Utan redux, värdet(state ändras bara i denna komponenten) <br/>
            <button onClick={increase}> Increase </button>
            <button onClick={decrease}> Decrease </button>
        </div>
    )
}

export default Worlds;