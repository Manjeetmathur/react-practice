const employees = [
  {
    "id": 1,
    "firstName": "Raj",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix server issue",
        "description": "Resolve server downtime in production",
        "date": "2024-10-10",
        "category": "Technical",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update documentation",
        "description": "Revise API documentation with the latest updates",
        "date": "2024-10-09",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Amit",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design homepage",
        "description": "Create a new design for the company homepage",
        "date": "2024-10-08",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare presentation",
        "description": "Prepare slides for the upcoming client meeting",
        "date": "2024-10-11",
        "category": "Business",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Test application",
        "description": "Run integration tests for the latest build",
        "date": "2024-10-09",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix UI bugs",
        "description": "Resolve reported UI issues in the dashboard",
        "date": "2024-10-10",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Sunita",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Write blog post",
        "description": "Create a blog post about the latest product feature",
        "date": "2024-10-05",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Optimize database",
        "description": "Improve the database query performance",
        "date": "2024-10-12",
        "category": "Technical",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Anil",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Organize team meeting",
        "description": "Schedule and organize a weekly team meeting",
        "date": "2024-10-10",
        "category": "Management",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Create new feature proposal",
        "description": "Propose a new feature for the product",
        "date": "2024-10-13",
        "category": "Business",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 0,
      "failed": 0
    }
  }
]
const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]

     

export const setLocalStorage = () => {
  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
  // console.log((employees,admin));
  return {employees,admin}
       
}