'use client'
import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import {
  SignInPage,
  type AuthProvider,
  type AuthResponse,
} from '@toolpad/core/SignInPage';
import { useTheme,ThemeProvider } from '@mui/material/styles';

const providers = [{ id: 'credentials', name: 'Email and password' }];
const BRANDING = {
    logo: (
      <img
        src="/master.png"
        alt="MUI logo"
        style={{ width:30,height: 40 }}
      />
    ),
    title: 'master card',
  };

const signIn: (
  provider: AuthProvider,
  formData?: FormData,
) => Promise<AuthResponse> | void = async (provider, formData) => {
  const promise = new Promise<AuthResponse>((resolve) => {
    setTimeout(() => {
      const email = formData?.get('email');
      const password = formData?.get('password');
      alert(
        `Signing in with "${provider.name}" and credentials: ${email}, ${password}`,
      );
      
      resolve({
        type: 'CredentialsSignin',
        error: 'Invalid credentials.',
      });
 
    }, 300);
  });
  return promise;
};

export default function NotificationsSignInPageError() {
  const theme = useTheme();
  return (
    
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
      />
    </AppProvider>
   
  );
}