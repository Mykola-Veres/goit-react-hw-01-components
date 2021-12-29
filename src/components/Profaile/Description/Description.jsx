import { Conteiner } from './Description.staled';
import PropTypes from 'prop-types';
export default function Description({ username, tag, location, avatar }) {
  return (
    <Conteiner>
      <img src={avatar} alt={username} />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </Conteiner>
  );
}

Description.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
