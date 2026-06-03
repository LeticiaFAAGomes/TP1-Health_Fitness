package br.edu.infnet.healthFitness.repository;

import br.edu.infnet.healthFitness.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> { }
