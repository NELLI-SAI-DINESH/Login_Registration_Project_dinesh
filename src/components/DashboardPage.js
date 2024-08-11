import React from 'react';

const DashboardPage = () => {
    // Inline CSS styles
    const pageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0'
    };

    const messageStyle = {
        fontSize: '24px',
        color: 'black',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    };

    return (
        <div style={pageStyle}>
            <div style={messageStyle}>
                Your login is successful and welcome to the STUDENT PORTAL.
            </div>
        </div>
    );
};

export default DashboardPage;
