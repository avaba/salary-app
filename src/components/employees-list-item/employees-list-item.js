import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const {name, salary, onDelete, onToggleProp, increase, rise, onSalary} = props;

    let classNames = 'list-group-item d-flex justify-content-between';

    if (increase) {
      classNames += ' increase';
    }

    if (rise) {
      classNames += ' like';
    }

    return (
        <li className={classNames}>
          <span
              className="list-group-item-label"
              onClick={onToggleProp}
              data-toggle="rise"
          >{name}</span>
          <input
              type="text"
              className="list-group-item-input"
              onChange={onSalary}
              defaultValue={salary + '$'}
          />
          <div className="d-flex justify-content-center align-items-center">
            <button
                type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleProp}
                data-toggle="increase"
            >
              <i className="fas fa-cookie"/>
            </button>

            <button
                type="button"
                className="btn-trash btn-sm "
                onClick={onDelete}
            >
              <i className="fas fa-trash"/>
            </button>
            <i className="fas fa-star"/>
          </div>
        </li>
    )
  }

export default EmployeesListItem;
