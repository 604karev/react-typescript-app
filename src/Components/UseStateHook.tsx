import React, { useState } from "react";

const UseStateHook = () => {
    const [arr, setArr] = useState<Array<number>>([])
    const [name, setName] = useState<string | null>(null)



    return (
        <div>
            
            <h1>UseState</h1>
            <div>
                <button onClick={() => setArr([...arr, arr.length + 1])}>Add to Array</button>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button onClick={() => setName('Kirill')}>Add to Array</button>
                {name}
            </div>
  
        </div>
    )
}
export default UseStateHook