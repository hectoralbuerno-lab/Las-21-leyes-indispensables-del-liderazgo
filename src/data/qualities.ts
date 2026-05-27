export interface Quality {
  id: number;
  name: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  summary: string;
  importance: string;
  example: string;
  lesson: string;
  application: string;
  icon: string;
  category: "Carácter e Integridad" | "Habilidad Relacional" | "Acción e Iniciativa" | "Crecimiento y Visión" | "Eficacia y Enfoque";
}

export const qualities: Quality[] = [
  {
    id: 1,
    name: "Carácter",
    subtitle: "Sé un pedazo de roca",
    quote: "El liderazgo es la capacidad y voluntad de conducir a hombres y mujeres a un propósito común y a un carácter que inspire confianza.",
    quoteAuthor: "Bernard Montgomery, Mariscal de Campo Británico",
    summary: "El carácter es la base sobre la que se construye toda la vida y el liderazgo de una persona. No se trata simplemente de palabras, sino de la coherencia entre lo que profesas y lo que haces.",
    importance: "La reputación es lo que la gente piensa que eres; el carácter es lo que eres verdaderamente cuando estás en la oscuridad. Las grietas en el carácter impiden que un líder sostenga el peso del éxito a largo plazo.",
    example: "Bill Lear, el creador del avión jet ejecutivo Learjet, arriesgó su fortuna personal y su vida al dejar en tierra todos sus aviones cuando dos de ellos se estrellaron inexplicablemente. Decidió pilotar uno él mismo en condiciones extremas para encontrar el fallo físico en el aire, priorizando la integridad humana sobre cualquier beneficio económico.",
    lesson: "Las personas compran primero el líder, luego su visión. No puedes dirigir con éxito si las personas sospechan de tus cimientos morales.",
    application: "Examina tu vida en busca de contradicciones. Si prometes terminar una tarea o asistir a un evento, cúmplelo. Repara cualquier relación donde hayas faltado a tu palabra.",
    icon: "ShieldAlert",
    category: "Carácter e Integridad"
  },
  {
    id: 2,
    name: "Carisma",
    subtitle: "La primera impresión puede ser determinante",
    quote: "¿Cómo puedes tener carisma? Preocúpate más por hacer que otros se sientan bien consigo mismos que en hacerlos sentir bien contigo.",
    quoteAuthor: "Dan Reiland",
    summary: "El carisma no es un misterio místico e innato. Es la habilidad deliberada de atraer a las personas hacia ti enfocándote verdaderamente en ellas, dándoles valor y esperanza.",
    importance: "Un líder carismático comparte sabiduría, recursos y tiempo. Pone un '10' simbólico en la cabeza de cada persona, viéndola por su máximo potencial en lugar de juzgar sus debilidades.",
    example: "En la Inglaterra victoriana del siglo XIX, dos formidables rivales políticos, William Gladstone y Benjamin Disraeli, competían por el liderazgo del gobierno. Una joven que cenó con ambos explicó la diferencia: 'Cuando salí de estar cerca del señor Gladstone, creía que él era el hombre más inteligente de Inglaterra. Pero después de estar con Disraeli, creía que yo era la mujer más inteligente de Inglaterra'. Disraeli poseía un carisma extraordinario porque hacía brillar a los demás.",
    lesson: "El orgullo, la inseguridad y el cinismo destruyen el carisma. El verdadero carisma siempre comienza enfocando la atención en el prójimo.",
    application: "En tu próxima conversación, habla menos de ti mismo. Concéntrate en la persona con la que hablas, apréndete su nombre, valida sus ideas y haz que se sienta valorada.",
    icon: "Sparkles",
    category: "Habilidad Relacional"
  },
  {
    id: 3,
    name: "Compromiso",
    subtitle: "Es lo que separa a los hacedores de los soñadores",
    quote: "La gente no sigue a los líderes no comprometidos. El compromiso se prueba en el sacrificio personal, el esfuerzo diario y en cómo trabajas para mejorar la vida de los demás.",
    quoteAuthor: "Stephen Gregg, Presidente de Ethix Corp.",
    summary: "El compromiso comienza en el corazón y se demuestra mediante la acción sostenida frente a los obstáculos. Es el enemigo de la resistencia mediocre.",
    importance: "El verdadero liderazgo requiere devoción. Cuando las cosas se ponen difíciles, el compromiso es lo único que nos impulsa a seguir adelante y mantener los ojos fijos en la meta común.",
    example: "Miguel Ángel, el célebre artista, pasó cuatro años tortuosos pintando boca arriba en el techo de la Capilla Sixtina a petición del Papa Julio II. A pesar de que su pasión era la escultura y de las enormes presiones de sus rivales que esperaban que fracasara, se comprometió en cuerpo y alma, dañando su vista de por vida pero alterando para siempre la historia del arte universal. Cuando le preguntaron por qué trabajaba tanto el detalle en rincones oscuros que nadie vería, su respuesta fue sencilla: 'Dios los verá'.",
    lesson: "Existen cuatro tipos de personas: los que no tienen objetivos, los que tienen miedo a comprometerse, los que abandonan cuando la situación se pone difícil, y los que fijan metas, se dedican a ellas y pagan el precio para lograrlas.",
    application: "Toma tu calendario y examina en qué gastas tu dinero y tu tiempo. Esa es la medida real de tus compromisos de vida. Ajusta tus hábitos para que coincidan con tus ideales de liderazgo.",
    icon: "Award",
    category: "Carácter e Integridad"
  },
  {
    id: 4,
    name: "Comunicación",
    subtitle: "Sin ella, viajas solo",
    quote: "Los educadores toman algo simple y lo vuelven complicado. Los comunicadores toman algo complicado y lo hacen simple.",
    quoteAuthor: "John C. Maxwell",
    summary: "La comunicación efectiva es vital. Un líder debe transmitir ideas con claridad, convicción y de una manera tan accesible que inspire a la acción y unifique esfuerzos.",
    importance: "Si tu comunicación es confusa o inconsistente, tus seguidores perderán el rumbo. El objetivo de toda comunicación no es simplemente informar, sino mover voluntades hacia el éxito.",
    example: "El expresidente de los Estados Unidos Ronald Reagan recibió el apelativo de 'El Gran Comunicador'. Era capaz de conectar íntimamente con audiencias diversas a través de analogías sencillas, historias profundas y humor. Incluso en circunstancias extremas (como cuando fue tiroteado), calmó a los médicos diciéndoles bromeando: 'Espero que todos ustedes sean republicanos'. Su visión política siempre se centró en conceptos directos, sencillos y profundamente humanos.",
    lesson: "Para ser un comunicador eficaz, debes dominar cuatro verdades: simplifica tu mensaje, enfócate en la persona o audiencia, vive con la verdad de lo que dices, y busca siempre una respuesta constructiva.",
    application: "Al redactar un mensaje o dar una charla, haz un ejercicio de síntesis extrema. Pregúntate si estás usando palabras rebuscadas y elimínalas. Sé directo, breve y entusiasta.",
    icon: "MessageSquareText",
    category: "Habilidad Relacional"
  },
  {
    id: 5,
    name: "Capacidad",
    subtitle: "Si la desarrollas, ellos vendrán",
    quote: "La capacidad va más allá de las palabras. Es la habilidad del líder de planearlo y ejecutarlo de tal forma que otros confíen en sus conocimientos y lo deseen seguir.",
    quoteAuthor: "John C. Maxwell",
    summary: "Se trata de la excelencia técnica y operativa. Los líderes con alta capacidad no buscan excusas; planifican con rigor, ejecutan impecablemente y se revelan productivos cada día.",
    importance: "Nadie admira a los incompetentes. La capacidad inspira confianza mutua, eleva la moral y marca el ritmo de calidad que todos los miembros del equipo deben alcanzar.",
    example: "Benjamin Franklin demostró ser un líder de inmensas capacidades físicas e intelectuales. No solo destacó como coautor y diplomático clave en la independencia de los Estados Unidos, sino que fundó el primer cuerpo de bomberos, creó las lentes bifocales, inventó la estufa de metal que lleva su nombre y trazó mapas náuticos detallados de la Corriente del Golfo. Franklin permitía que su propia capacidad hablara por sí misma de manera práctica.",
    lesson: "Los líderes competentes recorren siempre la milla extra. Saben que lo 'suficientemente bueno' nunca lo es, y con su ejemplo impulsan a toda la organización.",
    application: "Identifica tus tres áreas profesionales de mayor destreza y planifica cómo dedicar el 70% de tu tiempo diario de trabajo a desarrollarlas aún más. Minimiza o delega las tareas improductivas.",
    icon: "Cpu",
    category: "Eficacia y Enfoque"
  },
  {
    id: 6,
    name: "Valentía",
    subtitle: "Una persona con valentía es mayoría",
    quote: "La valentía es estimada correctamente como la primera de las cualidades humanas... porque es la que garantiza todas las demás.",
    quoteAuthor: "Winston Churchill",
    summary: "La valentía no es la total ausencia de miedo, sino la convicción de hacer lo correcto a pesar del temor. Es una batalla interna que precede al logro externo.",
    importance: "Para innovar, crecer y alcanzar nuevos horizontes, un líder debe renunciar a la falsa comodidad de su área de seguridad. El liderazgo audaz contagia optimismo y compromiso a todos.",
    example: "Eddie Rickenbacker, héroe de aviación de la Primera Guerra Mundial que sobrevivió a combates mortales y a 21 días de deriva en una balsa por el Pacífico, demostró una valentía inquebrantable no solo en el campo de batalla, sino en los negocios. En 1933 asumió la vicepresidencia de Eastern Airlines en una época donde todas las aerolíneas dependían de subsidios públicos; Rickenbacker rechazó las ayudas estatales, transformó la estructura de la empresa en un modelo rentable y autosuficiente, enfrentando audazmente a las mayores corporaciones de la época.",
    lesson: "La valentía es contagiosa. Cuando un líder asume una postura firme y basada en principios sólidos, genera respeto inmediato y estimula la iniciativa del grupo.",
    application: "Enfréntate a una conversación difícil que has estado posponiendo deliberadamente. Habla con franqueza y respeto con ese colega, empleado o familiar sobre el problema persistente.",
    icon: "ShieldAlert",
    category: "Acción e Iniciativa"
  },
  {
    id: 7,
    name: "Discernimiento",
    subtitle: "Pon fin a los misterios no resueltos",
    quote: "Los líderes inteligentes creen solo la mitad de lo que oyen. Los líderes con discernimiento saben cuál mitad creer.",
    quoteAuthor: "John C. Maxwell",
    summary: "El discernimiento es la extraordinaria mezcla de intuición y lógica fría para identificar la raíz de cualquier problema complejo y tomar la decisión óptima.",
    importance: "En entornos de tremendo caos y cambios vertiginosos, no se puede poseer la información total. El discernimiento evita que el líder gaste recursos en solucionar meros síntomas en vez de causas reales.",
    example: "Marie Curie dedicó su vida a desentrañar los secretos profundos de la materia, lo que la llevó a descubrir el fenómeno de la radiactividad. Su tenacidad y discernimiento científico la convirtieron en la primera persona en ganar dos Premios Nobel. Durante la Primera Guerra Mundial, al ver el colapso médico en los campos de batalla franceses, aplicó de forma práctica su conocimiento creando equipos transportables de radiografía-X, entrenando personalmente a cientos de técnicos para salvar miles de vidas mediante el diagnóstico inmediato.",
    lesson: "El discernimiento permite maximizar oportunidades y minimizar riesgos. Nos alerta sobre cuándo seguir adelante y cuándo es sabio dejar de cavar en un hoyo.",
    application: "Analiza tus decisiones y éxitos recientes. ¿Por qué funcionaron? Trata de registrar qué pensamientos o intuiciones te guiaron y aprende a escuchar esos impulsos legítimos.",
    icon: "BrainCircuit",
    category: "Eficacia y Enfoque"
  },
  {
    id: 8,
    name: "Concentración",
    subtitle: "Mientras más aguda sea, más agudo serás tú",
    quote: "Si persigues a dos conejos, ambos escaparán.",
    quoteAuthor: "Autor Desconocido",
    summary: "La concentración es el enfoque riguroso de todo el tiempo y energía en las fortalezas fundamentales de uno mismo o de la organización. Sin prioridades claras no hay eficiencia real.",
    importance: "Un líder que sabe qué hacer pero no sabe concentrarse acabará con múltiples iniciativas iniciadas y ninguna terminada. La excelencia sin enfoque no produce avances reales.",
    example: "Tony Gwynn, uno de los bateadores de béisbol más asombrosos y consistentes de la historia, dedicó toda su vida útil al desarrollo y refinamiento del bateo. Estudiaba incansablemente videos grabados, analizaba la biomecánica de los lanzadores contrarios y practicaba diariamente perfeccionando la exactitud de su movimiento de muñeca, ignorando distracciones comunes de otros atletas.",
    lesson: "Los grandes líderes aplican la regla del enfoque: dedica un 70% de tus esfuerzos a tus áreas fuertes, un 25% a aprender nuevas técnicas relacionadas con ellas, y un 5% a minimizar tus debilidades a través de la delegación inteligente.",
    application: "Haz una lista de tus tareas de hoy. Evalúa de forma estricta cuáles están alineadas con tus verdaderos fuertes de liderazgo y enfócate hoy en hacer ésas con absoluta prioridad.",
    icon: "Target",
    category: "Eficacia y Enfoque"
  },
  {
    id: 9,
    name: "Generosidad",
    subtitle: "Tu vela no pierde nada cuando alumbra a otros",
    quote: "Nadie recibe honra por lo que le dan. La honra es la recompensa para el que da.",
    quoteAuthor: "Calvin Coolidge",
    summary: "La verdadera generosidad no reside simplemente en repartir recursos sobrantes. Viene del corazón y permea el tiempo, los conocimientos, la empatía y los bienes de un líder.",
    importance: "El egoísmo y la avaricia destruyen la credibilidad del liderazgo. Un líder generoso antepone siempre el éxito colectivo y el crecimiento de los suyos al prestigio o la ganancia personal.",
    example: "Elisabeth Elliot, misionera cristiana norteamericana en Ecuador, sufrió la trágica pérdida de su esposo Jim, quien fue lanceado y muerto por miembros de la tribu guerrera de los Aucas. En lugar de regresar a su cómodo hogar en EE. UU. o buscar venganza, Elisabeth decidió quedarse a vivir y aprender la lengua de la tribu vecina, y años después se trasladó a convivir en armonía pacífica con los mismos hombres que habían matado a su marido, enseñándoles principios de compasión.",
    lesson: "Para ser un líder generoso, debes aplicar hábitos de desapego prácticos: pon a las personas primero, maneja el dinero como un recurso para el bien y alimenta activamente el hábito del altruismo.",
    application: "Planea añadir valor práctico e inmediato a tres personas esta semana de forma anónima o desinteresada: un sabio consejo laboral, compartir un libro o apoyar económicamente un gran proyecto.",
    icon: "HeartHandshake",
    category: "Habilidad Relacional"
  },
  {
    id: 10,
    name: "Iniciativa",
    subtitle: "No deberías salir de casa sin ella",
    quote: "El éxito parece estar relacionado con la acción. Las personas de éxito son activas. Cometen errores pero nunca se rinden.",
    quoteAuthor: "Conrad Hilton",
    summary: "La iniciativa es la fuerza interna que asume la responsabilidad total de actuar de manera proactiva, en lugar de esperar pacientemente a que las circunstancias sean las ideales.",
    importance: "La complacencia y la pasividad son el fin de cualquier liderazgo efectivo. Los líderes audaces inician el cambio antes de que sea impuesto por las inevitables crisis.",
    example: "Kemmons Wilson fue un hombre que personificó la iniciativa humana. Tras tener unas molestas vacaciones familiares a principios de los años 50 en EE. UU., donde los hoteles de carretera eran sucios, cobraban adicionales abusivos por los niños y carecían de estándares claros, no se conformó con quejarse. Diseñó junto a un arquitecto su hotel ideal: limpio, acogedor, con televisión y piscina gratis para niños. Así nació 'Holiday Inn', que llegó a inaugurar miles de sucursales en todo el mundo.",
    lesson: "Las personas proactivas poseen cuatro atributos: saben lo que quieren, se fuerzan a actuar para escapar de su zona de confort, aceptan mayores riesgos y aprenden con humildad de cada error.",
    application: "Toma acción inmediata sobre un proyecto atascado en tu trabajo. No esperes a la próxima reunión; crea hoy un borrador, haz la llamada decisiva e impulsa la continuidad.",
    icon: "Rocket",
    category: "Acción e Iniciativa"
  },
  {
    id: 11,
    name: "Escuchar",
    subtitle: "Para conectarte con sus corazones, usa tus oídos",
    quote: "Un buen líder estimula a los demás a que le digan lo que necesita saber, no lo que quiere oír.",
    quoteAuthor: "John C. Maxwell",
    summary: "Para conectar con el corazón e inspirar lealtad, un líder debe ser un excelente oyente. Escuchar permite captar el contexto emocional de cualquier situación de conflicto.",
    importance: "La mayoría de los problemas de comunicación en las grandes organizaciones nacen sencillamente de la rampante incapacidad de sus líderes de detenerse a oír con empatía.",
    example: "Oprah Winfrey se convirtió en una de las figuras de los medios más influyentes del planeta. Su extraordinario éxito reside en su asombrosa capacidad de escuchar más allá de las meras palabras de sus entrevistados. Se enfoca en las experiencias humanas, los miedos y los deseos legítimos de las personas.",
    lesson: "Un líder inteligente mantiene siempre sus oídos atentos a cuatro grupos cruciales de personas: sus seguidores de confianza, sus clientes o usuarios, su competencia directa y sus mentores de experiencia.",
    application: "Agenda un espacio de encuentro esta semana con un colaborador directo con el único fin de escucharle. Pregúntale cuáles son sus desafíos principales y no intervengas salvo para validarle.",
    icon: "Ear",
    category: "Habilidad Relacional"
  },
  {
    id: 12,
    name: "Pasión",
    subtitle: "Toma la vida y ámala",
    quote: "Cuando un líder se expresa con pasión, generalmente encuentra pasión como respuesta.",
    quoteAuthor: "John C. Maxwell",
    summary: "La pasión es el combustible definitivo de la voluntad humana. Es la cualidad que permite a líderes con habilidades promedio alcanzar logros absolutamente grandiosos.",
    importance: "La apatía es aburrida e improductiva. Si el propio líder no se muestra profundamente encendido y entusiasmado con la visión común, jamás podrá encender el fuego en los demás.",
    example: "John Schnatter, el apasionado creador de la famosa multinacional de pizzerías Papa John's, vivía, respiraba y amaba de forma obsesiva la calidad del producto. A los 22 años vendió su coche para comprar un viejo horno usado y empezar a hornear de noche en una pequeña alacena reformada. Con perseverancia contagió su ambición de forma tan poderosa que erigió miles de sucursales en decenas de países.",
    lesson: "La pasión produce un tremendo cambio interno en los hábitos laborales, eleva de manera inmediata tu fuerza de voluntad ante el cansancio y convierte en posible lo que parecía inalcanzable.",
    application: "Dedica un tiempo de reflexión a tu primer amor profesional. Reevalúa por qué elegiste inicialmente este camino y recupera ese entusiasmo escribiendo tus sueños clave.",
    icon: "Flame",
    category: "Crecimiento y Visión"
  },
  {
    id: 13,
    name: "Actitud Positiva",
    subtitle: "Si crees que puedes, puedes",
    quote: "El descubrimiento más grande de mi generación es que los seres humanos pueden cambiar sus vidas al cambiar su actitud mental.",
    quoteAuthor: "William James",
    summary: "El optimismo inteligente y la actitud positiva determinan no solo cómo reacciona un líder ante los golpes de la vida, sino cómo inspira a perseverar y a ver posibilidades.",
    importance: "Tu actitud mental es una decisión cotidiana de tu voluntad. El pesimismo paraliza la creatividad colectiva y sabotea tus posibilidades reales de resolver el conflicto.",
    example: "Thomas Edison, uno de los mayores inventores del milenio, poseía una actitud imbatible. Cuando su gigantesco laboratorio y fábrica de West Orange ardió por completo en 1914, observó el fuego con calma y le dijo a sus hijos maravillado: 'Busquen a su madre, nunca volverá a ver un fuego espectacular como este'. Al día siguiente comenzó la reconstrucción con optimismo, a pesar de sus 67 años.",
    lesson: "La actitud mental de un líder es el espejo directo de lo que ocurrirá en su equipo. El éxito sostenible se basa en la actitud personal, no en las circunstancias del entorno.",
    application: "Cada vez que surja un contratiempo hoy, reemplaza de inmediato la queja verbal por una pregunta productiva: ¿Qué aprendizaje valioso puedo extraer activamente de esto?",
    icon: "TrendingUp",
    category: "Crecimiento y Visión"
  },
  {
    id: 14,
    name: "Solución de Problemas",
    subtitle: "No puedes dejar que tus problemas sean un problema",
    quote: "No se puede medir a un líder por los problemas que aborda. Él siempre los busca de su propio tamaño.",
    quoteAuthor: "John C. Maxwell",
    summary: "La capacidad de mantener la serenidad e idear soluciones efectivas frente a crisis imprevistas es un sello inconfundible de madurez de un gran líder.",
    importance: "La vida es compleja y dinámica; los contratiempos son absolutamente oportunos e inevitables. Quienes se desmoronan o buscan culpas destruyen la cohesión del equipo.",
    example: "Sam Walton fundó Wal-Mart con tenacidad. Al ver cómo las grandes corporaciones de descuentos amenazaban su pequeña red de tiendas minoristas locales a principios de los años 60, no se rindió. Recorrió incansablemente el país estudiando los modelos logísticos de sus propios rivales de competencia y fundó el primer Wal-Mart, asumiendo grandes deudas para asentar después la mayor cadena estadounidense.",
    lesson: "Los líderes que solucionan problemas de raíz anticipan las dificultades, aceptan con entereza los hechos, visualizan el panorama complejo y resuelven un conflicto a la vez de forma metódica.",
    application: "Toma un problema complejo de tu organización. En lugar de abrumarte, redacta las 5 posibles soluciones lógicas, haz una consulta con tu equipo principal y toma hoy la decisión.",
    icon: "HelpCircle",
    category: "Eficacia y Enfoque"
  },
  {
    id: 15,
    name: "Relaciones",
    subtitle: "Si tomas la iniciativa, te imitarán",
    quote: "El único ingrediente más importante en la fórmula del éxito es saber relacionarse con la gente.",
    quoteAuthor: "Theodore Roosevelt",
    summary: "El liderazgo consiste enteramente en trabajar con personas para lograr metas comunes. El respeto mutuo, la empatía y la compasión crean alianzas inquebrantables.",
    importance: "Nadie puede lograr la grandeza en total aislamiento del entorno. Si tus habilidades interpersonales son deficientes, tu impacto colectivo será totalmente irrelevante.",
    example: "El doctor William Osler, influyente pionero de la medicina clínica en Estados Unidos y gran reformador de la docencia clínica de principios del siglo XX, basó toda su práctica en priorizar el bienestar emocional de los pacientes. Al ver el miedo de una niña moribunda durante la epidemia de neumonía en 1918, le llevó una hermosa rosa roja de su propio jardín, consolándola con palabras amables sobre cómo las rosas se trasladaban felices de hogar.",
    lesson: "Para conectar de manera madura con las personas, debes comprender qué necesitan todas ellas: sentirse especiales, poseer esperanza en el mañana, ser dirigidas con empatía y ganar de forma justa.",
    application: "Toma un teléfono, llama a ese amigo o excolega laboral clave con el que has tenido un distanciamiento reciente y haz algo constructivo por restaurar esa amistad.",
    icon: "Users",
    category: "Habilidad Relacional"
  },
  {
    id: 16,
    name: "Responsabilidad",
    subtitle: "Si no llevas la bola, no puedes dirigir al equipo",
    quote: "El éxito en cualquiera escala requiere que asumas la responsabilidad... En última instancia, la única cualidad que toda persona de éxito posee es la capacidad de asumir su responsabilidad.",
    quoteAuthor: "Michael Korda",
    summary: "Se trata de la total propiedad sobre los resultados del grupo. Un líder responsable nunca busca justificaciones externas, asume sus errores con valor y cumple sus metas.",
    importance: "La autovictimización destruye inmediatamente el respeto y la autoridad moral. Quienes evaden el costo de las malas elecciones jamás podrán guiar con éxito.",
    example: "James Bonham demostró un heroismo y responsabilidad absolutos durante la legendaria defensa del fuerte de El Álamo en 1836. Enviado a través de las líneas enemigas para buscar refuerzos y al enterarse de que no había tropas de apoyo disponibles, en lugar de salvarse de forma egoísta, decidió regresar al fuerte asediado, sabiendo que moriría junto a sus compañeros.",
    lesson: "Las personas responsables terminan el trabajo que inician con altos estándares, siempre recorren la milla extra y son motivadas por el orgullo de la excelencia técnica.",
    application: "Haz una auditoría honesta de tus errores recientes. En lugar de culpar a la economía, al equipo o a tus jefes, redacta una nota disculpándote y proponiendo un plan correctivo.",
    icon: "Award",
    category: "Carácter e Integridad"
  },
  {
    id: 17,
    name: "Seguridad",
    subtitle: "La competencia nunca compensa la inseguridad",
    quote: "No puedes dirigir personas si necesitas de las personas constantemente para validar tu autoestima.",
    quoteAuthor: "John C. Maxwell",
    summary: "La seguridad es la inquebrantable confianza interior del líder en sus propios valores, capacidades y propósito de vida. Le permite delegar poder y celebrar el éxito ajeno.",
    importance: "Los líderes inseguros acaparan celosamente el control, ven el talento ajeno de su equipo como una amenaza peligrosa y sabotean el desarrollo de la organización por puros celos.",
    example: "Margaret Thatcher, la célebre 'Dama de Hierro', gobernó Gran Bretaña durante tres períodos con una tremenda seguridad en sus principios de libre mercado, incluso frente a duras críticas de rivales internacionales. Reagan valoraba su fuerza explicándole a otros que un líder seguro no titubea ante los embates de la oposición política si defiende la verdad.",
    lesson: "Solo los líderes seguros pueden compartir su poder dar fuerza a las personas de su equipo. Quien posee una sólida autoestima inspira paz y audacia colectiva.",
    application: "Celebra el trabajo excelente de uno de tus subordinados hoy. Cede el reconocimiento público que te correspondía por un éxito compartido para empoderarlo.",
    icon: "ShieldAlert",
    category: "Carácter e Integridad"
  },
  {
    id: 18,
    name: "Autodisciplina",
    subtitle: "La primera persona a la que tienes que dirigir eres tú mismo",
    quote: "La primera y gran victoria es conquistarse a uno mismo.",
    quoteAuthor: "Platón",
    summary: "La autodisciplina es la capacidad sistemática de actuar en función de prioridades claras, resistiendo tentaciones de ocio improductivo o excusas corporales.",
    importance: "El talento sin disciplina es tan ineficiente como un pulpo en patines: hay mucho movimiento y espectáculo visual pero ningún resultado concreto sostenible en el tiempo.",
    example: "Jerry Rice, considerado unánimemente el receptor estrella más asombroso de fútbol americano, esculpió su brillante carrera a través de una férrea autodisciplina. Entrenaba solo bajo condiciones duras incluso en periodos de descanso, repitiendo series de resistencia hasta el umbral de dolor y recuperándose de lesiones óseas graves en tiempo récord.",
    lesson: "Un estilo de vida disciplinado requiere: organizar tus prioridades rigurosamente, rechazar toda excusa fácil, reprimir la pereza diaria y concentrarse en los frutos a largo plazo.",
    application: "Elige un hábito de salud o lectura que sabes que debes iniciar hoy. Elimina toda excusa y cúmplelo ininterrumpidamente durante los próximos 14 días anotándolo en la pared.",
    icon: "Target",
    category: "Acción e Iniciativa"
  },
  {
    id: 19,
    name: "Servicio",
    subtitle: "Para progresar, pon a los demás primero",
    quote: "El verdadero líder sirve. Sirve a la gente. Sirve a sus mejores intereses y al hacerlo no siempre será popular... asume con valor ese costo cariñoso.",
    quoteAuthor: "Eugene B. Habecker",
    summary: "El auténtico liderazgo se define como un acto sublime de entrega y servicio mutuo para enriquecer la vida de los seguidores en lugar de lucrarse de ellos de forma egoísta.",
    importance: "La prepotencia aliena a los mejores colaboradores. El liderazgo de servicio derriba el ego corporativo y forja una sólida cohesión de propósito y voluntades comunes.",
    example: "El prestigioso general Norman Schwarzkopf, héroe de guerra de la península de Batangan, arriesgó su propia vida en 1970 al adentrarse despacio a pie en un mortífero campo minado en Vietnam para confortar, inmovilizar y rescatar a un joven soldado herido que gritaba de pánico.",
    lesson: "El liderazgo de servicio implica: anteponer los intereses colectivos en la agenda diaria, poseer seguridad moral para servir con humildad y dar afecto sin segundas intenciones.",
    application: "Realiza esta semana un acto práctico de servicio por tu equipo que no sea estrictamente tu obligación: asume una jornada de apoyo duro, prepara café o limpia un área de trabajo.",
    icon: "HeartHandshake",
    category: "Habilidad Relacional"
  },
  {
    id: 20,
    name: "Aprender",
    subtitle: "Para mantenerte dirigiendo, mantente aprendiendo",
    quote: "Escuchar y leer debe tomarte aproximadamente diez veces más tiempo que hablar. Esto te asegurará un crecimiento personal constante.",
    quoteAuthor: "Gerald McGinnis, Presidente de Respironics",
    summary: "Se refiere a la inmensa virtud de la enseñabilidad. Un líder inteligente mantiene un hambre devoradora por nuevos conocimientos técnicos y reflexiones vitales cada día.",
    importance: "El conformismo intelectual y la soberbia son el principio de la decadencia. Si dejas de aprender hoy, tus conocimientos quedarán antiguos y dejarás de liderar.",
    example: "Charlie Chaplin se convirtió en la persona más memorable y famosa a principios del siglo XX gracias a su indomable hambre de aprendizaje y perfeccionamiento técnico. Aun siendo el actor mejor pagado, revisaba metódicamente cada escena para entender qué hacía reír u oír a su público, expandiéndose hacia la dirección y produciendo obras maestras inmortales.",
    lesson: "Para cultivar la enseñabilidad debes: curarte de la complacencia del destino, superar las trampas de tu éxito, renunciar al orgullo nocivo y capitalizar sanamente cada error cotidiano.",
    application: "Toma un libro sobresaliente de tu biblioteca o un curso digital especializado y comprométete formalmente a leer 15 páginas cada día, libre de toda distracción.",
    icon: "BrainCircuit",
    category: "Crecimiento y Visión"
  },
  {
    id: 21,
    name: "Visión",
    subtitle: "Puedes conseguir solo lo que puedes ver",
    quote: "El valor de un gran líder para cumplir su visión viene de la pasión, no de la posición.",
    quoteAuthor: "John C. Maxwell",
    summary: "La visión es el mapa inspirador del futuro deseado. Nace de las profundidades del alma del líder, inspirando fe ciega, uniendo recursos y guiando a la acción proactiva.",
    importance: "Un equipo sin visión de futuro avanza en círculos ciegos y se desgasta en lo cotidiano. La visión infunde el magnetismo humano definitivo para reclutar campeones.",
    example: "Walt Disney concibió la idea innovadora del parque de atracciones Disneylandia tras llevar a sus hijas de compras los sábados y observar carruseles desgastados, sucios y con caballos inmóviles. Visualizó con pasión audaz un parque familiar radiante donde 'no hubiera pintura descascarada y todos los caballos saltaran en armonía'. Disneylandia revolucionó por completo el entretenimiento global.",
    lesson: "La visión se nutre de la historia personal del líder limpia de ruidos externos, aborda las necesidades más indispensables del prójimo con amor y actúa como un imán para atraer campeones.",
    application: "Escribe en una sola página con absoluta claridad y lujo de detalles cuál es tu visión inspiradora para tu organización u objetivos personales de los próximos 3 años.",
    icon: "Rocket",
    category: "Crecimiento y Visión"
  }
];

export const leadershipQuotes = [
  {
    text: "La Ley del Proceso dice que el liderazgo se desarrolla diariamente, no en un día.",
    author: "John C. Maxwell"
  },
  {
    text: "La medida de tu liderazgo está determinada por tu nivel de compromiso con la excelencia interna.",
    author: "John C. Maxwell"
  },
  {
    text: "El carácter es tu posesión más valiosa. Ofrece la garantía moral sobre la que descansan todas las demás dotes.",
    author: "G. Alan Bernard"
  },
  {
    text: "Si piensas que eres un líder y nadie te sigue, entonces estás solo dando un paseo en el parque.",
    author: "Proverbio de Liderazgo"
  },
  {
    text: "La excelencia nunca es una consecuencia de un accidente; es el fruto de una elevada intención, un esfuerzo sincero y una ejecución habilidosa.",
    author: "Willa A. Foster"
  }
];
