import React  from 'react';

const Spinner = () => {
    return (
        <div className="flex flex-col item-center space-y-2">
            <div className='spinner'></div>
            <p className="text-blue-900 text-lg font-semibold">Loading....</p>
        </div>

    );
}

export default  Spinner;
