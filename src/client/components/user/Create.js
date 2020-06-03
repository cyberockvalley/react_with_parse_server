import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ParseClient, { ParseClasses, handleParseError } from '../../utils/Parse'
import Styles from '../../utils/Styles'
import { isNullOrEmpty } from '../../../both/Functions'

class Create extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {

    }

    componentDidMount() {

    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log("onChange", e.target.name+"="+e.target.value, JSON.stringify(this.state))
    }

    handleSubmit = e => {
        e.preventDefault()
        if(!isNullOrEmpty(this.state.email) && !isNullOrEmpty(this.state.username) && !isNullOrEmpty(this.state.password) && !isNullOrEmpty(this.state.fullname)) {
            var user = new ParseClient.User()
            this.setState({loading: true})
            user.signUp({
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                fullname: this.state.fullname
            })
            .then(user => {
                this.setState({registration_status: "success: " + JSON.stringify(user)})
                this.setState({loading: false})
            })
            .catch(e => {
                this.setState({registration_status: "failed: " + e})
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
                        Please Register Now
                    </div>
                    <div>
                        RegistrationStatus: {this.state.registration_status}
                    </div>
                    <form onSubmit={this.handleSubmit} style={Styles.form}>
                        <input onChange={this.handleChange} type="text" name="email" placeholder="Email address" style={Styles.inputText} />
                        <input onChange={this.handleChange} type="text" name="username" placeholder="Username" style={Styles.inputText} />
                        <input onChange={this.handleChange} type="text" name="password" placeholder="Password" type="password" style={Styles.inputText} />
                        <input onChange={this.handleChange} type="text" name="fullname" placeholder="Fullname" style={Styles.inputText} />
                        <button style={Styles.submit} type="submit">Register</button>
                    </form>
                </div>
                <Footer />
            </div>

        )
    }
}


export default Create