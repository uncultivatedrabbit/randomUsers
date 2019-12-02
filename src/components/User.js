import React from 'react'

const cardStyles = {
  "width": "11rem",
  "margin": "1em",
  "color": "#000",
}

export default function User({user}) {
  let email = user.email
  let breaker = user.email.indexOf("@")
  let punctuation
  if (user.name.title === "Mr" || user.name.title === "Mrs" || user.name.title === "Ms"){
    punctuation = "."
  } else {
    punctuation = ""
  }
  return (
    <div  className="card" style={cardStyles}>
      <img src={user.picture.large} className="card-img-top" alt={`${user.name.first}  ${user.name.last}`}/>
      <div className="card-body">
        <p className="card-text">{`${user.name.title}${punctuation} ${user.name.first}  ${user.name.last}`}</p>
        <hr/>
        <p className="card-text email">{`${email.slice(0, breaker)} ${email.slice(breaker)}`}</p>
        <hr/>
        <p className="card-text">{user.phone}</p>
        <hr/>
        <p className="card-text">{user.location.country}</p>
        <hr/>
      </div>
    </div>
  )
}
