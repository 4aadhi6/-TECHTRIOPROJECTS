// // // import React, { useState, useEffect } from "react";
// // // import { fetchCategories, fetchNotes, fetchAdvertisements } from "../api"; // Assuming api.js is your helper
// // // import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Icons for social links
// // // import logo from "/logo.png"; // Assuming logo image file

// // // const UserPage = () => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [notes, setNotes] = useState([]);
// // //   const [advertisements, setAdvertisements] = useState([]);
// // //   const [category, setCategory] = useState("");
// // //   const [subcategory, setSubcategory] = useState("");
// // //   const [subject, setSubject] = useState("");

// // //   // Fetch categories and advertisements on page load
// // //   useEffect(() => {
// // //     const getCategoriesAndAds = async () => {
// // //       const categoriesData = await fetchCategories();
// // //       setCategories(categoriesData);

// // //       const adsData = await fetchAdvertisements();
// // //       setAdvertisements(adsData);
// // //     };

// // //     getCategoriesAndAds();
// // //   }, []);

// // //   // Handle note search
// // //   const handleFindNotes = async () => {
// // //     if (!category || !subcategory || !subject) {
// // //       alert("Please select all fields");
// // //       return;
// // //     }

// // //     console.log("Sending query:", { category, subcategory, subject });

// // //     try {
// // //       const res = await fetchNotes({ category, subcategory, subject });
// // //       console.log("Response from Notes API:", res);

// // //       if (Array.isArray(res)) {
// // //         setNotes(res);
// // //       } else {
// // //         console.error("Expected an array, but got:", res);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching notes:", error);
// // //       alert("Error fetching notes");
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mt-5">
// // //       {/* Header */}
// // //       <h1 className="text-center text-primary font-weight-bold shadow-lg p-4 mb-4 rounded">
// // //         {/* Logos in a flex container */}
// // //         <div className="d-flex justify-content-center align-items-center">
// // //           <img
// // //             src={logo}
// // //             alt="Logo"
// // //             className="logo-img"
// // //             style={{ height: "59px" }}
// // //           />
// // //           <span className="mx-2 text-primary">TECHTRIO PROJECTS</span>
// // //           <img
// // //             src={logo}
// // //             alt="Logo"
// // //             className="logo-img"
// // //             style={{ height: "59px" }}
// // //           />
// // //         </div>
// // //       </h1>
// // //       <h1 className="text-center text-dark font-weight-bold shadow-sm p-4 mb-5 rounded">
// // //         Study Materials
// // //       </h1>

// // //       {/* Introduction */}
// // //       <p className="lead text-center mb-5" style={{ fontSize: "1.2rem" }}>
// // //         Explore a wide range of study materials categorized for your learning
// // //         convenience. Select the category and subcategory to view related notes
// // //         and download them directly.
// // //       </p>

