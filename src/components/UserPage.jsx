import { useState, useEffect } from 'react';
import { fetchCategories, fetchNotes, fetchAdvertisements } from '../api';

const UserPage = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [subject, setSubject] = useState('');
    const [notes, setNotes] = useState([]);
    const [ads, setAds] = useState([]);

    // Fetch categories and advertisements on component mount
    useEffect(() => {
        fetchCategories().then((res) => setCategories(res.data));
        fetchAdvertisements().then((res) => setAds(res.data));
    }, []);

    // Function to fetch notes based on category, subcategory, and subject
    const handleFindNotes = async () => {
        const res = await fetchNotes({ category, subcategory, subject });
        setNotes(res.data);
    };

    return (
        <div className="container">
            <h1>User Page</h1>
            
            {/* Category dropdown */}
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat._id} value={cat.category}>{cat.category}</option>
                ))}
            </select>

            {/* Subcategory dropdown */}
            <select onChange={(e) => setSubcategory(e.target.value)} value={subcategory}>
                <option value="">Select Subcategory</option>
                {categories
                    .filter((cat) => cat.category === category)
                    .map((cat) => (
                        <option key={cat._id} value={cat.subcategory}>
                            {cat.subcategory}
                        </option>
                    ))}
            </select>

            {/* Subject dropdown */}
            <select onChange={(e) => setSubject(e.target.value)} value={subject}>
                <option value="">Select Subject</option>
                {categories
                    .filter((cat) => cat.category === category && cat.subcategory === subcategory)
                    .map((cat) => (
                        <option key={cat._id} value={cat.subject}>
                            {cat.subject}
                        </option>
                    ))}
            </select>

            {/* Find Notes button */}
            <button className="btn btn-primary" onClick={handleFindNotes}>
                Find Notes
            </button>

            {/* Display found notes */}
            <h3>Notes</h3>
            <ul>
                {notes.map((note) => (
                    <li key={note._id}>
                        <a href={note.fileUrl} target="_blank" rel="noopener noreferrer">
                            View/Download
                        </a>
                    </li>
                ))}
            </ul>

            {/* Advertisements */}
            <h3>Advertisements</h3>
            <div className="ads-container">
                {ads.map((ad) => (
                    <div key={ad._id} className="ad-item">
                        <h4>{ad.title}</h4>
                        <img src={ad.fileUrl} alt={ad.title} className="img-fluid" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPage;
