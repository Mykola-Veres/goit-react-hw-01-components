import PropTypes from 'prop-types';
import Description from '../Description/Description';
import Stats from '../Stats/Stats';
export default function ProfileSection({ user }) {
  return (
    <div>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      ></Description>
      <Stats stats={user.stats}></Stats>
    </div>
  );
}

ProfileSection.propTypes = {
  user: PropTypes.object,
};
