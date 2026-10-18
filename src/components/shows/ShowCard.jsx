import { Link } from 'react-router-dom';

const ShowCrad = ({ name, image, id, summary }) => {
  const summaryStripped = summary
    ? summary.split('').slice(0, 50).join('').replace(/<.+?>/g, '')
    : 'No description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <Link to={`/Show/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ShowCrad;
