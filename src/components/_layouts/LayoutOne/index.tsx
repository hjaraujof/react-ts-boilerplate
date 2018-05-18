import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { About } from '../../About';
import { Contact } from '../../Contact';
import { Home } from '../../Home';
import { Work } from '../../Work';

import { Body, Footer, Header } from '../../_shared/HTML-Components';
import { RightNavBar } from '../../_shared/RightNavBar';

import './styles.css';

// tslint:disable-next-line:variable-name
export const LayoutOne: React.SFC<{}> = (props) => {
  const routes = [
		{ name:'Home',route:'/#home' }, 
		{ name:'About',route:'/#about' },
		{ name:'Work',route:'/#work' },
		{ name:'Contact',route:'/#contact' },
  ];
  return(
    <Router>
      <div className="reactBody">
        <Header>
          <div className="navBarContainer"><RightNavBar items={routes}/></div>
        </Header>
        <Body>                
          <div className="sectionContainer navBarOffset">
            <Home id="home" classes="homeSection"/>
            <About id="about" classes="aboutSection"/>
            <Work id="work" classes="workSection"/>
            <Contact id="contact" classes="contactSection"/>
          </div>      
        </Body>
        <Footer/>
      </div>
    </Router>
  );
};
