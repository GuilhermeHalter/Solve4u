package com.solve4u.solve_4u.repository;

import com.solve4u.solve_4u.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
}
