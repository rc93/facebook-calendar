import React, { Fragment } from 'react'
import { FacebookProvider, ShareButton } from 'react-facebook';
import Calendar from './Calendar'

class PostForm extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            shareText: ""
        }
    }
    render()
    {
        return(
            <Fragment>
            <form>
                <textarea 
                rows="10"
                cols="50"
                onChange={(e)=>this.setState({shareText:e.target.value})}
                >
                    {this.state.shareText}
                </textarea>
                <br/>
                <FacebookProvider appId="3103226343108189">
                    <ShareButton href="http://www.facebook.com">
                    Share on Facebook
                    </ShareButton>
                </FacebookProvider>
            </form>
            <br/>
                <Calendar/>
            </Fragment>
        )
    }
}
export default PostForm