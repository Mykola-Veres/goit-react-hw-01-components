import PropTypes from 'prop-types';

import Statistics from '../Statistics/Statistics';
export default function StatisticsSection({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <Statistics
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          ></Statistics>
        ))}
      </ul>
    </section>
  );
}

StatisticsSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
