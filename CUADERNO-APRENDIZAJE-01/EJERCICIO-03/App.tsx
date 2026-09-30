import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.avatar} />
        <Text style={styles.name}>Laura Martínez</Text>
        <Text style={styles.job}>Diseñadora UX/UI</Text>
        <View style={styles.stats}>
          <Stat value="24" label="Proyectos" />
          <Stat value="1280" label="Seguidores" />
          <Stat value="86" label="Contactos" />
        </View>
      </View>
    </View>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.number}>{value}</Text>
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#e2e8f0' },
  card: { backgroundColor: 'white', padding: 28, borderRadius: 22, alignItems: 'center' },
  avatar: { width: 110, height: 110, borderRadius: 55 },
  name: { marginTop: 18, fontSize: 25, fontWeight: 'bold' },
  job: { marginTop: 4, color: '#64748b' },
  stats: { flexDirection: 'row', gap: 24, marginTop: 24 },
  stat: { alignItems: 'center' },
  number: { fontSize: 21, fontWeight: 'bold' },
});