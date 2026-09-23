const STORAGE_KEY = "cuaderno0ReactNativeExpoV1";

const setupContent = {
  title: "Configuración de React Native con Expo",
  objective: "Preparar un entorno mínimo y comprender qué herramienta utilizaremos antes de escribir interfaces.",
  command: "npx create-expo-app@latest cuaderno-rn --template blank-typescript"
};

const exercises = [
  {
    id: 1,
    title: "Mi primera pantalla",
    level: "Nivel 1 · Muy guiado",
    context: "Vas a crear la pantalla mínima de una app para comprobar que entiendes la estructura View → Text → StyleSheet.",
    objective: "Construir una pantalla centrada con un título y un subtítulo.",
    previous: ["Proyecto Expo funcionando", "Qué es un componente", "Diferencia entre JSX y estilos"],
    newConcepts: ["View", "Text", "StyleSheet", "flex: 1", "justifyContent", "alignItems"],
    visualType: "center",
    fundamentals: `
      <p><code>View</code> es un contenedor visual. <code>Text</code> muestra texto. Los estilos no se escriben como CSS tradicional: se definen como objetos JavaScript dentro de <code>StyleSheet.create()</code>.</p>
      <div class="flow">
        <span>View principal</span><b>→</b><span>Text título</span><b>→</b><span>Text subtítulo</span>
      </div>
    `,
    requirements: [
      "Usar un View como contenedor principal.",
      "Mostrar un título y un subtítulo.",
      "Centrar el contenido horizontal y verticalmente.",
      "Aplicar un color de fondo claro.",
      "El título debe destacar sobre el subtítulo."
    ],
    steps: [
      "Crea el componente App y devuelve un View.",
      "Añade dentro dos componentes Text.",
      "Crea StyleSheet.create({ ... }).",
      "Aplica flex: 1 al contenedor.",
      "Usa justifyContent y alignItems para centrar.",
      "Diferencia visualmente título y subtítulo."
    ],
    checkpoints: [
      "Veo los dos textos en pantalla.",
      "Los textos aparecen centrados.",
      "El título es visualmente más importante que el subtítulo."
    ],
    retrieval: "Antes de seguir: ¿qué dos propiedades necesitas para centrar los hijos de un View en ambos ejes?",
    check: {
      question: "¿Qué consigue `flex: 1` en el contenedor principal?",
      options: [
        "Hace que el texto sea flexible.",
        "Hace que el contenedor ocupe el espacio disponible.",
        "Centra automáticamente todos los elementos.",
        "Convierte el View en una fila."
      ],
      answer: 1,
      explanation: "`flex: 1` permite que el contenedor principal se expanda para ocupar el espacio disponible. Centrar requiere además `justifyContent` y `alignItems`."
    },
    reflection: "Explica con tus palabras la diferencia entre el componente `View` y el componente `Text`.",
    challenge: "Añade una tercera línea con el texto “Curso 2026/27” sin romper el centrado.",
    hints: [
      "Empieza por un único View que ocupe toda la pantalla.",
      "Recuerda: eje vertical → justifyContent; eje horizontal → alignItems."
    ],
    partial: `const styles = StyleSheet.create({
  container: {
    flex: 1,
    // completa el centrado
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});`,
    solution: `import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#64748b',
  },
});`,
    learned: ["Crear una pantalla con View y Text", "Aplicar estilos con StyleSheet", "Centrar contenido con Flexbox"]
  },
  {
    id: 2,
    title: "Tarjeta de bienvenida",
    level: "Nivel 2 · Guiado",
    context: "Una app educativa necesita una tarjeta de bienvenida que destaque el mensaje principal.",
    objective: "Comprender el Box Model de React Native mediante una tarjeta.",
    previous: ["View", "Text", "StyleSheet", "centrado"],
    newConcepts: ["padding", "margin", "borderRadius", "backgroundColor"],
    visualType: "card",
    fundamentals: `
      <p>El <strong>padding</strong> separa el contenido del borde interior. El <strong>margin</strong> separa un elemento de lo que tiene alrededor. <code>borderRadius</code> redondea las esquinas.</p>
      <div class="flow"><span>margin</span><b>→</b><span>borde</span><b>→</b><span>padding</span><b>→</b><span>contenido</span></div>
    `,
    requirements: [
      "Crear una tarjeta blanca sobre fondo gris claro.",
      "La tarjeta debe tener padding y esquinas redondeadas.",
      "Mostrar título, descripción y botón visual.",
      "El botón todavía no necesita ejecutar ninguna acción."
    ],
    steps: [
      "Reutiliza un contenedor principal con flex: 1.",
      "Añade un segundo View que actuará como tarjeta.",
      "Da padding y borderRadius a la tarjeta.",
      "Añade título y descripción.",
      "Crea un View con fondo azul para representar el botón."
    ],
    checkpoints: [
      "Distingo claramente fondo de pantalla y tarjeta.",
      "Hay espacio interior suficiente dentro de la tarjeta.",
      "El botón visual no toca los bordes de la tarjeta."
    ],
    retrieval: "Recupera lo anterior: ¿qué propiedad hace que el contenedor principal ocupe la pantalla?",
    check: {
      question: "¿Qué propiedad genera espacio ENTRE el contenido y el borde de una tarjeta?",
      options: ["margin", "padding", "gap", "flex"],
      answer: 1,
      explanation: "`padding` crea espacio interior. `margin` crea espacio exterior respecto a otros elementos."
    },
    reflection: "¿Por qué usarías `padding` en una tarjeta en lugar de `margin` para separar el texto del borde?",
    challenge: "Crea una segunda variante de la tarjeta con una paleta de colores diferente.",
    hints: [
      "Piensa en dos capas: fondo de pantalla y tarjeta.",
      "La separación interior de la tarjeta se consigue con padding."
    ],
    partial: `card: {
  backgroundColor: 'white',
  padding: 24,
  // falta redondear las esquinas
}`,
    solution: `import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#eef2f7',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});`,
    learned: ["Diferenciar margin y padding", "Crear una tarjeta visual", "Usar borderRadius y colores"]
  },
  {
    id: 3,
    title: "Ficha de perfil",
    level: "Nivel 3 · Guiado",
    context: "Una red profesional necesita mostrar una ficha compacta con avatar, nombre y estadísticas.",
    objective: "Introducir imágenes y distribución horizontal con Flexbox.",
    previous: ["Tarjetas", "padding", "margin", "tipografía"],
    newConcepts: ["Image", "flexDirection: 'row'", "gap", "avatar circular"],
    visualType: "profile",
    fundamentals: `
      <p><code>Image</code> necesita un <code>source</code> y unas dimensiones. Para colocar elementos en horizontal utilizamos <code>flexDirection: 'row'</code>.</p>
      <div class="flow"><span>columna por defecto</span><b>→</b><span>row</span><b>→</b><span>elementos en horizontal</span></div>
    `,
    requirements: [
      "Mostrar avatar, nombre y profesión.",
      "El avatar debe ser circular.",
      "Mostrar dos estadísticas en una fila.",
      "Mantener una jerarquía visual clara."
    ],
    steps: [
      "Crea una tarjeta centrada.",
      "Añade un Image con width y height.",
      "Convierte la imagen en círculo usando borderRadius.",
      "Añade nombre y profesión.",
      "Crea un View con flexDirection: 'row' para las estadísticas."
    ],
    checkpoints: [
      "La imagen tiene dimensiones y se muestra.",
      "La imagen aparece circular.",
      "Las estadísticas aparecen una al lado de otra."
    ],
    retrieval: "¿Qué diferencia había entre `padding` y `margin`?",
    check: {
      question: "¿Qué propiedad cambia la dirección de distribución de vertical a horizontal?",
      options: ["alignItems", "justifyContent", "flexDirection", "flexWrap"],
      answer: 2,
      explanation: "`flexDirection: 'row'` coloca los hijos en horizontal. Por defecto React Native utiliza `column`."
    },
    reflection: "Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?",
    challenge: "Añade una tercera estadística: “Seguidores 1280”.",
    hints: [
      "El borderRadius del avatar puede ser la mitad de su ancho/alto.",
      "La propiedad row se aplica al contenedor de las estadísticas, no a cada estadística."
    ],
    partial: `stats: {
  // coloca los hijos en horizontal
  gap: 32,
  marginTop: 24,
}`,
    solution: `import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Laura Martínez</Text>
        <Text style={styles.job}>Diseñadora UX/UI</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>24</Text>
            <Text>Proyectos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>1280</Text>
            <Text>Seguidores</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#e2e8f0',
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 22,
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    marginTop: 18,
    fontSize: 25,
    fontWeight: 'bold',
  },
  job: {
    marginTop: 4,
    color: '#64748b',
  },
  stats: {
    flexDirection: 'row',
    gap: 36,
    marginTop: 24,
  },
  stat: {
    alignItems: 'center',
  },
  number: {
    fontSize: 21,
    fontWeight: 'bold',
  },
});`,
    learned: ["Mostrar imágenes", "Crear avatares circulares", "Distribuir elementos en horizontal"]
  },
  {
    id: 4,
    title: "Pantalla de acceso",
    level: "Nivel 4 · Guiado",
    context: "Una aplicación necesita una pantalla de acceso clara y ordenada.",
    objective: "Construir visualmente un formulario sin trabajar todavía con estado ni validación.",
    previous: ["Box Model", "tipografía", "tarjetas", "Flexbox básico"],
    newConcepts: ["TextInput", "Pressable", "secureTextEntry"],
    visualType: "login",
    fundamentals: `
      <p><code>TextInput</code> representa una entrada de texto. <code>Pressable</code> representa una zona pulsable. En este cuaderno nos centramos en su <strong>diseño</strong>; todavía no gestionamos estado ni eventos.</p>
      <div class="callout info"><strong>Importante:</strong> crear un botón visual no significa que ya sepamos procesar el formulario. La lógica se estudiará después.</div>
    `,
    requirements: [
      "Título y texto introductorio.",
      "Campo de correo electrónico.",
      "Campo de contraseña con secureTextEntry.",
      "Botón Pressable con apariencia destacada.",
      "No usar useState ni validaciones."
    ],
    steps: [
      "Crea el contenedor y la jerarquía del encabezado.",
      "Añade un TextInput para correo.",
      "Añade otro TextInput con secureTextEntry.",
      "Aplica el mismo estilo a ambos campos.",
      "Añade un Pressable como botón visual."
    ],
    checkpoints: [
      "Veo dos campos diferenciados.",
      "La contraseña oculta los caracteres.",
      "El botón se distingue claramente de los inputs."
    ],
    retrieval: "¿Qué propiedad usaste para crear esquinas redondeadas?",
    check: {
      question: "¿Qué propiedad se utiliza en un TextInput para ocultar visualmente una contraseña?",
      options: ["password", "hiddenText", "secureTextEntry", "private"],
      answer: 2,
      explanation: "`secureTextEntry` indica al TextInput que oculte visualmente el texto introducido."
    },
    reflection: "¿Por qué en este ejercicio no necesitamos todavía `useState`?",
    challenge: "Añade debajo del botón un texto centrado: “¿No tienes cuenta? Regístrate”.",
    hints: [
      "Los dos inputs pueden reutilizar exactamente el mismo estilo.",
      "No necesitas onPress para practicar únicamente el diseño visual."
    ],
    partial: `<TextInput
  style={styles.input}
  placeholder="Contraseña"
  // propiedad para ocultar el texto
/>`,
    solution: `import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    color: '#64748b',
  },
  input: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  register: {
    textAlign: 'center',
    marginTop: 22,
    color: '#64748b',
  },
});`,
    learned: ["Diseñar inputs", "Representar un botón con Pressable", "Diferenciar interfaz y lógica"]
  },
  {
    id: 5,
    title: "Tarjeta de producto",
    level: "Nivel 5 · Combinación",
    context: "Una tienda móvil necesita presentar un producto con imagen, valoración, precio y llamada a la acción.",
    objective: "Combinar imagen, jerarquía tipográfica y distribución horizontal.",
    previous: ["Image", "Pressable", "row", "Box Model"],
    newConcepts: ["overflow: 'hidden'", "justifyContent: 'space-between'"],
    visualType: "product",
    fundamentals: `
      <p><code>overflow: 'hidden'</code> evita que una imagen sobresalga de las esquinas redondeadas de su tarjeta. <code>space-between</code> separa los elementos enviando uno a cada extremo.</p>
    `,
    requirements: [
      "Imagen a todo el ancho de la tarjeta.",
      "Categoría, nombre, valoración y precio.",
      "Precio y botón en la misma fila.",
      "Esquinas redondeadas también sobre la imagen."
    ],
    steps: [
      "Construye primero la tarjeta sin contenido.",
      "Añade la imagen en la parte superior.",
      "Crea un View interior para los textos.",
      "Ordena categoría, título y valoración.",
      "Crea una fila final con precio y botón."
    ],
    checkpoints: [
      "La imagen no sobresale de la tarjeta.",
      "Precio y botón están alineados en horizontal.",
      "La jerarquía permite identificar rápido producto y precio."
    ],
    retrieval: "¿Qué propiedad convierte un View en una fila?",
    check: {
      question: "¿Por qué puede ser útil `overflow: 'hidden'` en una tarjeta con imagen y borderRadius?",
      options: [
        "Para ocultar todo el contenido.",
        "Para recortar el contenido que sobresale del borde redondeado.",
        "Para hacer la imagen transparente.",
        "Para centrar el precio."
      ],
      answer: 1,
      explanation: "La imagen puede cubrir visualmente las esquinas. `overflow: 'hidden'` recorta lo que sale del contenedor redondeado."
    },
    reflection: "¿Qué información debería tener mayor jerarquía visual: categoría, nombre del producto o precio? Justifica tu decisión.",
    challenge: "Añade una etiqueta “OFERTA” situada antes del nombre del producto.",
    hints: [
      "Aplica overflow al contenedor que tiene borderRadius.",
      "El precio y el botón necesitan un contenedor común con flexDirection: 'row'."
    ],
    partial: `bottom: {
  flexDirection: 'row',
  // separa precio y botón a los extremos
  alignItems: 'center',
}`,
    solution: `import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://picsum.photos/600/400' }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.category}>TECNOLOGÍA</Text>
          <Text style={styles.title}>Auriculares Wireless</Text>
          <Text style={styles.rating}>⭐ 4.8</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>89,99 €</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AÑADIR</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 20,
  },
  category: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});`,
    learned: ["Componer una tarjeta de producto", "Usar space-between", "Controlar el recorte visual con overflow"]
  },
  {
    id: 6,
    title: "Dashboard de métricas",
    level: "Nivel 6 · Combinación",
    context: "Un panel de negocio debe mostrar cuatro indicadores de forma compacta en dos columnas.",
    objective: "Construir un grid sencillo con Flexbox.",
    previous: ["row", "tarjetas", "jerarquía", "padding"],
    newConcepts: ["flexWrap: 'wrap'", "width: '48%'"],
    visualType: "dashboard",
    fundamentals: `
      <p><code>flexWrap: 'wrap'</code> permite que los elementos salten a una nueva línea cuando no caben. Combinado con un ancho aproximado del 48% podemos crear dos columnas.</p>
    `,
    requirements: [
      "Mostrar cuatro métricas.",
      "Distribuirlas en dos columnas.",
      "Cada tarjeta debe tener etiqueta, valor y variación.",
      "La variación positiva debe distinguirse visualmente."
    ],
    steps: [
      "Crea el encabezado del dashboard.",
      "Crea el contenedor grid con row.",
      "Activa flexWrap.",
      "Da aproximadamente 48% de ancho a cada tarjeta.",
      "Repite la estructura para las cuatro métricas."
    ],
    checkpoints: [
      "Hay dos tarjetas por fila.",
      "Las cuatro tarjetas mantienen el mismo tamaño visual.",
      "Los valores principales destacan."
    ],
    retrieval: "¿Qué hacía `space-between` en el ejercicio anterior?",
    check: {
      question: "¿Qué ocurre cuando usamos `flexWrap: 'wrap'` en un contenedor horizontal?",
      options: [
        "Los elementos se hacen invisibles.",
        "Los elementos pueden pasar a una línea nueva.",
        "Los elementos se centran.",
        "El contenedor se vuelve vertical."
      ],
      answer: 1,
      explanation: "`flexWrap: 'wrap'` permite repartir los hijos en varias líneas manteniendo la dirección principal."
    },
    reflection: "¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?",
    challenge: "Añade una quinta tarjeta. Observa dónde se coloca y explica por qué.",
    hints: [
      "Necesitas row y wrap en el mismo contenedor.",
      "Deja algo de espacio para el gap; por eso 48% resulta útil."
    ],
    partial: `grid: {
  flexDirection: 'row',
  // permite nuevas filas
  gap: 12,
},
card: {
  width: '48%',
}`,
    solution: `import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Resumen del negocio</Text>

      <View style={styles.grid}>
        <Metric title="Ventas" value="12.450 €" change="+12%" />
        <Metric title="Clientes" value="348" change="+8%" />
        <Metric title="Pedidos" value="1.024" change="+18%" />
        <Metric title="Conversión" value="7,4%" change="+2%" />
      </View>
    </View>
  );
}

function Metric({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.change}>{change}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#64748b',
    marginTop: 5,
    marginBottom: 28,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
  },
  label: {
    color: '#64748b',
  },
  value: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 8,
  },
  change: {
    color: '#16a34a',
    fontWeight: 'bold',
    marginTop: 8,
  },
});`,
    learned: ["Crear un grid con Flexbox", "Usar flexWrap", "Organizar métricas visuales"]
  },
  {
    id: 7,
    title: "Feed de noticias",
    level: "Nivel 7 · Nuevo patrón",
    context: "Una aplicación de noticias necesita mostrar más contenido del que cabe en la pantalla y repetir una misma tarjeta.",
    objective: "Introducir ScrollView y el concepto de componente reutilizable.",
    previous: ["Tarjetas", "Image", "Box Model", "jerarquía"],
    newConcepts: ["ScrollView", "componente reutilizable", "props básicas"],
    visualType: "news",
    fundamentals: `
      <p><code>ScrollView</code> permite desplazar contenido que supera la pantalla. Un componente reutilizable evita copiar la misma estructura visual varias veces.</p>
      <div class="flow"><span>NewsCard</span><b>+</b><span>props</span><b>→</b><span>misma estructura, distinto contenido</span></div>
    `,
    requirements: [
      "Usar ScrollView como contenedor desplazable.",
      "Crear un componente NewsCard.",
      "NewsCard recibe al menos título y categoría.",
      "Mostrar tres noticias con contenidos diferentes."
    ],
    steps: [
      "Sustituye el contenedor principal por ScrollView.",
      "Diseña una única tarjeta de noticia.",
      "Extrae esa tarjeta a la función NewsCard.",
      "Define las props necesarias.",
      "Reutiliza NewsCard tres veces."
    ],
    checkpoints: [
      "Puedo desplazar la pantalla.",
      "Solo existe una definición del diseño NewsCard.",
      "Las tres tarjetas muestran contenidos distintos."
    ],
    retrieval: "¿Qué propiedades usarías para hacer una imagen de avatar circular?",
    check: {
      question: "¿Cuál es la principal ventaja de extraer `NewsCard` como componente?",
      options: [
        "Hace que ScrollView sea más rápido siempre.",
        "Evita duplicar la estructura visual y permite reutilizarla.",
        "Convierte automáticamente los datos en una API.",
        "Elimina la necesidad de estilos."
      ],
      answer: 1,
      explanation: "Un componente encapsula una estructura que puede reutilizarse con datos distintos, reduciendo duplicación."
    },
    reflection: "¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?",
    challenge: "Añade una cuarta noticia sin duplicar la definición del componente.",
    hints: [
      "Primero consigue una tarjeta funcionando; después extrae el componente.",
      "Las props son los datos variables que recibe el componente."
    ],
    partial: `function NewsCard({ category, title }: { category: string; title: string }) {
  return (
    <View style={styles.card}>
      {/* completa aquí */}
    </View>
  );
}`,
    solution: `import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Noticias</Text>

      <NewsCard category="TECNOLOGÍA" title="La IA transforma el desarrollo de software" />
      <NewsCard category="MÓVIL" title="React Native continúa evolucionando" />
      <NewsCard category="CLOUD" title="Las arquitecturas cloud ganan protagonismo" />
    </ScrollView>
  );
}

function NewsCard({ category, title }: { category: string; title: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>Hace 2 horas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },
  category: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 7,
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 10,
    color: '#94a3b8',
  },
});`,
    learned: ["Crear contenido desplazable", "Extraer componentes", "Pasar datos sencillos mediante props"]
  },
  {
    id: 8,
    title: "Catálogo con FlatList",
    level: "Nivel 8 · Datos + interfaz",
    context: "Un catálogo tiene varios productos almacenados como datos. Queremos construir la interfaz a partir de esa colección.",
    objective: "Separar datos y presentación utilizando un array y FlatList.",
    previous: ["Componentes reutilizables", "props", "grid visual"],
    newConcepts: ["array de datos", "FlatList", "renderItem", "keyExtractor"],
    visualType: "catalog",
    fundamentals: `
      <p><code>FlatList</code> recibe datos mediante <code>data</code> y decide cómo dibujar cada elemento con <code>renderItem</code>. Cada elemento debe tener una clave estable mediante <code>keyExtractor</code>.</p>
      <div class="flow"><span>products[]</span><b>→</b><span>FlatList</span><b>→</b><span>renderItem</span><b>→</b><span>tarjeta</span></div>
    `,
    requirements: [
      "Definir al menos seis productos en un array.",
      "Usar FlatList.",
      "Mostrar dos columnas.",
      "Cada producto muestra nombre, icono y precio.",
      "Usar keyExtractor."
    ],
    steps: [
      "Crea el array products fuera del componente.",
      "Añade FlatList y pásale data={products}.",
      "Define keyExtractor.",
      "Implementa renderItem.",
      "Configura numColumns={2}."
    ],
    checkpoints: [
      "Los datos están fuera del JSX repetido.",
      "FlatList genera todas las tarjetas.",
      "La cuadrícula tiene dos columnas."
    ],
    retrieval: "¿Qué problema resolvía un componente reutilizable en el ejercicio anterior?",
    check: {
      question: "En FlatList, ¿qué propiedad contiene la colección que se va a mostrar?",
      options: ["items", "source", "data", "values"],
      answer: 2,
      explanation: "`data` recibe la colección. `renderItem` define cómo se representa cada elemento."
    },
    reflection: "¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?",
    challenge: "Añade dos productos al array y comprueba que la interfaz se actualiza sin crear JSX adicional.",
    hints: [
      "Piensa primero en los datos: id, nombre, precio e icono.",
      "renderItem recibe un objeto del que puedes extraer `item`."
    ],
    partial: `<FlatList
  data={products}
  numColumns={2}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    // construye la tarjeta
  )}
/>`,
    solution: `import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', icon: '⌨️', name: 'Teclado', price: '59 €' },
  { id: '2', icon: '🖱️', name: 'Ratón', price: '39 €' },
  { id: '3', icon: '🖥️', name: 'Monitor', price: '199 €' },
  { id: '4', icon: '🎧', name: 'Auriculares', price: '79 €' },
  { id: '5', icon: '💻', name: 'Portátil', price: '899 €' },
  { id: '6', icon: '📱', name: 'Móvil', price: '599 €' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
  },
  icon: {
    fontSize: 38,
  },
  name: {
    marginTop: 15,
    fontSize: 17,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 6,
    color: '#2563eb',
    fontWeight: 'bold',
  },
});`,
    learned: ["Separar datos y presentación", "Crear listas con FlatList", "Usar renderItem y keyExtractor"]
  },
  {
    id: 9,
    title: "Interfaz bancaria",
    level: "Nivel 9 · Resolución autónoma",
    context: "Una app bancaria debe mostrar saldo, acciones rápidas y movimientos recientes sin perder claridad visual.",
    objective: "Combinar estructuras reutilizables, filas, tarjetas y jerarquía en una pantalla realista.",
    previous: ["ScrollView", "componentes", "props", "Flexbox", "tarjetas"],
    newConcepts: ["composición de componentes"],
    visualType: "bank",
    fundamentals: `
      <p>La <strong>composición</strong> consiste en construir una pantalla grande a partir de piezas pequeñas y reutilizables. Ya conoces todas las herramientas principales de este ejercicio.</p>
      <div class="flow"><span>Pantalla</span><b>→</b><span>Saldo</span><b>+</b><span>Acciones</span><b>+</b><span>Movement</span></div>
    `,
    requirements: [
      "Mostrar saludo y nombre.",
      "Crear tarjeta de saldo destacada.",
      "Mostrar tres acciones rápidas en una fila.",
      "Crear un componente Movement reutilizable.",
      "Mostrar al menos cuatro movimientos."
    ],
    steps: [
      "Divide primero el problema en bloques visuales.",
      "Construye la tarjeta de saldo.",
      "Construye la fila de acciones.",
      "Diseña un movimiento.",
      "Extrae Movement a componente.",
      "Reutilízalo varias veces."
    ],
    checkpoints: [
      "La información bancaria más importante se detecta primero.",
      "Las acciones rápidas están alineadas.",
      "Los movimientos reutilizan una única estructura."
    ],
    retrieval: "¿Qué información se pasa a un componente mediante props?",
    check: {
      question: "Si cuatro movimientos comparten estructura pero cambian título, fecha e importe, ¿qué opción es más mantenible?",
      options: [
        "Copiar cuatro bloques completos.",
        "Crear un componente Movement y pasar datos mediante props.",
        "Crear cuatro StyleSheet distintos.",
        "Usar cuatro ScrollView."
      ],
      answer: 1,
      explanation: "El componente reutilizable conserva una única estructura y recibe por props los datos que cambian."
    },
    reflection: "¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.",
    challenge: "Añade un movimiento positivo y haz que el contenido siga siendo legible sin cambiar la estructura del componente.",
    hints: [
      "Empieza dibujando mentalmente tres zonas: cabecera, saldo, movimientos.",
      "Busca repetición: ahí suele existir una buena oportunidad para crear un componente."
    ],
    partial: `function Movement({ title, date, amount }: MovementProps) {
  return (
    <View style={styles.movement}>
      {/* estructura reutilizable */}
    </View>
  );
}`,
    solution: `import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
        <Text style={styles.account}>ES00 •••• •••• 7821</Text>
      </View>

      <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      <Movement title="Supermercado" date="Hoy" amount="-42,80 €" />
      <Movement title="Cafetería" date="Ayer" amount="-3,20 €" />
      <Movement title="Nómina" date="20 septiembre" amount="+2.340 €" />
      <Movement title="Electricidad" date="18 septiembre" amount="-74,20 €" />
    </ScrollView>
  );
}

type MovementProps = {
  title: string;
  date: string;
  amount: string;
};

function Movement({ title, date, amount }: MovementProps) {
  return (
    <View style={styles.movement}>
      <View style={styles.movementInfo}>
        <Text style={styles.movementTitle}>{title}</Text>
        <Text style={styles.movementDate}>{date}</Text>
      </View>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  hello: {
    marginTop: 60,
    color: '#64748b',
  },
  user: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  balanceCard: {
    backgroundColor: '#111827',
    borderRadius: 22,
    padding: 24,
  },
  balanceLabel: {
    color: '#cbd5e1',
  },
  balance: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 8,
  },
  account: {
    color: '#94a3b8',
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  movementInfo: {
    flex: 1,
  },
  movementTitle: {
    fontWeight: 'bold',
  },
  movementDate: {
    marginTop: 3,
    color: '#94a3b8',
  },
  amount: {
    fontWeight: 'bold',
  },
});`,
    learned: ["Componer una pantalla compleja", "Detectar repetición", "Crear componentes mantenibles"]
  },
  {
    id: 10,
    title: "Proyecto final: Fitness",
    level: "Nivel 10 · Integrador",
    context: "Debes diseñar un dashboard fitness que combine objetivo diario, métricas y actividad reciente.",
    objective: "Integrar de forma autónoma todo el diseño visual trabajado en el cuaderno.",
    previous: ["Todo el cuaderno"],
    newConcepts: ["Integración y toma de decisiones visuales"],
    visualType: "fitness",
    fundamentals: `
      <p>En este ejercicio no aparece una técnica nueva importante. El objetivo es <strong>recuperar y combinar</strong> lo aprendido: jerarquía, tarjetas, Flexbox, ScrollView, componentes y datos.</p>
      <div class="callout warning"><strong>Regla:</strong> intenta resolver primero con tus propios criterios. Usa las ayudas únicamente si te bloqueas.</div>
    `,
    requirements: [
      "Saludo y nombre del usuario.",
      "Tarjeta principal con objetivo diario de pasos.",
      "Barra de progreso visual.",
      "Cuatro métricas en dos columnas.",
      "Componente reutilizable para las métricas.",
      "Sección de actividad reciente.",
      "Diseño coherente y responsive dentro de una pantalla móvil."
    ],
    steps: [
      "Identifica las secciones antes de programar.",
      "Construye la tarjeta principal.",
      "Añade la barra de progreso usando dos View.",
      "Construye una métrica y conviértela en componente.",
      "Crea el grid 2×2.",
      "Añade actividades recientes.",
      "Revisa jerarquía, espaciados y consistencia."
    ],
    checkpoints: [
      "La tarjeta de objetivo diario funciona visualmente.",
      "La barra representa aproximadamente el 75%.",
      "Las métricas forman un grid 2×2.",
      "El componente de métrica es reutilizable.",
      "La pantalla puede desplazarse si el contenido supera la altura."
    ],
    retrieval: "Enumera sin mirar tres herramientas que ya sabes utilizar para organizar una interfaz compleja.",
    check: {
      question: "En el proyecto final, ¿qué enfoque muestra mejor lo aprendido?",
      options: [
        "Copiar toda la solución antes de empezar.",
        "Dividir la interfaz en bloques, resolver cada uno y reutilizar componentes.",
        "Crear un único View con todo el contenido.",
        "Añadir nuevas librerías para evitar Flexbox."
      ],
      answer: 1,
      explanation: "Dividir, componer y reutilizar reduce complejidad y obliga a aplicar los conceptos ya aprendidos."
    },
    reflection: "¿Qué decisiones visuales has tomado por tu cuenta y qué conceptos de ejercicios anteriores has recuperado?",
    challenge: "Personaliza completamente la interfaz: cambia paleta, textos, métricas y al menos una distribución sin introducir librerías externas.",
    hints: [
      "Divide: cabecera → objetivo → resumen → actividad.",
      "La barra de progreso puede ser un View gris que contiene otro View verde con width: '75%'."
    ],
    partial: `progressBackground: {
  height: 10,
  backgroundColor: '#374151',
  borderRadius: 5,
  overflow: 'hidden',
},
progress: {
  width: '75%',
  height: '100%',
  // falta el color de progreso
}`,
    solution: `import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Laura 👋</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>7.540</Text>
        <Text style={styles.stepsLabel}>pasos de 10.000</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>75% completado</Text>
      </View>

      <Text style={styles.sectionTitle}>Resumen de hoy</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="520" label="Calorías" />
        <StatCard icon="⏱" value="48 min" label="Actividad" />
        <StatCard icon="❤️" value="72" label="Pulsaciones" />
        <StatCard icon="📍" value="5,6 km" label="Distancia" />
      </View>

      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <Activity title="Carrera" detail="5,2 km · 28 min" />
      <Activity title="Bicicleta" detail="12 km · 42 min" />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ title, detail }: { title: string; detail: string }) {
  return (
    <View style={styles.activity}>
      <View>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#64748b',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  goalCard: {
    backgroundColor: '#111827',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: '#94a3b8',
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#cbd5e1',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#374151',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '75%',
    height: '100%',
    backgroundColor: '#22c55e',
  },
  percentage: {
    color: '#cbd5e1',
    marginTop: 9,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
  },
  statIcon: {
    fontSize: 28,
  },
  statValue: {
    marginTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
  },
  statLabel: {
    marginTop: 4,
    color: '#64748b',
  },
  activity: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
  },
  activityTitle: {
    fontWeight: 'bold',
  },
  activityDetail: {
    marginTop: 4,
    color: '#64748b',
  },
});`,
    learned: ["Integrar conceptos", "Diseñar por bloques", "Tomar decisiones visuales con autonomía"]
  }
];

