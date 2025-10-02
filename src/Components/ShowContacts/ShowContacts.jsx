import React, { useContext } from 'react';
import personImg from '../../assets/man-avatar.png';
import { PersonContext } from '../../App';

const ShowContacts = () => {
  const [person] = useContext(PersonContext);

  return (
    <>
      <div className="  md:my-20">
        <h1 className="font-bold p-4 md:p-6 bg-amber-100 rounded-2xl text-xl md:text-4xl">My Contacts</h1>

        {person.length === 0 && (
          <p className="mt-10 md:mt-40 font-bold md:text-3xl text-gray-300">
            👀Looks like you don’t have any contacts. <span className="block text-center">✍️Add one to get started.</span>
          </p>
        )}
        {/* Card Div */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
          {person.map((ele, index) => {
            return (
              <div
                key={index}
                className="mt-3 md:mt-8 mb-3 md:mb-0 md:w-96 bg-gray-100 shadow-lg rounded-2xl flex justify-center items-center gap-4 md:gap-6 "
              >
                <figure className="w-14 h-14 mb-6 bg-gray-300 rounded-full">
                  <img className="w-full rounded-full" src={personImg} alt="man person icon" />
                </figure>
                <div className="my-6">
                  <h1 className="font-bold md:text-lg">{ele.name}</h1>
                  <p className="text-gray-400 text-sm md:text-base font-semibold">{ele.email}</p>
                  <p className="text-gray-400 text-sm md:text-base font-semibold">{ele.number}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowContacts;
