import React, { Component } from 'react';
import './post.css'


class Post extends React.Component{
    render(){
        return(
            <div>
                <div class="input-group mt-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text">start discussion</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                
            </div>
            
        );
    }
}

export default Post;