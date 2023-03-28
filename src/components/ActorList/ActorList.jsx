import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActorListItem from 'components/ActorListItem.jsx/ActorListItem';
import { ThreeCircles } from 'react-loader-spinner';
import { ActorListStyled } from './ActorList.styled';
import { fetchActorList } from '../../utils/fetchAPIService';

const ActorList = () => {
  const [actorList, setActorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    const fetchActorData = async () => {
      try {
        const response = await fetchActorList(movieId, abortController);
        setActorList(response);
      } catch (error) {
        setError(error);

        if (error?.message !== 'canceled') {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchActorData();
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      {error && error.message !== 'canceled' && (
        <p>Sorry we have error:{error.message} please reload page!</p>
      )}

      {loading && (
        <div style={{ marginLeft: '420px', marginRight: 'auto' }}>
          <ThreeCircles
            height="80"
            width="80"
            wrapperClass="spinner-wrapper"
            ariaLabel="three-circles-rotating"
            outerCircleColor="#0a598d"
            innerCircleColor="#260a8d"
            middleCircleColor="#6a0474"
          />
        </div>
      )}
      <ActorListStyled>
        <ActorListItem actorList={actorList} />
      </ActorListStyled>
    </>
  );
};
export default ActorList;
