package com.solve4u.solve_4u.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.solve4u.solve_4u.model.Project;


public interface ProjectRepository extends JpaRepository<Project, Long> {
}
