import React, { useEffect, useState } from 'react';
import { Note } from './Note.tsx';
import { AddNote } from './AddNote.tsx';

export const Notes: React.FC = () => {
    const [notes, setNotes] = useState<any[]>([]);

    const fetchNotes = async () => {
        const response = await fetch('http://localhost:7070/notes');
        const data = await response.json();
        setNotes(data);
    };

    const handleDelete = async (id: string) => {
        await fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE',
        });
        fetchNotes();
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div>
            <h1>Заметки</h1>
            <AddNote onAdd={fetchNotes} />
            <button onClick={fetchNotes}>Обновить</button>
            <div className='notes'>
                {notes.map(note => (
                    <Note key={note.id} id={note.id} content={note.content} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};