import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from "axios";
function HomeDetailPage() {
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saveing, setSaving] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getNote = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/getNotes/${id}`);
                setNote(response.data);
            } catch (error) {
                console.error("Error fetching note:", error);
            } finally {
                setLoading(false);
            }
        };
        getNote();
    }, [id]);

    console.log(note);
    if (loading) {
        return <div className="text-center text-primary py-10">Loading Note...</div>;
    }
    return (
        <div className='min-h-screen flex items-center justify-center '>
            <div className='card bg-base-200 shadow-lg p-4'>
                <h1 className='text-2xl font-bold'>{note.title}</h1>
                <p className='py-4'>{note.content}</p>
                <p className='text-sm text-gray-500'>{note.date}</p>
            </div>
        </div>
    );
}

export default HomeDetailPage;