const quiz = [
  {
    q: "¿Qué componente se utiliza normalmente como contenedor visual básico en React Native?",
    options: ["div", "View", "Container", "Section"],
    answer: 1,
    explanation: "React Native no utiliza HTML. `View` es el contenedor visual básico."
  },
  {
    q: "¿Qué componente muestra texto en React Native?",
    options: ["Label", "Paragraph", "Text", "Span"],
    answer: 2,
    explanation: "El texto visible debe estar dentro de un componente `Text`."
  },
  {
    q: "¿Qué consigue `flex: 1` en un contenedor principal?",
    options: ["Ocupa el espacio disponible", "Crea una fila", "Cambia el color", "Añade padding"],
    answer: 0,
    explanation: "`flex: 1` permite al elemento expandirse para ocupar el espacio disponible."
  },
  {
    q: "¿Qué propiedad centra normalmente a los hijos en el eje principal?",
    options: ["alignItems", "justifyContent", "textAlign", "margin"],
    answer: 1,
    explanation: "`justifyContent` distribuye los hijos a lo largo del eje principal."
  },
  {
    q: "Con `flexDirection: 'column'`, ¿cuál es normalmente el eje principal?",
    options: ["Horizontal", "Vertical", "Diagonal", "No existe"],
    answer: 1,
    explanation: "Con `column`, el eje principal es vertical."
  },
  {
    q: "¿Qué diferencia esencial existe entre padding y margin?",
    options: ["No existe", "Padding es interior y margin exterior", "Margin es interior y padding exterior", "Ambos cambian el tamaño de letra"],
    answer: 1,
    explanation: "Padding separa el contenido del borde interior; margin separa el elemento de otros elementos."
  },
  {
    q: "¿Qué combinación convierte una imagen de 100×100 en circular?",
    options: ["borderRadius: 10", "borderRadius: 50", "padding: 50", "flex: 50"],
    answer: 1,
    explanation: "Un radio igual a la mitad del ancho/alto produce un círculo."
  },
  {
    q: "¿Qué propiedad coloca los hijos en horizontal?",
    options: ["flexDirection: 'row'", "display: 'inline'", "orientation: 'horizontal'", "justifyContent: 'row'"],
    answer: 0,
    explanation: "En React Native usamos `flexDirection: 'row'`."
  },
  {
    q: "¿Qué componente es adecuado para introducir texto?",
    options: ["Input", "TextField", "TextInput", "FormInput"],
    answer: 2,
    explanation: "`TextInput` es el componente de entrada de texto."
  },
  {
    q: "¿Qué propiedad de TextInput oculta visualmente una contraseña?",
    options: ["secureTextEntry", "passwordMode", "hidden", "privateText"],
    answer: 0,
    explanation: "`secureTextEntry` muestra la entrada como contenido protegido."
  },
  {
    q: "¿Qué componente utilizarías como zona pulsable en los ejercicios del cuaderno?",
    options: ["ButtonView", "Pressable", "Click", "TouchableDiv"],
    answer: 1,
    explanation: "`Pressable` representa una zona que puede responder a pulsaciones."
  },
  {
    q: "¿Para qué utilizamos `overflow: 'hidden'` en una tarjeta con imagen?",
    options: ["Para centrarla", "Para recortar contenido que sobresale", "Para ocultar el texto", "Para hacer scroll"],
    answer: 1,
    explanation: "Resulta útil para respetar visualmente los bordes redondeados del contenedor."
  },
  {
    q: "¿Qué hace `justifyContent: 'space-between'` en una fila?",
    options: ["Superpone elementos", "Los separa hacia los extremos", "Los hace circulares", "Los convierte en columnas"],
    answer: 1,
    explanation: "Distribuye el espacio entre los hijos, dejando el primero y último hacia los extremos."
  },
  {
    q: "¿Qué propiedad permite que elementos de una fila pasen a otra línea?",
    options: ["flexWrap: 'wrap'", "overflow: 'next'", "flex: 2", "rowBreak: true"],
    answer: 0,
    explanation: "`flexWrap: 'wrap'` permite múltiples líneas."
  },
  {
    q: "¿Cuándo es especialmente apropiado usar ScrollView?",
    options: ["Cuando queremos que el contenido pueda desplazarse", "Solo para imágenes", "Solo para formularios", "Para sustituir StyleSheet"],
    answer: 0,
    explanation: "ScrollView permite desplazar contenido mayor que la pantalla."
  },
  {
    q: "¿Cuál es una ventaja principal de crear un componente reutilizable?",
    options: ["Evitar repetir estructura", "Eliminar JavaScript", "No necesitar estilos", "Evitar cualquier dato"],
    answer: 0,
    explanation: "Permite mantener una sola estructura y reutilizarla con datos diferentes."
  },
  {
    q: "En una FlatList, ¿qué prop recibe la colección?",
    options: ["items", "values", "data", "collection"],
    answer: 2,
    explanation: "`data` contiene la colección que FlatList representa."
  },
  {
    q: "¿Para qué sirve `renderItem` en FlatList?",
    options: ["Para definir cómo se dibuja cada elemento", "Para crear el array", "Para añadir CSS", "Para navegar"],
    answer: 0,
    explanation: "`renderItem` recibe cada elemento y devuelve su representación visual."
  },
  {
    q: "Si tres tarjetas tienen la misma estructura pero cambian sus datos, ¿qué enfoque es más mantenible?",
    options: ["Copiar tres veces el JSX", "Crear un componente y pasar props", "Crear tres apps", "Usar HTML"],
    answer: 1,
    explanation: "La reutilización mediante componentes y props reduce duplicación."
  },
  {
    q: "Antes de programar una interfaz compleja, ¿qué estrategia es más adecuada?",
    options: ["Añadir librerías al azar", "Dividirla en bloques visuales y resolverlos por partes", "Escribir todo en un único Text", "Copiar una solución sin analizarla"],
    answer: 1,
    explanation: "Descomponer el problema reduce carga cognitiva y facilita detectar componentes reutilizables."
  }
];

