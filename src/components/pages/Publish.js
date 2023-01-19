import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const Publish = (props) => {
    const {posts} = props

    return (
        <div className='publish-container'>
            {posts.map((post, i) => {
                return <div key={i} className='publish-single'>
                        <h1 className='publish-h1'>Title - {post.title}</h1><br/>
                        <ReactMarkdown children={post.body} remarkPlugins={[remarkGfm]} />
                </div>
            })}
        </div>
    )
}

export default Publish