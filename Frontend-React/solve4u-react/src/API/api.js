import axios from "axios";

// Configuração base do Axios
const api = axios.create({
  baseURL: "http://localhost:8080", // Substitua pelo endpoint do Spring Boot
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para criar um novo projeto
export const createProject = async (project) => {
  try {
    const response = await api.post("/project", project);
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error("Error creating project:", error);
    throw error; // Lança o erro para tratamento no componente
  }
};

// Adicione outras funções para integração com a API Spring Boot, se necessário
export const fetchProjects = async () => {
  try {
    const response = await api.get("/project");
    return response.data; // Retorna os projetos
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await api.delete(`/project/${id}`);
    return response.data; // Retorna a resposta do servidor
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};

export const updateProject = async (id, project) => {
  try {
    const response = await api.put(`/project/${id}`, project);
    return response.data; // Retorna o projeto atualizado
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};
