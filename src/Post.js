//using the es7 extension
import React from 'react'
import './Post.css'
import Avatar from "@mui/material/Avatar"; 

//note: class in react refers to class components, so instead we use className
function Post() {
  return (
    <div className="post">
        <div className="post_header"> 
            <Avatar
                className="post_avatar"
                alt= 'Rini.K'
                src="/static/images/avatar/1.jpg" //for now this just makes your pfp the first letter of your username
            />
            {/* header --> avatar, username */}
            <h3>Username</h3>
        </div>
    
        {/* image */}
        <img className="post_Image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxiFZo8hp7oqoftdM8UCkftr2ZDLY0C25LA&s" alt="" />
        
        {/* username, caption */}
        <h4 className="post_text"><strong>rinii.k</strong> WOW this is so cool!</h4>
    </div>
  )
}

export default Post
