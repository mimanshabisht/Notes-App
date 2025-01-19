import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {

    return (
        <div>
          <form onSubmit={props.handleAdd}>
            <input onChange={props.handleInput} value={props.noteDetail.title} name="title" placeholder="Title" />
            <textarea onChange={props.handleInput} value={props.noteDetail.content} name="content" placeholder="Take a note..." rows="3" />
            <button> <AddIcon /> </button>
          </form>
        </div>
      );
}

export default CreateArea;