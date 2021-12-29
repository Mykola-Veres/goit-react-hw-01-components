import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';

import FriendListItem from '../FriendListItem/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <FriendsList className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        ></FriendListItem>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
