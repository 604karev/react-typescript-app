import React, { useState, useEffect } from "react";

const authors: Array<string> = [
    'Колас',
    'Купала',
    'Багданович',
    'Барадулин',
    'Граховский',
    'Гилевич',
    'Дунин-Марцинкевич'
];

const styles: React.CSSProperties = { marginBottom: '10px' }
const block: React.CSSProperties = { display: 'block' }

const UseEffectHook = () => {
    const [inputValue, setInputValie] = useState<string>('')
    const [data, setData] = useState<Array<string>>(authors)
    const [sortedState, setSortedState] = useState<Boolean>(false)
    const [timerState, setTimeState] = useState(0)


    useEffect(() => {
        let result = []

        if (inputValue !== '') {
            result = [...authors].filter(
                item => item.toLowerCase().includes(inputValue.toLowerCase()))
        } else result = [...authors];
        if (sortedState) {
            result.sort()
        }
        return setData([...result])

    }, [sortedState, inputValue])

    useEffect(() => {
        const timer = window.setInterval(() => {
            setTimeState(prevState => prevState + 1)
        }, 1000)
        return () => window.clearInterval(timer)
    }, [])



    return (
        <div>
            <h2>UseEffect</h2>
            <div>
                <div style={styles}>Timer: {timerState}</div>
                <label style={block}>Сортировка: <input style={block} type="checkbox" onChange={() => setSortedState(!sortedState)} /></label>
                <label style={block}>Фильтр: <input style={{ ...styles, ...block }} onChange={e => setInputValie(e.target.value)} type="text" value={inputValue} /></label>
                {data.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    )

}
export default UseEffectHook