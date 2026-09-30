import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Introduce tus datos para continuar</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </Pressable>
      <Text style={styles.register}>¿No tienes cuenta? Regístrate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 28, backgroundColor: 'white' },
  title: { fontSize: 30, fontWeight: 'bold' },
  subtitle: { marginTop: 8, marginBottom: 28, color: '#64748b' },
  input: { backgroundColor: '#f1f5f9', padding: 16, borderRadius: 12, marginBottom: 14 },
  button: { marginTop: 8, backgroundColor: '#2563eb', padding: 16, borderRadius: 12 },
  buttonText: { textAlign: 'center', color: 'white', fontWeight: 'bold' },
  register: { textAlign: 'center', marginTop: 22, color: '#64748b' },
});