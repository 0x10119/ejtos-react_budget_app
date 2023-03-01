
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const {bugget} = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{bugget}</span>
        </div>
    );
};
export default Budget;