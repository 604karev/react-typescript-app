import React, { Component } from 'react';

type PositionType = {
    id: string,
    value: string,
    title: string,
}
type FormStateType = {
    inputText: string,
    textareaText: string,
    selectText: string,
    showData: {
        name: string,
        text: string,
        position: string,
    }

}
const POSITIONS: Array<PositionType> = [
    {
        id: 'fd',
        value: 'Front-end Developer',
        title: 'Front-end Developer',
    },
    {
        id: 'bd',
        value: 'Back-end Developer',
        title: 'Back-end Developer',
    }
]



const DEFAUL_SELECT_VALUE: string = POSITIONS[0].value;
const styles: React.CSSProperties = { display: 'block', marginBottom: '10px' }

class Form extends Component<{}, FormStateType>{

    private rootRef: any = React.createRef<HTMLInputElement>();

    state = {
        inputText: '',
        textareaText: '',
        selectText: DEFAUL_SELECT_VALUE,
        showData: {
            name: '',
            text: '',
            position: '',
        }
    }

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { target: { value: inputText } } = e;
        this.setState({ inputText })
    }

    handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const { target: { value: textareaText } } = e;
        this.setState({ textareaText })
    }

    handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const { target: { value: selectText } } = e;
        this.setState({ selectText })
    }

    handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const { inputText, textareaText, selectText } = this.state;
        this.setState({
            inputText: '',
            textareaText: '',
            selectText: DEFAUL_SELECT_VALUE,
            showData: {
                name: inputText,
                text: textareaText,
                position: selectText,
            }
        })
    }

    render() {

        const { inputText, textareaText, selectText, showData } = this.state
        const { name, text, position } = showData

        return (
            <div>
                <form>
                    <label style={styles}>
                        Name:
                        <input
                            onChange={this.handleInputChange}
                            value={inputText}
                            type="text"
                            ref={this.rootRef} />
                    </label>
                    <label style={styles}>
                        Text:
                        <textarea
                            onChange={this.handleTextareaChange}
                            value={textareaText}
                        />
                    </label>
                    <select
                        style={styles}
                        value={selectText}
                        onChange={this.handleSelectChange}

                    >
                        {POSITIONS.map(({ id, value, title }) => (
                            <option
                                key={id}
                                value={value}
                            >{title}</option>
                        ))}
                    </select>

                    <button onClick={this.handleShow}>Show Data</button>
                </form>
                <h2>{name}</h2>
                <h3>{text}</h3>
                <h3>{position}</h3>
            </div>
        )
    }
}

export default Form