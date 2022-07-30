import React, { useState } from 'react'

export default function Dialog(props) {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <button onClick={() => setIsOpen(true)}>Open</button>
    {isOpen && <div
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
        </div>}
    </>
  )
}
