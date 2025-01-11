import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../Home/Player/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
const Player = () => {

  const navigate =useNavigate();
  const handleClick = ()=> {
    navigate('/');
  };
  const {id} = useParams();
const [apiData, setapiData] = useState({
  name: "",
  key:"",
  published_at:"",
  type:""
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I0NzhiNDVjZmE0ZTBiYjdmZmQ5NzdhZTQ3NjI5MSIsIm5iZiI6MTczNjU4Nzk0OC4zMywic3ViIjoiNjc4MjNhYWNlZDY3OWU1M2Y4N2I1NDE3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JXDEIx8HAkdfHO3v6BAXrnj6vNPQAv2phWq5Y8oh1OY'
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  
  }, [])
  
  

  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={handleClick}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player