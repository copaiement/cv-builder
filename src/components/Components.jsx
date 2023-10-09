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
      <div className='addBtn'>
        <button onClick={addFxn} >Add Section</button>
      </div>
    )
  }
}

export function SubmitReset({ handleSubmit, handleReset }) {
  return (
    <div className='submitReset'>
      <button onClick={handleSubmit}>Submit Form</button>
      <button onClick={handleReset}>Reset Form</button>
    </div>
  )
}

function RemoveButton({ id, rmvFxn }) {
  return (
    <div className='removeBtn'>
      <button id={id} onClick={rmvFxn}>Remove Section</button>
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

export function NameOutputModule({title, list}) {
  let firstname = list[0];
  let lastname = list[1];
  list = list.slice(2);
  return (
    <div className='outputContainer'>
      <div className='outputHeader'>{title}</div>
      <div className='name'>
        <div className="firstname">{firstname.data}</div>
        <div className="lastname">{lastname.data}</div>
      </div>
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
  if (type==='paragraph') {
    return (
      <label>{name}
        <textarea
          id={id}
          value={data}
          type={type}
          onChange={handleChange}
        />
      </label>
    )
  } else {
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
}

function Outputs({ id, name, value, type}) {
  return (
    <div className='outputField'>
      <div className='outputName'>{name}</div>
      <div className='outputData'>{value}</div>
    </div>
  )
}






