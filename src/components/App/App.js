import { Conteiner } from './App.styled';
import user from '../../user.json';
import ProfileSection from '../Profaile/ProfaileSection/ProfaileSection';
import data from '../../data.json';
import StatisticsSection from '../Data/Section/StatisticsSection';
import FriendList from '../FriendList/FriendList/FriendList';
import friend from '../../friend.json';
import transaction from '../../transaction.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <Conteiner>
      <ProfileSection user={user}></ProfileSection>
      <StatisticsSection title="Upload stats" stats={data}></StatisticsSection>
      <FriendList friends={friend}></FriendList>
      <TransactionHistory items={transaction}></TransactionHistory>
    </Conteiner>
  );
}
