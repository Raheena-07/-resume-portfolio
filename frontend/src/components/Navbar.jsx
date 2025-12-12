const Navbar = ({ view, setView }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>

            <h1 className="text-2xl font-bold tracking-wide">
              My Resume Portfolio
            </h1>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">

            {/* Edit Button */}
            <button
              onClick={() => setView('form')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm ${
                view === 'form'
                  ? 'bg-white text-blue-600 shadow-md scale-105'
                  : 'bg-blue-700 hover:bg-blue-800'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75v-10.5A2.25 2.25 0 015.25 6H10" 
                />
              </svg>

              Edit Resume
            </button>

            {/* View Button */}
            <button
              onClick={() => setView('view')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm ${
                view === 'view'
                  ? 'bg-white text-purple-600 shadow-md scale-105'
                  : 'bg-purple-700 hover:bg-purple-800'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 4.5h18m-10.5 15v-15m9 7.5H4.5" 
                />
              </svg>

              View Resume
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
