import { InputModule, OutputModule, NameOutputModule } from "./Components";

export function ContactInput({ list, handleContChange }) {
  return (
    <div className='contact inputSection'>
      <InputModule 
        title='Contact Info'
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
        title={''}
        list={list}
      />
    </div>
  )
}

export function ContactOutput({ list }) {
  return (
    <div className='contactOutput'>
      <OutputModule
        title={'Contact Info'}
        list={list}
      />
    </div>
  )
}