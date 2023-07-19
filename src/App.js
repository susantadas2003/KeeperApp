
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import notes from './Components/notes';
import Note from  './Components/Note';
import CreateArea from './Components/createArea';
import { useState } from 'react';


function App() {

const[notes,setNotes]=useState([]);

  function addNote(note){
setNotes(prevNotes=>{
  return [...prevNotes,note]
  
})
  }
function deleteItem(id){
setNotes(prevNotes=>{

return prevNotes.filter((noteItem,index)=>{
return index!==id;
  }
  )

})
}
return (
    <>
    <div >
      
      <Header/>
     {/* {notes.map(noteItem=>(
      <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content} /> */}

     {/* ))} */}

     <CreateArea onadd={addNote}/>

     {notes.map((noteItem,index) =>{

      return<Note
key={index}
id={index }
      title={noteItem.title}
      content={noteItem.content}
ondelete={deleteItem}

      />

     })}
      <Footer/>
      </div>
      </>
    
  );
}

export default App;
