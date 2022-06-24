import React from 'react'
import PageTitle from '../components/PageTitle';
import { Link} from "react-router-dom"

function Welcome({List, getList}) {

const newUserId = List[List.length-1]._id;
 
  return (
    <div>
        <PageTitle />
        <h1>Welcome {List[List.length-1].name}</h1>
        <h4>We are so glad you are here.  Let's get start!</h4>
        <Link to={`/TaskList/${newUserId}`}>Click Here!</Link>
    </div>
  )
}

export default Welcome;