import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: 'Sergey', salary: 800, rise: true, increase: true},
        {id: 2, name: 'Vika', salary: 2000, rise: false, increase: false},
        {id: 3, name: 'Vova', salary: 5000, rise: false, increase: true},
      ],
      term: '',
      filter: 'all'
    };
    this.maxId = 4;
  }

  addItem = (name, salary) => {
    const newItem = {
      id: this.maxId++,
      name,
      salary,
      rise: false,
      increase: false
    };
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  };

  onSalary = (id, salary) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, salary: +salary.slice(0, -1)}
        }

        return item
      })
    }))
  };

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(elem => elem.id !== id)
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]};
        }
        return item;
      })
    }));
  };

  searchEmp = (items, temp) => {
    if (items.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(temp) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({
      term
    });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(elem => elem.rise);
      case 'moreThen1000':
        return items.filter(elem => elem.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (name) => {
    this.setState({
      filter: name
    });
  };

  render () {
    const {data, term, filter} = this.state;
    const employees = data.length;
    const increased = data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
        <div className="app">
          <AppInfo
              employees={employees}
              increased={increased}
          />

          <div className="search-panel">
            <SearchPanel
                onUpdateSearch={this.onUpdateSearch}
            />
            <AppFilter
                filter={filter}
                onFilterSelect={this.onFilterSelect}
            />
          </div>

          <EmployeesList
              data={visibleData}
              onDelete={this.deleteItem}
              onSalary={this.onSalary}
              onToggleProp={this.onToggleProp}
          />
          <EmployeesAddForm
              addItem={this.addItem}
          />
        </div>
    );
  }
}

export default App;
