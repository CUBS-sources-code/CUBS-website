import React, { useState } from 'react';

const TransferButton: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        // Perform transfer logic here
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '5vh',
            }}
        >
            <button
                onClick={handleClick}
                disabled={isLoading}
                style={{
                    borderRadius: '5px',
                    padding: '10px',
                    backgroundColor: '#f0f0f0',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                {isLoading ? 'Transferring...' : 'Transfer'}
            </button>
        </div>
    );
};

export default TransferButton;
