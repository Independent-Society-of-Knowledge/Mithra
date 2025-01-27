# Mithra: The Blackboard of the Internet  

Mithra is a comprehensive platform designed for the academic and scientific community to facilitate seamless presentations, collaborative research, and global knowledge sharing. It aims to redefine the boundaries of academic interaction and collaboration by becoming *The Blackboard of the Internet*.  

---

## Features  

### Academic Collaboration  
- **Real-time Presentations**: Enable live lectures, webinars, and research discussions.  
- **Collaborative Document Editing**: Provide tools for synchronized, multi-user editing of documents and presentations.  
- **Open Lectures**: Allow users to host public sessions for teaching and learning.  

### AI-Powered Assistance  
- Generate lecture outlines, slides, and research presentations using artificial intelligence.  
- Provide automated content enhancement and suggestions tailored to academic requirements.  

### Comprehensive Integration  
- Seamless integration with **KnowledgeBase**, a unified platform for research networking, paper sharing, and community building.  
- Compatibility with **Koncept**, an Integrated Research Environment for conducting collaborative scientific inquiries.  

### Customizable User Experience  
- Support for themes, including light and dark modes, and user-defined styling preferences.  
- Language localization to support a diverse, global user base.  
- Advanced notification and subscription management for lectures and research updates.  

### Research Tools  
- **Versioning and Tracking**: Ensure detailed tracking of lecture and research document versions.  
- **Networking Features**: Facilitate professional networking with researchers and educators worldwide.  

---

## Technology Stack  

### Backend:  
- **Framework**: Quarkus (microservices architecture)  
- **Communication**: RESTful APIs and WebSocket integration for real-time functionality  
- **Authentication**: OAuth2 and JWT for secure user management  
- **Documentation**: OpenAPI for standardized API documentation  

### Frontend:  
- **Framework**: Vue.js for a dynamic, modular user interface  
- **Styling**: Tailwind CSS for consistent and customizable design  

### Database:  
- **Primary Database**: PostgreSQL for structured data management  
- **Search Engine**: Elasticsearch for fast and efficient data indexing  

### Additional Technologies:  
- **Containerization**: Docker for consistent deployment environments  
- **Continuous Integration/Continuous Deployment**: GitHub Actions for automated testing and deployments  

---

## Installation  

### Prerequisites:  
- Java 17 or later  
- Node.js 18 or later with npm  
- Docker (optional for containerized deployment)  

### Steps to Install and Run  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/independent-society-of-knowledge/mithra.git
   cd mithra
   ```  

2. **Setup the Backend**:  
   Navigate to the `backend` directory and start the development server:
   ```bash
   cd backend
   ./mvnw quarkus:dev
   ```  

3. **Setup the Frontend**:  
   Navigate to the `frontend` directory, install dependencies, and start the development server:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```  

4. **Configure the Database**:  
   Update the database connection details in the `application.properties` file located in the backend configuration directory.

5. **Access the Application**:
    - Backend API: `http://localhost:8080`
    - Frontend Interface: `http://localhost:3000`

---

## Contribution Guidelines

Contributions are welcome to enhance Mithra's capabilities. Please follow these steps to contribute:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Ensure the code adheres to the project’s standards and passes all tests.
3. Submit a detailed pull request describing the changes you have made.

---

## License

Mithra is distributed under the [GPL v3.0 License](LICENSE). Users are encouraged to use, modify, and distribute this project within the terms of the license.

---

## Support

For queries, suggestions, or reporting issues, please contact the development team through the following channels:
- Open an issue on [GitHub Issues](https://github.com/independent-society-of-knowledge/mithra/issues).
- Email: [support@mithra.app](mailto:mithra@iskportal.com).

---

## Vision

Mithra aspires to be the cornerstone of academic collaboration and education, fostering a global network of researchers, educators, and learners. Its goal is to provide the tools necessary to make the vision of *The Blackboard of the Internet* a reality.
