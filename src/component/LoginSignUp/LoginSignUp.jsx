import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignUp.css'; 

const LoginSignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            window.alert('Please enter both username and password.');
            return;
        }

        if (username === 'admin' && password === 'admin') {
            window.alert('Login successful!');
            navigate('/menu');
        } else {
            window.alert('Please Check Your Username or Password!');
        }
    };

    const handleLogin2 = () => {
        if (username.trim() === '' || password.trim() === '') {
            window.alert('Please enter both username and password.');
            return;
        }

        if (username === 'super' && password === 'super') {
            window.alert('Login successful!');
            navigate('/super-admin-menu');
        } else {
            window.alert('Please Check Your Username or Password!');
        }
    };

    return (
        <div className="container">
            <div>
            <h1 style={{ fontSize: '72px' }}>HOSPITAL LOGIN</h1>

            </div>
            <div className='flex flex-col gap-4'>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-field"
                />
            </div>

                    <div className='submit-container'>
                        <button type="button" className="login-btn" onClick={handleLogin}>Reception Admin</button>
                        <button type="button" className="super-btn" onClick={handleLogin2}>Super Admin</button>
                    </div>


            
                
            
        </div>
    );
};

export default LoginSignUp;
