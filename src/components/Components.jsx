export function InputModule({ title, list, add }) {
  return (
    <div className={createClass(title)}>
      <div className='inputs'>
        <div className='inputHeader'>{title}</div>
        {list.map(item => (
          <Inputs
            key={item.field} 
            name={item.field}
            value={item.value}
            type={item.type}
          />
        ))}
      </div>
      <Buttons 
        add={add}
      />
    </div>
  )
}

function Inputs({ name, value, type, handleChange }) {
  return (
    <label>
      {name}
      <input
        value={value}
        onChange={handleChange}
        type={type}
      />
    </label>
  )
}

function Buttons({ add }) {
  if (add) {
    return (
      <div className='buttons'>
        <button>Add</button>
        <button>Submit</button>
      </div>
    )
  }

  return (
    <div className='buttons'>
      <button>Submit</button>
    </div>
  )
}

function createClass(sectionName) {
  return (sectionName.replace(/\s/g, '').toLowerCase());
}