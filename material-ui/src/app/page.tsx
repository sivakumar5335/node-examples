import SignIn from '@/components/SignIn';
import { AppProvider } from '@toolpad/core/AppProvider';


export default function Home() {
  return (
   <AppProvider>
    <div>
        <SignIn />
        </div>
    </AppProvider>
  );
}
