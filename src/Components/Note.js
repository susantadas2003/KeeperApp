// import React from "react";

// function Note (props) {

// return (
// <>
// <div className="note">

// <h1>{props.title}</h1> 
// <p>{props.content}</p>

// </div>
// </>


// );
// }

// export default Note;

import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    function handleclick(){
        props.ondelete(props.id);
    }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleclick}><DeleteIcon/></button>
    </div>
  );
}

export default Note;
