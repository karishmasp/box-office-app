import ShowCrad from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCrad
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          id={data.show.id}
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
