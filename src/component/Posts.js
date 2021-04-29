import React from 'react'
import {connect} from 'react-redux'
import Post from "./Post";

const Posts = ({myPosts}) => {
    if (!myPosts.length){
        return <p className="text-center">Пока ничего нет</p>
    }
    return myPosts.map(post => <Post post={post} key={post.id}/>  )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        myPosts: state.posts.posts
    }
}


export default connect(mapStateToProps,null)(Posts)