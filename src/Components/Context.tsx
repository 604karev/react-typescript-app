import React, { Component } from "react";

interface IContext {
    isAuth: Boolean,
    toggleAuth: () => void
}

const AuthContext = React.createContext<IContext>({
    isAuth: false,
    toggleAuth: (): void => { }
})


class Login extends Component {

    static contextType = AuthContext;
    context!: React.ContextType<typeof AuthContext>


    render(): React.ReactNode {
        const { isAuth, toggleAuth } = this.context
        return (
            <button onClick={toggleAuth}>
                {!isAuth ? 'Login' : 'Logout'}
            </button>

        )
    }

}

const Profile: React.FC = (): React.ReactElement => (
    <AuthContext.Consumer>
        {({ isAuth }: IContext) => (
            <h1>{!isAuth ? 'Please Log in' : 'You are logged in'}</h1>
        )}
    </AuthContext.Consumer>
)
class Context extends Component<{}, { isAuth: Boolean }> {

    state = {
        isAuth: false
    }
    toggleAuth = () => {
        this.setState(({ isAuth }) => ({
            isAuth: !isAuth
        }))
    }
    render() {
        const { isAuth } = this.state
        const context: IContext = { isAuth, toggleAuth: this.toggleAuth }
        return (
            <div>
                <AuthContext.Provider value={context}>
                    <Login />
                    <Profile />
                </AuthContext.Provider>
            </div>
        )
    }
}


export default Context
