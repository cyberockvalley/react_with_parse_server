import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ParseClient, { ParseClasses, handleParseError } from '../../utils/Parse'
import Styles from '../../utils/Styles'
import { isNullOrEmpty } from '../../../both/Functions'

class FileUpload extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        loading: false,
        product: null,
        products: null
    }

    componentDidMount() {
        //base64 encoded file example
        var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
        var file = new ParseClient.File("myfile.txt", { base64: base64 });

        //file from an array of bytes
        var bytes = [ 0xBE, 0xEF, 0xCA, 0xFE ];
        file = new ParseClient.File("myfile.txt", bytes);

        //parse will auto detect the content-type based on the file extension but 
        //one can specify it with a third parameter
        //file = new ParseClient.File("myfile.zzz", fileData, "image/png")

    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        console.log("onChange", e.target.name+"="+e.target.value, JSON.stringify(this.state))
    }

    handleFileChange = e => {
        if (e.target.files.length > 0) this.setState({files: e.target.files})
    }

    handleSubmit = e => {
        e.preventDefault()
        if(!isNullOrEmpty(this.state.title) && this.state.files && this.state.files.length > 0) {
            this.setState({loading: true})
            var product = new ParseClasses.Product
            product.set("title", this.state.title)
            product.set("seller", ParseClient.User.current())
            product.set("json", {
                color: "red",
                price: 50000,
                currency: "$",
                currency2: "&#32;"
            })
            
            
            var file = this.state.files[0]
            var parseFile = new ParseClient.File(file.name, file);

            parseFile.save()
            .then(photo => {
                product.set("photo", photo)

                product.save()
                .then(saved => {
                    
                    this.setState({saved: saved})
                    this.setState({loading: false})
                })
                .catch(e => {
                    this.setState({loading: false})
                    handleParseError(e)
                })
            })
            .catch(e => {
                handleParseError(e)
                this.setState({loading: false})
            })

        } else {
            alert("All fields must be entered")
        }
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
                <div style={Styles.container}>
                    <div>
                        {this.state.loading? "Loading..." : ""}
                    </div>
                    <div>Product Upload</div>
                    <div style={{marginBottom: "20px"}}>Saved Product{!this.state.saved? "" : JSON.stringify(this.state.saved)}</div>
                    <form onSubmit={this.handleSubmit} style={Styles.form}>
                        <input onChange={this.handleChange} type="text" name="title" placeholder="Product title" style={Styles.inputText} />    
                        <input name="file" type="file" onChange={this.handleFileChange} style={Styles.inputText} multiple/>
                        <button style={Styles.submit} type="submit">Upload</button>
                    </form>
                </div>
                <Footer />
            </div>

        )
    }
}

export default FileUpload