import NavBar from "../components/navbar";
import { useEffect, useState } from 'react';

import RateLimitedUi from "../components/RateLimitedUi";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";

function HomePage() {
    const [rateLimited, setRateLimited] = useState(false);
    const [loading, setLoading] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            setLoading(true);
            try {
                const url = 'http://3.25.217.179:3000/api/getNotes'
                const response = await axios.get(url);
                setNotes(response.data);
                console.log(notes);
                setRateLimited(false);
            } catch (error) {
                console.error('Error fetching notes:', error);
                if (error.response?.status === 429) {
                    setRateLimited(true);
                }
                else { toast.error('Failed to Load notes') }
            } finally {
                setLoading(false);
            }
        };
        fetchNotes();
    }, []);

    return (
        <div className='min-h-screen'>
            <NavBar />

            {rateLimited && <RateLimitedUi />}

            <div className="max-w-7xl mx-auto p-4 mt-6 grid grid-cols-3 gap-4">
                {loading && <div className="text-center text-primary py-10">Loading Notes...</div>}
                {notes.length > 0 && !rateLimited && (
                    notes.map((note) =>
                        <NoteCard key={note._id} note={note} setNotes={setNotes} />
                    )
                )}
            </div>
        </div>
    )
}
export default HomePage;