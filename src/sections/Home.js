import React from 'react';
import '../App.css';
import Header from './Header';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import ScrollTopArrow from '../components/ScrollTopArrow';

function Home() {
    return(
        <>
        <Header/>
        <About/>
        <Skills/>
        <Projects/>
        <ScrollTopArrow/>
        </>
    )
}

export default Home;