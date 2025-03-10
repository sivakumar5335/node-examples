import Button from '@/components/Button';
import CardList from '@/components/CardList';
import SignIn from '@/components/SignIn';
import Box from '@mui/material/Box';

import { AppProvider } from '@toolpad/core/AppProvider';


export default function Home() {
  return (

   <AppProvider>
   <Box
      sx={{
        py: 4,
        px: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        
      }}
    >
        <CardList ></CardList>
        </Box>
    </AppProvider>
    
  );
}
