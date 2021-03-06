import { Conteiner, Images, TextTitle, Text } from './Description.staled';
import PropTypes from 'prop-types';
export default function Description({ username, tag, location, avatar }) {
  return (
    <Conteiner>
      <Images src={avatar} alt={username} />
      <TextTitle>{username}</TextTitle>
      <Text>{tag}</Text>
      <Text>{location}</Text>
    </Conteiner>
  );
}

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
