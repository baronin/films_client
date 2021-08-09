import PropTypes from "prop-types";
import FilmCard from "pages/FilmsPage/components/FilmCard";

const FilmsList = ({ films }) => {
  return (
    <div className="ui four cards">
      {films.map((film) => (
        <FilmCard key={film._id} film={film} />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FilmsList.defaultProps = {
  films: [],
};

export default FilmsList;
