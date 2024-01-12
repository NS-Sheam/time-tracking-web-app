import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    projectName: "Website Redesign",
    projectAuthor: "John Doe",
    authorDesignation: "UI/UX Designer",
    status: "In Progress",
    timeSpent: 0,
    estimatedTime: 30,
    isRunning: false,
  },
  {
    id: 2,
    projectName: "Mobile App Development",
    projectAuthor: "Jane Smith",
    authorDesignation: "Mobile Developer",
    status: "Completed",
    timeSpent: 0,
    estimatedTime: 25,
    isRunning: false,
  },
  {
    id: 3,
    projectName: "Database Optimization",
    projectAuthor: "Robert Johnson",
    authorDesignation: "Database Administrator",
    status: "Pending",
    timeSpent: 0,
    estimatedTime: 20,
    isRunning: false,
  },
  {
    id: 4,
    projectName: "Marketing Campaign",
    projectAuthor: "Emily White",
    authorDesignation: "Marketing Specialist",
    status: "Pending",
    timeSpent: 0,
    estimatedTime: 15,
    isRunning: false,
  },
  {
    id: 5,
    projectName: "Product Testing",
    projectAuthor: "Alex Brown",
    authorDesignation: "Quality Assurance Engineer",
    status: "In Progress",
    timeSpent: 0,
    estimatedTime: 30,
    isRunning: false,
  },
];

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action) {
      state.push(action.payload);
    },
    updateProject(state, action) {
      const { id, timeSpent, isRunning } = action.payload;
      const project = state.find((p) => p.id === id);
      if (project) {
        project.timeSpent = timeSpent;
        project.isRunning = isRunning;
      }
    },
  },
});

export const { addProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;