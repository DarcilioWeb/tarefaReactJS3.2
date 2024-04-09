import React from 'react'
import Aluno from './components/Aluno'

const alunos = [
  {nome: "Joao", email: "joao@gmail.com", curso: "Sistemas", media: 7.0},
  {nome: "darcilio", email: "darcilio@gmail.com", curso: "Segurança Ofensiva", media: 10.0},
  {nome: "maria", email: "maria@gmail.com", curso: "Segurança Defensiva", media: 5.0}
];

const App = () => {
  return (
    <div>
      <h1>Lista de Alunos</h1>
      {alunos.map((aluno, index) => (
        <Aluno key={index} {...aluno} />
      ))}
    </div>
  );
};

export default App