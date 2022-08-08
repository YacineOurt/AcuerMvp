import React from 'react';
import NoteHandler from '../compenents/NoteHandler';
import Navbar from "../compenents/Navbar";

const Note = () => {
    return (
        <div>
            <Navbar></Navbar>
            <NoteHandler></NoteHandler>
        </div>
    );
};

export default Note;