import Colors from "./Colors"

const Styles = {
    container: {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        padding: "71px 15px",
        minHeight: "60vh",
    },
    header: {
        height: "56px", 
        width: "100%",
        position: "fixed", 
        top: "0px", 
        backgroundColor: Colors.color_primary,
        color: Colors.color_primary_contrast,
        marginBottom: "15px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px",
        zIndex: 1000
    },
    hr_links_ul: {
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-around",
        width: "40%"
    },
    hr_link_li: {margin: "10px", listStyle: "none"},
    footer: {
        backgroundColor: Colors.color_primary,
        color: Colors.color_primary_contrast,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "300px",
        padding: "15px"
    },
    form: {display: "flex", flexDirection: "column", margin: "10px 0px"},
    inputText: {
        marginBottom: "10px",
        width: "150px",
        height: "40px"
    },
    button: {
        width: "100px",
        padding: "12px",
        backgroundColor: Colors.color_primary,
        color: Colors.color_primary_contrast
    },
    jsonViewer: {
        fontFamily: "menlo,consolas,monospace",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "1.3em",
        fontSize: "0.9rem",
        minHeight: "350px",
        fontSize: "0.9rem",
        backgroundColor: "white",
        padding: "5px 10px",
        margin: "0px"
    }
}

export default Styles