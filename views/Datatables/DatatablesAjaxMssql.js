import React, {Component} from 'react';
import './datatables.css';
import Datatable from '../../components/Datatable/Datatable';


class DatatablesAjaxMssql extends Component {
  render() {
    return (
      <div className="App">
        <Datatable dataURL="http://localhost:3000/report_indices"/>
      </div>
    );
  }
}

export default DatatablesAjaxMssql;