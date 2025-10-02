import React, { useContext } from 'react';
import { PersonContext } from '../../App';
import { useInputState } from '../../Hooks/useInputState';
import { toast } from 'react-toastify';

const AddContact = () => {
  const [person, setPerson] = useContext(PersonContext);

  // const [name, setName] = useState('');
  // const handleOnChangeName = (e) => {
  //   const newName = e.target.value;
  //   setName(newName);
  // };

  // const [email, setEmail] = useState('');
  // const handleOnChangeEmail = (e) => {
  //   const newEmail = e.target.value;
  //   setEmail(newEmail);
  // };

  // const [number, setNumber] = useState('');
  // const handleOnChangeNumber = (e) => {
  //   const newNumber = e.target.value;
  //   setNumber(newNumber);
  // };

  const [name, handleNameChange] = useInputState('');
  const [email, handleChangeEmail] = useInputState('');
  const [number, handleChangeNumber] = useInputState('');

  const isNameInvalid = name.length > 0 && name.length < 6;
  const isNumberInvalid = number.length < 11 && number.length > 0;

  const handleContactService = (e) => {
    e.preventDefault();

    if (name.length < 6 || number.length < 11 || email.length === 0) {
      return toast.error('All fields are required. Make sure nothing is left empty.');
    } else {
      const newPerson = {
        name,
        email,
        number,
      };

      setPerson([...person, newPerson]);
      e.target.reset();
    }
  };

  return (
    <>
      <div className="border-2 my-10 md:my-40 md:w-[400px] md:h-[400px] flex flex-col justify-center border-blue-300 flex-1 p-5 shadow-lg rounded-2xl">
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-4">Add New Contact</h1>
          <form onSubmit={handleContactService}>
            <label className="input-label-style">Full Name</label>
            <input onChange={handleNameChange} value={name} className="input-style" type="text" name="name" placeholder="Full Name" />
            {isNameInvalid && <small className="block -mt-2 text-red-800">Too short! Minimum 6 characters required.</small>}
            <label className="input-label-style">Email Address</label>
            <input
              onChange={handleChangeEmail}
              value={email}
              className="input-style"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <label className="input-label-style">Phone Number</label>
            <input
              onChange={handleChangeNumber}
              value={number}
              className="input-style"
              type="number"
              name="number"
              placeholder="Phone Number"
            />
            {isNumberInvalid && <small className="block -mt-2 text-red-800">Please enter a valid 11-digit phone number.</small>}
            <input className={`btn btn-info rounded-2xl mt-4 shadow-lg`} type="submit" value="Save Contact" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddContact;
