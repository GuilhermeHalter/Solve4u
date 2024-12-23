package com.solve4u.solve_4u.controller;

import com.solve4u.solve_4u.model.Project;
import com.solve4u.solve_4u.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173") 
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectRepository.save(project); // Salva o projeto no banco de dados
    }
}
