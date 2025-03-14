import React from 'react';
import './Tasks.css';
import reactimg from '../../assets/reactimg.svg';
import rock from '../../assets/rock.jpg';
import c from '../../assets/c.png';
import '../../Components/UserManagement/UserManagement.css';

const Tasks = () => {
    return (
        <div className='usermanagement'>
            <div className="navbar">
                <div className="navbar-item">Dashboard</div>
                <div className="navbar-item">Tasks</div>
                <div className="navbar-item">Employees</div>
                <div className="navbar-item">Hiring</div>
            </div>
            <div className="row1">
                <h2>Tasks Management</h2>
                <button className="add-task-btn">Add New Task</button>
            </div>
            <hr />
            <div className="row2">
                <div className="row2-left">
                    <button className="filter-btn">All Tasks</button>
                    <button className="filter-btn">Pending</button>
                    <button className="filter-btn">Completed</button>
                </div>
                <div className="row2-right">
                    <input type="text" placeholder="Search Tasks..." className="search-input" />
                </div>
            </div>
            <div className="row3">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Task ID</th>
                            <th>Task Name</th>
                            <th>Assigned To</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="task-row">
                            <td>1</td>
                            <td>Design Homepage</td>
                            <td><img src={reactimg} alt="User" /> John Doe</td>
                            <td className="status pending">Pending</td>
                            <td>2023-10-15</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        <tr className="task-row">
                            <td>2</td>
                            <td>Develop API</td>
                            <td><img src={rock} alt="User" /> Jane Smith</td>
                            <td className="status completed">Completed</td>
                            <td>2023-10-10</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        <tr className="task-row">
                            <td>3</td>
                            <td>Test Application</td>
                            <td><img src={c} alt="User" /> Alice Johnson</td>
                            <td className="status pending">Pending</td>
                            <td>2023-10-20</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        <tr className="task-row">
                            <td>4</td>
                            <td>Deploy to Production</td>
                            <td><img src={reactimg} alt="User" /> Bob Brown</td>
                            <td className="status pending">Pending</td>
                            <td>2023-10-25</td>
                            <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        {/* Add more tasks as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tasks;