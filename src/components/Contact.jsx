import { InputModule } from "./Components";

const contact = [{
  id: 'CO00',
  field: 'Firstname',
  data: '',
  type: 'text'
}, {
  id: 'CO01',
  field: 'Lastname',
  data: '',
  type: 'text'
}, {
  id: 'CO02',
  field: 'Title',
  data: '',
  type: 'text'
}, {
  id: 'CO03',
  field: 'Headline',
  data: '',
  type: 'paragraph'
}, {
  id: 'CO04',
  field: 'Location',
  data: '',
  type: 'text'
}, {
  id: 'CO05',
  field: 'E-mail',
  data: '',
  type: 'email'
}, {
  id: 'CO06',
  field: 'Phone',
  data: '',
  type: 'tel'
}
];

export function Contact() {
  return (
    <InputModule 
      title='Contact Info'
      list={contact}
      add={false}
    />
  )
}