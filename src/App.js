import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: false,
    movies:[], // 영화 객체들이 저장되어 있는 배열
  };
  
  get_movies = async() => {
    const {
      data: {
        data : { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');  // axios로 API 호출, 반환된 데이터를 movies에 저장, 평점 순으로 정렬
    this.setState({movies, isLoading : false}); // 데이터를 다 받아왔으니 준비가 됨!
  }

  componentDidMount(){
    this.get_movies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section class = "container">
        {isLoading ? (
          <div class = "loader">
            <span class = "loader__text">'Loading...'</span> 
            </div>
            ) : (
              <div class = "movies"> 
              {movies.map((movie) => (
                <Movie 
                  key = {movie.id}
                  id = {movie.id}
                  year = {movie.year}
                  title = {movie.title}
                  summary = {movie.summary}
                  poster = {movie.medium_cover_image}
                />
          ))}
        </div>
        )}
      </section>
    );
  }
}

export default App;