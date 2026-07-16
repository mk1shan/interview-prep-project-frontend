import React from 'react'

function Employee() {
       const name = "john";
       const position ="recat dev";
       const salary =2500;


  return (
    <div>
  <h1>Employee Details</h1>

      <p>Name: {name}</p>

      <p>Position: {position}</p>

      <p>Salary: ${salary}</p>
   


    </div>
  )
}

export default Employee
