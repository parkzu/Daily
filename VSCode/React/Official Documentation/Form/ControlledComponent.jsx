import React, { useState } from 'react'

export default function ControlledComponent() {
    
    const  [value,setValue] = useState("");
    const  [essay,setEssay] = useState(
      "Please write an essay about your favorite DOM element."
      );

    function handleChange(event) {
        setValue(event.target.value);
      }
    
    function handleEssayChange(event) {
        setEssay(event.target.value);
      }
    
    function handleSubmit(event) {
        alert('A name was submitted: ' + value);
        event.preventDefault();
      }
    

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Essay:
          <textarea value={essay} onChange={handleEssayChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
}
