
import { NavLink } from 'react-router-dom';
import { setTitle } from '../redux/features/headerSlice';
import { useDispatch } from 'react-redux';

const ActiveLink = ({ to, children, title }) => {
    const dispatch = useDispatch();

    return (
        <NavLink to={to}
            onClick={() => dispatch(setTitle(title))}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active text-white bg-black transition-all duration-300 font-semibold rounded-md menu-item flex items-center p-4 gap-4" : "transition-all duration-300 font-semibold rounded-md text-black hover:text-white hover:bg-black menu-item flex items-center p-4 gap-4"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;