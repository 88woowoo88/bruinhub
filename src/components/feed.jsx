import React, { Component } from 'react';
import './feed.css'

class Feed extends React.Component{
    render(){
        return(
            <div className="">
                <div class="input-group mt-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text">post</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea" readOnly>post</textarea>
                </div>

                
            </div>
            
        );
    }
}

export default Feed;