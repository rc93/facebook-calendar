import React from 'react'
import Facebook from 'react-facebook-login';
import { withRouter } from "react-router";

class FacebookLogin extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name:"",
            email:""
        }
    }
    responseFacebook = (response) => {
        console.log(response)
        const {name,email} = response
        this.setState({name,email})
        this.props.history.push("/form")
    }
    render(){
        return(
            <Facebook
                appId="3103226343108189"
                fields="name,email,picture"
                callback={this.responseFacebook} 
            />
        )
    }
}
export default withRouter(FacebookLogin)