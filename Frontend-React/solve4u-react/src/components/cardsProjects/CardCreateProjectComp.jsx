import { useState } from "react";
import "../../css/cardStyle/CardCreateProjectComp.css";
import { FaPlus } from "react-icons/fa";
import { useTheme } from "../../assets/JavaScript/ThemeContext.jsx";
import { createProject } from "../../API/api.js"; // Importando a função de API

const CardCreateProject = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const { isDarkTheme } = useTheme();
  const [projectDescription, setProjectDescription] = useState("");
  const [category, setCategory] = useState("Option 1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para gerar um código aleatório de 8 caracteres
  const generateRandomCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  // Função chamada ao submeter o formulário para criar o projeto
  const handleCreateProject = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Reseta o erro ao tentar novamente

    const newProject = {
      name: projectName,
      description: projectDescription,
      category,
      codigo: generateRandomCode(), // Adicionando o código aleatório
    };

    try {
      // Chama a função da API para criar o projeto no Spring Boot
      const response = await createProject(newProject);
      console.log("Project created successfully", response);

      // Limpa os campos e fecha o modal após o sucesso
      setProjectName("");
      setProjectDescription("");
      setCategory("Option 1");
      onClose(); // Fecha o modal após a criação do projeto
    } catch (err) {
      console.error("Error creating project:", err);
      setError("Failed to create project. Please try again."); // Exibe a mensagem de erro
    } finally {
      setLoading(false); // Desativa o carregamento após a tentativa
    }
  };

  // Função para atualizar o estado dos inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "projectName") {
      setProjectName(value);
    } else if (name === "projectDescription") {
      setProjectDescription(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  return (
    <div className="modal-background">
      <div className={`modal ${isDarkTheme ? 'dark' : 'light'}`}>
        <button className={`close-btn ${isDarkTheme ? 'dark' : 'light'}`} onClick={onClose}>
          X
        </button>
        <h2>Create New Project</h2>
        <form onSubmit={handleCreateProject}>
          <input
            type="text"
            className="projectInput"
            placeholder="Project Name"
            name="projectName"
            value={projectName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Project Description"
            className="description"
            name="projectDescription"
            value={projectDescription}
            onChange={handleInputChange}
            required
          />
          <select
            name="category"
            id="category"
            value={category}
            onChange={handleInputChange}
            required
          >
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <button type="submit" className={`create-btn ${isDarkTheme ? 'dark' : 'light'}`} disabled={loading}>
            {loading ? "Creating..." : "Create Project"} <FaPlus className="iconCard" />
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default CardCreateProject;
