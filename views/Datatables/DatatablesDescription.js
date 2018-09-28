import React, {Component} from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

class DatatablesDescription extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <CardHeader>
            The Skinny
          </CardHeader>
          <CardBody>
            <p align="justify">
            The paid version of CoreUI comes with Datatables.  But, the Datatables that come with the paid version of CoreUI
            are implemented with the code at Datatables.net, which is free.  
            </p>
            <p align="justify">
            The kind folks at medium.com posted a tutorial detailing how to integrate stock Datatables.net functionality into
            React.js.  That tutorial is found&nbsp; 
            <a href="https://medium.com/@zbzzn/integrating-react-and-datatables-not-as-hard-as-advertised-f3364f395dfa">here</a>.
            It was modified for use within this proof of concept.
            </p>
            <p align="justify">
            The medium.com tutorial detailed how to implement a static datatable into a React.js project that relied on user
            input.  However, the most common business use case is a sortable, filterable, paginated table that pulls data from
            a web service.  By following the documentation from the Datatables.net project, it was possible to extend the code
            in the medium.com tutorial to implement this use case as well.  With regard to paginated data, it is also desirable
            to only pull the data that needs to be displayed at that time, especially when dealing with large result sets.  This
            has also been implemented.
            </p>
            <p align="justify">
            In order to minimize configuration of the backend, the <code>ajax-datatables-rails</code> gem was added to the Ruby
            on Rails API project.  This made it spectacularly easy to create an API that was ready to respond to the parameters
            the Datatables.net code was sending in a way that it was sure to understand.
            </p>
            <p align="justify">
            The Datatables specific code in this project is located in <code>site/src/components/Datatable/*</code> and&nbsp;
            <code>site/src/views/Datatables/*</code>.  There were also changes made to the base&nbsp;
            <code>coreui-free-react-admin-template</code> project in <code>src/routes.js</code> and <code>src/_nav.js</code>.
            </p>
            <ul>
              <li><a href="http://datatables.net/">Datatables.net</a></li>
              <li><a href="https://reactjs.org/docs/faq-ajax.html?no-cache=1">React.js - AJAX and APIs</a></li>
              <li><a href="https://medium.com/@zbzzn/integrating-react-and-datatables-not-as-hard-as-advertised-f3364f395dfa">Medium.com - Integrating Datatables.net with React.js</a></li>
              <li><a href="https://github.com/jbox-web/ajax-datatables-rails"><code>ajax-datatables-rails</code> gem</a></li>
            </ul>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DatatablesDescription;