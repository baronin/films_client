import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import api from "api";

const FilmDetails = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const handleChange = (e) => setFavorite(!favorite);
  useEffect(() => {
    const getFilmById = (_id) => {
      const getIdFilm = api.films.fetchById(_id)
      .then((res) => {
        console.log(res);
        setData(res);
        setFavorite(res.featured)
      })
    }
    getFilmById(id);
  }, []);
  return (<div>
            FilmDetails
            {data &&
            <div id={data._id}>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <img src={data.img} alt="no empty" />
              <div>
                <b>Price : {data.price}</b>
                <i>Duration : {data.duration}</i>
                <i>director : {data.director}</i>
              </div>
              <input type="checkbox" checked={favorite} onChange={handleChange} />
            </div>
            }
            </div> );
}
 
export default FilmDetails;