import axios from "axios";
import React, { useEffect, useState } from "react";

function UpdateAlumniRequest() {
    const [unverifiedAlumni, setUnverifiedAlumni] = useState([]);

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const response = await axios.get("http://localhost:3000/alumni/all");
                const unUpdatedAlumni = response.data.filter(alumnus => !alumnus.verified);
                setUnverifiedAlumni(unUpdatedAlumni);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAlumni();
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleSave = async (alumnusId) => {
        try {
            await axios.post(`http://localhost:3000/alumni/verify/${alumnusId}`);
            setUnverifiedAlumni(prevAlumni => 
                prevAlumni.filter(alumnus => alumnus._id !== alumnusId)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (alumnusId) => {
        try {
            await axios.delete(`http://localhost:3000/alumni/delete/${alumnusId}`);
            setUnverifiedAlumni(prevAlumni => 
                prevAlumni.filter(alumnus => alumnus._id !== alumnusId)
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl mb-4">Requests</h2>
            {unverifiedAlumni.length === 0 ? (
                <p className="text-lg text-gray-600">No pending requests.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {unverifiedAlumni.map((alumnus, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md border-2 border-black rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={alumnus.image}
                                alt={alumnus.name}
                                className="w-full h-auto object-cover rounded-t-lg"
                                style={{ maxHeight: '500px' }} // Set a max height to limit excessive stretching
                            />
                            <div className="p-4">
                                <h5 className="text-xl font-bold">{alumnus.name}</h5>
                                {alumnus.designation && alumnus.company && (
                                    <>
                                        <p className="text-gray-700">{alumnus.designation} at {alumnus.company}</p>
                                        <p className="text-gray-700">{alumnus.branch}</p>
                                        <p className="text-gray-700 text-sm">Admission Year: {alumnus.admissionYear}</p>
                                        <p className="text-gray-700 text-sm">Graduation Year: {alumnus.graduationYear}</p>
                                        <p className="text-gray-600">{alumnus.tools}</p>
                                    </>
                                )}
                                {!alumnus.designation && !alumnus.company && (
                                    <>
                                        <p className="text-gray-700">{alumnus.branch}</p>
                                        <p className="text-gray-700 text-sm">Admission Year: {alumnus.admissionYear}</p>
                                        <p className="text-gray-700 text-sm">Graduation Year: {alumnus.graduationYear}</p>
                                        <p className="text-gray-600">{alumnus.tools}</p>
                                    </>
                                )}
                                <p className="text-gray-600">{alumnus.message}</p>
                                <div className="flex justify-between mt-4">
                                    <button 
                                        onClick={() => handleSave(alumnus._id)} 
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Save
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(alumnus._id)} 
                                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UpdateAlumniRequest;