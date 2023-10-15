import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { VscChevronLeft } from 'react-icons/vsc';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const { category_id, title, image_url, details } = news;
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`} className='btn btn-danger'> <strong><VscChevronLeft></VscChevronLeft></strong> All news in this category</Link>
            </Card.Body>
        </Card>

        <h2 className='my-3'>Editors Insight</h2>
        <EditorsInsights></EditorsInsights>
        </div>
    );
};

export default News;