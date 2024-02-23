import React from 'react';
import { useSelector } from 'react-redux';

function Visited() {
    const visitedArticles = useSelector(state => state.content.visitedArticles);

    return (
        <div className='container my-3 news'>
            <h2 className='text-center'>Articles Visited</h2>
            <div className='row justify-content-center d-flex flex-row'>
                {visitedArticles.map((article, index) => (
                    <div className="card cardss col-lg-3 m-3 col-md-3 col-sm-6" style={{ padding: "0px" }} key={index}>
                        <img src={article.urlToImage} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Visited;
