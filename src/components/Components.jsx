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
            data={item.data}
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
          data={item.data}
          type={item.type}
          handleChange = {handleChange}
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

export function SubmitButton({ handleSubmit }) {
  return (
    <div className='submitBtn'>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export function ResetButton({ handleReset }) {
  return (
    <div className='resetBtn'>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export function OutputModule({title, list}) {
  return (
    <div className='outputContainer'>
      <div className='outputHeader'>{title}</div>
      {list.map(item => (
        <Outputs
          key={'out' + item.id + item.group}
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
function Inputs({ id, name, data, type, handleChange }) {
  return (
    <label>{name}
      <input
        id={id}
        value={data}
        type={type}
        onChange={handleChange}
      />
    </label>
  )
}

function Outputs({ id, name, value, type}) {
  return (
    <div className='outputField'>
      <div className='outputName'>{name}</div>
      <div className='outputData'>{value}</div>
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




