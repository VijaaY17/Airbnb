
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Header = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <header className="flex items-center justify-between">
        <a href="#" className="flex m-4 gap-1 mx-6 my-6 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="-rotate-90 size-9">
            <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
          </svg>
          <span className="font-semibold text-2xl">airbnb</span>
        </a>
        <div className="flex-grow flex justify-center ml-44">
          <ul className="flex gap-4 -ml-8">
            <li className="text-lg font-normal text-[#888888] hover:border border-gray-400 rounded-full p-4 py-2 px-4 bg-transparent shadow-transparent hover:bg-[#DDDDDD] hover:border-[#dddddd] hover:text-[#2C2C2C]">Stays</li>
            <li className="text-lg font-normal text-[#888888] hover:border border-gray-400 rounded-full p-4 py-2 px-3 bg-transparent shadow-transparent hover:bg-[#DDDDDD] hover:border-[#dddddd] hover:text-[#2C2C2C]">Experiences</li>
          </ul>
        </div>
        <div className="flex items-center mx-4 gap-4">
          <ul className="flex items-center">
            <li className="text-md font-semibold text-black hover:border border-gray-400 rounded-full p-4 py-2 px-4 bg-transparent shadow-transparent hover:bg-[#DDDDDD] hover:border-[#dddddd] hover:text-[#2C2C2C]">Airbnb your home</li>
          </ul>
          <a href="#" className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </a>
          <Link to="/account" className="border border-[#888888] rounded-full py-2 px-3 flex items-center space-x-2 shadow-md">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
            {user && (
              <div>
                {user.name}
              </div>
            )}
          </Link>
        </div>
      </header>
      <div className="flex justify-center p-4 bg-white shadow-md">
        <div className="border border-gray-300 rounded-full bg-white flex items-center w-full max-w-screen-lg px-4">
          <ul className="flex items-center w-full">
            <li className="flex-1 text-center px-4 py-2 text-gray-700 hover:text-black transition-colors duration-300">
              Where
            </li>
            <li className="flex-1 text-center px-4 py-2 text-gray-700 hover:text-black transition-colors duration-300 border-l border-gray-300">
              Date
            </li>
            <li className="flex-1 text-center px-4 py-2 text-gray-700 hover:text-black transition-colors duration-300 border-l border-gray-300">
              Who
            </li>
          </ul>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 bg-[#E41D56] text-white p-1 rounded-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
