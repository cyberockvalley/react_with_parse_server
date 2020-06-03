import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ParseClient, { ParseClasses, handleParseError } from '../../utils/Parse'
import Styles from '../../utils/Styles'
import { isNullOrEmpty } from '../../../both/Functions'
import { Link } from 'react-router-dom'

class Auth extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {

    }

    componentDidMount() {

    }

    switchMode = e => {
        this.setState({password_reset_mode: !this.state.password_reset_mode})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log("onChange", e.target.name+"="+e.target.value, JSON.stringify(this.state))
    }

    handleSubmit = e => {
        e.preventDefault()
        if(!isNullOrEmpty(this.state.email) && (!isNullOrEmpty(this.state.password) || this.state.password_reset_mode)) {
            this.setState({loading: true})
            var action = !this.state.password_reset_mode? 
            ParseClient.User.logIn(this.state.email, this.state.password) : ParseClient.User.requestPasswordReset(this.state.email)
            action
            .then(user => {
                this.setState({login_status: "success: " + JSON.stringify(user)})
                this.setState({loading: false})
            })
            .catch(e => {
                this.setState({login_status: "failed: " + e})
                this.setState({loading: false})
                handleParseError(e)
            })

        } else {
            alert("All fields must be entered!")
        }
        
    }

    styles = {
        
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div style={Styles.container}>
                    <div>
                        {this.state.loading? "Loading..." : ""}
                    </div>
                    <div>
                        {!this.state.password_reset_mode? "Sign In" : "Reset Password"}
                    </div>
                    <div>
                        {!this.state.password_reset_mode? "Login Status" : "Reset Status"} {this.state.login_status}
                    </div>
                    <form onSubmit={this.handleSubmit} style={Styles.form}>
                        <input onChange={this.handleChange} type="text" name="email" placeholder="Username or Email Address" style={Styles.inputText} />
                        {
                            !this.state.password_reset_mode?
                            <input onChange={this.handleChange} type="text" name="password" placeholder="Password" type="password" style={Styles.inputText} />
                            :
                            ""
                        }
                        <button style={Styles.submit} type="submit">{!this.state.password_reset_mode? "Sign In" : "Send reset link"}</button>
                    </form>
                    <div style={{marginBottom: "10px", fontSize: "12px"}}>
                        <Link onClick={this.switchMode}>
                        {
                            this.state.password_reset_mode?
                            <span>Switch back to login</span>
                            :
                            <span>Forgot password? Click here to reset.</span>
                        }
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}


export default Auth