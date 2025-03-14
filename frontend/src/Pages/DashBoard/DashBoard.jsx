import React, { useState } from 'react';
import './DashBoard.css';
import reactimg from '../../assets/reactimg.svg';
import rock from '../../assets/rock.jpg';
import c from '../../assets/c.png';
import UserManagement from '../../Components/UserManagement/UserManagement';
import '../../Components/UserManagement/UserManagement.css';
import Tasks from '../../Components/Tasks/Tasks';
import '../../Components/Tasks/Tasks.css';
import Hiring from '../../Components/Hiring/Hiring';

const DashBoard = () => {
    const [activeComponent, setActiveComponent] = useState('CompanyInfo');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Tasks':
                return <Tasks />;
            case 'UserManagement':
                return <UserManagement />;
            case 'Hiring':
                return <Hiring />;
            case 'CompanyInfo':
            default:
                return (
                    <div className="company-info" style={{ padding: '20px', textAlign: 'center' }}>
                        <h1 style={{ color: '#333' }}>Welcome to Our Company</h1>
                        <p style={{ fontSize: '16px', color: '#666' }}>We are a leading company in the industry, committed to providing the best services to our clients.</p>
                        <p style={{ fontSize: '16px', color: '#666' }}>Our team is composed of highly skilled professionals dedicated to achieving excellence.</p>
                        <img src={reactimg} alt="Company Logo" style={{ width: '150px', margin: '20px 0' }} />
                        <h2 style={{ color: '#333' }}>Our Mission</h2>
                        <p style={{ fontSize: '16px', color: '#666' }}>To deliver high-quality products that create value and consistent competitive advantage for our clients around the world.</p>
                        <h2 style={{ color: '#333' }}>Our Vision</h2>
                        <p style={{ fontSize: '16px', color: '#666' }}>To be the most trusted partner for our clients by consistently delivering excellence.</p>
                        <h2 style={{ color: '#333' }}>Our Values</h2>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li style={{ fontSize: '16px', color: '#666' }}>Integrity</li>
                            <li style={{ fontSize: '16px', color: '#666' }}>Innovation</li>
                            <li style={{ fontSize: '16px', color: '#666' }}>Customer Focus</li>
                            <li style={{ fontSize: '16px', color: '#666' }}>Teamwork</li>
                        </ul>
                    </div>
                );
        }
    };

    return (
        <div className='dashboard'>
            <div className="dashboard-navbar">
                <div className="profile-container">
                    <div className="profile-container-role">
                        <img src={c} alt="none" />
                        <p>Nithish</p>
                    </div>
                    <div className='profile-container-logo'>
                        <img src={rock} alt='Rock Image' />
                    </div>
                </div>
                <div className="dashboard-navbar-items">
                    <p>MAIN MENU</p>
                    <div className="dashboard-navbar-item" onClick={() => setActiveComponent('CompanyInfo')}>
                        <p>Dashboard</p>
                    </div>
                    <div className="dashboard-navbar-item" onClick={() => setActiveComponent('Tasks')}>
                        <p>Tasks</p>
                    </div>
                </div>
                <div className="dashboard-navbar-items">
                    <p>TEAM MANAGEMENT</p>
                    <div className="dashboard-navbar-item" onClick={() => setActiveComponent('UserManagement')}>
                        <p>Employees</p>
                    </div>
                    <div className="dashboard-navbar-item" onClick={() => setActiveComponent('Hiring')}>
                        <p>Hiring</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-content">
                {renderComponent()}
            </div>
        </div>
    );
};

export default DashBoard;