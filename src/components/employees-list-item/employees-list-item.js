import {Component} from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }

  onlike = () => {
    this.setState(({like}) => ({
      like: !like
    }));
  };

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }));
  };

  render () {
    const {name, salary} = this.props;
    const {increase, like} = this.state;

    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase';
    }

    if (like) {
      classNames += ' like';
    }

    return (
        <li className={classNames}>
          <span
              className="list-group-item-label"
              onClick={this.onlike}
          >{name}</span>
          <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
          <div className="d-flex justify-content-center align-items-center">
            <button
                type="button"
                className="btn-cookie btn-sm "
                onClick={this.onIncrease}
            >
              <i className="fas fa-cookie"/>
            </button>

            <button type="button" className="btn-trash btn-sm ">
              <i className="fas fa-trash"/>
            </button>
            <i className="fas fa-star"/>
          </div>
        </li>
    );
  }
};

export default EmployeesListItem;
