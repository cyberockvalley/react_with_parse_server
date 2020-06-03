import React from 'react'
import { Link } from "react-router-dom"
import Styles from '../utils/Styles'
import ParseClient from '../utils/Parse'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    componentDidMount() {

    }

    signOut = e => {
        ParseClient.User.logOut()
        .then(() => {
            this.props.history.push("/login")
        })
    }

    render() {
        return (
            <nav style={Styles.header}>
                <Link to="/">Jinminetics </Link>
                <ul style={Styles.hr_links_ul}>
                    {
                        ParseClient.User.current()?
                        <>
                            <li style={Styles.hr_link_li}>
                                <Link to="/user/home">User Home </Link>
                            </li>
                            <li style={Styles.hr_link_li}>
                                <Link to="/admin/home">Admin Home </Link>
                            </li>
                            <li style={Styles.hr_link_li}>
                                <Link to="/user/upload">Upload </Link>
                            </li>
                            <li style={Styles.hr_link_li}>
                                <Link onClick={this.signOut}>Sign Out </Link>
                            </li>
                        </>
                        :
                        <>
                            <li style={Styles.hr_link_li}>
                                <Link to="/create">Register </Link>
                            </li>
                            <li style={Styles.hr_link_li}>
                                <Link to="/login">Sign In </Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>

        )
    }
}

export default Header