// // //       {/* Advertisements Section */}
// // //       <div className="mb-5">
// // //         <h3
// // //           className="text-center mb-4"
// // //           style={{ color: "#1f3d58", fontSize: "2rem" }}
// // //         >
// // //           Featured Advertisements
// // //         </h3>
// // //         <p
// // //           className="text-center"
// // //           style={{ fontSize: "1.1rem", color: "#333" }}
// // //         >
// // //           Advertisements displayed here are relevant for students and
// // //           professionals across various schools, colleges, and projects. If
// // //           you're looking for educational resources, tech gadgets, or project
// // //           assistance, check out these advertisements to enhance your learning
// // //           journey.
// // //         </p>
// // //         <div className="row mb-4">
// // //           {advertisements.map((ad, index) => (
// // //             <div key={index} className="col-md-4 mb-4">
// // //               <div
// // //                 className="card shadow-lg rounded"
// // //                 style={{ borderRadius: "15px" }}
// // //               >
// // //                 <img
// // //                   src={ad.fileUrl}
// // //                   alt={ad.title}
// // //                   className="card-img-top"
// // //                   style={{
// // //                     height: "200px",
// // //                     objectFit: "cover",
// // //                     borderRadius: "15px",
// // //                   }}
// // //                 />
// // //                 <div className="card-body">
// // //                   <h5
// // //                     className="card-title"
// // //                     style={{ fontSize: "1.2rem", fontWeight: "bold" }}
// // //                   >
// // //                     {ad.title}
// // //                   </h5>
// // //                   <p
// // //                     className="card-text"
// // //                     style={{ fontSize: "1rem", color: "#555" }}
// // //                   >
// // //                     {ad.description}
// // //                   </p>
// // //                   <a
// // //                     href={`https://wa.me/7736109348?text=Hello%20I%20am%20interested%20in%20the%20ad%20"${ad.title}"%20and%20would%20like%20to%20know%20more%20about%20it.`}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="btn btn-success w-100"
// // //                     style={{
// // //                       fontSize: "1rem",
// // //                       padding: "10px",
// // //                       borderRadius: "10px",
// // //                       backgroundColor: "#25d366",
// // //                       transition: "background-color 0.3s ease",
// // //                     }}
// // //                   >
// // //                     Learn More
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Category Selection Form */}
// // //       <div className="mb-5">
// // //         <h3
// // //           className="text-center text-dark mb-4"
// // //           style={{ fontSize: "1.5rem" }}
// // //         >
// // //           Find Your Notes
// // //         </h3>
// // //         <p
// // //           className="text-center"
// // //           style={{ fontSize: "1.1rem", color: "#333" }}
// // //         >
// // //           Explore a wide range of study materials categorized for your learning
// // //           convenience. Select the category and subcategory to view related notes
// // //           and download them directly.
// // //         </p>
// // //         <div className="row">
// // //           <div className="col-md-4 mb-3">
// // //             <select
// // //               className="form-control"
// // //               onChange={(e) => setCategory(e.target.value)}
// // //               value={category}
// // //               style={{ fontSize: "1.1rem", padding: "10px" }}
// // //             >
// // //               <option value="">Select Category</option>
// // //               {categories.map((cat, index) => (
// // //                 <option key={index} value={cat.category}>
// // //                   {cat.category}
// // //                 </option>
// // //               ))}
// // //             </select>
// // //           </div>

// // //           <div className="col-md-4 mb-3">
// // //             <select
// // //               className="form-control"
// // //               onChange={(e) => setSubcategory(e.target.value)}
// // //               value={subcategory}
// // //               style={{ fontSize: "1.1rem", padding: "10px" }}
// // //             >
// // //               <option value="">Select Subcategory</option>
// // //               {categories
// // //                 .filter((cat) => cat.category === category)
// // //                 .map((cat, index) => (
// // //                   <option key={index} value={cat.subcategory}>
// // //                     {cat.subcategory}
// // //                   </option>
// // //                 ))}
// // //             </select>
// // //           </div>

// // //           <div className="col-md-4 mb-3">
// // //             <select
// // //               className="form-control"
// // //               onChange={(e) => setSubject(e.target.value)}
// // //               value={subject}
// // //               style={{ fontSize: "1.1rem", padding: "10px" }}
// // //             >
// // //               <option value="">Select Subject</option>
// // //               {categories
// // //                 .filter((cat) => cat.subcategory === subcategory)
// // //                 .map((cat, index) => (
// // //                   <option key={index} value={cat.subject}>
// // //                     {cat.subject}
// // //                   </option>
// // //                 ))}
// // //             </select>
// // //           </div>
// // //         </div>

// // //         <button
// // //           className="btn btn-primary mt-4 w-100 py-2"
// // //           onClick={handleFindNotes}
// // //           style={{
// // //             fontSize: "1.2rem",
// // //             transition: "all 0.3s ease-in-out",
// // //             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
// // //             borderRadius: "10px",
// // //           }}
// // //         >
// // //           Find Notes
// // //         </button>
// // //       </div>

