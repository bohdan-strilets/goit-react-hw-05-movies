import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieCredits from 'API/get-movie-credits';
import ActorsList from 'components/ActorsList';

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => {
      const actorsArr = [];

      cast.map(({ id, name, profile_path }) => {
        const actor = {
          id,
          name,
          photo: profile_path,
        };

        return actorsArr.push(actor);
      });

      setActors(actorsArr);
    });
  }, [movieId]);

  return actors && <ActorsList actors={actors} />;
}

export default Cast;
