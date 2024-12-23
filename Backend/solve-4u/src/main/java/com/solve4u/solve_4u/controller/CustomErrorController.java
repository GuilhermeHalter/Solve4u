package com.solve4u.solve_4u.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorController implements ErrorController {

    @RequestMapping("/error")
    public String handleError() {
        // Pode ser uma página HTML personalizada para erros
        return "error"; // Retorna o nome do arquivo de erro (error.html) em resources/templates
    }

}