// // //       {/* Notes Section */}
// // //       <div className="mb-5">
// // //         <h3
// // //           className="text-center mb-4"
// // //           style={{ fontSize: "1.5rem", fontWeight: "bold" }}
// // //         >
// // //           Available Notes
// // //         </h3>
// // //         {notes.length > 0 ? (
// // //           <div className="list-group">
// // //             {notes.map((note, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="list-group-item d-flex justify-content-between align-items-center"
// // //                 style={{
// // //                   borderRadius: "10px",
// // //                   marginBottom: "10px",
// // //                   padding: "10px",
// // //                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
// // //                 }}
// // //               >
// // //                 <a
// // //                   href={note.fileUrl}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="text-decoration-none text-primary"
// // //                   style={{ fontSize: "1.1rem" }}
// // //                 >
// // //                   {note.subject}
// // //                 </a>
// // //                 <button
// // //                   onClick={() => window.open(note.fileUrl, "_blank")}
// // //                   className="btn btn-primary btn-sm"
// // //                   style={{
// // //                     padding: "6px 12px",
// // //                     fontSize: "1rem",
// // //                     borderRadius: "10px",
// // //                   }}
// // //                 >
// // //                   Download
// // //                 </button>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           <p
// // //             className="text-center text-warning mt-3"
// // //             style={{ fontSize: "1.2rem" }}
// // //           >
// // //             No notes found for the selected category/subcategory/subject
// // //           </p>
// // //         )}
// // //       </div>

// // //       {/* Footer Section */}
// // //     </div>
// // //   );
// // // };

// // // export default UserPage;
// // import React, { useState, useEffect } from "react";
// // import { fetchCategories, fetchNotes, fetchAdvertisements } from "../api";
// // import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// // import logo from "/logo.png";

// // const UserPage = () => {
// //   const [categories, setCategories] = useState([]);
// //   const [notes, setNotes] = useState([]);
// //   const [advertisements, setAdvertisements] = useState([]);
// //   const [category, setCategory] = useState("");
// //   const [subcategory, setSubcategory] = useState("");
// //   const [subject, setSubject] = useState("");

// //   useEffect(() => {
// //     const getCategoriesAndAds = async () => {
// //       const categoriesData = await fetchCategories();
// //       setCategories(categoriesData);

// //       const adsData = await fetchAdvertisements();
// //       setAdvertisements(adsData);
// //     };

// //     getCategoriesAndAds();
// //   }, []);

// //   const handleFindNotes = async () => {
// //     if (!category || !subcategory || !subject) {
// //       alert("Please select all fields");
// //       return;
// //     }

// //     try {
// //       const res = await fetchNotes({ category, subcategory, subject });
// //       if (Array.isArray(res)) {
// //         setNotes(res);
// //       } else {
// //         console.error("Expected an array, but got:", res);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching notes:", error);
// //       alert("Error fetching notes");
// //     }
// //   };

// //   // Helper function to get unique subjects from a category
// //   const getSubjectsForSubcategory = (selectedSubcategory) => {
// //     const categoryData = categories.find(
// //       (cat) => cat.subcategory === selectedSubcategory
// //     );
// //     if (!categoryData) return [];
// //     // Split the subjects string into an array if it's not already an array
// //     return Array.isArray(categoryData.subjects)
// //       ? categoryData.subjects
// //       : categoryData.subjects.split(",").map((s) => s.trim());
// //   };

// //   return (
// //     <div className="container mt-5">
// //       {/* Header */}
// //       <h1 className="text-center text-primary font-weight-bold shadow-lg p-4 mb-4 rounded">
// //         <div className="d-flex justify-content-center align-items-center">
// //           <img
// //             src={logo}
// //             alt="Logo"
// //             className="logo-img"
// //             style={{ height: "59px" }}
// //           />
// //           <span className="mx-2 text-primary">TECHTRIO PROJECTS</span>
// //           <img
// //             src={logo}
// //             alt="Logo"
// //             className="logo-img"
// //             style={{ height: "59px" }}
// //           />
// //         </div>
// //       </h1>
// //       <h1 className="text-center text-dark font-weight-bold shadow-sm p-4 mb-5 rounded">
// //         Study Materials
// //       </h1>

