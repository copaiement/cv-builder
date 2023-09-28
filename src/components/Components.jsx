
export function InputModule({ id, title, list, rmvFxn }) {
  return (
    <div className='inputs'>
      <div className='inputHeader'>{title}</div>
      {list.map(item => (
        <Inputs
          key={item.id + item.group}
          name={item.field}
          value={item.value}
          type={item.type}
        />
      ))}
      <RemoveButton
          id={id}
          rmvFxn={rmvFxn}
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
      <div className='inputButtons'>
        <button onClick={addFxn} >Add</button>
        <button>Submit</button>
      </div>
    )
  }

  return (
    <div className='inputButtons'>
      <button>Submit</button>
    </div>
  )
}

function RemoveButton({ id, rmvFxn }) {
  return (
    <div className='removeBtn'>
      <button id={id} onClick={rmvFxn}>Remove</button>
    </div>
  )
}


