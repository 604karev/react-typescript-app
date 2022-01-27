import UserContex, { UserStateType } from '../store'
import { FC, useContext, useState } from 'react'



export const UseContextHooks: FC = ({ children }) => {
    const user = useContext<UserStateType>(UserContex)
    return (
        <div>
            <h2>useContext</h2>
            <div>
                <p>First: {user.first}</p>
                <p>Last: {user.last}</p>
            </div>
            {children}
        </div>
    )
}

const UseContextComponent = () => {
    const [user, setUserState] = useState<UserStateType>({
        first: 'Anna',
        last: 'White',
    });
    return (
        <UseContextHooks>
            < UserContex.Provider value={user} >
                <UseContextHooks />
                <button onClick={() => setUserState({ first: 'Ben', last: 'Brown' })}>Change context</button>
            </UserContex.Provider >
        </UseContextHooks>

    )

}

export default UseContextComponent