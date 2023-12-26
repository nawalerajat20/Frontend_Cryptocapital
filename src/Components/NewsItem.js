import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
        <div className='my-9' style={{ margin: '10px', marginTop: '70px' }}>
            <div className="card" id='hover'>
                <div style={{
                    display: "flex", justifyContent: "flex-end", position: "absolute", right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger" >
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://images.news18.com/ibnlive/uploads/2023/02/planet-1-167566201216x9.png" : imageUrl} className="card-img-top" alt="..." style={{ height: '187px', width: 'auto' }} />
                <div className="card-body">
                    <div className='structure' style={{ height: '30vh', overflow: 'hidden' }}>
                        <h5 className="card-title" style={{fontWeight:'600'}}>{title}... </h5>
                        <h3>{description}...</h3>
                        <h4 className='baseline'>By {author} on {new Date(date).toGMTString()}</h4>
                        {/* <p className="card-desc" >{description}...</p>
                        <p className="card-desc"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p> */}
                    </div>
                    <div className='read-more'>
                        <div className="shape">#</div>
                        <a href={url} className="btn1">Read More...</a>
                    </div>
                    {/* <a href={url} className="btn1">Read More...</a> */}
                </div>
            </div>
        </div>
    )

}

export default NewsItem