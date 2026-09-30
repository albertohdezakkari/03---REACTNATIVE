import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      <Text style={styles.course}>Curso 2026/27</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f5f9' },
  title: { fontSize: 30, fontWeight: 'bold' },
  subtitle: { marginTop: 8, fontSize: 16, color: '#64748b' },
  course: { marginTop: 10, fontSize: 14, color: '#2563eb', fontWeight: '600' },
});