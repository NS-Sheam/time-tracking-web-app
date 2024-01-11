
import { FaBars, FaBell, FaSearch, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const TopHeader = () => {
    const { title } = useSelector(state => state.header)
    return (
        <div className="grid grid-cols-4 items-center">
            <div className="col-span-1 me-auto">
                <p className="flex items-center justify-center gap-4 text-xl font-extrabold"><FaBars /> {title}</p>
            </div>
            <div className="col-span-3 flex items-center justify-between gap-2">
                <div className="relative w-96">
                    <input placeholder="search project" className="border border-slate-300 bg-slate-200 rounded-md w-96 p-2 placeholder:text-slate-500 placeholder:font-light" type="text" />
                    <FaSearch className="absolute top-3 right-3 text-black text-xl font-bold" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <p className="relative">
                        <span className="absolute p-[2px] rounded-full text-[8px] font-bold bg-yellow-500 -top-1 right-0">12</span>
                        <FaBell className="text-xl" /></p>
                    <div className="flex justify-center items-center gap-4 text-right">
                        <div>
                            <p className="text-xl font-bold">Nazmus Sakib</p>
                            <p>Admin</p>
                        </div>
                        <div className="text-white bg-black rounded-full p-2">
                            <FaUser />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;