import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
// import cards_data from '..//..//assets/cards/Cards_data'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const TitleCards = ({title, category}) => {

  const [apiData, setapiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I0NzhiNDVjZmE0ZTBiYjdmZmQ5NzdhZTQ3NjI5MSIsIm5iZiI6MTczNjU4Nzk0OC4zMywic3ViIjoiNjc4MjNhYWNlZDY3OWU1M2Y4N2I1NDE3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JXDEIx8HAkdfHO3v6BAXrnj6vNPQAv2phWq5Y8oh1OY'
    }
  };
  
  
  const handleWheel =(event)=>{
    event.current.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])
  
  return (
    <div className='title-cards'>
      <h2>{title? title:"Popular on Netflix"}</h2>

      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, idx)=>{
          return <Link to={`/player/${card.id}`} className="card" key={idx}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" /> 
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards