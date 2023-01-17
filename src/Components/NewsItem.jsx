function NewsItem (props) {
  const {
    title,
    description,
    url,
    urlToImage
  } = props;

  return <div className="card" style={{width: '18rem'}}>
            <img src={urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={url} className="btn btn-primary" target={"_blank"} rel="noopener noreferrer">Read more</a>
            </div>
          </div>
}

export {NewsItem}