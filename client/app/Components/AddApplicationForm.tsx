import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApplications } from '@/context/applicationContext'; // Import useApplications

const AddApplicationForm: React.FC = () => {
  const { createApplication, closeModal } = useApplications(); // Include closeModal

  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('applied');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newApplication = {
      _id: uuidv4(), // Generate a unique ID
      company,
      position,
      status,
      date: date || new Date().toISOString().split('T')[0], // Use current date if not provided
      location,
    };
    createApplication(newApplication); // Use context function to create application
    clearForm(); // Clear the form after submission
    closeModal(); // Close the modal after adding
  };

  // Clear form after submission
  const clearForm = () => {
    setCompany('');
    setPosition('');
    setStatus('applied');
    setDate('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-6">
      <div>
        <Label htmlFor="company">Company</Label>
        <Input 
          id="company" 
          value={company} 
          onChange={(e) => setCompany(e.target.value)} 
          required 
          className="w-full"
        />
      </div>
      <div>
        <Label htmlFor="position">Position</Label>
        <Input 
          id="position" 
          value={position} 
          onChange={(e) => setPosition(e.target.value)} 
          required 
          className="w-full"
        />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          aria-label="Application Status"
        >
          <option>applied</option>
          <option>interviewing</option>
          <option>offered</option>
          <option>rejected</option>
        </select>
      </div>
      <div>
        <Label htmlFor="date">Date Applied</Label>
        <Input 
          id="date" 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          className="w-full"
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input 
          id="location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required 
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
        Submit
      </Button>
    </form>
  );
};

export default AddApplicationForm;
function uuidv4() {
  throw new Error('Function not implemented.');
}

