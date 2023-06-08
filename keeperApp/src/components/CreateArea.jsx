import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [note, setNote] = useState({
    title : "",
    content: ""
  })
  const [isExpanded, setExpanded] = useState(false);

  function handleEvent(event){
    const {name, value} = event.target;
    setNote( prevNote => {
      return {
        ...prevNote,
        [name] : value
      }
    } );
  }

  function addNote(event){
    {props.add(note)}
    event.preventDefault();
    setNote({
      title:"",
      content:""
    })
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        
        {isExpanded && 
          <input 
            name="title" 
            value={note.title} 
            onChange={handleEvent} 
            placeholder="Title" 
          />
        }
        
        <textarea 
          onClick={expand} 
          name="content" v
          alue={note.content} 
          onChange={handleEvent} 
          placeholder="Take a note..." 
          rows={isExpanded? 3:1} 
        />
        <Zoom in={isExpanded}>
          <Fab onClick={addNote}>< AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
