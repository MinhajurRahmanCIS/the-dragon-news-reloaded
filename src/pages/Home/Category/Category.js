import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div className='container my-3'>
            {id && <h2 className='my-3'>This categories News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard 
                    key={news._id}
                    news={news}
                >
                </NewsCard>)
            }
        </div>
    );
};

export default Category;