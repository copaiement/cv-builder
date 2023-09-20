export function InputModule({ title, list }) {
  return (
    <div>
      <div>{title}</div>
      <Inputs 
        
      />
    </div>
  )
}

function Inputs({ name, value, handleChange }) {
  return (
    <label>
      {name}
      <input
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}