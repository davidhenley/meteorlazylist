import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Employees } from '../../imports/collections/employees';

import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {
  render() {
    const { employees } = this.props;
    return (
      <div>
        <div className="employee-list">
          { employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />) }
        </div>
        <button
          className="btn btn-primary"
          onClick={() => Meteor.subscribe('employees', 40)}>Load More...</button>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE);
  return { employees: Employees.find({}).fetch() };
}, EmployeeList);
