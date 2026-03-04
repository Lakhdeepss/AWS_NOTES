import React from 'react'
import { Link } from 'react-router'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { DateFormat } from '../../lib/utils'
import axios from 'axios'

const NoteCard = ({ note, setNotes }) => {

    const deleteNote = async (e, id) => {
        e.preventDefault();
        if (!window.confirm("Are you sure you want to delete this note?")) return;
        try {
            const response = await axios.delete(`http://localhost:3000/api/deleteNotes/${id}`);
            setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));

        }

        catch (error) {
            console.error("Error deleting note:", error);
        }
    };
    return (
        <Link to={`/note/${note._id}`}
            className='card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-primary mb-4'>

            <div className='card-body'>
                <h2 className='card-title text-base-content'>{note.title}</h2>
                <p className='line-clamp-3 text-base-content/70'>{note.content}</p>
                <div className='card-actions items-center justify-between mt-4'>
                    <span className='text-base-content/70'>{DateFormat(note.date)}</span>
                    <div className='flex items-center gap-4'>
                        <PenSquareIcon className='size-4'></PenSquareIcon>
                        <button onClick={(e) => deleteNote(e, note._id)} className='btn btn-ghost text-error'> <Trash2Icon className='size-4'></Trash2Icon> </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NoteCard
