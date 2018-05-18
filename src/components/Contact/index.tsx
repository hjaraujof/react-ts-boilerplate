import * as React from 'react';
import { Section } from '../_shared/HTML-Components';

import { IHTMLBasicProps } from '../_interfaces/IHTMLBasic';
// import './Contact.css';

export const Contact: React.SFC<IHTMLBasicProps> = (props) => {
  return (
		<div className="App-contact">
      <Section id={props.id} classes={props.classes} >
			  contact
      </Section>
		</div>
	);
}
