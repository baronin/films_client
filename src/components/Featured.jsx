import PropTypes from "prop-types";

const Featured = ({ film }) => {
  const cls = film.featured ? "yellow" : "empty";

  return (
    <span role="status" className="ui right corner label">
      <i className={`star icon ${cls}`}></i>
    </span>
  );
};

Featured.propTypes = {
  film: PropTypes.object.isRequired,
};

Featured.defaultProps = {
  film: {},
};

export default Featured;