// //       {/* Introduction */}
// //       <p className="lead text-center mb-5" style={{ fontSize: "1.2rem" }}>
// //         Explore a wide range of study materials categorized for your learning
// //         convenience. Select the category and subcategory to view related notes
// //         and download them directly.
// //       </p>

// //       {/* Advertisements Section */}
// //       <div className="mb-5">
// //         <h3
// //           className="text-center mb-4"
// //           style={{ color: "#1f3d58", fontSize: "2rem" }}
// //         >
// //           Featured Advertisements
// //         </h3>
// //         <p
// //           className="text-center"
// //           style={{ fontSize: "1.1rem", color: "#333" }}
// //         >
// //           Advertisements displayed here are relevant for students and
// //           professionals across various schools, colleges, and projects. If
// //           you're looking for educational resources, tech gadgets, or project
// //           assistance, check out these advertisements to enhance your learning
// //           journey.
// //         </p>
// //         <div className="row mb-4">
// //           {advertisements.map((ad, index) => (
// //             <div key={index} className="col-md-4 mb-4">
// //               <div
// //                 className="card shadow-lg rounded"
// //                 style={{ borderRadius: "15px" }}
// //               >
// //                 <img
// //                   src={ad.fileUrl}
// //                   alt={ad.title}
// //                   className="card-img-top"
// //                   style={{
// //                     height: "200px",
// //                     objectFit: "cover",
// //                     borderRadius: "15px",
// //                   }}
// //                 />
// //                 <div className="card-body">
// //                   <h5
// //                     className="card-title"
// //                     style={{ fontSize: "1.2rem", fontWeight: "bold" }}
// //                   >
// //                     {ad.title}
// //                   </h5>
// //                   <p
// //                     className="card-text"
// //                     style={{ fontSize: "1rem", color: "#555" }}
// //                   >
// //                     {ad.description}
// //                   </p>
// //                   <a
// //                     href={`https://wa.me/7736109348?text=Hello%20I%20am%20interested%20in%20the%20ad%20"${ad.title}"%20and%20would%20like%20to%20know%20more%20about%20it.`}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="btn btn-success w-100"
// //                     style={{
// //                       fontSize: "1rem",
// //                       padding: "10px",
// //                       borderRadius: "10px",
// //                       backgroundColor: "#25d366",
// //                       transition: "background-color 0.3s ease",
// //                     }}
// //                   >
// //                     Learn More
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Category Selection Form */}
// //       <div className="mb-5">
// //         <h3
// //           className="text-center text-dark mb-4"
// //           style={{ fontSize: "1.5rem" }}
// //         >
// //           Find Your Notes
// //         </h3>
// //         <p
// //           className="text-center"
// //           style={{ fontSize: "1.1rem", color: "#333" }}
// //         >
// //           Explore a wide range of study materials categorized for your learning
// //           convenience. Select the category and subcategory to view related notes
// //           and download them directly.
// //         </p>
// //         <div className="row">
// //           <div className="col-md-4 mb-3">
// //             <select
// //               className="form-control"
// //               onChange={(e) => setCategory(e.target.value)}
// //               value={category}
// //               style={{ fontSize: "1.1rem", padding: "10px" }}
// //             >
// //               <option value="">Select Category</option>
// //               {categories.map((cat, index) => (
// //                 <option key={index} value={cat.category}>
// //                   {cat.category}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           <div className="col-md-4 mb-3">
// //             <select
// //               className="form-control"
// //               onChange={(e) => setSubcategory(e.target.value)}
// //               value={subcategory}
// //               style={{ fontSize: "1.1rem", padding: "10px" }}
// //             >
// //               <option value="">Select Subcategory</option>
// //               {categories
// //                 .filter((cat) => cat.category === category)
// //                 .map((cat, index) => (
// //                   <option key={index} value={cat.subcategory}>
// //                     {cat.subcategory}
// //                   </option>
// //                 ))}
// //             </select>
// //           </div>

