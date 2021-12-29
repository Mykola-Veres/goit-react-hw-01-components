import PropTypes from 'prop-types';
import { StatisticsList, Title, Section } from './StatisticsSection.styled';
import Statistics from '../Statistics/Statistics';

export default function StatisticsSection({ title, stats }) {
  return (
    <Section className="statistics">
      {title && <Title>{title}</Title>}
      <StatisticsList className="stat-list">
        {stats.map(stat => (
          <Statistics
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          ></Statistics>
        ))}
      </StatisticsList>
    </Section>
  );
}

StatisticsSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
