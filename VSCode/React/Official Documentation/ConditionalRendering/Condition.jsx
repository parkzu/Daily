import React from 'react'

function UserGreeting(props) {
    return <h1>{props.name}, Welcome It's {props.count} times</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting (props) {
    if(props.isLoggedIn){
        return <UserGreeting name="jiyu" count={0} />
    }
    return <GuestGreeting />;
}
export default function Condition() {
    const isLoggedIn = true;
  return (
    <div>
        <Greeting isLoggedIn={isLoggedIn} />
    </div>
  )
}
