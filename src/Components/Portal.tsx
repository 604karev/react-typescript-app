import React, { Component } from "react";
import ReactDOM from "react-dom";

type PortalPropsType = {
    children: React.ReactNode
}


class Portal extends Component<{}, PortalPropsType>{

    private el: HTMLDivElement = document.createElement('div');

    public componentDidMount(): void {
        document.body.append(this.el)
    }

    public componentWillUnmount(): void {
        this.el.remove()
    }

    public render(): React.ReactElement<PortalPropsType> {
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}
export default Portal