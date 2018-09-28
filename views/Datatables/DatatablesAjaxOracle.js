import React, {Component} from 'react';
import './datatables.css';
import Datatable from '../../components/Datatable/Datatable';


class DatatablesAjaxOracle extends Component {
  render() {
    return (
      <div className="App">
        <Datatable dataURL="http://localhost:3000/products"/>
      </div>
    );
  }
}

export default DatatablesAjaxOracle;