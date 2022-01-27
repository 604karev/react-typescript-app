import { createContext } from "react";

const initialState = {
    first: 'Kirill',
    last: 'Hrudzinski'
}

export type UserStateType = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context