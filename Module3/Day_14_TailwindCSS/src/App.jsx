import React from "react";

const App = () => {
  return (
    <div className="space-y-10 p-6">

      {/* Button */}
      <button
        className="rounded-r-lg bg-gray-100 px-4 py-2
                   hover:bg-gray-300 active:bg-gray-400"
      >
        Click me
      </button>

      {/* Image */}
      <img
        className="rounded-b-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-72"
        src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
        alt="sample"
      />

      {/* Responsive Heading */}
      <h2
        className="text-xl md:text-3xl lg:text-5xl font-bold
                   bg-gradient-to-r from-pink-500 to-pink-600
                   bg-clip-text text-transparent"
      >
        this is manu
      </h2>

      {/* List */}
      <ul className="list-disc list-inside pl-5 space-y-2">
        <li className="hover:text-blue-600 cursor-pointer">React</li>
        <li className="hover:text-blue-600 cursor-pointer">Tailwind CSS</li>
        <li className="hover:text-blue-600 cursor-pointer">JavaScript</li>
      </ul>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-4 w-72">
        <img
        src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
          alt="card"
          className="rounded-lg mb-3"
        />
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600 mb-3">
          This is a simple card description.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Read More
        </button>
      </div>

      {/* Table */}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {["A", "B", "C", "D"].map((item, i) => (
            <tr
              key={i}
              className="odd:bg-white even:bg-gray-100 hover:bg-gray-200"
            >
              <td className="border p-2">User {item}</td>
              <td className="border p-2">Developer</td>
              <td className="border p-2">Active</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form */}
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row md:space-x-6 bg-gray-800 p-4 text-white">
        <a className="hover:text-blue-400" href="#">Home</a>
        <a className="hover:text-blue-400" href="#">About</a>
        <a className="hover:text-blue-400" href="#">Contact</a>
      </nav>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">Card {i + 1}</h3>
            <p className="text-gray-600">Grid card content</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;
