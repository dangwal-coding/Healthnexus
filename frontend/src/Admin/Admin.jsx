import React from 'react'
import Adminleft from './Adminleft'
import { Outlet } from 'react-router-dom'
import './admin.css'
import { useEffect } from 'react';
function Admin() {
  // Check if Outlet has rendered a child route
  const outletRef = React.useRef(null);
  const [hasContent, setHasContent] = React.useState(false);

  useEffect(() => {
    if (outletRef.current && outletRef.current.innerHTML.trim() !== "") {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* left side bar */}
          <Adminleft />
          {/* right side content */}
          <div 
            className="col offset-2 main-content-custom"
            style={{
              marginLeft: 'calc(16.6667% + 32px)', // sidebar width + gap
              marginRight: '32px',
              overflowY: 'auto',
              background: 'linear-gradient(160deg, #e3f0ff 60%, #b3d8ff 100%)',
              padding: '2.5rem',
              boxShadow: '-2px 0 10px rgba(179,216,255,0.1)'
            }}
          >
            <div ref={outletRef} style={{minHeight: '300px'}}>
              <Outlet />
            </div>
            {!hasContent && (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%',
                color: '#232b4d', opacity: 0.8, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 0
              }}>
                <h1 style={{fontWeight: 800, fontSize: '2.5rem', marginBottom: 8}}>Welcome Admin!</h1>
                <p style={{fontSize: '1.2rem', maxWidth: 400, textAlign: 'center'}}>Select an option from the left menu to get started managing medicines and lab tests. Your dashboard is ready!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
