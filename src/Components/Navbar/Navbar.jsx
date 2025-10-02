import React, { useContext } from 'react';
import Container from '../Container/Container';
import { PersonContext } from '../../App';
import { MdSwitchAccount } from 'react-icons/md';

const Navbar = () => {
  const [person] = useContext(PersonContext);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <Container>
          <div className="flex items-center justify-between text-black poppins-font px-3 md:px-0">
            <div className="flex items-center gap-2">
              <img className="w-16 md:w-24 py-3" src={'https://i.ibb.co.com/R4HyS8pf/logo.png'} alt="logo" />
              <h1 className="md:text-xl font-bold">ContactHub</h1>
            </div>
            <p className="font-bold text-sm md:text-base flex items-center gap-1 md:gap-2">
              <span>
                <MdSwitchAccount />
              </span>
              Total Contacts : {person.length}
            </p>
            <button className="btn btn-info rounded-2xl text-white hidden md:block">+ Add New Contact</button>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
