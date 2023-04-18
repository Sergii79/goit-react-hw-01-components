
import { Statistic } from "./StatisticsCard";

export const Statistics = ({ title, stats }) => {
    return (
        <div>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map(stat => (
                <li key={stats.id} style={{ backgroundColor: getRandomHexColor() }}>
                    <Statistic stats={stat} />
                </li>
                ))}
            </ul>
        </div>
     

    );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}