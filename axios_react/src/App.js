import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import { EmployeeList } from './components/EmployeeList';
import { RemoveEmployee } from './components/RemoveEmployee';
import { AddEmployee }  from './components/AddEmployee';
import { ViewEmployee } from './components/ViewEmployee';
import { UpdateEmployee } from './components/UpdateEmployee';
import { Error } from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={EmployeeList} exact/>
             <Route path="/deleteEmployee" component={RemoveEmployee}/>
             <Route path="/addEmployee" component={AddEmployee}/>
             <Route path="/viewEmployee" component={ViewEmployee}/>
             <Route path="/updateEmployee" component={UpdateEmployee}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