const defaultState = {
  screen: "intro",
  completed: [],
  code: {},
  reflections: {},
  checkpoints: {},
  exerciseAnswers: {},
  quizAnswers: {},
  quizCorrected: false,
  quizScore: null
};

let state = loadState();
let saveTimer;

const appContent = document.getElementById("appContent");
const exerciseMenu = document.getElementById("exerciseMenu");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const completeButton = document.getElementById("completeButton");
const sidebar = document.getElementById("sidebar");

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...(saved || {}) };
  } catch {
    return { ...defaultState };
  }
}

function saveState(show = false) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const status = document.getElementById("saveStatus");
  status.textContent = "Guardando…";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    status.textContent = "Guardado";
    if (show) toast("Progreso guardado");
  }, 280);
}

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function codeBlock(code) {
  return `
    <div class="code-block">
      <button class="copy-code" data-copy-code>Copiar</button>
      <pre><code>${escapeHtml(code)}</code></pre>
    </div>
  `;
}

function buildMenu() {
  exerciseMenu.innerHTML = exercises.map(ex => `
    <button class="nav-item ${state.completed.includes(ex.id) ? "completed" : ""}" data-screen="exercise-${ex.id}">
      <span class="nav-index">${String(ex.id).padStart(2, "0")}</span>
      <span>
        <strong>${ex.title}</strong>
        <small>${ex.level}</small>
      </span>
    </button>
  `).join("");
}

