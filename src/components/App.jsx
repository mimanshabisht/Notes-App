import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

const App = () => {
    const [noteDetail, setNoteDetail] = useState({
                title: '',
                content: ''
            })
        
    const [noteTotal, setNoteTotal] = useState([]);
    
    const handleInput = (event) => {
            const {value, name} = event.target;
            setNoteDetail( (prevValue) => {
                return {
                ...prevValue,
                [name]: value.charAt(0).toUpperCase() + value.slice(1)
            }})
        }
    
    const handleAdd = (event) => {
            event.preventDefault();
            setNoteTotal((prevValue) => {
                return [...prevValue, noteDetail]
            })
            setNoteDetail({
                title: '',
                content: ''
            })
        }

        const handleDelete = (id) => {
            setNoteTotal(noteTotal.filter((note, index) => {
                return index !== id
            }));
        }

    return <div>
        <Header />
        <CreateArea noteDetail={noteDetail}
            handleInput={handleInput}
            handleAdd={handleAdd}/>
        {noteTotal.map((note, index) => {
            return <Note key={index} id={index} title={noteTotal[index].title} content={noteTotal[index].content} handleDelete={handleDelete} />
        })}
        <Footer />
    </div>
}

export default App;