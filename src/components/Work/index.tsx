import React from 'react';
import { Section } from '../_shared/HTML-Components';

import { IHTMLBasicProps } from '../_interfaces/IHTMLBasic';
// import './Work.css';

export const Work: React.SFC<IHTMLBasicProps> = (props) => {
	return (
		<div className="App-work">
      <Section id={props.id} classes={props.classes} >
          <header><h1>Form elements</h1></header>
          <form>
            <fieldset id="forms__input">
              <legend>Input fields</legend>
              <p>
                <label htmlFor="input__text">Text Input</label>
                <input id="input__text" type="text" placeholder="Text Input"/>
              </p>
              <p>
                <label htmlFor="input__password">Password</label>
                <input id="input__password" type="password" placeholder="Type your Password" autoComplete='current_password'/>
              </p>
              <p>
                <label htmlFor="input__webaddress">Web Address</label>
                <input id="input__webaddress" type="url" placeholder="http://yoursite.com"/>
              </p>
              <p>
                <label htmlFor="input__emailaddress">Email Address</label>
                <input id="input__emailaddress" type="email" placeholder="name@email.com"/>
              </p>
              <p>
                <label htmlFor="input__phone">Phone Number</label>
                <input id="input__phone" type="tel" placeholder="(999) 999-9999"/>
              </p>
              <p>
                <label htmlFor="input__search">Search</label>
                <input id="input__search" type="search" placeholder="Enter Search Term"/>
              </p>
              <p>
                <label htmlFor="input__text2">Number Input</label>
                <input id="input__text2" type="number" placeholder="Enter a Number"/>
              </p>
              <p>
                <label htmlFor="input__text3" className="error">Error</label>
                <input id="input__text3" className="is-error" type="text" placeholder="Text Input"/>
              </p>
              <p>
                <label htmlFor="input__text4" className="valid">Valid</label>
                <input id="input__text4" className="is-valid" type="text" placeholder="Text Input"/>
              </p>
            </fieldset>
            <p><a href="#top">[Top]</a></p>
            <fieldset id="forms__select">
              <legend>Select menus</legend>
              <p>
                <label htmlFor="select">Select</label>
                <select id="select">
                  <optgroup label="Option Group">
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                  </optgroup>
                </select>
              </p>
            </fieldset>
            <p><a href="#top">[Top]</a></p>
            {/* <fieldset id="forms__checkbox">
              <legend>Checkboxes</legend>
              <ul className="list list--bare">
                <li><label htmlFor="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked={true} readOnly={true}/> Choice A</label></li>
                <li><label htmlFor="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"/> Choice B</label></li>
                <li><label htmlFor="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"/> Choice C</label></li>
              </ul>
            </fieldset>
            <p><a href="#top">[Top]</a></p>
            <fieldset id="forms__radio">
              <legend>Radio buttons</legend>
              <ul className="list list--bare">
                <li><label htmlFor="radio1"><input id="radio1" name="radio" type="radio" className="radio" checked={true} readOnly={true}/> Option 1</label></li>
                <li><label htmlFor="radio2"><input id="radio2" name="radio" type="radio" className="radio"/> Option 2</label></li>
                <li><label htmlFor="radio3"><input id="radio3" name="radio" type="radio" className="radio"/> Option 3</label></li>
              </ul>
            </fieldset> */}
            <p><a href="#top">[Top]</a></p>
            <fieldset id="forms__textareas">
              <legend>Textareas</legend>
              <p>
                <label htmlFor="textarea">Textarea</label>
                <textarea id="textarea" rows={8} cols={48} placeholder="Enter your message here"/>
              </p>
            </fieldset>
            <p><a href="#top">[Top]</a></p>
            <fieldset id="forms__html5">
              <legend>HTML5 inputs</legend>
              <p>
                <label htmlFor="ic">Color input</label>
                <input type="color" id="ic" value="#000000" readOnly={true}/>
              </p>
              <p>
                <label htmlFor="in">Number input</label>
                <input type="number" id="in" min="0" max="10" value="5" readOnly={true}/>
              </p>
              <p>
                <label htmlFor="ir">Range input</label>
                <input type="range" id="ir" value="10" readOnly={true}/>
              </p>
              <p>
                <label htmlFor="idd">Date input</label>
                <input type="date" id="idd" value="1970-01-01" readOnly={true}/>
              </p>
              <p>
                <label htmlFor="idm">Month input</label>
                <input type="month" id="idm" value="1970-01" readOnly={true}/>
              </p>
              <p>
                <label htmlFor="idw">Week input</label>
                <input type="week" id="idw" value="1970-W01" readOnly={true}/>
              </p>
              <p>
                <label htmlFor="idt">Datetime input</label>
                <input type="datetime" id="idt" value="1970-01-01T00:00:00Z" readOnly={true}/>
              </p>
              <p>
                <label htmlFor="idtl">Datetime-local input</label>
                <input type="datetime-local" id="idtl" value="1970-01-01T00:00" readOnly={true}/>
              </p>
            </fieldset>
            <p><a href="#top">[Top]</a></p>
            <fieldset id="forms__action">
              <legend>Action buttons</legend>
              <p>
                <input type="submit" value="<input type=submit>"/>
                <input type="button" value="<input type=button>"/>
                <input type="reset" value="<input type=reset>"/>
                <input type="submit" value="<input disabled>" disabled={true}/>
              </p>
              <p>
                <button type="submit">&lt;button type=submit&gt;</button>
                <button type="button">&lt;button type=button&gt;</button>
                <button type="reset">&lt;button type=reset&gt;</button>
                <button type="button" disabled={true}>&lt;button disabled&gt;</button>
              </p>
            </fieldset>
            <p><a href="#top">[Top]</a></p>
          </form>
        </Section>
		</div>
	);
}
