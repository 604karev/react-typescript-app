import React, { Component } from 'react';
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Context from "./Components/Context";
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseContextComponent from './Components/UseContextHook';
import UseReducerHook from './Components/useReducerHook';
import UseRefHook from './Components/useRefHook';


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
