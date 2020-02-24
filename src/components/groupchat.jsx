import React, { Component } from 'react';
import './groupchat.css'
import groupchat_img from '../icons/groupchat.png'

class Groupchat extends React.Component{
    render(){
        return(
            <div className="groupchat">
                <div className="chatbox mt-2">
                    <img className="groupchat_img" src={groupchat_img}/>
                </div>
                <textarea class="form-control" aria-label="With textarea">enter message...</textarea>
            </div>
            
        );
    }
}

export default Groupchat;