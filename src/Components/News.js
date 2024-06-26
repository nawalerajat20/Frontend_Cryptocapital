// import React,{useEffect,useState} from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component"



// const News =(props)=> {
//   const[articles, setArticles] = useState([])
//   const[loading, setLoading] = useState(true)
//   const[page, setPage] = useState(1)
//   const[totalResults, setTotalResults] = useState(0)
// //   const[progress, setProgress] = useState(0)
//   // document.title = `${this.capitalize(props.category)}-News-Thunder`

//   const capitalize = (word) => {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase();
//   }

//   const updateNews=async()=> {
//     // props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=10ef442b8c2748b28a9dff12c5592152&page=${page}&pageSize=${props.pageSize}`;
//     // const url = `https://newsdata.io/api/1/news?apikey=pub_353918a0a6f8f8e3819c14f27d4652e4f3384&q=crypto&country=${props.country}&language=en&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
//     setLoading(true)
//     let data = await fetch(url);
//     // props.setProgress(30);
//     let parsedData = await data.json();
//     // props.setProgress(60);
//     console.log(parsedData);
//     setArticles(parsedData.articles)
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)
//     // props.setProgress(100);
//   }
//   useEffect(() => {
//     // document.title = `${capitalize(props.category)}-News-Hunter | Rajat Nawale`
//     updateNews();
//     // getNews();
//   },[])
//   const fetchMoreData = async () => {
//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=10ef442b8c2748b28a9dff12c5592152&page=${page+1}&pageSize=${props.pageSize}`;
//     // const url = `https://newsdata.io/api/1/news?apikey=pub_353918a0a6f8f8e3819c14f27d4652e4f3384&q=crypto&country=${props.country}&language=en&category=${props.category}&page=${page}&pageSize=${props.pageSize}`;
//     setPage(page+1);
//     // this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)
//   };

//     return (
//       <>
//         {/* <h2 className='text-center' style={{ margin: "35px 0px", marginTop:"90px" }}>News-Hunter Top {capitalize(props.category)} Headlines</h2> */}
//         {loading && <Spinner/>}
//         <InfiniteScroll
//           dataLength={articles.length}
//           next={fetchMoreData}
//           hasMore={articles.length !== totalResults}
//           loader={<Spinner/>}
//         >
//           <div className='container'>
//             <div className='row'>
//               {articles.map((element) => {
//                 return <div className='col-md-4' key={element.url}>
//                   <NewsItem title={element.title ? element.title.slice(0, 62) : ""} description={element.description ? element.description.slice(0, 120) : ""} imageUrl={element.urlToImage} url={element.url} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} />
//                 </div>
//               })}
//             </div>
//           </div>
//         </InfiniteScroll>
//         {/* <div className='container d-flex justify-content-between'>
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
//           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div> */}
//       </>
//     )
//   }


// News.defaultProps = {
//   country: "in",
//   pageSize: 8,
//   category: "general"
// }
// News.propTypes = {
//   name: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string
// }
// export default News