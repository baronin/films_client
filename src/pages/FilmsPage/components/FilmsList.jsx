import PropTypes from "prop-types";
import FilmCard from "pages/FilmsPage/components/FilmCard";

const FilmsList = ({ films }) => {
  return (
    <div className="ui four cards">
      {films.length === 0 ? (
        <div className="ui icon message">
          <i className="icon info"></i>
          <div className="content">
            <div className="header">No fims yet in our database</div>
          </div>
        </div>
      ) : (
        films.map((film) => <FilmCard key={film._id} film={film} />)
      )}
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
