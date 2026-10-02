import React from 'react';

const loading = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-lime-400" />
        </div>
    );
};

export default loading;