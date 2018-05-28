// tslint:disable:import-name
import React from 'react';
import ReactDOM from 'react-dom';

interface IOverlayProps{
  overlayContainer: HTMLDivElement;
  class: string;
}

export default class PortalOverlay extends React.Component<IOverlayProps,{ overlayActive: false }> {
  
  public overlayContainer = document.createElement('div');
  public class: string;
  
  constructor(props:IOverlayProps) {
    super(props);
    this.class = props.class;
    document.body.appendChild(this.overlayContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer);
  }

  closeOverlay = () => {
    this.setState({ overlayActive: false });
  }

  render() {
    return ReactDOM.createPortal(
      <div className={this.class}>{this.props.children}</div>,
      this.overlayContainer,
    );
  }
}
