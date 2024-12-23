# Backend structure

## Principais Classes:

**User**
- id: UUID
- name: String
- email: String
- password: String
- role: Enum (Admin, Member)
- Relacionamento: 1..* com Project.

**Project**
- id: UUID
- name: String
- description: String
- status: Enum (Active, Completed, Pending)
- Relacionamento: 1..* com Group.

**Group**
- id: UUID
- name: String
- description: String
- Relacionamento: 1..* com Task.

**Task**
- id: UUID
- title: String
- description: String
- deadline: Date
- status: Enum (Todo, In Progress, Done)
- Relacionamento: 1 com User (atribuição).

## Diagrama de Classe
<img src="./img/DiagramaSolve4u.png" alt="Descrição da Imagem" width="600">
