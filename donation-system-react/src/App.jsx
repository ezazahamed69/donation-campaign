
import './App.css'

function App() {


  return (
    <>
<div className="hero min-h-screen background relative">
  <div className="white-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-3 text-3xl font-bold text-black">I Grow By Helping People In Need</h1>
      <div className="flex items-center justify-center mb-6">
        <input
          type="text"
          className="w-3/4 px-4 py-2 mr-2 rounded-md border border-gray-300"
          placeholder="Search..."
        />
        <button className="btn btn-primary" style={{ backgroundColor: '#FF444A', color: 'white' }}>Search</button>
      </div>
    </div>
  </div>
</div>



      
    </>
  )
}

export default App
