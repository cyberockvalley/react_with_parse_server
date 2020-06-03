import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ParseClient, { ParseClasses, handleParseError } from '../../utils/Parse'
import Styles from '../../utils/Styles'

class UserHome extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {

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
                    <div>
                        UserHome
                    </div>
                    <div>
                        Saved: {this.state.saved? JSON.stringify(this.state.saved) : ""}
                    </div>
                    <div>
                        Error: {this.state.error? JSON.stringify(this.state.error) : ""}
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default UserHome