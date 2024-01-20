// components/Dashboard.tsx

import React from 'react';
import Navbar from './components/navbar/navbar';
import Landingpage from './components/landingPage/landingPage';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="scroll-smooth">
                <Landingpage />
            </div>
        </>
    );
};

export default Dashboard;
