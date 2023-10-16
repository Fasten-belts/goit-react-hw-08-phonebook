// import { useDispatch } from 'react-redux';
// import { editContact } from 'redux/operations';

// export const ContactsEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     if (text !== '') {
//       dispatch(editContact(text));
//       form.reset();
//       return;
//     }
//     alert('Task cannot be empty. Enter some text!');
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <input name="text" className="input" />
//       <button type="submit" className="button">
//         Edit
//       </button>
//     </form>
//   );
// };
