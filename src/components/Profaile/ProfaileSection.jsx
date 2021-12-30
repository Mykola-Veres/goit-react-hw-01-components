import PropTypes from 'prop-types';
import Description from './Description';
import { ConteinerSection } from './ProfaileSection.styled';
import Stats from './Stats';

export default function ProfileSection({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <ConteinerSection>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      ></Description>
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      ></Stats>
    </ConteinerSection>
  );
}

ProfileSection.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
