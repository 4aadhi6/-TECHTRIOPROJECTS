// import React, { useState, useEffect } from "react";
// import {
//   addCategory,
//   fetchCategories,
//   uploadNote,
//   uploadAdvertisement,
// } from "../api";

// const AdminPage = () => {
//   const [category, setCategory] = useState("");
//   const [subcategory, setSubcategory] = useState("");
//   const [subject, setSubject] = useState("");
//   const [file, setFile] = useState(null);
//   const [adTitle, setAdTitle] = useState("");
//   const [adFile, setAdFile] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [loadingNote, setLoadingNote] = useState(false);
//   const [loadingAd, setLoadingAd] = useState(false);

//   // Fetch categories on component mount
//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         const res = await fetchCategories();
//         if (Array.isArray(res)) {
//           setCategories(res); // Ensure categories are set correctly
//         }
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         setCategories([]);
//       }
//     };

//     getCategories();
//   }, []);

//   const handleAddCategory = async (e) => {
//     e.preventDefault();
//     await addCategory({ category, subcategory, subject });
//     alert("Category added successfully!");
//   };

//   const handleUploadNote = async (e) => {
//     e.preventDefault();
//     if (!category || !subcategory || !subject || !file) {
//       alert("Please fill in all fields and select a file.");
//       return;
//     }

//     setLoadingNote(true);
//     const formData = new FormData();
//     formData.append("category", category);
//     formData.append("subcategory", subcategory);
//     formData.append("subject", subject);
//     formData.append("file", file);

//     try {
//       await uploadNote(formData);
//       alert("Note uploaded successfully!");
//       setCategory("");
//       setSubcategory("");
//       setSubject("");
//       setFile(null);
//     } catch (error) {
//       console.error("Error uploading note:", error);
//       alert("Error uploading note");
//     } finally {
//       setLoadingNote(false);
//     }
//   };

//   const handleUploadAd = async (e) => {
//     e.preventDefault();
//     if (!adTitle || !adFile) {
//       alert("Please fill in all fields and select a file.");
//       return;
//     }

//     setLoadingAd(true);
//     const formData = new FormData();
//     formData.append("title", adTitle);
//     formData.append("file", adFile);

//     try {
//       await uploadAdvertisement(formData);
//       alert("Advertisement uploaded successfully!");
//       setAdTitle("");
//       setAdFile(null);
//     } catch (error) {
//       console.error("Error uploading advertisement:", error);
//       alert("Error uploading advertisement");
//     } finally {
//       setLoadingAd(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Admin Panel</h2>

//       {/* Add Category Form */}
//       <div className="mt-4">
//         <h3>Add Category</h3>
//         <form onSubmit={handleAddCategory} className="form-group">
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Subcategory"
//               value={subcategory}
//               onChange={(e) => setSubcategory(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">
//             Add Category
//           </button>
//         </form>
//       </div>

//       {/* Upload Note Form */}
//       <div className="mt-4">
//         <h3>Upload Note</h3>
//         <form onSubmit={handleUploadNote} className="form-group">
//           <div className="mb-3">
//             <select
//               className="form-select"
//               onChange={(e) => setCategory(e.target.value)}
//               value={category}
//               required
//             >
//               <option value="">Select Category</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat.category}>
//                   {cat.category}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-3">
//             <select
//               className="form-select"
//               onChange={(e) => setSubcategory(e.target.value)}
//               value={subcategory}
//               required
//             >
//               <option value="">Select Subcategory</option>
//               {categories
//                 .filter((cat) => cat.category === category)
//                 .map((cat) => (
//                   <option key={cat._id} value={cat.subcategory}>
//                     {cat.subcategory}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className="mb-3">
//             <select
//               className="form-select"
//               onChange={(e) => setSubject(e.target.value)}
//               value={subject}
//               required
//             >
//               <option value="">Select Subject</option>
//               {categories
//                 .filter((cat) => cat.subcategory === subcategory)
//                 .map((cat) => (
//                   <option key={cat._id} value={cat.subject}>
//                     {cat.subject}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className="mb-3">
//             <input
//               type="file"
//               className="form-control"
//               onChange={(e) => setFile(e.target.files[0])}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary w-100"
//             disabled={loadingNote}
//           >
//             {loadingNote ? "Uploading..." : "Upload Note"}
//           </button>
//         </form>
//       </div>

