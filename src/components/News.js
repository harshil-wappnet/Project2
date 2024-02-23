import React from 'react';
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Removed useSelector
import { visited } from '../Redux/ContentSlice';

const fetchNews = async () => {
    const res = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9b0d9a59839f45c48098db472f900982");
    return res.json();
}

function News() {
    const { data, status } = useQuery("news", fetchNews);
    const dispatch = useDispatch();

    const handleArticleClick = (article) => {
        dispatch(visited({ article })); // Pass the entire article object
    };

    if (status === "loading") {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (status === "error") {
        return <p>Error fetching data</p>;
    }

    const { articles } = data;

    return (
        <div className='container my-3 news'>
            <h2 className='text-center'>News Updates</h2>
            <div className='row justify-content-center d-flex flex-row'>
                {articles && articles.map((item, index) => (
                    <div className="card cardss col-lg-3 m-3 col-md-3 col-sm-6" style={{ padding: "0px" }} key={index}>
                        <img src={item.urlToImage} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        <Link to="#" className="btn btn-primary" onClick={() => handleArticleClick(item)}>
                            Check News
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default News;
