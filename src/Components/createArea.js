import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

    const[note,setNote]=useState({
        title:"",
        content:""

    })

    const[expanded,setexpanded]=useState(false);

function handleChange(event){
const {name,value}=event.target;
setNote(prevValue=>{
    return {
        ...prevValue,
        [name]:value
    }

  })
}
    

function submitNote(event){
props.onadd(note);
setNote({
  title:"",
  content:""

});
    event.preventDefault();

}
    function expand(){
      setexpanded(true);
    }
  return (
    <div>
      <form className="create-note">
        {expanded && (<input name="title"  onChange={handleChange}  value={note.title} placeholder="Title" />)}
        <textarea onClick={expand} name="content" onChange={handleChange}   value={note.content} placeholder="Take a note..." rows={expanded?"3":"1"} />
        <Zoom in={expanded}>

      
        <Fab onClick={submitNote}><AddIcon/>
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
