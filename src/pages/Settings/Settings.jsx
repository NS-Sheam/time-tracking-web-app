// Settings.js
import { useContext, useState } from 'react';
import { DataContext } from '../../layout/MainLayout';

const Settings = () => {
    const [notification, setNotification] = useState(true);
    const [language, setLanguage] = useState('en');
    const [themeColor, setThemeColor] = useState('#3498db');
    const [fontSize, setFontSize] = useState('medium');
    const [timezone, setTimezone] = useState('UTC');
    const { darkMode, setDarkMode } = useContext(DataContext);

    const handleNotificationToggle = () => {
        setNotification(!notification);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleColorChange = (e) => {
        setThemeColor(e.target.value);
    };

    const handleFontSizeChange = (e) => {
        setFontSize(e.target.value);
    };

    const handleTimezoneChange = (e) => {
        setTimezone(e.target.value);
    };



    return (
        <div className={`p-8 ${!darkMode ? "bg-gray-100" : "bg-slate-800"} rounded-md shadow-inner  w-[48rem] mx-auto`}>
            <h1 className={`text-3xl font-bold mb-4 ${!darkMode ? "text-black" : "text-white"}`}>Settings</h1>

            <div className="mb-6">
                <label className={`${!darkMode ? "text-gray-600" : "text-white"} block font-bold`}>Notification</label>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="notification"
                        checked={notification}
                        onChange={handleNotificationToggle}
                        className="mr-2 bg-blue-300 rounded-md"
                    />
                    <label htmlFor="notification" className={!darkMode ? "text-gray-700" : "text-white"}>Enable Notification</label>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="language" className={`block ${!darkMode ? "text-gray-600" : "text-white"} font-bold`}>Language</label>
                <select
                    id="language"
                    value={language}
                    onChange={handleLanguageChange}
                    className="bg-blue-300 text-gray-700 p-2 rounded-md">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="fontSize" className={`${!darkMode ? "text-gray-600" : "text-white"} block font-bold`}>Font Size</label>
                <select
                    id="fontSize"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    className="bg-blue-300 text-gray-700 p-2 rounded-md">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="timezone" className={`block ${!darkMode ? "text-gray-600" : "text-white"} font-bold`}>Timezone</label>
                <select
                    id="timezone"
                    value={timezone}
                    onChange={handleTimezoneChange}
                    className="bg-blue-300 text-gray-700 p-2 rounded-md">
                    <option value="UTC">UTC</option>
                    <option value="GMT">GMT</option>
                    <option value="EST">EST</option>
                </select>
            </div>

            <div className="mb-6">
                <label className={`${!darkMode ? "text-gray-600" : "text-white"} block font-bold`}>Dark Mode</label>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="darkMode"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className="mr-2 bg-gray-800 rounded-md"
                    />
                    <label htmlFor="darkMode" className={!darkMode ? "text-gray-700" : "text-white"}>Enable Dark Mode</label>
                </div>
            </div>

            <div className="mb-6">
                <label className={`${!darkMode ? "text-gray-600" : "text-white"} block font-bold`}>Show Tasks</label>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="showTasks"
                        className="mr-2 bg-green-500 rounded-md"
                    />
                    <label htmlFor="showTasks" className={!darkMode ? "text-gray-700" : "text-white"}>Show Completed Tasks</label>
                </div>
            </div>
        </div>
    );
};

export default Settings;
