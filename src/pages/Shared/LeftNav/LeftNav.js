import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err.message));
    }, [])
    return (
        <div className='container'>
            <h4 className='my-2'>All Categories</h4>
            {
                categories.map(category => <ListGroup
                    key={category.id}
                >
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-dark'>
                        <ListGroup.Item action>{category.name}
                        </ListGroup.Item>
                    </Link>
                </ListGroup>)
            }
        </div>
    );
};

export default LeftNav;