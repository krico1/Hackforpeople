import React, { Component } from 'react';
import './chat.css'

class KommunicateChat extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = {"appId":"2abc4a8ac3e904d44ddb9953225d2e78a","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});        
    }
    render() {
        return(
            <div className = "max-width-container">
                <h1 className ="chat-page-text">Welcome to the chat feature, press the button on the left bottom corner to chat with our virtual assistant who can also guide you record yur events and get in touch your emergency contact</h1>
            </div>
        )
    }
}
export default KommunicateChat;
