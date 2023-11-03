import React from "react"

 const NewsItem = (props) => {
 
    let { title, description, imageUrl, newsUrl, author, date,source } = props;

    return (
      <div className="container my-2">
        <div className="card">
          <div style={{
             display : 'flex',
             justifyContent : 'flex-end',
             position : 'absolute',
             right:'0'
             
             }}>
        <span className="badge rounded-pill bg-danger">
                {source}
               
               
              </span>
              </div>
          <img
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2023/07/27/600x338/Manipur-Protest-9_1690465143843_1690465215222.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
             
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default NewsItem;
