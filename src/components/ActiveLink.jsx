
import { NavLink } from 'react-router-dom';
import { setTitle } from '../redux/features/headerSlice';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { DataContext } from '../layout/MainLayout';

const ActiveLink = ({ to, children, title }) => {
    const dispatch = useDispatch();
    const { darkMode } = useContext(DataContext);

    return (
        <NavLink to={to}
            onClick={() => dispatch(setTitle(title))}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `active ${!darkMode ? "text-white bg-black" : "text-black bg-slate-500"} transition-all duration-300 font-semibold rounded-md menu-item flex items-center p-4 gap-4` : `transition-all duration-300 font-semibold rounded-md ${!darkMode ? "text-black hover:text-white hover:bg-black" : "text-white hover:bg-slate-500"} menu-item flex items-center p-4 gap-4`
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;