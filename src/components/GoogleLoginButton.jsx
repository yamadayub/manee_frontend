import React, { useEffect } from 'react';

const GoogleLoginButton = () => {
  const clientId = '346461362462-a9jcr27ncm2f47v902t26j9vqo6hb82u.apps.googleusercontent.com';

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleSuccess,
      cancel_on_tap_outside: false,
      scope: 'email profile openid',
    });
    window.google.accounts.id.renderButton(
      document.getElementById('google-login-button'),
      {
        theme: 'outline',
        size: 'large',
        width: 240,
        height: 50,
      }
    );
    window.google.accounts.id.prompt();
    return () => {
      window.google.accounts.id.cancel();
    };
  }, []);

  const handleSuccess = (response) => {
    console.log('Google Login Success:', response);
    // Send Google access token to your server here
  };

  return <div id="google-login-button"></div>;
};

export default GoogleLoginButton;
