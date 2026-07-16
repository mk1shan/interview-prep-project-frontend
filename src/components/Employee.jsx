import React from 'react'

function Employee(props) {
   


  return (
    <div>
  <h1>Employee Details</h1>

   <p>{props.name1}</p>

      <p> {props.position1}</p>

      <p>{props.salary1}</p>

{/* 
      <p>Name: {name}</p>

      <p>Position: {position}</p>

      <p>Salary: ${salary}</p> */}
   


    </div>
  )
}

export default Employee
