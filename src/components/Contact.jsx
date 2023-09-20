import { contact } from "./Data";
import { InputModule } from "./Components";

export function Contact() {
  return (
    <InputModule 
      title='Contact Info'
      list={contact}
      add={false}
    />
  )
}