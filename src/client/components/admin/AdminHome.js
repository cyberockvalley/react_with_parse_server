import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Styles from '../../utils/Styles'

class AdminHome extends React.Component {
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
                    AdminHome
                </div>
                <Footer />
            </div>

        )
    }
}

export default AdminHome