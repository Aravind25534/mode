import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './App.js';
import Headermenu from './Header_menu.js';
import Backgroundcar from './Bacground_pic.js';
import Viewcars from './View_cars.js';
import About from './About.js';
import Newway from './New_way.js';
import Usedcarcity from './used_cars_city.js'; 
import Easyestway from './Easyest_way.js';
import Footer from './Footer.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header></Header>
  <Headermenu></Headermenu>
  <Backgroundcar></Backgroundcar>
  <Viewcars></Viewcars>
  <About></About>
  <Newway></Newway>
  <Usedcarcity></Usedcarcity>
  <Easyestway></Easyestway>
  <Footer></Footer>
 </>
  
);


