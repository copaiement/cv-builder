// BUILD FUNCTIONS
export function InputModule({ id, list, handleChange, rmvFxn }) {
  if (rmvFxn) {
    return (
      <div className='inputs'>
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

export function OutputModule({ list }) {
  return (
    <div className='outputContainer'>
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

export function NameOutputModule({ list }) {
  let firstname = list[0];
  let lastname = list[1];
  let title = list[2];
  let headline = list[3];
  return (
    <div className='outputContainer'>
      <div className='name'>
        <div className="firstname">{firstname.data}</div>
        <div className="lastname">{lastname.data}</div>
      </div>
      <div className="personalInfo">
        <div className="title">{title.data}</div>
        <div className="headline">{headline.data}</div>
      </div>
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






