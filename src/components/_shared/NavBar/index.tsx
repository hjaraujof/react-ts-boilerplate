// tslint:disable:jsx-no-lambda
import * as React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { INavBarProps } from '../../_interfaces/INav';

const scrollWithOffset = (el:HTMLAnchorElement, offset:number) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({ behavior: "smooth", left: 0, top: elementPosition });
}

export const NavBar: React.SFC<INavBarProps> = (props) => {
  const Component = props.hash ? 
                    (props.nav ? NavHashLink : HashLink ) : 
                    (props.nav ? NavLink : Link );
  return (
    <nav className={props.nav.classes} id={props.nav.id}>
      <ul>
      {
        props.navItems.map( (navItem, index) => {
          return(
            <li key={props.nav.id+"-ul-"+index}>              
              <Component
                to={navItem.route} activeClassName="selected" 
                scroll={(el:HTMLAnchorElement) => scrollWithOffset(el, 2)} 
              >
                {navItem.name}
              </Component>
            </li>
          );
        })
      }
      </ul>
    </nav>
	);
}
