import React from 'react';
import { useHistory } from "react-router-dom";
import Gravatar  from 'react-gravatar';

import '../styles/header.css'

const Header = ({token}) => {

    let history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        history.push('/signin')
    }

  return (
      <>
    {token 
        ? (
        <div className="header">
            <Gravatar email='' size={40}/>
            <button onClick={handleLogout} className='btn-sign-out'>Sign Out</button>
        </div>
        )
        : null
    }
    </>
  );
}

export default Header;


