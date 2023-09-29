import { contact } from "./Data";
import { InputModule } from "./Components";

// TO DO
// Add profile picture upload section

export function Contact() {
  return (
    <InputModule 
      title='Contact Info'
      list={contact}
      add={false}
    />
  )
}