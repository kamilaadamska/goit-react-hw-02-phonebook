import PropTypes from 'prop-types';

export const Filter = ({ findContact, filter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={findContact} value={filter} />
    </label>
  );
};

Filter.propTypes = {
  findContact: PropTypes.func,
  filter: PropTypes.string,
};
