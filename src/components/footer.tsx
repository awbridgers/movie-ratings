import React from 'react';
import tmdb from '../images/tmdb.svg'


const Footer = () =>{
  return(
    <div className = 'footer'>
      <div>Movie images and info powered by:</div>
      <a href = 'https://www.themoviedb.org/'>
      <img src = {tmdb} alt = "The Movie Database"/>
      </a>
    </div>
  )
}



export default Footer;