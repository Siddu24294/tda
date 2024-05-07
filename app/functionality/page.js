"use client"
import React, { useState } from 'react';

export default function func(){

    const [profiles, setProfiles] = useState([
        {
            id: 1,
            name: 'Emily',
            age: 28,
            bio: 'Loves hiking and exploring new places.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            name: 'Michael',
            age: 32,
            bio: 'Passionate about music and playing guitar.',
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMG1hbiUyMGltYWdlfGVufDB8fDB8fHww',
        },
        {
            id: 3,
            name: 'Sarah',
            age: 25,
            bio: 'Enjoys reading and trying new restaurants.',
            image: 'https://plus.unsplash.com/premium_photo-1688375301014-d47ef7e989ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        // Add more profiles here
    ]);

    const [currentProfile, setCurrentProfile] = useState(0);

    const handleSwipe = (direction) => {
        if (direction === 'left') {
            // Swipe left (reject)
            setCurrentProfile(currentProfile + 1);
        } else {
            // Swipe right (like)
            setCurrentProfile(currentProfile + 1);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-500 to-red-500 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto relative">
                {currentProfile < profiles.length ? (
                    <div>
                        <img
                            src={profiles[currentProfile].image}
                            alt={profiles[currentProfile].name}
                            className="w-full rounded-lg mb-4"
                        />
                        <h2 className="text-2xl font-bold mb-2">
                            {profiles[currentProfile].name}, {profiles[currentProfile].age}
                        </h2>
                        <p className="text-gray-600 mb-4">{profiles[currentProfile].bio}</p>
                        <div className="flex justify-between">
                            <button
                                onClick={() => handleSwipe('left')}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                            <button
                                onClick={() => handleSwipe('right')}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                            >
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">No more profiles to show</h2>
                        <p className="text-gray-600">Try adjusting your preferences or come back later.</p>
                    </div>
                )}
            </div>
        </div>
    );
}