// //           <div className="col-md-4 mb-3">
// //             <select
// //               className="form-control"
// //               onChange={(e) => setSubject(e.target.value)}
// //               value={subject}
// //               style={{ fontSize: "1.1rem", padding: "10px" }}
// //             >
// //               <option value="">Select Subject</option>
// //               {getSubjectsForSubcategory(subcategory).map((subj, index) => (
// //                 <option key={index} value={subj}>
// //                   {subj}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>

// //         <button
// //           className="btn btn-primary mt-4 w-100 py-2"
// //           onClick={handleFindNotes}
// //           style={{
// //             fontSize: "1.2rem",
// //             transition: "all 0.3s ease-in-out",
// //             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
// //             borderRadius: "10px",
// //           }}
// //         >
// //           Find Notes
// //         </button>
// //       </div>

// //       {/* Notes Section */}
// //       <div className="mb-5">
// //         <h3
// //           className="text-center mb-4"
// //           style={{ fontSize: "1.5rem", fontWeight: "bold" }}
// //         >
// //           Available Notes
// //         </h3>
// //         {notes.length > 0 ? (
// //           <div className="list-group">
// //             {notes.map((note, index) => (
// //               <div
// //                 key={index}
// //                 className="list-group-item d-flex justify-content-between align-items-center"
// //                 style={{
// //                   borderRadius: "10px",
// //                   marginBottom: "10px",
// //                   padding: "10px",
// //                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
// //                 }}
// //               >
// //                 <a
// //                   href={note.fileUrl}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-decoration-none text-primary"
// //                   style={{ fontSize: "1.1rem" }}
// //                 >
// //                   {note.subject}
// //                 </a>
// //                 <button
// //                   onClick={() => window.open(note.fileUrl, "_blank")}
// //                   className="btn btn-primary btn-sm"
// //                   style={{
// //                     padding: "6px 12px",
// //                     fontSize: "1rem",
// //                     borderRadius: "10px",
// //                   }}
// //                 >
// //                   Download
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <p
// //             className="text-center text-warning mt-3"
// //             style={{ fontSize: "1.2rem" }}
// //           >
// //             No notes found for the selected category/subcategory/subject
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserPage;
// import React, { useState, useEffect } from "react";
// import { fetchCategories, fetchNotes, fetchAdvertisements } from "../api";
// import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// import logo from "/logo.png";

// const UserPage = () => {
//   const [categories, setCategories] = useState([]);
//   const [notes, setNotes] = useState([]);
//   const [advertisements, setAdvertisements] = useState([]);
//   const [category, setCategory] = useState("");
//   const [subcategory, setSubcategory] = useState("");
//   const [subject, setSubject] = useState("");

//   useEffect(() => {
//     const getCategoriesAndAds = async () => {
//       const categoriesData = await fetchCategories();
//       setCategories(categoriesData);

//       const adsData = await fetchAdvertisements();
//       setAdvertisements(adsData);
//     };

//     getCategoriesAndAds();
//   }, []);

//   const handleFindNotes = async () => {
//     if (!category || !subcategory || !subject) {
//       alert("Please select all fields");
//       return;
//     }

//     try {
//       const res = await fetchNotes({ category, subcategory, subject });
//       if (Array.isArray(res)) {
//         setNotes(res);
//       } else {
//         console.error("Expected an array, but got:", res);
//       }
//     } catch (error) {
//       console.error("Error fetching notes:", error);
//       alert("Error fetching notes");
//     }
//   };

//   // Helper function to get unique subjects from a category
//   const getSubjectsForSubcategory = (selectedSubcategory) => {
//     const categoryData = categories.find(
//       (cat) => cat.subcategory === selectedSubcategory
//     );
//     if (!categoryData) return [];
//     // Split the subjects string into an array if it's not already an array
//     return Array.isArray(categoryData.subjects)
//       ? categoryData.subjects
//       : categoryData.subjects.split(",").map((s) => s.trim());
//   };

