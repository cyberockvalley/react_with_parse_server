import React from 'react'
import Styles from '../utils/Styles'
import { Link } from 'react-router-dom'
import ParseClient from '../utils/Parse'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={Styles.footer}>
                <ul style={Styles.hr_links_ul}>
                    <li style={Styles.hr_link_li}>
                        <Link to="/auth-process/invalid-link">
                            Invalid Link
                        </Link>
                    </li>
                    <li style={Styles.hr_link_li}>
                        <Link to="/auth-process/verify-email-success">
                            Email Verification Success
                        </Link>
                    </li>
                    <li style={Styles.hr_link_li}>
                        <Link to="/auth-process/password-reset-success">
                            Password Reset Success
                        </Link>
                    </li>
                    <li style={Styles.hr_link_li}>
                        <Link to="/auth-process/choose-password">
                            Choose Password
                        </Link>
                    </li>
                </ul>
                <div style={{marginTop: "15px", flexWrap: "wrap"}}>
                    {
                        ParseClient.User.current()?
                        JSON.stringify(ParseClient.User.current()) : "User.current is null"
                    }
                </div>
            </div>

        )
    }
}

export default Footer