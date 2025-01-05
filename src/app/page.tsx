"use client";
import { useState } from 'react';


export default function Home() {
  const [isFriend, setIsFriend] = useState(false);

  const handleFriendToggle = () => {
    setIsFriend(!isFriend);
  };

  return (
    <div className="bg-totggreen-1 flex flex-col items-center h-screen">
      {/* Main Profile Section */}
      <div className="bg-totggreen-2 text-white p-6 rounded-lg shadow-lg max-w-sm w-full mt-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://www.bing.com/th?id=OIP.JyoIxzq5bGD9dnnsjptW-gHaFj&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full border-4 border-gray-700"
          />
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              Isagi Yoichi
              <img
                src="https://cdn0.iconfinder.com/data/icons/flag-all-country-2/64/80-1024.png"
                alt="Nationality"
                className="w-4 h-4 ml-2"
              />
            </h1>
            <h6 className="text-sm text-gray-300 flex items-center">
              UID: 123456789
              <a href='/copyuid'>
              <img
                src="https://cdn0.iconfinder.com/data/icons/harmonicons-02/64/clipboard-1024.png"
                alt="clipboard"
                className="w-4 h-4 ml-2"
              />
              </a>
              
            </h6>

            <hr className="my-2 border-gray-600" />
            <p className="mt-1 text-lg font-semibold text-totyellow-1">Medals: 2450</p>
            <p className="text-lg font-bold text-yellow-400">
              Rank: Grandmaster 
            </p>            
          </div>
        </div>

        <hr className="my-4 border-gray-600" />

        <div className="grid grid-cols-2 gap-4 text-center my-4">
          <div>
            <p className="text-xl font-bold">150</p>
            <p className="text-sm text-gray-300">Wins</p>
          </div>
          <div>
            <p className="text-xl font-bold">30</p>
            <p className="text-sm text-gray-300">Losses</p>
          </div>
        </div>

        {/* Button to Add/Unfriend */}
        <div className="mt-6">
          <button
            onClick={handleFriendToggle} // Handle the click event
            className={`w-full py-2 px-4 rounded-lg ${isFriend ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-500'} text-white`}
          >
            {isFriend ? 'Unfriend' : 'Add Friend'}
          </button>
        </div>

        <hr className="my-3 border-collapse" />
      </div>

      {/* Separate Bio Section */}
      <div className="mt-6 w-full flex justify-center">
        <div className="bg-totggreen-2 text-white p-4 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-lg font-bold">Bio</h2>
          <p className="text-sm text-gray-400 text-justify indent-5">
            Isagi Yoichi is a talented player known for his strategic mindset and exceptional skills on the field. With a focus on teamwork and adaptability, he aims to become the best player in the world. Aside from football, during his free time, he has a knack for Games of the Generals, aiming to be both the best football and GOTG athlete in the country.
          </p>
        </div>
      </div>

      {/* Game History */}
      <div className="mt-6 w-full flex justify-center">
        <div className="bg-totggreen-2 text-white p-4 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-lg font-bold mb-4">Completed Games</h2>
          <div className="w-full flex flex-col text-sm text-gray-400">
            <div className="bg-totggreen-3 rounded-md mb-2 p-2">
              <div className="flex justify-between">
                <span className="flex-1 text-center">Players</span>
                <span className="flex-1 text-center">Result</span>
                <span className="flex-1 text-center">Date</span>
              </div>
            </div>
            {/* Example game entries */}
            <div className="bg-totggreen-1 rounded-md mb-2 p-2">
              <div className="flex justify-between items-center">
                <span className="flex-1 text-center">Isagi vs Bachira</span>
                <span className="text-yellow-500 font-bold mx-2">Win</span>
                <span className="flex-1 text-center">2024-10-01</span>
              </div>
            </div>
            <div className="bg-totggreen-1 rounded-md mb-2 p-2">
              <div className="flex justify-between items-center">
                <span className="flex-1 text-center">Isagi vs Rin</span>
                <span className="text-red-500 font-bold mx-2">Loss</span>
                <span className="flex-1 text-center">2024-10-02</span>
              </div>
            </div>
            <div className="bg-totggreen-1 rounded-md mb-2 p-2">
              <div className="flex justify-between items-center">
                <span className="flex-1 text-center">Isagi vs Nagi</span>
                <span className="text-yellow-500 font-bold mx-2">Win</span>
                <span className="flex-1 text-center">2024-10-03</span>
              </div>
            </div>
            {/* Add a blank space for the icons */}
            <div className="h-16"></div> {/* Adjust the height as necessary */}
          </div>
        </div>
      </div>

      {/* Icons Section - Fixed at the Bottom */}
      <div className="w-full fixed bottom-0 flex justify-between p-2 bg-totyellow-2 border-t border-black border-2 z-10">
        <div className="flex-1 flex flex-col items-center">
          <a href="link.com">
            <img src="https://th.bing.com/th/id/R.685500eb6197cd2542be81d9a7cfb0c7?rik=lcrGCnkXlvUoZg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fxTg%2fLbz%2fxTgLbzAXc.png&ehk=jDZ4porYNutAGkACzakuHgWkrv2Leq0aLMH7PXLoYJs%3d&risl=&pid=ImgRaw&r=0" alt="Home" className="w-full h-16 mb-1" />
          </a>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <a href="link.com">
            <img src="https://th.bing.com/th/id/OIP.FW5KtxQ9v4QYpfL2CY3VtAHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Puzzle" className="w-full h-16 mb-1"/>
          </a>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <a href="/profile.tsx">
            <img src="https://www.bing.com/th?id=OIP.zSBNiaIRxqsRKRy5WWTDpAHaHa&w=99&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Profile" className="w-full h-16 mb-1 rounded-full" />
          </a>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <a href="/my-profile">
            <img src="https://th.bing.com/th/id/OIP.YJsdznz0cKz60CMv_71IRQHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Game modes" className="w-full h-16 mb-1 rounded-full" />
          </a>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <a href="link.com">
            <img src="https://th.bing.com/th/id/OIP.RmYbsdvh7NdvW48q-twvTAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Settings" className="w-full h-16 mb-1 rounded-full" />
          </a>
        </div>
      </div>
    </div>
  );
}
