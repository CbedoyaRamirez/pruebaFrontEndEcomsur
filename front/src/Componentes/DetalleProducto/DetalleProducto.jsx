import { Component } from "react";
import  ReactDOM  from "react-dom";

const modalRoot = document.getElementById('modal');

class DetalleProducto extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');

    this.state = {
      open: this.props.open,
    };
  }

  componentDidMount = () => {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    modalRoot.removeChild(this.el);
  }

  render() {
    const {children} = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}


export default DetalleProducto;
