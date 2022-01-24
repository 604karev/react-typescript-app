import React, { Component } from 'react';
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Context from "./Components/Context";
import UseStateHook from './Components/UseStateHook';







const App: React.FC = () => (
    <>
        <Counter title='Counter: ' />
        <Form />
        <Context />
        <UseStateHook />
    </>
)


export default App;
