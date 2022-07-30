import React, { useState } from 'react'

export default function Dialog(props) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <button onClick={() => setIsOpen(true)}>Open</button>
    {isOpen && (<div
        style ={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid balck",
            padding: 24,
            backgroundColor: "white",
        }}
    >
            <p>Hello</p>
            <button onClick={() => setIsOpen(false)}>OK</button>
        </div>
       )}
        {isOpen && <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "lightgray"
        }}/>}
    </>
  )
}
