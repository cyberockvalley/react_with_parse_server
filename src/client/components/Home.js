import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ParseClient, { ParseClasses, handleParseError } from '../utils/Parse'
import Styles from '../utils/Styles'

import prettyPrintJson from 'pretty-print-json'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        loading: false,
        product: null,
        products: null
    }

    componentDidMount() {
        var query = new ParseClient.Query(ParseClient.User);
        this.setState({loading: true})
        query.find()
        .then(users => {
            this.setState({users: users})
            this.setState({loading: false})
        })
        .catch(e => {
            this.setState({loading: false})
            handleParseError(e)
        })

        var query2 = new ParseClient.Query(ParseClasses.Product)
        
        query2.find()
        .then(products => {
            if(products) {
                this.setState({products: products})
            }
            this.setState({loading: false})
        })
        .catch(e => {
            this.setState({loading: false})
            handleParseError(e)
        })
    } 

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div style={Styles.container}>
                    <div>
                        {this.state.loading? "Loading..." : ""}
                    </div>
                    <div>Home</div>
                    <div style={Styles.jsonViewer} dangerouslySetInnerHTML={{__html: this.state.users? prettyPrintJson.toHtml(this.state.users) : ""}} style={{marginBottom: "15px"}}></div>
                    <div style={Styles.jsonViewer} dangerouslySetInnerHTML={{__html: this.state.products? prettyPrintJson.toHtml(this.state.products) : ""}}></div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default Home