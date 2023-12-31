import { InputModule, OutputModule, NameOutputModule } from "./Components";

export function ContactInput({ list, handleContChange }) {
  return (
    <div className='contact inputSection'>
      <div className='inputHeader'>Contact Info</div>
      <InputModule 
        list={list}
        add={false}
        handleChange={handleContChange}
      />
    </div>
  )
}

export function NameOutput({ list }) {
  return (
    <div className='nameOutput'>
      <NameOutputModule
        list={list}
      />
    </div>
  )
}

export function ContactOutput({ list }) {
  return (
    <div className='contactOutput'>
      <div className='outputHeader'>Contact Info</div>
      <OutputModule
        list={list}
      />
    </div>
  )
}