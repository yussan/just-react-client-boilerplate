import React from "react";

import { connect } from "react-redux";
import { fetchNews, likeNews } from "../redux/actions/news";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchNews());
  }

  render() {
    const news = this.props.news.list || {};

    return (
      <div style={{ maxWidth: 500, margin: "0 auto" }}>
        <strong>1.1. getting started - multiple sagas and reducer</strong>
        <hr />
        <br />
        <br />
        {news.loading ? (
          <i>Fetching data...</i>
        ) : news.status == "ok" ? (
          // literation
          news.articles.map((n, key) => {
            return (
              <div
                style={{ padding: "10px 0", margin: "10px 0 25px" }}
                key={key}
              >
                <strong>
                  <a href={n.url} target="_blank" rel="noreferrer noopener">
                    {n.title}
                  </a>
                </strong>
                <img
                  style={{ maxWidth: "100%", marginBottom: 15 }}
                  src={n.urlToImage}
                  alt={n.title}
                />
                <button onClick={() => this.props.dispatch(likeNews("list", key))}>{`${
                  n.liked ? "Unlike" : "Like"
                } this news`}</button>
              </div>
            );
          })
        ) : (
          // end of literationsdfsdffsd
          <i>Something wrong.</i>
        )}
      </div>
    );
  }
}

export default connect(state => {
  return {
    news: state.News
  };
})(Index);
