const admin = {
  id: 100,
  email: "admin@example.com",
  password: "123",
};

const employees = [
  {
    id: 1,
    firstName: "Suman",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2024-09-01",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2024-08-11",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for Task 3",
        date: "2024-06-24",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 4",
        description: "Description for Task 4",
        date: "2024-11-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Aarav",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 3,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2024-10-19",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2024-04-10",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for Task 3",
        date: "2024-05-28",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Description for Task 4",
        date: "2024-06-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 5",
        description: "Description for Task 5",
        date: "2024-12-12",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 6",
        description: "Description for Task 6",
        date: "2024-08-04",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Ritika",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2024-05-16",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2024-06-09",
        category: "Research",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for Task 3",
        date: "2024-11-02",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 4",
        description: "Description for Task 4",
        date: "2024-07-29",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 5",
        description: "Description for Task 5",
        date: "2024-09-15",
        category: "Design",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Bibek",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2024-05-02",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2024-06-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Description for Task 3",
        date: "2024-07-04",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Description for Task 4",
        date: "2024-08-25",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 5",
        description: "Description for Task 5",
        date: "2024-10-31",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Pratiksha",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Description for Task 1",
        date: "2024-09-22",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Description for Task 2",
        date: "2024-06-12",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Description for Task 3",
        date: "2024-04-14",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 4",
        description: "Description for Task 4",
        date: "2024-08-01",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
