import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const URL_BASE = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(URL_BASE + '/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los usuarios', error);
      });
  }, []);

  return (
    <div style={container}>
      <h1>Listado de Usuarios</h1>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={listItemStyles}>{user.id}</td>
              <td style={listItemStyles}> {user.name}</td>
              <td style={listItemStyles}>{user.email}</td>
              <td style={listItemStyles}>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  justifyContent: 'center',
  TextAlign: 'center',
};

const tableStyles = {
  borderCollapse: 'collapse',
  width: '80%',
  TextAlign: 'center',
};


const listItemStyles = {
  margin: '8px 0',
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  TextAlign: 'center',
};

export default App;
