    import React, { useEffect, useState } from 'react'; 
    import axios from 'axios';

    const AllCategories = () => { 
    const [categories, setCategories] = useState([]);
    useEffect(() => { 
        setCategories(
       [
        {
            title:"Web Development",
        image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
        description: "All about the web dev"
        },
        {
            title:"Data Science",
        image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
        description: "All about the data science"
        },
        {
            title:"Design",
        image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
        description: "All about Designing"
        },
        {
            title:"Business",
        image: "https://wbjgvyzeqirlsfebwzri.supabase.co/storage/v1/object/public/blog-images/c59c335c-8bd4-4fbe-8b6b-3134b1f594e4.jpg",
        description: "Business & Management"
        },
       ]
    )
     }, []);

    return ( 
    <div className="mx-24 mt-10"> 
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Browse Categories</h2> 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
            <div key={category._id} className="p-4 border rounded shadow hover:shadow-lg transition duration-200 bg-white"> 
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{category.title}</h3> 
            <img src={category.image} alt={category.title} className="w-full h-32 object-cover mb-2" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{category.description}</h3> 
            <p className="text-gray-600">Explore all courses in this category.</p>
            </div> 
            )
            )
            } 
            </div>
            </div> 
            ); 
            };

    export default AllCategories;