//       {/* Upload Advertisement Form */}
//       <div className="mt-4">
//         <h3>Upload Advertisement</h3>
//         <form onSubmit={handleUploadAd} className="form-group">
//           <div className="mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Advertisement Title"
//               value={adTitle}
//               onChange={(e) => setAdTitle(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="file"
//               className="form-control"
//               onChange={(e) => setAdFile(e.target.files[0])}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary w-100"
//             disabled={loadingAd}
//           >
//             {loadingAd ? "Uploading..." : "Upload Advertisement"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
import React, { useState, useEffect } from "react";
import {
  addCategory,
  fetchCategories,
  uploadNote,
  uploadAdvertisement,
} from "../api.js";

const AdminPage = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [adTitle, setAdTitle] = useState("");
  const [adFile, setAdFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loadingNote, setLoadingNote] = useState(false);
  const [loadingAd, setLoadingAd] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetchCategories();
        if (Array.isArray(res)) {
          setCategories(res);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    getCategories();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!category || !subcategory || !subject) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await addCategory({ category, subcategory, subject });
      alert("Category added successfully!");

      // Reset form
      setCategory("");
      setSubcategory("");
      setSubject("");

      // Refresh categories
      const updatedCategories = await fetchCategories();
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Error adding category");
    }
  };

  const handleUploadNote = async (e) => {
    e.preventDefault();
    if (!category || !subcategory || !subject || !file) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    setLoadingNote(true);
    const formData = new FormData();
    formData.append("category", category);
    formData.append("subcategory", subcategory);
    formData.append("subject", subject);
    formData.append("file", file);

    try {
      await uploadNote(formData);
      alert("Note uploaded successfully!");
      setFile(null);
    } catch (error) {
      console.error("Error uploading note:", error);
      alert("Error uploading note");
    } finally {
      setLoadingNote(false);
    }
  };

  const handleUploadAd = async (e) => {
    e.preventDefault();
    if (!adTitle || !adFile) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    setLoadingAd(true);
    const formData = new FormData();
    formData.append("title", adTitle);
    formData.append("file", adFile);

    try {
      await uploadAdvertisement(formData);
      alert("Advertisement uploaded successfully!");
      setAdTitle("");
      setAdFile(null);
    } catch (error) {
      console.error("Error uploading advertisement:", error);
      alert("Error uploading advertisement");
    } finally {
      setLoadingAd(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>

      {/* Add Category Form */}
      <div className="mt-4">
        <h3>Add Category</h3>
        <form onSubmit={handleAddCategory} className="form-group">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Subcategory"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Subjects (comma-separated, e.g.: Math, Physics, Chemistry)"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <small className="form-text text-muted">
              Enter multiple subjects separated by commas (e.g., Math, Physics,
              Chemistry)
            </small>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Category
          </button>
        </form>
      </div>

      {/* Upload Note Form */}
      <div className="mt-4">
        <h3>Upload Note</h3>
        <form onSubmit={handleUploadNote} className="form-group">
          <div className="mb-3">
            <select
              className="form-select"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              onChange={(e) => setSubcategory(e.target.value)}
              value={subcategory}
              required
            >
              <option value="">Select Subcategory</option>
              {categories
                .filter((cat) => cat.category === category)
                .map((cat) => (
                  <option key={cat._id} value={cat.subcategory}>
                    {cat.subcategory}
                  </option>
                ))}
            </select>
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              required
            >
              <option value="">Select Subject</option>
              {categories
                .filter((cat) => cat.subcategory === subcategory)
                .map((cat) =>
                  cat.subjects.map((subj, idx) => (
                    <option key={`${cat._id}-${idx}`} value={subj}>
                      {subj}
                    </option>
                  ))
                )}
            </select>
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loadingNote}
          >
            {loadingNote ? "Uploading..." : "Upload Note"}
          </button>
        </form>
      </div>

      {/* Upload Advertisement Form */}
      <div className="mt-4">
        <h3>Upload Advertisement</h3>
        <form onSubmit={handleUploadAd} className="form-group">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Advertisement Title"
              value={adTitle}
              onChange={(e) => setAdTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setAdFile(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loadingAd}
          >
            {loadingAd ? "Uploading..." : "Upload Advertisement"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
