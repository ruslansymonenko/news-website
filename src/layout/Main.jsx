import React from "react";
import './Main.css';
import {News} from '../Components/News.jsx';
import {apiKey} from '../apiKey';

class Main extends React.Component {
  state = {
    news: [],
    loading: true
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`, {
      method: "GET"
    }).then(response => response.json())
      .then(data => {this.setState({news: data.articles, loading: false})})
  }

  render () {
    const {news} = this.state

    return <div className="main-page container">
      <main className="container">
        <News news={news}/>
      </main>
    </div>
  }
}

export {Main}