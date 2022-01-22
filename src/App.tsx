import React, { Component } from 'react';
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import Context from "./Components/Context";






const App: React.FC = () => (
    <>
        <Counter title='Counter: ' />
        <Form />
        <Context />
    </>
)


export default App;
