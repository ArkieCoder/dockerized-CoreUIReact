import React, {Component} from 'react';

import './datatable.css';
const $ = require('jquery');
$.DataTable = require('datatables.net');

function reloadTableData(data) {
  const table = $('.data-table-wrapper').find('table').DataTable();
  table.clear();
  table.rows.add(data);
  table.draw();
}

function updateTable(data) {
  const table = $('.data-table-wrapper').find('table').DataTable();
  let dataChanged = false;
  table.rows().every(function() {
    const oldNameData = this.data();
    const newNameData = data.find((nameData) => {
      return nameData.name === oldNameData.name;
    });
    if (oldNameData.nickname !== newNameData.nickname) {
      dataChanged = true;
      this.data(newNameData);
    }
    return true;
  });

  if (dataChanged) {
    table.draw();
  }
}

class Datatable extends Component {
  componentDidMount() {
    var data = [];
    var columns = [{data: ""}];
    var url = this.props.dataURL;
    var main = $(this.refs.main);

    if(this.props.data) {
      data = this.props.data;
    }

    if(this.props.columns) {
      columns = this.props.columns;
    }

    var tableOpts = {
      dom: '<"data-table-wrapper"t>',
      data: data,
      ordering: false,
      columns: columns
    };

    if(url) {
      // go get data from an API
      fetch(url + "/columns", {mode: "cors"})
        .then(res => res.json())
        .then(
          (result) => {

            columns = result.columns;
            tableOpts.columns = result.columns;
            tableOpts.ajax = {url: url};
            tableOpts.serverSide = true;
            tableOpts.pagingType = 'full_numbers';
            tableOpts.ordering = true;
            tableOpts.deferRender = true;
            tableOpts.lengthMenu = [3, 10, 25, 50, 100];
            delete tableOpts.dom;
            delete tableOpts.data;

            main.DataTable(tableOpts);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      main.DataTable(tableOpts);
    }
  }

  componentWillUnmount() {
    $('.data-table-wrapper')
      .find('table')
      .DataTable()
      .destroy(true);
  }

  shouldComponentUpdate(nextProps) {
    var shouldReload = (nextProps.data) && (nextProps.data.length !== this.props.data.length);
    if(shouldReload) {
      reloadTableData(nextProps.data);
    } else {
      updateTable(nextProps.data);
    }
    return false;
  }

  render() {
    return (
      <div>
        <table ref="main"/>
      </div>
    );
  }
}

export default Datatable;
