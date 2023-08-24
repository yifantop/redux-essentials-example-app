import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchNotifications } from '../features/notifications/NotificationsSlice';

export const Navbar = () => {
  const dispatch = useDispatch();
  const fetchNewNotifications = () => {
    dispatch(fetchNotifications());
  }
  
  return (
    <nav>
      <section>
        <h1>Redux Essentials</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">文章列表</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  )
}
