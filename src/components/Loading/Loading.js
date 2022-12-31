import React from'react'
import './Loading.css'

function Loading(){
    return(
        <div className='Loading-main'>
            <img id='loading-img' src='spinner-loading.gif'alt='Loading..'/>
            <p id='loading-text'>Setting up your Exam..</p>
        </div>
    )
}
export default Loading;
