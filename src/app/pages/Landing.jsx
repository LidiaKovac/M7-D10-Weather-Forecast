import React, {useContext, useState, useEffect} from 'react' 
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/Landing.scss";
import { ThemeContext, Themes } from "../../context/theme";
import {BsFillCloudFill} from 'react-icons/bs'
import {FaCloud} from 'react-icons/fa'
import {IoIosCloud} from 'react-icons/io'
import '../../App.scss'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = ()=> {
    const [theme, setTheme] = useContext(ThemeContext);
    return (<div className={theme === Themes.light ? 'landing-wrap page-light text-right' : 'landing-wrap page-dark text-right'}>
        <BsFillCloudFill className='cloud-icon'/>
        <FaCloud className='cloud-icon-2'/>
        <IoIosCloud className='cloud-icon-3'/>
        <h1>You will never travel<br/>unprepared anymore.</h1>
       <Link to='/forecast'> <Button className='rounded-pill'>Begin</Button> </Link>
    </div>)
    }
    export default Landing;
