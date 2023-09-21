export function InputModule({ title, list }) {
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

export function Buttons({ add, addFxn }) {
  if (add) {
    return (
      <div className='buttons'>
        <button onClick={addFxn} >Add</button>
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