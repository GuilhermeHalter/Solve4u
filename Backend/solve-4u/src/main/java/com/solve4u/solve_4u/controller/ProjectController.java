package com.solve4u.solve_4u.controller;

import org.springframework.web.bind.annotation.RestController;
import com.solve4u.solve_4u.model.Project;
import com.solve4u.solve_4u.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;

@RestController
public class ProjectController {

    private final ProjectRepository projectRepository;

    // Injeção de dependência via construtor
    @Autowired
    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping("/project")
    public String project() {
        return "Project Controller";
    }

    @PostMapping("/project")
    public ResponseEntity<Project> createProject(@Validated @RequestBody Project project) {
        try {
            // Validação ou outras verificações podem ser feitas aqui
            Project savedProject = projectRepository.save(project);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedProject);
        } catch (Exception e) {
            // Captura e log de exceções (caso o projeto não seja salvo)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
}
