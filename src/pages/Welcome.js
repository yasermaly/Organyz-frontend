import React from 'react';
import PageTitle from '../components/PageTitle';
import { Link} from "react-router-dom";
import style from "../styles/modules/welcome.module.scss"

function Welcome({List, getList}) {

let newUserId = List[List.length-1]._id;
 
  return (
    <div className={style.welcomeDiv}>
        <PageTitle />
        <h1>Welcome {List[List.length-1].name}</h1>
        <h4>We are so glad you are here.  Let's get start!</h4>
        <Link to={`/TaskList/${newUserId}`}>Click Here!</Link>
    </div>
  )
}

export default Welcome;