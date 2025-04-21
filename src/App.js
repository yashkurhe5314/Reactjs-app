
import './App.css';
import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <h1>hello world</h1>
//     </div>
//     }
//   );
// }
function NavBar() {
  return (
    <>
      <div className='Nav-bar'>
        <div className='logo'>
          <img src='{logo}'alt="Logo" style={{ height: '40px' }} />
        </div>
        <div className='Nav-tab'>
        <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Location</a>
              <a class="nav-link" href="#">About Project</a>
              <a class="nav-link" href="#">Amenities</a>
              <a class="nav-link" href="#">Floor Plan</a>
              <a class="nav-link" href="#">Highlights</a>
              <a class="nav-link" href="#">About Developer</a>
          </div>
      </div>
    </>

  );
}
export default NavBar;

