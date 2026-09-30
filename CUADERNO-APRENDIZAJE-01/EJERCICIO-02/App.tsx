import { StyleSheet, Text, View } from 'react-native';

function WelcomeCard({ alt = false }: { alt?: boolean }) {
  return (
    <View style={[styles.card, alt && styles.cardAlt]}>
      <Text style={[styles.title, alt && styles.titleAlt]}>¡Bienvenido!</Text>
      <Text style={[styles.subtitle, alt && styles.subtitleAlt]}>Diseño de interfaces con React Native</Text>
      <View style={[styles.button, alt && styles.buttonAlt]}>
        <Text style={styles.buttonText}>{alt ? 'EXPLORAR' : 'COMENZAR'}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeCard />
      <WelcomeCard alt />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, gap: 18, backgroundColor: '#eef2f7' },
  card: { backgroundColor: 'white', padding: 28, borderRadius: 20 },
  cardAlt: { backgroundColor: '#fff7ed' },
  title: { fontSize: 30, fontWeight: 'bold', textAlign: 'center' },
  titleAlt: { color: '#9a3412' },
  subtitle: { marginTop: 10, fontSize: 16, color: '#64748b', textAlign: 'center' },
  subtitleAlt: { color: '#7c2d12' },
  button: { marginTop: 24, backgroundColor: '#2563eb', padding: 15, borderRadius: 12 },
  buttonAlt: { backgroundColor: '#ea580c' },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});