import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import background from './assests/background.jpg';

import Header from './components/Header';

function App() {
  //UseState retorna um array com 2 posições
  //1. Variável com o seu valor inicial , project
  // 2. Funcao para utilizar esse valor , setProjects

  const [projects, setProjects] = useState([]);

  // useEffect, dispar funcoes
  // 1 parametro . qual funcao quero disparar?
  // 2 parametro. qdo quero dispar?
  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //.push altera o project e nao criar um novo valor
    //projects.push(`Novo projeto ${Date.now}`);

    // criar um novo array
    // setProjects([...projects, `Novoprojeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo projeto 🎋 ${Date.now()}`,
      owner: 'Junior Nascimento',
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />
      <img width={300} src={background} />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicinar Projeto
      </button>
    </>
  );
}

export default App;

// Component
// Propriedade
// Estado e Imutabilidade
