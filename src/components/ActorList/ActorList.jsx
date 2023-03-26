import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorList } from 'utils/fetchAPIService';

const ActorList = () => {
  const [actorList, setActorList] = useState([]);
  const { movieId } = useParams();

  console.log(movieId);
  useEffect(() => {}, []);
  return <ul></ul>;
};
export default ActorList;
