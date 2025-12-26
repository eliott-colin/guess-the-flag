import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { login, LoginResponse } from '../services/api';

export default function LoginTest() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [result, setResult] = useState<LoginResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const data = await login(email, password);
      setResult(data);
      Alert.alert('Succès', `Connexion réussie pour ${data.user.name}`);
    } catch (err: any) {
      setResult(null);
      Alert.alert('Erreur', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title={loading ? 'Connexion...' : 'Tester Login'} onPress={handleLogin} />
      {result && (
        <View style={styles.result}>
          <Text>Token : {result.token}</Text>
          <Text>Utilisateur : {result.user.name}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 5 },
  result: { marginTop: 20 },
});
