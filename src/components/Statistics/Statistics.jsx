import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsSpan } from './Statistics.styled';

export default function Statistics({ label, percentage }) {
  return (
    <StatisticsItem className="item">
      <StatisticsSpan className="label">{label}</StatisticsSpan>
      <StatisticsSpan className="percentage">{percentage}</StatisticsSpan>
    </StatisticsItem>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
