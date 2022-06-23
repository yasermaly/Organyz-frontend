import { useState, React } from 'react'
import { Link } from 'react-router-dom'



function AppContent({getList, List}) {

  const Loaded = () => {

//   const [taskItem, useTaskItem] = useState({
//       title: "",
//       status: "",
//       importance: "",
//       timeToComplete: "",
//       due: "",
//   });

// const getTaskList = () => {
//   for(let i = 0 ; i < List[6].item.length; i++){
//      useTaskItem(List[6].item[i])
//   }
// }

const taskNumber = List[11].task;

// const getTaskItem = () => {
//   for (let i = 0 ; i < List[6].item.length; i++){
//     taskItem.push(List[6].item[i])
//   }
// }
console.log(taskNumber[1].title);

    return (
      <div>
        <ul>
      {taskNumber.map((item, index) => {
        return (
      <li key={item._id} className="todo">
          <h2>{item.title}</h2>
      </li>);
       })}
    </ul>
    </div>
  )
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