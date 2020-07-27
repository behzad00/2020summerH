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
    columns: ['Available Project', 'Skills Required', 'Location', 'Level'],
    rows: [{
      'Available Project': 'Oracle Cloud Migration',
      'Skills Required': 'Oracle Cloud',
      'Location': 'New York, NY, USA',
      'Level': 11,
    }, {
      'Available Project': 'Business Model Transformation',
      'Skills Required': 'BI Strategy',
      'Location': 'London, UK',
      'Level': 9,
    }, {
      'Available Project': 'Real Estate',
      'Skills Required': 'Accounting',
      'Location': 'Los Angeles, California, USA',
      'Level': 8,
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
