// tslint:disable:jsx-no-lambda
// tslint:disable:variable-name
// tslint:disable:import-name
import React from 'react';
import styled, { css } from '../../../styled';

import { Link, NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { INavBarProps } from '../../_interfaces/INav';

const scrollWithOffset = (el:HTMLAnchorElement, offset:number) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({ behavior: 'smooth', left: 0, top: elementPosition });
};

export const NavBar: React.SFC<INavBarProps> = (props) => {
  const Component = props.hash ? 
                    (props.nav ? NavHashLink : HashLink) : 
                    (props.nav ? NavLink : Link);
  return (
    <nav className={props.nav.classes} id={props.nav.id}>
      <ul>
      {
        props.navItems.map((navItem, index) => {
          return(
            <li key={props.nav.id + '-ul-' + index}>              
              <Component
                to={navItem.route} activeClassName="is-selected" 
                scroll={(el:HTMLAnchorElement) => scrollWithOffset(el, 2)} 
              >
                <div>{navItem.name}</div>
              </Component>
            </li>
          );
        })
      }
      </ul>
    </nav>
  );
};

export const StyledNavBar = styled(NavBar)`
  background-color: ${props => props.bgColor || 'transparent'};
  width: 100%; /* Full width */
  text-align: center;
  margin: 0;
  ul{
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    ${props => props.orientation === 'right' ? 
                css`float: right !important;` :
                props.orientation === 'left' && 
                  css`float: left !important;`};
    li{
      list-style-type: none;
      ${props => props.orientation === 'right' ? 
                css`float: right !important;` :
                props.orientation === 'left' && 
                  css`float: left !important;`};
      text-align: center;
      display: list-item;
      a{
        font-size: 1.6rem;
        font-weight: 500;
        display: block;
        padding: 1rem 0 0.5rem;
        margin: 0 1.5rem;
        color: ${props => props.theme.primaryColor};
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) scaleX(0);
          transform-origin: 50% 50%;
          width: 100%;
          height: 2px;
          background-color: ${props => props.theme.primaryColor};
          transition: transform 250ms;
        }
        &:hover{          
          &::after {
            transform: translateX(-50%) scaleX(1);
          }
        }
      }
    }

  }
`;
