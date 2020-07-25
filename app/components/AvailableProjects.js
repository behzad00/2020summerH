import React from "react"
import ReactDOM from "react-dom"

var TableComponent = React.createClass({
    render: function() {
      // Data
      var dataColumns = this.props.data.columns;
      var dataRows = this.props.data.rows;
  
      var tableHeaders = (<thead>
            <tr>
              {dataColumns.map(function(column) {
                return <th style={{backgroundColor: "#f5f5f5"}}>{column}</th>; })}
            </tr>
        </thead>);
  
      var tableBody = dataRows.map(function(row) {
        return (
          <tr>
            {dataColumns.map(function(column) {
              return <td>{row[column]}</td>; })}
          </tr>); });
       
      // Decorate with Bootstrap CSS
      return (<table className="table table-bordered table-hover" width="100%">
          {tableHeaders}
          {tableBody}
        </table>) 
        }
      });
          
  
  // Example Data
  var tableData = {
    columns: ['Available Projects', 'Skills Required', 'Location'],
    rows: [{
      'Available Projects': 'Veterinary Assitance',
      'Skills Required': 50,
      'Location': '1 Hour',
    }, {
      'Available Projects': 'Veterinary Assitance',
      'Skills Required': 50,
      'Location': '1 Hour',
    }, {
      'Available Projects': 'Veterinary Assitance',
      'Skills Required': 50,
      'Location': '1 Hour',
    }]
  };

class AvailableProjects extends React.Component {

    render() {
        return (
            <TableComponent data = {tableData} />
        );
    }
};


export default AvailableProjects;
