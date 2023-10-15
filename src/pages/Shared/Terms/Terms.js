import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Our Terms and Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non autem eum labore, nam repudiandae nostrum unde aspernatur nisi iste necessitatibus, itaque placeat facere impedit excepturi expedita ipsum molestiae! Neque.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;