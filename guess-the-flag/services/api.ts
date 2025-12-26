import Constants from 'expo-constants';

const API_URL = Constants.expoConfig?.extra?.apiUrl || 'http://localhost:3000';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}api/v1/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erreur lors de la connexion');
    }

    return response.json();
  } catch (err: any) {
    throw new Error(err.message || 'Erreur lors de la connexion');
  }
};
