import React from 'react'

export default function List() {
    const numbers = [1,2,3,4,5];
  return (
    <div>
        {numbers.map((item) => (
        <li key={item.toString()}>{item}</li>
        ))}
    </div>
  )
}
