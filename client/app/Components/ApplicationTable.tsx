import React from 'react';
import { EditIcon, SearchIcon, TrashIcon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Application } from '@/lib/types';
import { useApplications } from '@/context/applicationContext';
import { twMerge } from 'tailwind-merge';

interface ApplicationTableProps {
  applications: Application[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const ApplicationTable: React.FC<ApplicationTableProps> = ({ applications, searchTerm, setSearchTerm }) => {
  const { deleteApplication, openModalForEdit, handleInput } = useApplications();

  // Handle the delete button click
  const handleDelete = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this application?')) {
      deleteApplication(id);
    }
  };

  // Handle the edit button click
  const handleEdit = (application: Application) => {
    handleInput("setApplication")(application); // Set the current application using handleInput
    openModalForEdit(application); // Open the modal for editing
  };

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:mb-0">
            Recent Applications
          </CardTitle>
          <div className="relative w-full md:w-auto">
            <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search applications..."
              className="pl-8 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 w-full md:w-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Date Applied</TableHead>
                <TableHead className="text-right">Actions</TableHead> {/* Add Actions Header */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application: Application) => (
                <TableRow key={application._id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <TableCell className="font-medium">{application.company}</TableCell>
                  <TableCell>{application.position}</TableCell>
                  <TableCell>
                    <Badge className={twMerge(
                      (application.status === 'applied' && 'bg-blue-500 text-white') ||
                      (application.status === 'interviewing' && 'bg-yellow-500 text-white') ||
                      (application.status === 'offered' && 'bg-green-500 text-white') ||
                      (application.status === 'rejected' && 'bg-red-500 text-white')
                    )}>
                      {application.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{application.location}</TableCell>
                  <TableCell className="text-right">{new Date(application.date).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    {/* Delete button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => handleDelete(e, application._id)} // Call handleDelete with the application ID
                      className="text-red-600 hover:text-red-800"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                    
                    {/* Edit button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleEdit(application)} // Call handleEdit with the application object
                    >
                      <EditIcon className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationTable;
