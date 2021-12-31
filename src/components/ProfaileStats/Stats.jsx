import {
  StatsList,
  StatsItem,
  StatsSpanNumber,
  StatsSpan,
} from './Stats.styled';
import PropTypes from 'prop-types';

export default function Stats({ followers, views, likes }) {
  return (
    <StatsList>
      <StatsItem>
        <StatsSpan>Followers</StatsSpan>
        <StatsSpanNumber>{followers}</StatsSpanNumber>
      </StatsItem>
      <StatsItem>
        <StatsSpan>Views</StatsSpan>
        <StatsSpanNumber>{views}</StatsSpanNumber>
      </StatsItem>
      <StatsItem>
        <StatsSpan>Likes</StatsSpan>
        <StatsSpanNumber>{likes}</StatsSpanNumber>
      </StatsItem>
    </StatsList>
  );
}

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
