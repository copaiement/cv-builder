export function InputModule({ title, list, add, addFxn }) {
  return (
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
      <Buttons 
        add={add}
        addFxn={addFxn}
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
