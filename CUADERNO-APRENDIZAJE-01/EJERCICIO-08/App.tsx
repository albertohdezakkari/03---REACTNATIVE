import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', icon: '⌨️', name: 'Teclado', price: '59 €' },
  { id: '2', icon: '🖱️', name: 'Ratón', price: '39 €' },
  { id: '3', icon: '🖥️', name: 'Monitor', price: '199 €' },
  { id: '4', icon: '🎧', name: 'Auriculares', price: '79 €' },
  { id: '5', icon: '💻', name: 'Portátil', price: '899 €' },
  { id: '6', icon: '📱', name: 'Móvil', price: '599 €' },
  { id: '7', icon: '🎮', name: 'Mando', price: '69 €' },
  { id: '8', icon: '⌚', name: 'Reloj', price: '129 €' },
];
export default function App() {
  return <View style={styles.container}><Text style={styles.title}>Productos</Text><FlatList data={products} numColumns={2} columnWrapperStyle={styles.row} keyExtractor={(item) => item.id} renderItem={({ item }) => <View style={styles.card}><Text style={styles.icon}>{item.icon}</Text><Text style={styles.name}>{item.name}</Text><Text style={styles.price}>{item.price}</Text></View>} /></View>;
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 60, backgroundColor: '#f8fafc' },
  title: { fontSize: 34, fontWeight: 'bold', marginBottom: 20 },
  row: { gap: 12 },
  card: { flex: 1, backgroundColor: 'white', padding: 18, borderRadius: 16, marginBottom: 12 },
  icon: { fontSize: 38 },
  name: { marginTop: 15, fontSize: 17, fontWeight: 'bold' },
  price: { marginTop: 6, color: '#2563eb', fontWeight: 'bold' },
});