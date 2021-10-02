import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
  {id: 1, name: 'Sergey', salary: 800, increase: true},
  {id: 2, name: 'Vika', salary: 2000, increase: false},
  {id: 3, name: 'Vova', salary: 5000, increase: true},
];

function App () {
  return (
      <div className="app">
        <AppInfo/>

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList data={data}/>
        <EmployeesAddForm/>
      </div>
  );
}

export default App;