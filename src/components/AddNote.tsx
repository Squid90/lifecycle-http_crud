import React, { useState } from 'react';

export const AddNote: React.FC<{ onAdd: () => void }> = ({ onAdd }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const id = Date.now().toString(); // Генерация уникального ID на основе времени
        await fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, content }),
        });
        setContent('');
        onAdd();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Добавить</button>
        </form>
    );
};
