// Settings.js
import { useState } from 'react';

const Settings = () => {
    const [notification, setNotification] = useState(true);
    const [language, setLanguage] = useState('en');
    const [themeColor, setThemeColor] = useState('#3498db');
    const [fontSize, setFontSize] = useState('medium');
    const [timezone, setTimezone] = useState('UTC');

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
        <div className="">
            <h1 className="text-3xl font-bold my-4 text-white">Settings</h1>

            <div className='p-8 bg-white rounded-md shadow-inner shadow-black w-[48rem] mx-auto'>
                <div className="mb-6">
                    <label className="block text-gray-600 font-bold">Notification</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="notification"
                            checked={notification}
                            onChange={handleNotificationToggle}
                            className="mr-2 bg-gray-200 rounded-md"
                        />
                        <label htmlFor="notification" className="text-gray-700">Enable Notification</label>
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="language" className="block text-gray-600 font-bold">Language</label>
                    <select
                        id="language"
                        value={language}
                        onChange={handleLanguageChange}
                        className="bg-gray-200 text-gray-700 p-2 rounded-md">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="themeColor" className="block text-gray-600 font-bold">Theme Color</label>
                    <input
                        type="color"
                        id="themeColor"
                        value={themeColor}
                        onChange={handleColorChange}
                        className="bg-gray-200 text-gray-700 p-2 rounded-md"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="fontSize" className="block text-gray-600 font-bold">Font Size</label>
                    <select
                        id="fontSize"
                        value={fontSize}
                        onChange={handleFontSizeChange}
                        className="bg-gray-200 text-gray-700 p-2 rounded-md">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="timezone" className="block text-gray-600 font-bold">Timezone</label>
                    <select
                        id="timezone"
                        value={timezone}
                        onChange={handleTimezoneChange}
                        className="bg-gray-200 text-gray-700 p-2 rounded-md">
                        <option value="UTC">UTC</option>
                        <option value="GMT">GMT</option>
                        <option value="EST">EST</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default Settings;
