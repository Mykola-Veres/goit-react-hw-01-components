import { Conteiner } from './App.styled';
import user from '../../data/user.json';
import ProfileSection from '../Profaile/ProfaileSection';
import data from '../../data/data.json';
import StatisticsSection from '../StatistcsSection/StatisticsSection';
import FriendList from '../FriendList/FriendList';
import friend from '../../data/friend.json';
import transaction from '../../data/transaction.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <Conteiner>
      <ProfileSection
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></ProfileSection>
      <StatisticsSection title="Upload stats" stats={data}></StatisticsSection>
      <FriendList friends={friend}></FriendList>
      <TransactionHistory items={transaction}></TransactionHistory>
    </Conteiner>
  );
}
