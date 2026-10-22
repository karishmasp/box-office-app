import ActorCrad from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCrad
          key={data.person.id}
          name={data.person.name}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not-found-image.png'
          }
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
