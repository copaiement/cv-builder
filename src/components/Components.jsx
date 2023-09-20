export function InputModule({ title, list }) {
  return (
    <div className={createClass(title)}>
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

function createClass(sectionName) {
  return (sectionName.replace(/\s/g, '').toLowerCase());
}