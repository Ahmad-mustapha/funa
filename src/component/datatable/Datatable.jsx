import React, { useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { IoFilter } from 'react-icons/io5'; // Import the IoFilter icon
// import { Select, MenuItem, FormControl, InputLabel, OutlinedInput } from '@mui/material';

// Custom Sort Icon Component
const CustomSortIcon = () => {
    return <IoFilter size={16} color="#4CAF50" style={{ marginLeft: '4px' }} />; // Adjust size, color, and spacing
}


const columns = [
  { field: 'name', headerName: 'Name', filterable: false},
  { field: 'registrationDate', headerName: 'Registration Date', filterable: false},
  { field: 'userId', headerName: 'User ID', disableColumnMenu: true, filterable: false},
  { field: 'email', headerName: 'Email',filterable: false},
  { field: 'phoneNumber', headerName: 'Phone Number', filterable: false},
  {
    field: 'action',
    headerName: 'Action',
    renderCell: (params) => <ActionCell params={params} />,
  },
  { field: 'kyc', headerName: 'KYC', filterable: false},
];

const rows = [
  {
    id: 1,
    name: 'Jon Snow',
    registrationDate: '2023-01-01',
    userId: 'U001',
    email: 'jon.snow@example.com',
    phoneNumber: '123-456-7890',
    action: 'Edit',
    kyc: 'Completed',
  },
  {
    id: 2,
    name: 'Cersei Lannister',
    registrationDate: '2023-01-05',
    userId: 'U002',
    email: 'cersei.lannister@example.com',
    phoneNumber: '123-555-7890',
    action: 'Edit',
    kyc: 'Pending',
  },
  {
    id: 3,
    name: 'Jaime Lannister',
    registrationDate: '2023-01-10',
    userId: 'U003',
    email: 'jaime.lannister@example.com',
    phoneNumber: '123-456-0000',
    action: 'Edit',
    kyc: 'Rejected',
  },
  {
    id: 4,
    name: 'Jaime Lannister',
    registrationDate: '2023-01-10',
    userId: 'U003',
    email: 'jaime.lannister@example.com',
    phoneNumber: '123-456-0000',
    action: 'Edit',
    kyc: 'Rejected',
  },
];

console.log(columns);
console.log(rows);

const paginationModel = { page: 0, pageSize: 5 };


const ActionCell = ({ params }) => {
    const [status, setStatus] = useState(params.row.kyc); // Set initial value from the row data
  
    const handleChange = (event) => {
      setStatus(event.target.value);
      // Here you can implement logic to update the user's status, e.g., call an API
    //   alert(`Updated status for ${params.row.name} to ${event.target.value}`);
    };
  
    return (
      <div className="relative">
        <select
          value={status}
          onChange={handleChange}
          className="w-full py-2 border rounded-md bg-gray-50 outline-none"
        >
          <option value="Verified">Verified</option>
          <option value="Unverified">Unverified</option>
        </select>
      </div>
    );
  };
const Datatable = () => {
  return (
    <div className="mt-20">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0,
            '& .MuiDataGrid-columnHeader:focus': {
            outline: 'none', // Remove the blue outline on th when focused
          },
         }}
        components={{
            ColumnSortedAscendingIcon: CustomSortIcon, // Use IoFilter for ascending sort
            ColumnSortedDescendingIcon: CustomSortIcon, // Use IoFilter for descending sort
          }}
      />
    </div>
  );
};

export default Datatable;
