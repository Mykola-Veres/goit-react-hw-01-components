import { StatsList, StatsItem } from './Stats.styled';
import PropTypes from 'prop-types';
import { StatsSpan } from './Stats.styled';

export default function Stats({ stats }) {
  return (
    <StatsList>
      <StatsItem>
        <StatsSpan>Followers</StatsSpan>
        <span>{stats.followers}</span>
      </StatsItem>
      <StatsItem>
        <StatsSpan>Views</StatsSpan>
        <span>{stats.views}</span>
      </StatsItem>
      <StatsItem>
        <StatsSpan>Likes</StatsSpan>
        <span>{stats.likes}</span>
      </StatsItem>
    </StatsList>
  );
}

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
