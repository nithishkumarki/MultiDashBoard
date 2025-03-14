import React from 'react'
import './UserManagement.css'
import rock from '../../assets/rock.jpg'
const UserManagement = () => {
  return (
    <div className="usermanagement">
    <div className="row1">
      <div className="row1-left">
           <p>All Users:1,356 Projects:884</p>
      </div>
      <div className="row1-right">
               <p>Table Settings</p>
      </div>

    </div>
    <hr/>

    <div className="row2">
      <div className="row2-left">
        <button>Add NewUser</button>
      </div>
      <div className="row2-right">
        <button>Suspend all</button>
        <button>Archive all</button>
        <button>Delete all</button>
                
      </div>

    </div>


   


    <div className="row3">

    <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>User Profile</th>
              <th>Status</th>
              <th>Social Profile</th>
              <th>Promote</th>
              <th>Rating</th>
              <th>Last Login</th>
              <th>Edit</th>
            </tr>
          </thead>
    <tbody>
            <tr>
              <td>Rock</td>
              <td><img src={rock} alt="Profile" /></td>
              <td>Active</td>
              <td><a href="">Linkedin</a></td>
              <td><button>ok</button></td>
              <td>4.5</td>
              <td>14-03-2025</td>
              <td><button>...</button></td>
            </tr>
            <tr>
              <td>Rock</td>
              <td><img src={rock} alt="Profile" /></td>
              <td>Active</td>
              <td><a href="">Linkedin</a></td>
              <td><button>ok</button></td>
              <td>4.5</td>
              <td>14-03-2025</td>
              <td><button>...</button></td>
            </tr>
            <tr>
              <td>Rock</td>
              <td><img src={rock} alt="Profile" /></td>
              <td>Active</td>
              <td><a href="">Linkedin</a></td>
              <td><button>ok</button></td>
              <td>4.5</td>
              <td>14-03-2025</td>
              <td><button>...</button></td>
            </tr>
            <tr>
              <td>Rock</td>
              <td><img src={rock} alt="Profile" /></td>
              <td>Active</td>
              <td><a href="">Linkedin</a></td>
              <td><button>ok</button></td>
              <td>4.5</td>
              <td>14-03-2025</td>
              <td><button>...</button></td>
            </tr>
            <tr>
              <td>Rock</td>
              <td><img src={rock} alt="Profile" /></td>
              <td>Active</td>
              <td><a href="">Linkedin</a></td>
              <td><button>ok</button></td>
              <td>4.5</td>
              <td>14-03-2025</td>
              <td><button>...</button></td>
            </tr>
            <tr>
              <td>Rock</td>
              <td><img src={rock} alt="Profile" /></td>
              <td>Active</td>
              <td><a href="">Linkedin</a></td>
              <td><button>ok</button></td>
              <td>4.5</td>
              <td>14-03-2025</td>
              <td><button>...</button></td>
            </tr>
      
          </tbody>
    </table>
    </div>
    <div className="row4">
            
    </div>
  </div>
  )
}

export default UserManagement