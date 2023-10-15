import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';
const QZone = () => {
    return (
        <div className='my-2'>
            <h4>QZone</h4>
            <div className='d-flex flex-column'>
                <img className='img-fluid' src={qZone1} alt="" />
                <img className='img-fluid' src={qZone2} alt="" />
                <img className='img-fluid' src={qZone3} alt="" />
            </div>
            <div className='mt-2'>
                <img className='img-fluid' src={bg} alt="" />
            </div>
        </div>
    );
};

export default QZone;