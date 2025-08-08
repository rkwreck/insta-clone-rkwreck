//using the es7 extension
import React from 'react'
import './Post.css'

function Post() {
  return (
    <div className="post">
        {/* header --> avatar, username */}
        <h3>Username</h3>
        
        {/* image */}
        <img className="post_Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxiFZo8hp7oqoftdM8UCkftr2ZDLY0C25LA&s" alt="" />
        
        {/* username, caption */}
        <h4>Username: caption</h4>
    </div>
  )
}

export default Post
