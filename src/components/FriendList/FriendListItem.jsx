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
        <FriendsSpanisOnline className="status"></FriendsSpanisOnline>
      ) : (
        <FriendsSpan className="status"></FriendsSpan>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendsText className="name">{name}</FriendsText>
    </FriendsList>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
