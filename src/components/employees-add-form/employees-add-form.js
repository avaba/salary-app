import './employees-add-form.css';
import {Component} from 'react';

class EmployeesAddForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    };
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAddEmployees = (e) => {
    e.preventDefault()
    const name = this.state.name
    const salary = this.state.salary

    if (name && salary !== '') {
      this.props.addItem(name, salary)
      this.setState({
        name: '',
        salary: ''
      })
    } else {
      alert('Заполните поля Имя и З/П')
    }
  }

  render () {
    const {name, salary} = this.state;

    return (
        <div className="app-add-form">
          <h3>Добавьте нового сотрудника</h3>
          <form
              className="add-form d-flex"
              onSubmit={this.onAddEmployees}
          >
            <input type="text"
                   className="form-control new-post-label"
                   placeholder="Как его зовут?"
                   value={name}
                   name="name"
                   onChange={this.onChangeInput}
            />
            <input type="number"
                   className="form-control new-post-label"
                   placeholder="З/П в $?"
                   value={salary}
                   name="salary"
                   onChange={this.onChangeInput}
            />

            <button type="submit"
                    className="btn btn-outline-light">Добавить
            </button>
          </form>
        </div>
    );
  }
}

export default EmployeesAddForm;
