import React, {Component} from 'react';
import './datatables.css';
import Datatable from '../../components/Datatable/Datatable';
import DatatableInput from '../../components/Datatable/DatatableInput';

const columns = [
  {
    title: 'Name',
    width: 120,
    data: 'name'
  }, 
  {
    title: 'Nickname',
    width: 180,
    data: 'nickname'
  },
];

class DatatablesBasic extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  onAddClick(name, nickname) {
    let updated = false;
    const result = this.state.data.map((nameData) => {
      if (nameData.name === name) {
        updated = true;
        return {name, nickname}
      }
      return nameData;
    });

    if(!updated) {
      result.push({name, nickname});
    }

    this.setState({
      data: result
    });
  }

  render() {
    return (
      <div className="App">
        <DatatableInput onAddClick={(name, nickname) => {
            this.onAddClick(name, nickname);
        }}/>
        <Datatable data={this.state.data} columns={columns} />
      </div>
    );
  }
}

export default DatatablesBasic;