import React from 'react'
import {Link} from 'react-router-dom'


const ButtonNav = (props) => {

    return (
        <div className='button-nav'>
            <button><Link className='link' to='/add-posts'>New Post</Link></button>
            <button><Link className='link' to='/published'>Published</Link></button>
        </div>
    )
}

export default ButtonNav