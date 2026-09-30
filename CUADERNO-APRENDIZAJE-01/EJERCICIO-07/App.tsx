import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Noticias</Text>
      <NewsCard category="TECNOLOGÍA" title="La IA transforma el desarrollo de software" />
      <NewsCard category="MÓVIL" title="React Native continúa evolucionando" />
      <NewsCard category="CLOUD" title="Las arquitecturas cloud ganan protagonismo" />
      <NewsCard category="DISEÑO" title="Interfaces accesibles para todos" />
    </ScrollView>
  );
}
function NewsCard({ category, title }: { category: string; title: string }) {
  return <View style={styles.card}><Text style={styles.category}>{category}</Text><Text style={styles.title}>{title}</Text><Text style={styles.date}>Hace 2 horas</Text></View>;
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc', paddingHorizontal: 20 },
  header: { fontSize: 34, fontWeight: 'bold', marginTop: 60, marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 18, borderRadius: 18, marginBottom: 14 },
  category: { color: '#2563eb', fontSize: 12, fontWeight: 'bold' },
  title: { marginTop: 7, fontSize: 20, fontWeight: 'bold' },
  date: { marginTop: 10, color: '#94a3b8' },
});