
import './App.css';

function App() {
  return (
    <div className="p-4"> 
      <div className="hero min-h-screen background relative">
        <div className="white-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto"> 
            <h1 className=" mb-8 text-4xl font-bold text-black whitespace-nowrap">
              I Grow By Helping People In Need
            </h1>
            <div className="flex items-center justify-center mb-10">
              <input
                type="text"
                className="w-3/4 px-4 py-2 mr-2 rounded-md border border-gray-300"
                placeholder="Search..."
              />
              <button className="btn btn-primary" style={{ backgroundColor: '#FF444A', color: 'white' }}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

