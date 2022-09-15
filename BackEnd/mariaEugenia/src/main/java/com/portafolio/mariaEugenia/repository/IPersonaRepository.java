package com.portafolio.mariaEugenia.repository;

import com.portafolio.mariaEugenia.entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long> {    
}
