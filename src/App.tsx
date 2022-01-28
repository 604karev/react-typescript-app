import React, { Component } from 'react';
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Context from "./Components/Context";
import UseStateHook from './Components/UseStateHook';
import UseEffectHook from './Components/UseEffectHook';
import UseContextComponent, { UseContextHooks } from './Components/UseContextHook';
import UseReducerHook from './Components/useReducerHook';


const App: React.FC = () => (
    <>
        <Counter title='Counter: ' />
        <Form />
        <Context />
        <UseStateHook />
        <UseEffectHook />
        <UseContextComponent />
        <UseReducerHook />
    </>
)


export default App;
