import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hola,</Text><Text style={styles.user}>Mario 💪</Text>
      <View style={styles.goalCard}><Text style={styles.goalLabel}>META DE HOY</Text><Text style={styles.steps}>8.200</Text><Text style={styles.stepsLabel}>pasos de 10.000</Text><View style={styles.progressBackground}><View style={styles.progress} /></View><Text style={styles.percentage}>82% completado</Text></View>
      <Text style={styles.sectionTitle}>Tus métricas</Text>
      <View style={styles.grid}><StatCard icon="🔥" value="610" label="Calorías" /><StatCard icon="⏱" value="55 min" label="Actividad" /><StatCard icon="❤️" value="68" label="Pulsaciones" /><StatCard icon="📍" value="6,4 km" label="Distancia" /></View>
      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <View style={styles.activityRow}><Activity title="Carrera" detail="5,8 km · 31 min" /><Activity title="Fuerza" detail="24 min · tren superior" /></View>
    </ScrollView>
  );
}
function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) { return <View style={styles.statCard}><Text style={styles.statIcon}>{icon}</Text><Text style={styles.statValue}>{value}</Text><Text style={styles.statLabel}>{label}</Text></View>; }
function Activity({ title, detail }: { title: string; detail: string }) { return <View style={styles.activity}><Text style={styles.activityTitle}>{title}</Text><Text style={styles.activityDetail}>{detail}</Text></View>; }
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0fdf4', paddingHorizontal: 20 },
  greeting: { marginTop: 60, color: '#166534', fontSize: 17 }, user: { fontSize: 32, fontWeight: 'bold', marginBottom: 24, color: '#14532d' },
  goalCard: { backgroundColor: '#14532d', padding: 24, borderRadius: 22 }, goalLabel: { color: '#bbf7d0', fontWeight: 'bold' }, steps: { marginTop: 12, color: 'white', fontSize: 44, fontWeight: 'bold' }, stepsLabel: { color: '#dcfce7' },
  progressBackground: { height: 10, backgroundColor: '#166534', borderRadius: 5, marginTop: 24, overflow: 'hidden' }, progress: { width: '82%', height: '100%', backgroundColor: '#86efac' }, percentage: { color: '#dcfce7', marginTop: 9 },
  sectionTitle: { marginTop: 28, marginBottom: 12, fontSize: 22, fontWeight: 'bold' }, grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  statCard: { width: '48%', backgroundColor: 'white', borderRadius: 16, padding: 18 }, statIcon: { fontSize: 28 }, statValue: { marginTop: 12, fontSize: 21, fontWeight: 'bold' }, statLabel: { marginTop: 4, color: '#64748b' },
  activityRow: { flexDirection: 'row', gap: 12, marginBottom: 30 }, activity: { flex: 1, backgroundColor: 'white', padding: 16, borderRadius: 15 }, activityTitle: { fontWeight: 'bold' }, activityDetail: { marginTop: 4, color: '#64748b' },
});