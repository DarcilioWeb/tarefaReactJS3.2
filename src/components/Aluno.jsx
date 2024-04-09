import React from 'react'

const Aluno = ({ nome, email, curso, media}) => {
  const estado = media >= 7.0 ? 'Aprovado' : 'Reprovado';

  return (
    <>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Media: {media}</p>
        <p>Status: {estado}</p>
    </>
  )
}

export default Aluno