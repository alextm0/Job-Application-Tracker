"use client";
import { useApplications } from "@/context/applicationContext";
import useDetectOutside from "@/hooks/useDetectOutside";
import React, { useEffect } from "react";

function Modal() {
  const {
    application,
    handleInput,
    createApplication,
    isEditing,
    closeModal,
    modalMode,
    activeApplication,
    updateApplication,
  } = useApplications();

  const ref = React.useRef(null);

  // Use the hook to detect clicks outside the modal
  useDetectOutside({
    ref,
    callback: () => {
      if (isEditing) {
        closeModal(); // Close modal if it is in add/edit mode
      }
    },
  });

  // Use effect to initialize the modal's fields with activeApplication data when editing
  useEffect(() => {
    if (modalMode === "edit" && activeApplication) {
      handleInput("setApplication")(activeApplication);
    }
  }, [modalMode, activeApplication]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Conditionally create or update application
    if (modalMode === "edit") {
      updateApplication(application);
    } else if (modalMode === "add") {
      createApplication(application);
    }

    closeModal(); // Close modal after processing
  };

  // Lock scrolling when the modal is open
  useEffect(() => {
    if (isEditing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isEditing]);

  return (
    isEditing && ( // Render modal only if editing (isEditing is true)
      <div className="fixed left-0 top-0 z-50 h-full w-full bg-[#333]/30 overflow-y-auto">
        <form
          className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md"
          onSubmit={handleSubmit}
          ref={ref}
        >
          {/* Form fields */}
          <div className="flex flex-col gap-1">
            <label htmlFor="company">Company</label>
            <input
              className="bg-[#F9F9F9] p-2 rounded-md border"
              type="text"
              id="company"
              placeholder="Company Name"
              name="company"
              value={application.company || ''}
              onChange={(e) => handleInput("company")(e)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="position">Position</label>
            <input
              className="bg-[#F9F9F9] p-2 rounded-md border"
              type="text"
              id="position"
              placeholder="Position"
              name="position"
              value={application.position || ''}
              onChange={(e) => handleInput("position")(e)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status">Status</label>
            <select
              className="bg-[#F9F9F9] p-2 rounded-md border cursor-pointer"
              name="status"
              value={application.status || 'applied'}
              onChange={(e) => handleInput("status")(e)}
            >
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="offered">Offered</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date">Date Applied</label>
            <input
              className="bg-[#F9F9F9] p-2 rounded-md border"
              type="date"
              name="date"
              value={application.date || ''}
              onChange={(e) => handleInput("date")(e)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Location</label>
            <input
              className="bg-[#F9F9F9] p-2 rounded-md border"
              type="text"
              name="location"
              value={application.location || ''}
              onChange={(e) => handleInput("location")(e)}
            />
          </div>

          {/* Submit button */}
          <div className="mt-8">
            <button
              type="submit"
              className={`text-white py-2 rounded-md w-full hover:bg-blue-500 transition duration-200 ease-in-out ${
                modalMode === "edit" ? "bg-blue-400" : "bg-green-400"
              }`}
            >
              {modalMode === "edit" ? "Update Application" : "Create Application"}
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default Modal;
