import React from 'react'

export default function List() {
//     const numbers = [1,2,3,4,5];
//   return (
//     <div>
//         {numbers.map((item) => (
//         <li key={item.toString()}>{item}</li>
//         ))}
//     </div>
//   )
    const todos = [
        {id: 1, text: 'Drink Water'},
        {id: 2, text: 'Wash Car'},
        {id: 3, text: 'Listen Lecture'},
        {id: 4, text: 'Go to bed'}
    ];

    const Item = (props) => {
        return <li>{props.text}</li>;
    }

    const todoList = todos.map((todo) => <Item{...todo} />)

    return (
        <>{todoList}</>
    )
}
