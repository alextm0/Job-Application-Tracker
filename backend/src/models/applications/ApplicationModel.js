// models/applications/ApplicationModel.js

import mongoose from 'mongoose';

const applicationSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: "Software Engineer",
  },
  status: {
    type: String,
    enum: ['applied', 'interviewing', 'rejected', 'offered'],
    default: 'applied',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    default: 'N/A',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, {
  timestamps: true,
});

const ApplicationModel = mongoose.model('Application', applicationSchema);
  
export default ApplicationModel;

