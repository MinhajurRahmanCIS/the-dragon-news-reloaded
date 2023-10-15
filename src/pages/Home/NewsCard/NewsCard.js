import moment from 'moment/moment';
import React from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, rating, total_view } = news;
    
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between bg-light'>
                <div className='d-flex align-items-center'>
                    <img style={{ height: '40px' }} className='rounded-circle me-2' src={author?.img} alt="" />
                    <div className='d-flex flex-column'>
                        <p className='mb-0 mt-3'>{author.name}</p>
                        <p><small>{moment(author.published_date).format('yyyy-mm-D')}</small></p>
                    </div>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image_url} alt="Card image" />
                <Card.Text>
                    {details.length < 250 ?
                        <>
                            {details}
                        </>
                        :
                        <>
                            {details.slice(0, 250)}...
                            <>
                                <Link className='text-danger text-decoration-none' to={`/news/${_id}`}> Read More</Link>
                            </>
                        </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <Rating
                     readonly
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar className='text-dark'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span className='ms-2'>{rating.number}</span>
                </div>
                <span className='d-flex align-items-center'> <FaEye className='me-1'></FaEye> {total_view} </span>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;