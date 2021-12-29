import {
  StatsList,
  StatsItem,
  StatsSpanNumber,
  StatsSpan,
} from './Stats.styled';
import PropTypes from 'prop-types';

export default function Stats({ stats }) {
  return (
    <StatsList>
      <StatsItem>
        <StatsSpan>Followers</StatsSpan>
        <StatsSpanNumber>{stats.followers}</StatsSpanNumber>
      </StatsItem>
      <StatsItem>
        <StatsSpan>Views</StatsSpan>
        <StatsSpanNumber>{stats.views}</StatsSpanNumber>
      </StatsItem>
      <StatsItem>
        <StatsSpan>Likes</StatsSpan>
        <StatsSpanNumber>{stats.likes}</StatsSpanNumber>
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
