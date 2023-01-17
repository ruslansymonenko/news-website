import {NewsItem} from './NewsItem.jsx'

function News (props) {
  const {news = []} = props;

  return <div className="news">
    {(news.length - 1) ? news.map((newsItem) => (
      <NewsItem key={newsItem.publishedAt} {...newsItem}/>
    )) : <h4>Nothing found</h4>
    }
    <NewsItem/>
  </div>
}

export {News}