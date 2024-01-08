
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { formatTime } from '../utils/timeFn';

const TimeProgress = ({ time }) => {
    return (
        <div className="mb-4 w-24">
            <CircularProgressbar
                value={time}
                maxValue={60}
                text={`${formatTime(time)}`}
                styles={buildStyles({
                    pathColor: 'rgba(255, 255, 255, 0.8)',
                    textColor: 'white',
                })}
            />
        </div>
    );
};

export default TimeProgress;