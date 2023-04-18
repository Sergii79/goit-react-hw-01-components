import { PropTypes } from "prop-types";
import { Statistic } from "./StatisticsCard";

export const Statistics = ({ title, stats }) => {
    return (
        <div>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map(stat => (
                <li key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <Statistic stat={stat} />
                </li>
                ))}
            </ul>
        </div>
     

    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,          
        })
    ).isRequired,
};

