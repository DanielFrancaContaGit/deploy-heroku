import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../global/globalfunc'

import './Example.css';

function Example() {
  const [examples, setExamples] = useState([]);

  const loadExamples = async () => {
    const res = await axios.get(`${baseUrl}/api/examples`);
    setExamples(res.data);
  };

  useEffect(() => {
    loadExamples();
  }, []);

  return (
    <div className="example-list">
      {examples?.map(({ _id, name, image }) => (
        <div key={_id} className="example-card">
          <img src={image[0]?.url} alt="Imagem de Exemplo"/>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}

export default Example;
