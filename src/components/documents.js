import React, { useState } from 'react';
import '../css/doc.css'
import client from '../utils/client';
import { Navigate } from 'react-router-dom';
import { isAuthed } from '../utils/auth';

function Doc() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [authed, setAuthed] = useState(true);
  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };


  const handleGenerateReport = () => {
    if (selectedFiles.length > 0) {
      const fileNames = selectedFiles.map((file) => file.name).join(', ');
      alert(`Selected files: ${fileNames}`);
    } else {
      alert('Выберите файлы');
    }
  };
  
      if (authed === null) {
          isAuthed().then(res => setAuthed(res));
      }
  
    if (authed !== null && authed === false) {
      return <Navigate to='/' replace/>
    }
    return (
      <div className="app-container">
        <main className="app-main">
          <div className="document-section">
          <label htmlFor="fileInput">Выберите документ(ы):</label>
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFileChange}
          />
                    <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFileChange}
          />
                    <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFileChange}
          />
          <button className="generate-button" onClick={handleGenerateReport}>
            Сгенерировать отчет
          </button>
          </div>
        </main>
      </div>
    );
  }
  
  export default Doc;