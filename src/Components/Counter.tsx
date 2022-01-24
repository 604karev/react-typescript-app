import React, { Component } from "react";
import Portal from "./Portal";

type CounterState = {
    count: number
}
type CounterProps = {
    title?: string

}


class Counter extends Component<CounterProps, CounterState>{


    constructor(props: CounterProps) {
        super(props)
        this.state = {
            count: 0
        }

    }

    static defaultProps: CounterProps = {
        title: 'Default counter: ',
    }

    static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
        return null

    }

    componentDidMount(): void {

    }

    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
        return true

    }


    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.clientX, e.clientY)
        this.setState((state) => ({
            count: state.count + 1
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}{this.state.count}</h1>
                <button onClick={this.handleClick}>add</button>
                <Portal>
                    <h2>TEST PORTAL</h2>
                </Portal>

            </div>
        )
    }

}
export default Counter