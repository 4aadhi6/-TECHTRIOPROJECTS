import { useState, useEffect } from 'react';
import { addCategory, fetchCategories, uploadNote, uploadAdvertisement } from '../api';

const AdminPage = () => {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [subject, setSubject] = useState('');
    const [file, setFile] = useState(null);
    const [adTitle, setAdTitle] = useState('');
    const [adFile, setAdFile] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(res => setCategories(res.data));
    }, []);

    const handleAddCategory = async (e) => {
        e.preventDefault();
        await addCategory({ category, subcategory, subject });
        alert('Category added successfully!');
    };

    const handleUploadNote = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('category', category);
        formData.append('subcategory', subcategory);
        formData.append('subject', subject);
        formData.append('file', file);
        await uploadNote(formData);
        alert('Note uploaded successfully!');
    };

    const handleUploadAd = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', adTitle);
        formData.append('file', adFile);
        await uploadAdvertisement(formData);
        alert('Advertisement uploaded successfully!');
    };

    return (
        <div className="container">
            <h1>Admin Panel</h1>
            <form onSubmit={handleAddCategory}>
                <input type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
                <input type="text" placeholder="Subcategory" onChange={(e) => setSubcategory(e.target.value)} />
                <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
                <button type="submit">Add Category</button>
            </form>

            <form onSubmit={handleUploadNote}>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option>Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat._id} value={cat.category}>{cat.category}</option>
                    ))}
                </select>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button type="submit">Upload Note</button>
            </form>

            <form onSubmit={handleUploadAd}>
                <input type="text" placeholder="Advertisement Title" onChange={(e) => setAdTitle(e.target.value)} />
                <input type="file" onChange={(e) => setAdFile(e.target.files[0])} />
                <button type="submit">Upload Advertisement</button>
            </form>
        </div>
    );
};

export default AdminPage;
