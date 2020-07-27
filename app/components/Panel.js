import React from 'react';

class Panel extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <strong>Available Employees</strong>
                </div>
                <table class="responsive-table">
        <thead>
          <tr>
              <th>Full Name</th>
              <th>Location</th>
              <th>Skills</th>
              <th>Level</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Smith, John</td>
            <td>New York Metro</td>
            <td>C++</td>
            <td>11</td>
          </tr>
          <tr>
            <td>Smith, Ethan</td>
            <td>Seattle, WA</td>
            <td>SAS</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Smith, Emma</td>
            <td>Boston, MA</td>
            <td>Oracle Cloud</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
            </div>
        );
    }
};


export default Panel;
