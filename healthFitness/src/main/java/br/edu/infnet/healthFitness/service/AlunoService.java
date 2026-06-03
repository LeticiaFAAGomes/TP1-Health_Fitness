package br.edu.infnet.healthFitness.service;

import br.edu.infnet.healthFitness.model.Aluno;
import br.edu.infnet.healthFitness.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository repository;

    public Aluno salvar(Aluno aluno) {
        return repository.save(aluno);
    }

    public List<Aluno> listar() {
        return repository.findAll();
    }

    public Aluno buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Aluno atualizar(Long id, Aluno aluno) {
        Aluno alunoAtualizar = buscarPorId(id);

        alunoAtualizar.setNome(aluno.getNome());
        alunoAtualizar.setDataNascimento(aluno.getDataNascimento());
        alunoAtualizar.setEmail(aluno.getEmail());
        alunoAtualizar.setTelefone(aluno.getTelefone());

        return repository.save(alunoAtualizar);
    }

    public Aluno deletar(Long id) {
        Aluno alunoDeletado = buscarPorId(id);
        repository.delete(alunoDeletado);

       return alunoDeletado;
    }

}
