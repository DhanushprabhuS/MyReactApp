import React from 'react';
import './Home.css';
export default function Home () {
    return (
    <div>
        <div className='bg-videobox'>
            <video src='/videos/video-book.mp4' autoPlay loop muted />
            <h1>LIBARARY MANAGEMENT SYSTEM</h1>
            <p>What are you waiting for? start reading and searching of books</p>
            <div>
                <a id="btn"
                className='btn btn-info btn-lg'
                href="/Login"
                >
                LOGIN
                </a>
                
            </div>
        </div>
    </div>
    );
}

