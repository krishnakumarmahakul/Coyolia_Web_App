import React, { useState } from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import styles from './Counceler.module.css';

function Counseler() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Sessions data state
  const [sampleSessions, setSampleSessions] = useState([
    { id: 1, date: "Today, 10:30 AM", completed: false },
    { id: 2, date: "Yesterday", completed: true },
    { id: 3, date: "May 15", completed: false }
  ]);

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (credentials.email === 'a@gmail.com' && credentials.password === '123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ email: '', password: '' });
  };

  // Report functions
  const handleCreateReport = (sessionId) => {
    // Implement report creation logic
    console.log(`Creating report for session ${sessionId}`);
    // Update session status
    setSampleSessions(sampleSessions.map(session => 
      session.id === sessionId ? {...session, completed: true} : session
    ));
  };

  const handleViewReport = (sessionId) => {
    // Implement report viewing logic
    console.log(`Viewing report for session ${sessionId}`);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        {!isLoggedIn ? (
          // Login Form
          <div className={styles.loginContainer}>
            <h2>Counselor Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleLogin}>
              <div className={styles.formGroup}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className={styles.loginButton}>
                Login
              </button>
            </form>
          </div>
        ) : (
          // Dashboard
          <div className={styles.dashboard}> {/* Fixed typo here */}
            <div className={styles.dashboardHeader}>
              <h2>Counselor Dashboard</h2>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Logout
              </button>
            </div>
          
            {/* Notification Alert */}
            <div className={styles.notificationBar}>
              <span>🔔 3 pending reports to submit</span>
            </div>
          
            <div className={styles.dashboardContent}>
              {/* Upcoming Sessions */}
              <div className={styles.statsCard}>
                <h3>Upcoming Sessions (5)</h3>
                <div className={styles.sessionList}>
                  {[1, 2, 3].map((session) => (
                    <div key={session} className={styles.sessionItem}>
                      <div>
                        <strong>Client #{session}</strong>
                        <span>10:30 AM - 11:15 AM</span>
                      </div>
                      <button 
                        className={styles.reportButton}
                        onClick={() => handleCreateReport(session)}
                      >
                        Create Report
                      </button>
                    </div>
                  ))}
                </div>
              </div>
          
              {/* Notifications */}
              <div className={styles.statsCard}>
                <h3>Notifications</h3>
                <div className={styles.notificationList}>
                  <div className={styles.notificationItem}>
                    <span>📋 Report requested for Client #2</span>
                    <button className={styles.smallButton}>Send</button>
                  </div>
                  <div className={styles.notificationItem}>
                    <span>✉️ New message from Client #5</span>
                    <button className={styles.smallButton}>Reply</button>
                  </div>
                </div>
              </div>
          
              {/* All Sessions Table */}
              <div className={`${styles.statsCard} ${styles.fullWidth}`}>
                <h3>All Sessions</h3>
                <table className={styles.sessionsTable}>
                  <thead>
                    <tr>
                      <th>Client</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleSessions.map((session) => (
                      <tr key={session.id}>
                        <td>Client #{session.id}</td>
                        <td>{session.date}</td>
                        <td>
                          <span className={session.completed ? styles.completed : styles.pending}>
                            {session.completed ? 'Report Sent' : 'Pending Report'}
                          </span>
                        </td>
                        <td>
                          {!session.completed ? (
                            <button 
                              className={styles.smallButton}
                              onClick={() => handleCreateReport(session.id)}
                            >
                              Create Report
                            </button>
                          ) : (
                            <button 
                              className={styles.smallButtonAlt}
                              onClick={() => handleViewReport(session.id)}
                            >
                              View Report
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Counseler;