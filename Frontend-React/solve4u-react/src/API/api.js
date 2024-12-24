import axios from 'axios';

// URL base para a API
const API_URL = "http://localhost:8080";

// --------------------------------------
// Funções para a entidade Project
// --------------------------------------

/**
 * Função para criar um novo projeto.
 * 
 * @param {Object} newProject - Dados do projeto a ser criado.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const createProject = (newProject) => {
  return axios.post(`${API_URL}/api/projects`, newProject);
};

/**
 * Função para obter todos os projetos.
 * 
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const getProjects = () => {
  return axios.get(`${API_URL}/api/projects`);
};

/**
 * Função para obter um projeto específico por ID.
 * 
 * @param {String} projectId - ID do projeto.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const getProjectById = (projectId) => {
  return axios.get(`${API_URL}/api/projects/${projectId}`);
};

/**
 * Função para atualizar um projeto existente.
 * 
 * @param {String} projectId - ID do projeto.
 * @param {Object} updatedProject - Dados atualizados do projeto.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const updateProject = (projectId, updatedProject) => {
  return axios.put(`${API_URL}/api/projects/${projectId}`, updatedProject);
};

/**
 * Função para excluir um projeto.
 * 
 * @param {String} projectId - ID do projeto a ser excluído.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const deleteProject = (projectId) => {
  return axios.delete(`${API_URL}/api/projects/${projectId}`);
};

// --------------------------------------
// Funções para a entidade Group
// --------------------------------------

/**
 * Função para criar um novo grupo.
 * 
 * @param {Object} newGroup - Dados do grupo a ser criado.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const createGroup = (newGroup) => {
  return axios.post(`${API_URL}/groups`, newGroup);
};

/**
 * Função para obter todos os grupos.
 * 
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const getGroups = () => {
  return axios.get(`${API_URL}/groups`);
};

/**
 * Função para obter um grupo específico por ID.
 * 
 * @param {String} groupId - ID do grupo.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const getGroupById = (groupId) => {
  return axios.get(`${API_URL}/groups/${groupId}`);
};

/**
 * Função para atualizar um grupo existente.
 * 
 * @param {String} groupId - ID do grupo.
 * @param {Object} updatedGroup - Dados atualizados do grupo.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const updateGroup = (groupId, updatedGroup) => {
  return axios.put(`${API_URL}/groups/${groupId}`, updatedGroup);
};

/**
 * Função para excluir um grupo.
 * 
 * @param {String} groupId - ID do grupo a ser excluído.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const deleteGroup = (groupId) => {
  return axios.delete(`${API_URL}/groups/${groupId}`);
};

// --------------------------------------
// Funções para a entidade Task
// --------------------------------------

/**
 * Função para criar uma nova tarefa.
 * 
 * @param {Object} newTask - Dados da tarefa a ser criada.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const createTask = (newTask) => {
  return axios.post(`${API_URL}/tasks`, newTask);
};

/**
 * Função para obter todas as tarefas.
 * 
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const getTasks = () => {
  return axios.get(`${API_URL}/tasks`);
};

/**
 * Função para obter uma tarefa específica por ID.
 * 
 * @param {String} taskId - ID da tarefa.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const getTaskById = (taskId) => {
  return axios.get(`${API_URL}/tasks/${taskId}`);
};

/**
 * Função para atualizar uma tarefa existente.
 * 
 * @param {String} taskId - ID da tarefa.
 * @param {Object} updatedTask - Dados atualizados da tarefa.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const updateTask = (taskId, updatedTask) => {
  return axios.put(`${API_URL}/tasks/${taskId}`, updatedTask);
};

/**
 * Função para excluir uma tarefa.
 * 
 * @param {String} taskId - ID da tarefa a ser excluída.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const deleteTask = (taskId) => {
  return axios.delete(`${API_URL}/tasks/${taskId}`);
};

// --------------------------------------
// Funções para a entidade User
// --------------------------------------

/**
 * Função para criar um novo usuário.
 * 
 * @param {Object} newUser - Dados do usuário a ser criado.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const createUser = (newUser) => {
  return axios.post(`${API_URL}/users`, newUser);
};

/**
 * Função para obter todos os usuários.
 * 
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

/**
 * Função para obter um usuário específico por ID.
 * 
 * @param {String} userId - ID do usuário.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const getUserById = (userId) => {
  return axios.get(`${API_URL}/users/${userId}`);
};

/**
 * Função para atualizar um usuário existente.
 * 
 * @param {String} userId - ID do usuário.
 * @param {Object} updatedUser - Dados atualizados do usuário.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const updateUser = (userId, updatedUser) => {
  return axios.put(`${API_URL}/users/${userId}`, updatedUser);
};

/**
 * Função para excluir um usuário.
 * 
 * @param {String} userId - ID do usuário a ser excluído.
 * @returns {Promise} Retorna uma promessa com a resposta da requisição.
 */
export const deleteUser = (userId) => {
  return axios.delete(`${API_URL}/users/${userId}`);
};