function updateProgress() {
  const count = state.completed.length;
  const percent = Math.round((count / exercises.length) * 100);
  document.getElementById("progressBar").style.width = `${percent}%`;
  document.getElementById("progressText").textContent = `${percent}%`;
  document.getElementById("progressDetail").textContent = `${count} de ${exercises.length} ejercicios completados`;
}

function setActiveMenu() {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.screen === state.screen);
  });
}

function setHeader(eyebrow, title) {
  document.getElementById("screenEyebrow").textContent = eyebrow;
  document.getElementById("screenTitle").textContent = title;
}

function renderIntro() {
  setHeader("CUADERNO DE APRENDIZAJE", "React Native + Expo");
  appContent.innerHTML = `
    <section class="hero">
      <span class="eyebrow">CUADERNO 0 · CONFIGURACIÓN + DISEÑO VISUAL</span>
      <h1>React Native con Expo</h1>
      <p>No vas a empezar memorizando código. Vas a construir interfaces pequeñas, comprobar decisiones visuales y recuperar lo aprendido en contextos cada vez más completos.</p>
      <div class="hero-badges">
        <span class="badge">10 ejercicios</span>
        <span class="badge">20 preguntas finales</span>
        <span class="badge">Guardado automático</span>
        <span class="badge">TypeScript</span>
      </div>
    </section>

    <section class="section">
      <div class="section-label">ORIENTACIÓN</div>
      <h2>¿Qué vas a aprender?</h2>
      <div class="learning-grid">
        <div class="mini-card"><strong>Preparar Expo</strong><small>Crear y ejecutar un proyecto mínimo.</small></div>
        <div class="mini-card"><strong>Diseñar interfaces</strong><small>Traducir una idea visual a View, Text, Image y estilos.</small></div>
        <div class="mini-card"><strong>Organizar</strong><small>Usar Flexbox, tarjetas, listas y componentes reutilizables.</small></div>
      </div>
    </section>

    <section class="section">
      <div class="section-label">ANTES DE PROGRAMAR</div>
      <h2>Decisión técnica del Cuaderno 0</h2>
      <p>Expo ofrece una plantilla por defecto con navegación. Como todavía no necesitamos navegación, utilizaremos la plantilla <strong>blank-typescript</strong>. Así trabajaremos únicamente con los conceptos que realmente corresponden a esta unidad.</p>
      <div class="callout success"><strong>Objetivo:</strong> reducir carga cognitiva. En este cuaderno nos centraremos en diseño visual, no en rutas.</div>
    </section>

    <section class="section">
      <div class="section-label">CONFIGURACIÓN</div>
      <h2>1. Comprueba Node.js</h2>
      <p>En una terminal:</p>
      ${codeBlock("node --version\\nnpm --version")}
      <p>Si ambos comandos muestran una versión, puedes continuar.</p>

      <h3>2. Crea el proyecto</h3>
      ${codeBlock(setupContent.command)}
      <p>Entra en la carpeta:</p>
      ${codeBlock("cd cuaderno-rn")}

      <h3>3. Arranca Expo</h3>
      ${codeBlock("npx expo start")}
      <p>Expo mostrará un QR. Puedes abrir el proyecto en Expo Go o utilizar la opción web disponible en el terminal.</p>

      <h3>4. Archivo principal</h3>
      <p>Con la plantilla <code>blank-typescript</code> trabajaremos principalmente en:</p>
      ${codeBlock("App.tsx")}
    </section>

    <section class="section">
      <div class="section-label">MODELO MENTAL</div>
      <h2>De diseño a código</h2>
      <div class="flow">
        <span>¿Qué veo?</span><b>→</b>
        <span>¿Qué contenedores necesito?</span><b>→</b>
        <span>¿Cómo los distribuyo?</span><b>→</b>
        <span>¿Qué estilos aplico?</span><b>→</b>
        <span>¿Qué puedo reutilizar?</span>
      </div>
    </section>

    <section class="section">
      <div class="section-label">PROGRESIÓN</div>
      <h2>Cómo avanzaremos</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Nivel</th><th>Ejercicio</th><th>Incremento principal</th></tr></thead>
          <tbody>
            ${exercises.map(ex => `<tr><td>${ex.id}</td><td>${ex.title}</td><td>${ex.newConcepts.join(", ")}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;

  completeButton.classList.add("hidden");
  prevButton.disabled = true;
  nextButton.disabled = false;
}

