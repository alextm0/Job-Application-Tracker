// controllers/application/applicationController.js

import ApplicationModel from '../../models/applications/ApplicationModel.js';

import asyncHandler from 'express-async-handler';

// @desc    Create a new job application
// @route   POST /application/create
// @access  Private
export const createApplication = asyncHandler(async (req, res) => {
  try {
    const { company, position, status, date, location} = req.body;
    

    // Check for required fields
    if (!company || !position) {
      res.status(400).json({ message: "Company and position are required!" });
      return;
    }

    // Create a new application
    const application = new ApplicationModel({
      company,
      position,
      status,
      date,
      location,
      user: req.user._id,  // Assign the current user
    });

    // Save application to the database
    await application.save();

    res.status(201).json(application);
  } catch (error) {
    console.log("Error in createApplication: ", error.message);
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all job applications for the logged-in user
// @route   GET /applications
// @access  Private
export const getApplications = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;

    // Fetch applications for the logged-in user
    const applications = await ApplicationModel.find({ user: userId });

    res.status(200).json(applications);
  } catch (error) {
    console.log("Error in getApplications: ", error.message);
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get a specific job application by ID
// @route   GET /application/:id
// @access  Private
export const getApplication = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Please provide an application ID" });
      return;
    }

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ message: "Invalid application ID" });
      return;
    }

    // Find the application by ID
    const application = await ApplicationModel.findById(id);

    if (!application) {
      res.status(404).json({ message: "Application not found!" });
      return;
    }

    // Check if the current user owns this application
    if (!application.user.equals(userId)) {
      res.status(401).json({ message: "Not authorized!" });
      return;
    }

    res.status(200).json(application);
  } catch (error) {
    console.log("Error in getApplication: ", error.message);
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update a job application
// @route   PATCH /application/:id
// @access  Private
export const updateApplication = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    const { company, position, status, date, location } = req.body;

    if (!id) {
      res.status(400).json({ message: "Please provide an application ID" });
      return;
    }

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ message: "Invalid application ID" });
      return;
    }

    // Find the application by ID
    const application = await ApplicationModel.findById(id);

    if (!application) {
      res.status(404).json({ message: "Application not found!" });
      return;
    }

    // Check if the current user owns this application
    if (!application.user.equals(userId)) {
      res.status(401).json({ message: "Not authorized!" });
      return;
    }

    // Update the application fields if provided or keep the old values
    application.company = company || application.company;
    application.position = position || application.position;
    application.status = status || application.status;
    application.date = date || application.date;
    application.location = location || application.location;

    await application.save();

    res.status(200).json(application);
  } catch (error) {
    console.log("Error in updateApplication: ", error.message);
    res.status(500).json({ message: error.message });
  }
});


// @desc    Delete a job application
// @route   DELETE /application/:id
// @access  Private
export const deleteApplication = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Please provide an application ID" });
      return;
    }

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ message: "Invalid application ID" });
      return;
    }

    // Find the application by ID
    const application = await ApplicationModel.findById(id);

    if (!application) {
      res.status(404).json({ message: "Application not found!" });
      return;
    }

    // Check if the current user owns this application
    if (!application.user.equals(userId)) {
      res.status(401).json({ message: "Not authorized!" });
      return;
    }

    await ApplicationModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Application deleted successfully!" });
  } catch (error) {
    console.log("Error in deleteApplication: ", error.message);
    res.status(500).json({ message: error.message });
  }
});
