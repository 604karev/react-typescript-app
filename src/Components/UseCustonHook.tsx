import { useState, useEffect } from "react"

interface Beverage {
    name: string;
    producerName: string;
    beverageName: string;
    beverageColor: string;
    beverageStyle: string;
    producerLocation: string;
    abv: number;
    ibu: number;
    logo: string;
    level: number;
}

const useFetchDate = (url: string): { data: Beverage[] | null, done: boolean } => {
    const [data, setData] = useState<Beverage[] | null>(null);
    const [done, setDone] = useState(false)
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then((fetchedData: Beverage[]) => {
                setData(fetchedData)
                setDone(true)
            })

    }, [url])

    return {
        data,
        done
    }
}


const UseCustomHook = () => {
    const { data, done } = useFetchDate("/hv-taplist.json")

    return (
        <div>
            {done && <img src={data![Math.floor(Math.random() * 37)].logo} alt="Beverage logo" />}
        </div>
    )
}
export default UseCustomHook