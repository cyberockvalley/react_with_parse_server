import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ParseClient, { ParseClasses } from '../../utils/Parse'
import Styles from '../../utils/Styles'

class PasswordResetSuccess extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        loading: false
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div style={Styles.container}>
                    <div>
                        {this.state.loading? "Loading..." : ""}
                    </div>
                    <div>PasswordResetSuccess</div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default PasswordResetSuccess