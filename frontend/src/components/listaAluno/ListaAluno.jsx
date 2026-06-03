import React from "react";

function ListaAluno({ alunos, editar, deletar }) {
  return (
    <div className='card table-section'>
      <div className='card-header'>
        <h3>Lista de Alunos</h3>
      </div>

      {alunos.length === 0 ? (
        <div className='no-data'>
          <span className='no-data-icon'>📭</span>
          <p>Nenhum aluno encontrado na lista.</p>
        </div>
      ) : (
        <div className='table-responsive'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Nascimento</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno, index) => (
                <tr key={aluno.id} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                  <td>{aluno.id}</td>
                  <td className='name-cell'>{aluno.nome}</td>
                  <td>{aluno.dataNascimento ? aluno.dataNascimento.split("T") : "-"}</td>
                  <td>{aluno.email}</td>
                  <td>{aluno.telefone}</td>
                  <td className='actions-cell'>
                    <button onClick={() => editar(aluno)} className='btn btn-sm btn-warning' title='Editar'>
                      Editar
                    </button>
                    <button onClick={() => deletar(aluno.id)} className='btn btn-sm btn-danger' title='Deletar'>
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ListaAluno;
