//import React, {Component} from "react";
import { useState } from "react";
import styles from "../Form.module.css";

export default function ContactForm ({onSubmitForm}){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        break;
    }
  };

    const handleSubmit = (evt) => {
     evt.preventDefault();
      onSubmitForm({ name, number });
      setName('');
     setNumber('');
     //reset();
   }
  //  const reset = () => {
  //    setName('');
  //    setNumber('');
  //  }
    
        return (
          <form
           onSubmit={handleSubmit}
            autoComplete="off"
          >
            <label className={styles.label}>Name
            <input className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange} />
          </label>
          <label className={styles.label}>Number
            <input className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={styles.btn}>Add contact</button>
        </form>
         );
    
}


//////
// class ContactForm extends Component{
//     state = {
//         name: '',
//         number: '' 
//     }
//   inputChange = (evt) => {
//     const { name, value } = evt.currentTarget;
//     this.setState({[name]: value});
//   }
//   handleSubmit = (evt) => {
//     evt.preventDefault();
//       this.props.onSubmitForm({...this.state});
//       this.reset();
//     }
//     reset = () => {
//         this.setState({ name: '', number: '' });
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//             <label className={styles.label}>Name
//             <input className={styles.input}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={this.state.name}
//               onChange={this.inputChange} />
//           </label>
//           <label className={styles.label}>Number
//             <input className={styles.input}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={this.state.number}
//               onChange={this.inputChange}
//             />
//           </label>
//           <button type="submit" className={styles.btn}>Add contact</button>
//         </form>
//          );
//     }
// }

// export default ContactForm;