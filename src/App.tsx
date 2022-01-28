import React from 'react';
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Context from "./Components/Context";
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseContextComponent from './Components/UseContextHook';
import UseReducerHook from './Components/UseReducerHook';
import UseRefHook from './Components/UseRefHook';


const App: React.FC = () => (
    <>
        <Counter title='Counter: ' />
        <Form />
        <Context />
        <UseStateHook />
        <UseEffectHook />
        <UseContextComponent />
        <UseReducerHook />
        <UseRefHook />
    </>
)


export default App;