function renderVisual(ex) {
  const visuals = {
    center: `<div class="mock-phone"><div style="text-align:center"><h2 style="margin:0">React Native</h2><p class="mock-muted">Mi primera pantalla</p></div></div>`,
    card: `<div class="mock-phone"><div class="mock-ui-card"><h3>¡Bienvenido!</h3><p class="mock-muted">Diseño de interfaces con React Native</p><div class="mock-button">COMENZAR</div></div></div>`,
    profile: `<div class="mock-phone"><div class="mock-ui-card" style="text-align:center"><div style="width:84px;height:84px;border-radius:50%;background:#dbeafe;margin:0 auto 12px;display:grid;place-items:center;font-size:34px">👩‍💻</div><h3>Laura Martínez</h3><p class="mock-muted">Diseñadora UX/UI</p><div style="display:flex;justify-content:space-around;margin-top:18px"><b>24<br><small>Proyectos</small></b><b>1280<br><small>Seguidores</small></b></div></div></div>`,
    login: `<div class="mock-phone"><div class="mock-ui-card"><h3>Bienvenido</h3><p class="mock-muted">Introduce tus datos</p><div style="background:#f1f5f9;padding:11px;border-radius:9px;margin:8px 0;color:#94a3b8">Correo electrónico</div><div style="background:#f1f5f9;padding:11px;border-radius:9px;color:#94a3b8">Contraseña</div><div class="mock-button">INICIAR SESIÓN</div></div></div>`,
    product: `<div class="mock-phone"><div class="mock-ui-card"><div style="height:120px;background:#dbeafe;border-radius:12px;display:grid;place-items:center;font-size:52px">🎧</div><small style="color:#2563eb;font-weight:800">TECNOLOGÍA</small><h3>Auriculares Wireless</h3><p>⭐ 4.8</p><div style="display:flex;justify-content:space-between;align-items:center"><strong>89,99 €</strong><span style="background:#111827;color:white;padding:8px;border-radius:8px">AÑADIR</span></div></div></div>`,
    dashboard: `<div class="mock-phone"><h3>Dashboard</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div class="mock-ui-card"><small>Ventas</small><h3>12.450 €</h3></div><div class="mock-ui-card"><small>Clientes</small><h3>348</h3></div><div class="mock-ui-card"><small>Pedidos</small><h3>1.024</h3></div><div class="mock-ui-card"><small>Conversión</small><h3>7,4%</h3></div></div></div>`,
    news: `<div class="mock-phone" style="justify-content:flex-start"><h3>Noticias</h3>${["TECNOLOGÍA","MÓVIL","CLOUD"].map((c,i)=>`<div class="mock-ui-card" style="margin-bottom:9px"><small style="color:#2563eb">${c}</small><strong style="display:block;margin-top:5px">${["IA y desarrollo","React Native","Arquitecturas cloud"][i]}</strong></div>`).join("")}</div>`,
    catalog: `<div class="mock-phone" style="justify-content:flex-start"><h3>Productos</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${["⌨️","🖱️","🖥️","🎧"].map((i)=>`<div class="mock-ui-card" style="text-align:center;font-size:30px">${i}</div>`).join("")}</div></div>`,
    bank: `<div class="mock-phone" style="justify-content:flex-start"><p style="margin-bottom:4px">Buenos días 👋</p><h2 style="margin-top:0">Laura</h2><div style="background:#020617;border-radius:18px;padding:18px"><small>Saldo disponible</small><h2>4.280,32 €</h2></div><h3>Movimientos</h3>${["Supermercado","Nómina","Electricidad"].map(x=>`<div class="mock-ui-card" style="margin-bottom:7px"><strong>${x}</strong></div>`).join("")}</div>`,
    fitness: `<div class="mock-phone" style="justify-content:flex-start"><p style="margin:0">Buenos días,</p><h2>Laura 👋</h2><div style="background:#020617;border-radius:18px;padding:18px"><small>OBJETIVO DIARIO</small><h2>7.540</h2><div style="height:8px;background:#334155;border-radius:5px"><div style="width:75%;height:100%;background:#22c55e;border-radius:5px"></div></div></div><h3>Resumen</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">${["🔥 520","⏱ 48 min","❤️ 72","📍 5,6 km"].map(x=>`<div class="mock-ui-card"><strong>${x}</strong></div>`).join("")}</div></div>`
  };
  return visuals[ex.visualType] || "";
}

