# Solve4u

## Credits
This project was developed by:

- [Guilherme Halter Nunes](https://github.com/GuilhermeHalter)
- [Wedley Silva Schmoeller](https://github.com/WedleySilva)

# Project Description

Solve4u is an online platform developed to streamline project management, providing an organized and efficient approach to coordinating tasks and team members. Created with a focus on practicality and ease of use, Solve4u is a valuable tool for businesses and teams seeking an accessible solution to track the progress of their projects.

With Solve4u, administrators can create projects and add team members quickly and easily. Each project can be subdivided into groups, allowing for a more detailed organization of activities and responsibilities. Team members are assigned to these groups based on their role or area of expertise, facilitating equitable distribution of work.

Furthermore, Solve4u provides features to monitor the overall performance of the project. Administrators can track task statuses, identify areas of concern, and implement corrective measures as needed. This continuous assessment capability helps ensure that projects stay on track and achieve their goals within the established timeframe.

In summary, Solve4u is a practical and accessible tool for efficient project management. By simplifying the process of tracking tasks and team members, Solve4u helps teams work more organized and productive, fostering the success of their projects.

# Business Rules

#### User Registration:

**BR 01:** Only registered users can access the system. </br>
**BR 02:** User registration must include information such as name, email, and password.

#### Project Registration:

**BR 03:** Only authenticated users can create new projects.</br>
**BR 04:** Project registration must include information such as name, description, and deadline.

#### Assignment of Collaborators to Projects:

**BR 05:** Only administrators can add collaborators to projects.</br>
**BR 06:** Each project can have one or more collaborators assigned to it.

#### Organization of Collaborators into Groups:

**BR 07:** Collaborators can be organized into groups within each project.</br>
**BR 08:** A collaborator can belong to more than one group within the same project.

#### Task Creation:

**BR 09:** Only administrators can create new tasks within each project.</br>
**BR 10:** Each task must have a description, a priority, and a defined deadline.

#### Assignment of Tasks to Collaborators:

**BR 11:** Only administrators can assign tasks to collaborators within each project.</br>
**BR 12:** Each task must be assigned to at least one responsible collaborator.

#### Update of Task Status:

**BR 13:** Collaborators can update the status of tasks assigned to them.</br>
**BR 14:** The status of tasks must reflect whether they are in progress, completed, or overdue.

#### Monitoring of Project Progress:

**BR 15:** Administrators can monitor the overall progress of the project.</br>
**BR 16:** Project progress should be assessed based on the number of tasks completed and compliance with deadlines.

#### Notifications:

**BR 17:** Collaborators should receive notifications about new tasks assigned to them.</br>
**BR 18:** Administrators should be notified about overdue tasks or issues in the project.

#### Activity Log:

**BR 19:** The system must maintain an activity log, recording all actions performed by users.</br>
**BR 20:** The activity log should be accessible to administrators for auditing and analysis purposes.

# Functional Requirements

**RF001:** User Registration

Description: The system must allow users to register by providing information such as name, email, and password.
Required Data: Name, Email, Password.
Users: All users.

**RF002:** Project Creation

Description: The system must allow administrators to create new projects, providing information such as name, description, and deadline.
Required Data: Project Name, Project Description, Deadline.
Users: Administrators.

**RF003:** Addition of Collaborators to Projects

Description: The system must allow administrators to add collaborators to existing projects, assigning them specific roles.
Required Data: Collaborator Name, Role.
Users: Administrators.

**RF004:** Organization of Collaborators into Groups

Description: The system must allow administrators to organize collaborators into groups within each project, facilitating task distribution.
Required Data: Group Name, Group Members.
Users: Administrators.

**RF005:** Task Creation

Description: The system must allow administrators to create new tasks within each project, assigning them description, priority, and deadline.
Required Data: Task Description, Priority, Deadline.
Users: Administrators.

**RF006:** Assignment of Tasks to Collaborators

Description: The system must allow administrators to assign specific tasks to groups of collaborators within each project.
Required Data: Task, Collaborator Group.
Users: Administrators.

**RF007:** Update of Task Status

Description: The system must allow collaborators to update the status of tasks assigned to them, indicating whether they are in progress, completed, or overdue.
Required Data: Task Status.
Users: Collaborators.

**RF008:** Monitoring of Project Progress

Description: The system must provide administrators with an overview of the progress of each project, including the number of tasks completed, in progress, and overdue.
Required Data: Project Status.
Users: Administrators.


# Non-functional Requirements

#### Security:

**RNF 01:** Ensure confidentiality of sensitive data through strong encryption and secure key management practices.

**RNF 02:** Implement multi-factor authentication and granular authorization to ensure secure access to the system, with constant monitoring of suspicious activities.

#### Performance:

**RNF 03:** Maintain consistent response times for all system operations, with an average response time of less than 500 milliseconds.

**RNF 04:** Scale to handle peak loads of up to 1000 simultaneous users, maintaining stable performance without significant degradation.

#### Usability:

**RNF 05:** Develop an intuitive and responsive user interface, with user-centered design and support for various devices and popular web browsers.

**RNF 06:** Ensure a consistent and smooth experience for both new and experienced users, with minimal learning curve and clear feedback on actions taken.

#### Reliability:

**RNF 07:** Ensure system availability with a planned downtime of less than 1% of total operating time, through server redundancy and automated recovery processes.

**RNF 08:** Implement resilience testing and disaster recovery to ensure service continuity in case of hardware or software failures.

#### Maintainability:

**RNF 09:** Structure the source code in a modular and well-documented manner, following best practices of software development to facilitate future maintenance and extension.

**RNF 10:** Adopt continuous integration and continuous delivery (CI/CD) practices, automating testing and deployments to ensure system stability and rapid delivery of new features

# Project Setup

## React

Installing npm Modules in Project.
```bash
npm install
```

```bash
npm run dev
```