//   return (
//     <div className="container mt-5">
//       {/* Header */}
//       <h1 className="text-center text-primary font-weight-bold shadow-lg p-4 mb-4 rounded">
//         <div className="d-flex justify-content-center align-items-center">
//           <img
//             src={logo}
//             alt="Logo"
//             className="logo-img"
//             style={{ height: "59px" }}
//           />
//           <span className="mx-2 text-primary">TECHTRIO PROJECTS</span>
//           <img
//             src={logo}
//             alt="Logo"
//             className="logo-img"
//             style={{ height: "59px" }}
//           />
//         </div>
//       </h1>
//       <h1 className="text-center text-dark font-weight-bold shadow-sm p-4 mb-5 rounded">
//         Study Materials
//       </h1>

//       {/* Introduction */}
//       <p className="lead text-center mb-5" style={{ fontSize: "1.2rem" }}>
//         Explore a wide range of study materials categorized for your learning
//         convenience. Select the category and subcategory to view related notes
//         and download them directly.
//       </p>

//       {/* Advertisements Section */}
//       <div className="mb-5">
//         <h3
//           className="text-center mb-4"
//           style={{ color: "#1f3d58", fontSize: "2rem" }}
//         >
//           Featured Advertisements
//         </h3>
//         <p
//           className="text-center"
//           style={{ fontSize: "1.1rem", color: "#333" }}
//         >
//           Advertisements displayed here are relevant for students and
//           professionals across various schools, colleges, and projects. If
//           you're looking for educational resources, tech gadgets, or project
//           assistance, check out these advertisements to enhance your learning
//           journey.
//         </p>
//         <div className="row mb-4">
//           {advertisements.map((ad, index) => (
//             <div key={index} className="col-md-4 mb-4">
//               <div
//                 className="card shadow-lg rounded"
//                 style={{ borderRadius: "15px" }}
//               >
//                 <img
//                   src={ad.fileUrl}
//                   alt={ad.title}
//                   className="card-img-top"
//                   style={{
//                     height: "200px",
//                     objectFit: "cover",
//                     borderRadius: "15px",
//                   }}
//                 />
//                 <div className="card-body">
//                   <h5
//                     className="card-title"
//                     style={{ fontSize: "1.2rem", fontWeight: "bold" }}
//                   >
//                     {ad.title}
//                   </h5>
//                   <p
//                     className="card-text"
//                     style={{ fontSize: "1rem", color: "#555" }}
//                   >
//                     {ad.description}
//                   </p>
//                   <a
//                     href={`https://wa.me/7736109348?text=Hello%20I%20am%20interested%20in%20the%20ad%20"${ad.title}"%20and%20would%20like%20to%20know%20more%20about%20it.`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-success w-100"
//                     style={{
//                       fontSize: "1rem",
//                       padding: "10px",
//                       borderRadius: "10px",
//                       backgroundColor: "#25d366",
//                       transition: "background-color 0.3s ease",
//                     }}
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Category Selection Form */}
//       <div className="mb-5">
//         <h3
//           className="text-center text-dark mb-4"
//           style={{ fontSize: "1.5rem" }}
//         >
//           Find Your Notes
//         </h3>
//         <p
//           className="text-center"
//           style={{ fontSize: "1.1rem", color: "#333" }}
//         >
//           Explore a wide range of study materials categorized for your learning
//           convenience. Select the category and subcategory to view related notes
//           and download them directly.
//         </p>
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             <select
//               className="form-control"
//               onChange={(e) => setCategory(e.target.value)}
//               value={category}
//               style={{ fontSize: "1.1rem", padding: "10px" }}
//             >
//               <option value="">Select Category</option>
//               {categories.map((cat, index) => (
//                 <option key={index} value={cat.category}>
//                   {cat.category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="col-md-4 mb-3">
//             <select
//               className="form-control"
//               onChange={(e) => setSubcategory(e.target.value)}
//               value={subcategory}
//               style={{ fontSize: "1.1rem", padding: "10px" }}
//             >
//               <option value="">Select Subcategory</option>
//               {categories
//                 .filter((cat) => cat.category === category)
//                 .map((cat, index) => (
//                   <option key={index} value={cat.subcategory}>
//                     {cat.subcategory}
//                   </option>
//                 ))}
//             </select>
//           </div>