function renderExercise(ex) {
  setHeader(`EJERCICIO ${String(ex.id).padStart(2, "0")}`, ex.title);
  const savedCode = state.code[ex.id] || "";
  const savedReflection = state.reflections[ex.id] || "";
  const savedCheckpoints = state.checkpoints[ex.id] || [];
  const answered = state.exerciseAnswers[ex.id];

  appContent.innerHTML = `
    <header class="lesson-heading">
      <span class="eyebrow">EJERCICIO ${String(ex.id).padStart(2, "0")} · ${ex.level.toUpperCase()}</span>
      <h1>${ex.title}</h1>
      <p class="lead">${ex.context}</p>
      <div class="meta-row">
        ${ex.newConcepts.map(c => `<span class="badge">${c}</span>`).join("")}
      </div>
    </header>

    <section class="section">
      <div class="section-label">ORIENTACIÓN</div>
      <h2>Qué vas a conseguir</h2>
      <p>${ex.objective}</p>
      <h3>Conocimientos que recuperamos</h3>
      <div class="meta-row">${ex.previous.map(x => `<span class="badge">${x}</span>`).join("")}</div>
    </section>

    <section class="section">
      <div class="section-label">FUNDAMENTOS</div>
      <h2>Antes de usarlo, entiéndelo</h2>
      ${ex.fundamentals}
    </section>

    <section class="section">
      <div class="section-label">REPRESENTACIÓN</div>
      <h2>Qué queremos construir</h2>
      <div class="visual">${renderVisual(ex)}</div>
    </section>

    <section class="section">
      <div class="section-label">PRÁCTICA GUIADA</div>
      <h2>Requisitos obligatorios</h2>
      <ul>${ex.requirements.map(r => `<li>${r}</li>`).join("")}</ul>

      <h3>Avanza por pasos</h3>
      <div class="steps">
        ${ex.steps.map((step, index) => `
          <div class="step">
            <span class="step-number">${index + 1}</span>
            <p>${step}</p>
          </div>
        `).join("")}
      </div>

      <h3>Tu código</h3>
      <div class="editor-wrap">
        <div class="editor-toolbar">
          <span>App.tsx · guardado automático</span>
          <div class="editor-actions">
            <button data-copy-editor="${ex.id}">Copiar</button>
            <button data-clear-editor="${ex.id}">Limpiar</button>
          </div>
        </div>
        <textarea class="code-editor" data-editor="${ex.id}" spellcheck="false" placeholder="// Escribe o pega aquí tu solución...">${escapeHtml(savedCode)}</textarea>
      </div>
    </section>

    <section class="section">
      <div class="section-label">CHECKPOINTS</div>
      <h2>Comprueba dónde estás</h2>
      <div class="checkpoint-list">
        ${ex.checkpoints.map((cp, index) => `
          <label class="checkpoint">
            <input type="checkbox" data-checkpoint="${ex.id}-${index}" ${savedCheckpoints.includes(index) ? "checked" : ""}>
            <span>${cp}</span>
          </label>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-label">RECUPERA</div>
      <h2>Antes de comprobar</h2>
      <div class="callout info">${ex.retrieval}</div>
    </section>

    <section class="section">
      <div class="section-label">COMPRUEBA</div>
      <div class="knowledge-check" data-check-wrap="${ex.id}">
        <h2>${ex.check.question}</h2>
        <div class="options">
          ${ex.check.options.map((o, index) => `
            <button class="option-button ${answered?.selected === index ? "selected" : ""}" data-check-option="${ex.id}-${index}">${o}</button>
          `).join("")}
        </div>
        <button class="action-button primary-button" data-check-submit="${ex.id}">Comprobar respuesta</button>
        <div data-check-feedback="${ex.id}">
          ${answered?.checked ? feedbackHtml(ex, answered.selected) : ""}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-label">EXPLICA</div>
      <h2>Pregunta de comprensión</h2>
      <p>${ex.reflection}</p>
      <textarea class="reflection" data-reflection="${ex.id}" placeholder="Explícalo con tus propias palabras...">${escapeHtml(savedReflection)}</textarea>
    </section>

    <section class="section">
      <div class="section-label">AYUDA PROGRESIVA</div>
      <h2>Úsala solo cuando la necesites</h2>
      <div class="reveal-stack">
        ${revealButton("Pista 1", ex.hints[0], "hint")}
        ${revealButton("Pista 2", ex.hints[1], "hint")}
        ${revealButton("Pseudocódigo / código parcial", codeBlock(ex.partial), "partial", true)}
        ${revealButton("Solución orientativa", `<p><strong>Esta es una solución posible. Pueden existir soluciones equivalentes.</strong></p>${codeBlock(ex.solution)}`, "solution", true)}
      </div>
    </section>

    <section class="section">
      <div class="section-label">RETO</div>
      <h2>Ahora modifica algo por tu cuenta</h2>
      <div class="callout warning">${ex.challenge}</div>
    </section>

    <section class="section">
      <div class="section-label">CIERRE</div>
      <h2>He aprendido</h2>
      <ul class="recap-list">${ex.learned.map(x => `<li>${x}</li>`).join("")}</ul>
      <div class="callout success"><strong>Pregunta final:</strong> ¿podrías explicar este ejercicio sin mirar el código?</div>
    </section>
  `;

  completeButton.classList.remove("hidden");
  completeButton.classList.toggle("completed", state.completed.includes(ex.id));
  completeButton.textContent = state.completed.includes(ex.id) ? "✓ Completado" : "Marcar como completado";
  prevButton.disabled = false;
  nextButton.disabled = false;
}

function revealButton(label, content, type, trustedHtml = false) {
  const panelClass = type === "solution" ? "reveal-panel solution hidden" : "reveal-panel hidden";
  return `
    <div>
      <button class="reveal-button" data-reveal>
        <span>${label}</span><span>+</span>
      </button>
      <div class="${panelClass}">${trustedHtml ? content : `<p>${content}</p>`}</div>
    </div>
  `;
}

function feedbackHtml(ex, selected) {
  const ok = selected === ex.check.answer;
  return `<div class="feedback ${ok ? "good" : "bad"}"><strong>${ok ? "Correcto." : "Todavía no."}</strong> ${ex.check.explanation}</div>`;
}

function renderQuiz() {
  setHeader("TEST FINAL", "Comprueba lo aprendido");
  const score = state.quizScore;

  appContent.innerHTML = `
    <div class="quiz-header">
      <div>
        <span class="section-label">RECUPERACIÓN FINAL</span>
        <h1 style="margin:0">Test de 20 preguntas</h1>
        <p style="color:#64748b;max-width:720px">Combina conceptos, lectura de código y errores típicos. Al corregir recibirás una explicación de cada respuesta.</p>
      </div>
      <div class="quiz-score">
        <small>RESULTADO</small>
        <strong>${score === null ? "—" : `${score}/20`}</strong>
      </div>
    </div>

    ${quiz.map((item, qIndex) => {
      const saved = state.quizAnswers[qIndex];
      const correct = state.quizCorrected && saved === item.answer;
      const wrong = state.quizCorrected && saved !== undefined && saved !== item.answer;
      return `
        <section class="quiz-question">
          <h3>${qIndex + 1}. ${item.q}</h3>
          <div class="quiz-options">
            ${item.options.map((option, oIndex) => `
              <label class="quiz-option ${state.quizCorrected && oIndex === item.answer ? "correct" : ""} ${wrong && saved === oIndex ? "incorrect" : ""}">
                <input type="radio" name="quiz-${qIndex}" value="${oIndex}" ${saved === oIndex ? "checked" : ""}>
                <span>${option}</span>
              </label>
            `).join("")}
          </div>
          ${state.quizCorrected ? `<div class="quiz-explanation"><strong>${correct ? "Correcto." : "Revisa este concepto."}</strong> ${item.explanation}</div>` : ""}
        </section>
      `;
    }).join("")}

    <div class="quiz-actions">
      <button class="primary-button" id="correctQuiz">Corregir test</button>
      <button class="secondary-button" id="resetQuiz">Reiniciar solo el test</button>
    </div>
  `;

  completeButton.classList.add("hidden");
  prevButton.disabled = false;
  nextButton.disabled = true;
}

function render() {
  buildMenu();
  updateProgress();
  setActiveMenu();

  if (state.screen === "intro") {
    renderIntro();
  } else if (state.screen === "quiz") {
    renderQuiz();
  } else if (state.screen.startsWith("exercise-")) {
    const id = Number(state.screen.split("-")[1]);
    const ex = exercises.find(x => x.id === id);
    renderExercise(ex);
  }

  bindDynamicEvents();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-copy-code]").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.nextElementSibling.innerText;
      navigator.clipboard.writeText(code);
      toast("Código copiado");
    });
  });

  document.querySelectorAll("[data-editor]").forEach(editor => {
    editor.addEventListener("input", e => {
      const id = Number(e.target.dataset.editor);
      state.code[id] = e.target.value;
      saveState();
    });

    editor.addEventListener("keydown", e => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        e.target.value = e.target.value.substring(0, start) + "  " + e.target.value.substring(end);
        e.target.selectionStart = e.target.selectionEnd = start + 2;
        state.code[Number(e.target.dataset.editor)] = e.target.value;
        saveState();
      }
    });
  });

  document.querySelectorAll("[data-copy-editor]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.copyEditor);
      const editor = document.querySelector(`[data-editor="${id}"]`);
      navigator.clipboard.writeText(editor.value);
      toast("Tu código se ha copiado");
    });
  });

  document.querySelectorAll("[data-clear-editor]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.clearEditor);
      const editor = document.querySelector(`[data-editor="${id}"]`);
      if (confirm("¿Quieres vaciar el editor de este ejercicio?")) {
        editor.value = "";
        state.code[id] = "";
        saveState(true);
      }
    });
  });

  document.querySelectorAll("[data-reflection]").forEach(area => {
    area.addEventListener("input", e => {
      state.reflections[Number(e.target.dataset.reflection)] = e.target.value;
      saveState();
    });
  });

  document.querySelectorAll("[data-checkpoint]").forEach(box => {
    box.addEventListener("change", e => {
      const [idRaw, idxRaw] = e.target.dataset.checkpoint.split("-");
      const id = Number(idRaw);
      const idx = Number(idxRaw);
      const list = new Set(state.checkpoints[id] || []);
      e.target.checked ? list.add(idx) : list.delete(idx);
      state.checkpoints[id] = [...list].sort((a,b) => a-b);
      saveState();
    });
  });

  document.querySelectorAll("[data-reveal]").forEach(button => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const isHidden = panel.classList.contains("hidden");
      panel.classList.toggle("hidden");
      button.lastElementChild.textContent = isHidden ? "−" : "+";
    });
  });

  document.querySelectorAll("[data-check-option]").forEach(button => {
    button.addEventListener("click", () => {
      const [idRaw, optionRaw] = button.dataset.checkOption.split("-");
      const id = Number(idRaw);
      document.querySelectorAll(`[data-check-option^="${id}-"]`).forEach(x => x.classList.remove("selected"));
      button.classList.add("selected");
      state.exerciseAnswers[id] = { selected: Number(optionRaw), checked: false };
      saveState();
    });
  });

  document.querySelectorAll("[data-check-submit]").forEach(button => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.checkSubmit);
      const ex = exercises.find(x => x.id === id);
      const record = state.exerciseAnswers[id];
      if (!record || record.selected === undefined) {
        toast("Selecciona primero una respuesta");
        return;
      }
      record.checked = true;
      saveState();
      document.querySelector(`[data-check-feedback="${id}"]`).innerHTML = feedbackHtml(ex, record.selected);
      document.querySelectorAll(`[data-check-option^="${id}-"]`).forEach((x, idx) => {
        x.classList.remove("correct", "incorrect");
        if (idx === ex.check.answer) x.classList.add("correct");
        if (idx === record.selected && idx !== ex.check.answer) x.classList.add("incorrect");
      });
    });
  });

  document.querySelectorAll('input[name^="quiz-"]').forEach(input => {
    input.addEventListener("change", e => {
      const qIndex = Number(e.target.name.split("-")[1]);
      state.quizAnswers[qIndex] = Number(e.target.value);
      state.quizCorrected = false;
      state.quizScore = null;
      saveState();
    });
  });

  document.getElementById("correctQuiz")?.addEventListener("click", () => {
    const answeredCount = Object.keys(state.quizAnswers).length;
    if (answeredCount < quiz.length) {
      const missing = quiz.length - answeredCount;
      toast(`Te faltan ${missing} pregunta${missing === 1 ? "" : "s"}`);
      return;
    }
    let total = 0;
    quiz.forEach((item, i) => {
      if (state.quizAnswers[i] === item.answer) total++;
    });
    state.quizCorrected = true;
    state.quizScore = total;
    saveState();
    renderQuiz();
    bindDynamicEvents();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("resetQuiz")?.addEventListener("click", () => {
    if (confirm("¿Reiniciar únicamente las respuestas del test?")) {
      state.quizAnswers = {};
      state.quizCorrected = false;
      state.quizScore = null;
      saveState();
      renderQuiz();
      bindDynamicEvents();
    }
  });
}