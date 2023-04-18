import { PropTypes } from 'prop-types';

export const Statistic = ({ stat: { label, percentage }}) => {
    return (       
        <>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </>
    );
};

Statistic.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};