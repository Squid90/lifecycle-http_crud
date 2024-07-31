import React from 'react';

interface NoteProps {
    id: string;
    content: string;
    onDelete: (id: string) => void;
}

export const Note: React.FC<NoteProps> = ({ id, content, onDelete }) => {
    return (
        <div className="note">
            <div>{content}</div>
            <button onClick={() => onDelete(id)}>Удалить</button>
        </div>
    );
};