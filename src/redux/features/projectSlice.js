import { createSlice } from "@reduxjs/toolkit";
import image1 from "../../assets/images/recent-1.jpg";
import image2 from "../../assets/images/recent-2.jpg";
import image3 from "../../assets/images/recent-3.jpg";
import image4 from "../../assets/images/recent-4.jpg";
import image5 from "../../assets/images/recent-5.jpg";
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
    image: image1,
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
    image: image2,
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
    image: image3,
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
    image: image4,
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
    image: image5,
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
        if (timeSpent === project.estimatedTime) {
          project.status = "Completed";
          project.timeSpent = timeSpent;
          project.isRunning = false;
          return;
        }
        project.timeSpent = timeSpent;
        project.isRunning = isRunning;
      }
    },
  },
});

export const { addProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;
