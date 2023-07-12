import Head from "next/head";
import Image from "next/image";

import Form1 from "../components/Form1";
import React from "react";

export default function Home() {


   return (
   <div className="flex m-4 space-x-4">
    <div  className="basis-1/3 " style={{border:"1px solid red"}}>
    <input type="text" style={{width:"100%"}}></input>
    
   </div>
<div className="basis-1/3">
    <select name="groups" id="lang">
        <option value="groups1">groups1</option>
        <option value="groups2">groups2</option>

      </select>
    
   </div>
   <div className="basis-1/3">
    <input type="checkbox" ></input>
    
    
   </div>
   </div>
   )
   

}



// 1. **Tasks** have a (1) name and (2) parent group. 
//     1. Users should be able to create, view, and complete tasks. Tasks should be displayed under their group.
//     2. Users should be able to move tasks between groups. 
// 2. **Groups** have a (1) name and (2) tasks. 
//     1. Tasks must belong to a group, but groups may be empty. 
//     2. Users should be able to create, view, and complete groups. 
// 3. By default, complete tasks and groups are hidden. A user can adjust a setting to show all tasks and groups.

    //    input is either task or group
    //    update state for new item
    //    render item in approb area

    // input
    // group container - hide/show tasks
    // task card
