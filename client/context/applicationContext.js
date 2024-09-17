import axios from "axios";
import React, { createContext, useEffect } from "react";
import { useUserContext } from "./userContext";
import toast from "react-hot-toast";

// Create the ApplicationsContext
const ApplicationsContext = createContext();

// Define the server URL
const serverUrl = "http://localhost:8000/api/v1";

export const ApplicationsProvider = ({ children }) => {
  const userId = useUserContext().user._id;

  // State management
  const [applications, setApplications] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [application, setApplication] = React.useState({}); // Currently edited application

  const [isEditing, setIsEditing] = React.useState(false);
  const [modalMode, setModalMode] = React.useState("");
  const [activeApplication, setActiveApplication] = React.useState(null);

  const openModalForAdd = () => {
    setModalMode("add");
    setIsEditing(true);
    setApplication({});
  }

  const openModalForEdit = (application) => {
    setModalMode("edit");
    setIsEditing(true);
    setApplication(application);
    setActiveApplication(application);
  }

  const closeModal = () => {
    setIsEditing(false);
    setModalMode("");
    setActiveApplication(null);
    setApplication({});
  }

  const handleInput = (name) => (e) => {
    if (name === "setApplication") {
      setApplication(e);
    } else {
      setApplication({ ...application, [name]: e.target.value });
    }
  };
  
  // Get all applications
  const getApplications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/applications`);
      setApplications(response.data);
    } catch (error) {
      console.log("Error getting applications", error);
    } finally {
      setLoading(false); // Ensure loading is set to false in the finally block
    }
  };

  // Get a specific application
  const getApplication = async (applicationId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${serverUrl}/application/${applicationId}`
      );

      setApplication(response.data);
    } catch (error) {
      console.log("Error getting application", error);
    }
    setLoading(false);
  };

  const createApplication = async (application) => {
    setLoading(true);
    try {
      const res = await axios.post(`${serverUrl}/application/create`, application);
      console.log('Application created', res.data);
      setApplications([...applications, res.data]);
      toast.success('Application created successfully');
    } catch (error) {
      console.error('Error creating application:', error); // Log the full error
      // Show more detailed error message
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setLoading(false); // Ensure loading is set to false in the finally block
    }
  };
  

  // Update an existing application
  const updateApplication = async (application) => {
    setLoading(true);
    try {
      const res = await axios.patch(
        `${serverUrl}/application/${application._id}`,
        application
      );

      // Update the application in the applications array
      const newApplications = applications.map((app) => {
        return app._id === res.data._id ? res.data : app;
      });

      toast.success("Application updated successfully");

      setApplications(newApplications);
    } catch (error) {
      console.log("Error updating application", error);
    }
    setLoading(false);
  };

  // Delete an application
  const deleteApplication = async (applicationId) => {
    setLoading(true);
    try {
      await axios.delete(`${serverUrl}/application/${applicationId}`);

      // Remove the application from the applications array
      const newApplications = applications.filter(
        (app) => app._id !== applicationId
      );

      setApplications(newApplications);
    } catch (error) {
      console.log("Error deleting application", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getApplications();
  }, [userId]);

  return (
    <ApplicationsContext.Provider
      value={{
        applications,
        loading,
        application,
        getApplication,
        createApplication,
        updateApplication,
        deleteApplication,
        setApplications,
        getApplications, // Ensure this is included here
        openModalForAdd,
        openModalForEdit,
        closeModal,
        handleInput,
        isEditing,
        modalMode,
        activeApplication,
      }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

// Custom hook to use the ApplicationsContext
export const useApplications = () => {
  return React.useContext(ApplicationsContext);
};
