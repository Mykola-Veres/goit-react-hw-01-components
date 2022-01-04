import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendsSpan,
  FriendsText,
  FriendsSpanisOnline,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendsList className="item">
      {isOnline ? (
        <FriendsSpanisOnline className="status" />
      ) : (
        <FriendsSpan className="status" />
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendsText className="name">{name}</FriendsText>
    </FriendsList>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
