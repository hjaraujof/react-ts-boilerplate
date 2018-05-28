// tslint:disable:variable-name
// tslint:disable:import-name
import React from 'react';
import { IHTMLBasicProps } from '../../_interfaces/IHTMLBasic';

export const Header: React.SFC<{}> = (props) => {
  return (    
    <div id="pageHeader" className="pageHeader">
      {props.children}
    </div>
  );
};

export const Body: React.SFC<{}> = (props) => {
  return (
    <div id="pageBody" className="pageBody">
      {props.children}
    </div>
  );
};

export const Footer: React.SFC<{}> = (props) => {
  return (
    <div id="pageFooter" className="pageFooter">
      {props.children}
    </div>
  );
};

export const Section: React.SFC<IHTMLBasicProps> = (props) => {
  return (
    <section id={props.id} className={props.classes}>
      {props.children}
    </section>
  );
};
