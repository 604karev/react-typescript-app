import { useRef, useState } from "react";


const UseRefHook = () => {
    const [inputState, setInputState] = useState<string | undefined>()
    const inputRef = useRef<HTMLInputElement | null>(null)


    return (
        <div>
            <h2>useRef</h2>
            <input type="text" ref={inputRef} />
            <button onClick={() => setInputState(inputRef.current?.value)}>Reference</button>
            <div>{inputState}</div>
        </div>
    )
}
export default UseRefHook