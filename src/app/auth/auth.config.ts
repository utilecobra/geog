interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'vWj9vOmZbYDNNvmxvAl78s41J0k8HmdV',
  CLIENT_DOMAIN: 'daisy-soft.eu.auth0.com',
  AUDIENCE: 'http://localhost:8083/api',
  REDIRECT: `http://localhost:4200/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles'
};
