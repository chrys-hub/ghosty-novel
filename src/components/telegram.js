import React, { Component } from 'react';
import Telegram from "../images/telegram.png"

console.log(Telegram)
class TelegramBot extends Component{
    render(){
        return(
            <div style={{bottom:`0`,right:`20px`,position:`absolute`,cursor:`pointer`}}>
                <img src={Telegram} style={{maxWidth:`80px`}}/>
            </div>
        );
    }
}


export default TelegramBot;