import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Колчество сотрудников на премию: {increased}</h2>
        </div>
    )
}

export default AppInfo;