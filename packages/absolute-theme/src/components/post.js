import React from 'react'
import { connect } from 'frontity';
import dayjs from 'dayjs';

const Post = ({state}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const cleanDate = dayjs(post.date).format('DD/MM/YYYY')

    return (
        <>
            <h2>{post.title.rendered}</h2>
            <p><strong>Posted: </strong> {cleanDate}</p>
            <p><strong>Author: </strong> {author.name}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
        </>
    )
}

export default connect(Post);