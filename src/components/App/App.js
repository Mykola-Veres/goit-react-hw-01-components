import PaitingList from '../SectionList/PaintList';
import paintings from '../../paintings.json';
import Section from '../Section/Section';
import { Conteiner } from './App.styled';
import user from '../../user.json';
import ProfileSection from '../Profaile/ProfaileSection/ProfaileSection';
import data from '../../data.json';
import StatisticsSection from '../Data/Section/StatisticsSection';

export default function App() {
  return (
    <Conteiner>
      <Section title="Top day">{<PaitingList items={paintings} />}</Section>
      <ProfileSection user={user}></ProfileSection>
      <StatisticsSection title="Upload stats" stats={data}></StatisticsSection>
      <></>
    </Conteiner>
  );
}
