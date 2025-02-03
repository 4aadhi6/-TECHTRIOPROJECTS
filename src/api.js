const API_URL = "http://localhost:5000/api"; // Update with your backend API URL

// Fetch Categories
export const fetchCategories = async () => {
    const response = await fetch(`${API_URL}/categories`);
    return response.json();
};

// Fetch Notes
export const fetchNotes = async ({ category, subcategory, subject }) => {
    const response = await fetch(
        `${API_URL}/notes?category=${category}&subcategory=${subcategory}&subject=${subject}`
    );
    return response.json();
};

// Fetch Advertisements
export const fetchAdvertisements = async () => {
    const response = await fetch(`${API_URL}/advertisements`);
    return response.json();
};

// Add Category
export const addCategory = async ({ category, subcategory, subject }) => {
    const response = await fetch(`${API_URL}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, subcategory, subject }),
    });
    return response.json();
};

// Upload Note
export const uploadNote = async (formData) => {
    const response = await fetch(`${API_URL}/notes`, {
        method: "POST",
        body: formData,
    });
    return response.json();
};

// Upload Advertisement
export const uploadAdvertisement = async (formData) => {
    const response = await fetch(`${API_URL}/advertisements`, {
        method: "POST",
        body: formData,
    });
    return response.json();
};
