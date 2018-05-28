// tslint:disable:import-name
// tslint:disable:variable-name
import React from 'react';
import { Section } from '../_shared/HTML-Components';

import { IHTMLBasicProps } from '../_interfaces/IHTMLBasic';
// import './styles.scss';

export const Home: React.SFC<IHTMLBasicProps> = (props) => {
  return (
		<div className="homeSection">
      <Section id={props.id} classes={props.classes} >
        <header>
          <h1>Harold Araujo</h1>
          <span>Santiago, Chile</span>
        </header>
        <h2>Full-Stack Developer</h2>
      </Section>			
		</div>
  );
};