//           <div className="col-md-4 mb-3">
//             <select
//               className="form-control"
//               onChange={(e) => setSubject(e.target.value)}
//               value={subject}
//               style={{ fontSize: "1.1rem", padding: "10px" }}
//             >
//               <option value="">Select Subject</option>
//               {getSubjectsForSubcategory(subcategory).map((subj, index) => (
//                 <option key={index} value={subj}>
//                   {subj}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <button
//           className="btn btn-primary mt-4 w-100 py-2"
//           onClick={handleFindNotes}
//           style={{
//             fontSize: "1.2rem",
//             transition: "all 0.3s ease-in-out",
//             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//             borderRadius: "10px",
//           }}
//         >
//           Find Notes
//         </button>
//       </div>

//       {/* Notes Section */}
//       <div className="mb-5">
//         <h3
//           className="text-center mb-4"
//           style={{ fontSize: "1.5rem", fontWeight: "bold" }}
//         >
//           Available Notes
//         </h3>
//         {notes.length > 0 ? (
//           <div className="list-group">
//             {notes.map((note, index) => (
//               <div
//                 key={index}
//                 className="list-group-item d-flex justify-content-between align-items-center"
//                 style={{
//                   borderRadius: "10px",
//                   marginBottom: "10px",
//                   padding: "10px",
//                   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 <a
//                   href={note.fileUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-decoration-none text-primary"
//                   style={{ fontSize: "1.1rem" }}
//                 >
//                   {note.subject}
//                 </a>
//                 <button
//                   onClick={() => window.open(note.fileUrl, "_blank")}
//                   className="btn btn-primary btn-sm"
//                   style={{
//                     padding: "6px 12px",
//                     fontSize: "1rem",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   Download
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p
//             className="text-center text-warning mt-3"
//             style={{ fontSize: "1.2rem" }}
//           >
//             No notes found for the selected category/subcategory/subject
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserPage;
import React, { useState, useEffect } from "react";
import { fetchCategories, fetchNotes, fetchAdvertisements } from "../api";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import logo from "/logo.png";

