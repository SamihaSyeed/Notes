import React, { useState } from 'react'
import '../Styles/Note.css'
import {ReactComponent as Icon} from '../Icons/arrow.svg'
import {ReactComponent as CopyIcon} from '../Icons/copy.svg'
import {ReactComponent as CloseIcon} from '../Icons/close.svg'
import {ReactComponent as EditIcon} from '../Icons/edit.svg'
import {ReactComponent as SaveIcon} from '../Icons/save.svg'

const Note = (props) => {
    
    const [readMore, setReadMore] = useState(false);
    const [note, setNote] = useState(props.note)
    const [isEditing, setIsEditing] = useState(false)
    const [tempText, setTempText] = useState(note)

    const handleEdit = (e) => {
        setTempText(note)
        setIsEditing(true)
        console.log(readMore)

    }

    const handleSave = (e) => {
        setNote(tempText)
        setIsEditing(false)
        console.log(readMore)
        setReadMore(true)
    }

    const handleChange = (e) => {
        setTempText(e.target.value)
    }

    function handleClick(){
        setReadMore(readMore => !readMore)
        console.log(readMore)
    }
    
    function handleCopy(){
        console.log("hello")
        navigator.clipboard.writeText(note)
    }

  return (
    <div className=' dflex'>
        <div  className="dflex single-note cp">
            <Icon />
            {isEditing?
             <textarea value={tempText} onChange={handleChange} /> 
             : <div className='notes-text' style={readMore?{"whiteSpace":"normal"}:{"whiteSpace":"nowrap"}} onClick={handleClick}> {note} </div>}
            
        </div>
            {readMore ? <div className='notes-options dflex'><CopyIcon onClick={handleCopy} /><CloseIcon />{!isEditing? <EditIcon onClick={handleEdit} /> : <SaveIcon onClick={handleSave} /> }</div> : <CopyIcon onClick={handleCopy} style={{"padding":"5px 10px"}} />}
    </div>
  )
}

export default Note