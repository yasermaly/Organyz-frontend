import { useState, React } from 'react'
import { Link } from 'react-router-dom'



function AppContent({getList, List}) {

  const Loaded = () => {
    const task = () => {
      
    }
    return List.map((myList) => (
      <li key={myList._id} className="todo">
        <Link to={`/TaskList/${myList._id}`}>
          <h2>{myList.items.item}</h2>
        </Link>
      </li>

    ))
  }

  const Loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <div>
        {List ? Loaded() : Loading() }
    </div>
  )
}

export default AppContent