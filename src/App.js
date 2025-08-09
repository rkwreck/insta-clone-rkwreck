// import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import Post from './Post'; 


function App() {
  return (
    <div className="app">
      {/* Instagram header w/ login buttons and profile picture */}

      <div className="app_header">
        {/* making the instagram text logo in the header */} 
        <img
          className="app_headerImage"
          src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>HELLO HELLO THIS IS SO COOL</h1>

      {/*create multilple posts: */}
      <Post />
      <Post />
      <Post />
    

    </div>
  );
}

export default App;
