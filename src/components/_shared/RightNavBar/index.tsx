// tslint:disable:import-name
// tslint:disable:variable-name
import React from 'react';

import { IHTMLBasicProps } from '../../_interfaces/IHTMLBasic';
import { INavBarProps, INavItems } from '../../_interfaces/INav';

import { NavBar } from '../NavBar';

import './styles.scss';

interface IRightNavProps{
  items: INavItems;
}


export const RightNavBar: React.SFC<IRightNavProps> = (props) => {
  const navBarProps = new INavBarProps(
    new IHTMLBasicProps({ id:'rightNavBar', classes:'rightNavBar' }), 
    props.items,
    true,
    true,
  ); 
  return <NavBar {...navBarProps} />;
};
