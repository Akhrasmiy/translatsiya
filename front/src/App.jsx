import React, { useEffect, useState } from 'react';
import LivePlayer from './components/LivePlayer';

function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/owncast/status`)
      .then(res => res.json())
      .then(setStatus)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <LivePlayer />
      {status && (
        <div className="mt-4">
          <p><strong>Status:</strong> {status.online ? 'LIVE' : 'Offline'}</p>
          <p><strong>Viewers:</strong> {status.viewerCount}</p>
        </div>
      )}
    </div>
  );
}

export default App;