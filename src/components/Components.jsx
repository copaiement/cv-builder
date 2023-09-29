// BUILD FUNCTIONS
export function InputModule({ id, title, list, handleChange, rmvFxn }) {
  if (rmvFxn) {
    return (
      <div className='inputs'>
        <div className='inputHeader'>{title}</div>
        {list.map(item => (
          <Inputs
            key={item.id + item.group}
            id={'g'+item.group+'i'+item.id}
            name={item.field}
            value={item.value}
            type={item.type}
            handleChange = {handleChange}
          />
        ))}
        <RemoveButton
            id={id}
            rmvFxn={rmvFxn}
        />
      </div>
    )
  }

  return (
    <div className='inputs'>
      <div className='inputHeader'>{title}</div>
      {list.map(item => (
        <Inputs
          key={item.id + item.group}
          id={'g'+item.group+'i'+item.id}
          name={item.field}
          value={item.value}
          type={item.type}
          onChange = {handleChange}
        />
      ))}
    </div>
  )
}

export function Buttons({ addFxn }) {
  if (addFxn) {
    return (
      <div className='inputButtons'>
        <button onClick={addFxn} >Add</button>
      </div>
    )
  }
}

export function SubmitButton() {
  
}

export function OutputModule({title, list}) {
  return (
    <div className='outputContainer'>
      <div className='outputHeader'>{title}</div>
      {list.map(item => (
        <Outputs
          key={item.id + item.group}
          id={'g'+item.group+'i'+item.id}
          name={item.field}
          value={item.data}
          type={item.type}
        />
      ))}
    </div>
  )
}

// Helper functions
function Inputs({ id, name, value, type, handleChange }) {
  return (
    <label>{name}
      <input
        id={id}
        value={value}
        type={type}
        onChange={handleChange}
      />
    </label>
  )
}

function Outputs({ id, name, value, type}) {
  return (
    <div className='outputField'>
      <div className='name'>{name}</div>
      <div className='data'>{value}</div>
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




