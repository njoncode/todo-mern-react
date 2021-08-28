import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/404.jpg';
import '../styles/notFoundPage.css'

const NotFoundPage = () => {
        return (
        <div className='not-found'>
            <img src={PageNotFound} alt='No page found' />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>
        )
    }

export default NotFoundPage;