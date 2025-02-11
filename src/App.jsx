import React from "react";

const App = () => {
  const name = "AnnieM";
  const x = "An";
  const y = "ne";
  const arr = ["A", "n", "n", "e"];
  const loggedIn = true;
  const styles = { color: "blue", fontSize: "20px" };

  return (
    <>
      <div className="text-5xl">Hello from {x + y}</div>
      <p>Put paragraph here</p>
      <ul>
        {arr.map((letter, index) => (
          <li key={index}>{letter}</li>
        ))}
      </ul>

      {loggedIn ? (
        // <h1 style={{ color: "red", fontSize: "25px" }}>Hello Member: {name}</h1>
        <h1 style={styles}> Hello, Member {name}</h1>
      ) : (
        <h1>Hello Guest</h1>
      )}
    </>
  );
};

export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