const UserPage = () => {
  const [categories, setCategories] = useState([]);
  const [notes, setNotes] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    const getCategoriesAndAds = async () => {
      const categoriesData = await fetchCategories();
      setCategories(categoriesData);

      const adsData = await fetchAdvertisements();
      setAdvertisements(adsData);
    };

    getCategoriesAndAds();
  }, []);

  const handleFindNotes = async () => {
    if (!category || !subcategory || !subject) {
      alert("Please select all fields");
      return;
    }

    try {
      const res = await fetchNotes({ category, subcategory, subject });
      if (Array.isArray(res)) {
        setNotes(res);
      } else {
        console.error("Expected an array, but got:", res);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
      alert("Error fetching notes");
    }
  };

  // Helper function to get unique subjects from a category
  const getSubjectsForSubcategory = (selectedSubcategory) => {
    const categoryData = categories.find(
      (cat) => cat.subcategory === selectedSubcategory
    );
    if (!categoryData) return [];
    return Array.isArray(categoryData.subjects)
      ? categoryData.subjects
      : categoryData.subjects.split(",").map((s) => s.trim());
  };

  return (
    <div className="container mt-5">
      {/* Header */}
      <h1 className="text-center text-primary font-weight-bold shadow-lg p-4 mb-4 rounded">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
            style={{ height: "59px" }}
          />
          <span className="mx-2 text-primary">TECHTRIO PROJECTS</span>
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
            style={{ height: "59px" }}
          />
        </div>
      </h1>
      <h1 className="text-center text-dark font-weight-bold shadow-sm p-4 mb-5 rounded">
        Study Materials
      </h1>

      {/* Introduction */}
      <p className="lead text-center mb-5" style={{ fontSize: "1.2rem" }}>
        Explore a wide range of study materials categorized for your learning
        convenience. Select the category and subcategory to view related notes
        and download them directly.
      </p>

      {/* Advertisements Section */}
      <div className="mb-5">
        <h3
          className="text-center mb-4"
          style={{ color: "#1f3d58", fontSize: "2rem" }}
        >
          Featured Advertisements
        </h3>
        <p
          className="text-center"
          style={{ fontSize: "1.1rem", color: "#333" }}
        >
          Advertisements displayed here are relevant for students and
          professionals across various schools, colleges, and projects. If
          you're looking for educational resources, tech gadgets, or project
          assistance, check out these advertisements to enhance your learning
          journey.
        </p>
        <div className="row mb-4">
          {advertisements.map((ad, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div
                className="card shadow-lg rounded"
                style={{ borderRadius: "15px" }}
              >
                <div
                  className="card-img-top"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "15px",
                  }}
                >
                  <img
                    src={ad.fileUrl}
                    alt={ad.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Ensures image covers the space
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    {ad.title}
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontSize: "1rem", color: "#555" }}
                  >
                    {ad.description}
                  </p>
                  <a
                    href={`https://wa.me/7736109348?text=Hello%20I%20am%20interested%20in%20the%20ad%20"${ad.title}"%20and%20would%20like%20to%20know%20more%20about%20it.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success w-100"
                    style={{
                      fontSize: "1rem",
                      padding: "10px",
                      borderRadius: "10px",
                      backgroundColor: "#25d366",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Selection Form */}
      <div className="mb-5">
        <h3
          className="text-center text-dark mb-4"
          style={{ fontSize: "1.5rem" }}
        >
          Find Your Notes
        </h3>
        <p
          className="text-center"
          style={{ fontSize: "1.1rem", color: "#333" }}
        >
          Explore a wide range of study materials categorized for your learning
          convenience. Select the category and subcategory to view related notes
          and download them directly.
        </p>
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <select
              className="form-control"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              style={{ fontSize: "1.1rem", padding: "10px" }}
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <select
              className="form-control"
              onChange={(e) => setSubcategory(e.target.value)}
              value={subcategory}
              style={{ fontSize: "1.1rem", padding: "10px" }}
            >
              <option value="">Select Subcategory</option>
              {categories
                .filter((cat) => cat.category === category)
                .map((cat, index) => (
                  <option key={index} value={cat.subcategory}>
                    {cat.subcategory}
                  </option>
                ))}
            </select>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <select
              className="form-control"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              style={{ fontSize: "1.1rem", padding: "10px" }}
            >
              <option value="">Select Subject</option>
              {getSubjectsForSubcategory(subcategory).map((subj, index) => (
                <option key={index} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="btn btn-primary mt-4 w-100 py-2"
          onClick={handleFindNotes}
          style={{
            fontSize: "1.2rem",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          Find Notes
        </button>
      </div>

      {/* Notes Section */}
      <div className="mb-5">
        <h3
          className="text-center mb-4"
          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          Available Notes
        </h3>
        {notes.length > 0 ? (
          <div className="list-group">
            {notes.map((note, index) => (
              <div
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{
                  borderRadius: "10px",
                  marginBottom: "10px",
                  padding: "10px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <a
                  href={note.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-primary"
                  style={{ fontSize: "1.1rem" }}
                >
                  {note.subject}
                </a>
                <button
                  onClick={() => window.open(note.fileUrl, "_blank")}
                  className="btn btn-primary btn-sm"
                  style={{
                    padding: "6px 12px",
                    fontSize: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p
            className="text-center text-warning mt-3"
            style={{ fontSize: "1.2rem" }}
          >
            No notes found for the selected category/subcategory/subject
          </p>
        )}
      </div>
    </div>
  );
};

export default UserPage;
