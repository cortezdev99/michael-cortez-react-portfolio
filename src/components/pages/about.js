import React from 'react'
import profilePicture from "../../../static/assets/images/bio/me.jpg"

export default function () {
  return (
    <div className="about-wrapper">
      <div className="content-page-wrapper">
        <div
          className="left-column"
          style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="right-column">
        I just Finished Schooling at Bottega, achieving my FullStack Software Development Certification. I feel very fluent in React.js, JS, Python, HTML5 and SCSS. I'm still learning Flask, SQL, MongoDB, UML, Firebase and Cypress.
        I'm a headstrong very social and confident kinda guy, I love to challenge myself and I am continuing to push my knowledge to new limits! Some of my hobby's include CODING!!, but seriously I do enjoy coding, I also love going on hikes up in the mountains nearest to me, as well as killing a pizza while binge watching a Netflix series. 
        I enjoy deep conversations over small talk, once you get me going I don't stop!  
        Thank you for taking the time to read this and if you're still here, connect with me! Send me a message and lets talk about whatever! 
        I'm the one on the right!!

        -- links --
            -- Git hub --
            https://github.com/Macattack1999-teck
        </div>
      </div>
    </div>
  )
}