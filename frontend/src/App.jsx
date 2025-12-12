import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ResumeForm from './components/ResumeForm';
import ResumeView from './components/ResumeView';
import './index.css';

function App() {
  const [view, setView] = useState('form');
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/resume');
      const data = await response.json();
      
      if (data.success) {
        setResumeData(data.data);
      }
    } catch (error) {
      console.error('Error fetching resume:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveResume = async (data) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (result.success) {
        setResumeData(result.data);
        alert('Resume saved successfully!');
        setView('view');
      } else {
        alert('Error saving resume: ' + result.message);
      }
    } catch (error) {
      console.error('Error saving resume:', error);
      alert('Error saving resume. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar view={view} setView={setView} />

      <div className="container mx-auto px-4 py-8">
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-700">Loading...</p>
            </div>
          </div>
        )}

        {view === 'form' && (
          <ResumeForm 
            initialData={resumeData} 
            onSave={handleSaveResume}
          />
        )}

        {view === 'view' && (
          <ResumeView resumeData={resumeData} />
        )}
      </div>
    </div>
  );
}

export default App;   
