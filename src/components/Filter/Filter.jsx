import PropTypes from 'prop-types';
import { Text, Input } from './Filter.styled';
// import { Text } from './Filter.styled';

export function Filter({ onChange }) {
  return (
    <>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={onChange} />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};
