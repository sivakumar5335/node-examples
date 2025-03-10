
import StudentDetails from '@/components/StudentDetails';
import Box from '@mui/material/Box';
import { AppProvider } from '@toolpad/core/AppProvider';


export default function Students() {
  return (
    // <div className='flex justify-center items-center h-screen w-full'>
   <AppProvider>
      <StudentDetails></StudentDetails>
    </AppProvider>
    // </div>
  );
}
