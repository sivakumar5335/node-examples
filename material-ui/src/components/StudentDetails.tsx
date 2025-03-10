// 'use client';
// import * as React from 'react';
// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// import Stack from '@mui/material/Stack';


// export default function StudentDetails() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//   });

//   const handleChange = (event: { target: { name: any; value: any; }; }) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event: { preventDefault: () => void; }) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <Box
//       component="form"
//       noValidate
//       autoComplete="off"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '75ch' },
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'start',
//         padding: 4,

//       }}
//       onSubmit={handleSubmit}
//     >
//       <Box 
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'start',
//         padding: 4,
//         boxShadow: 1,
//       }}
//       >
//       <Typography sx={{ paddingBottom: 5, }} variant="h5" gutterBottom>
//         Student Details
//       </Typography>
//       <Stack spacing={2}>
       
//       </Stack>
//       </Box>

//       <Button type="submit" variant="contained" color="primary" sx={{ mt: 3,alignItems: 'center', justifyContent: 'center', }}>
//         Submit
//       </Button>
//     </Box>
//   );
// }
// //
'use client';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardList from './CardList';

export default function StudentDetails() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const [students, setStudents] = useState<any[]>([]);

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    setStudents([...students, formData]);
    setFormData({ name: '', phone: '', email: '', address: '' }); // Clear form
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
      }}
    >
    
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75ch' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          padding: 4,
          boxShadow: 1,
          mb: 4, // Add margin-bottom
        }}
        onSubmit={handleSubmit}
      >
        <Typography sx={{ paddingBottom: 5 }} variant="h5" gutterBottom>
          Student Details
        </Typography>
        <Stack spacing={2}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padddingLeft: 10, justifyContent: 'space-between', marginRight: 10 }}>
          <Typography variant="body1" sx={{ marginRight: 10 }}>Name:</Typography>


          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padddingLeft: 10, justifyContent: 'space-between', }}>
          <Typography variant="body1" sx={{ marginRight: 10 }}>Email:</Typography>


          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padddingLeft: 10, justifyContent: 'space-between', }}>

          <Typography variant="body1">Phone:</Typography>


          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />

        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padddingLeft: 10, justifyContent: 'space-between', }}>
          <Typography variant="body1">Address:</Typography>
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
        </Box>
        </Stack>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
          Submit
        </Button>
      </Box>

     
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        
      </Box>
    </Box>
  );
}