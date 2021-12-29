import PropTypes from 'prop-types';
import Description from '../Description/Description';
import { ConteinerSection } from './ProfaileSection.styled';
import Stats from '../Stats/Stats';

export default function ProfileSection({ user }) {
  return (
    <ConteinerSection>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      ></Description>
      <Stats stats={user.stats}></Stats>
    </ConteinerSection>
  );
}

ProfileSection.propTypes = {
  user: PropTypes.object,
};
