/* ============================================================
   1. BASE DE DATOS Y CONFIGURACIÓN INICIAL
   ============================================================ */
const WORLD_CLUBS = [
  { name: "Real Madrid", league: "La Liga (Esp)", tier: "Elite", salary: 10000 },
  { name: "FC Barcelona", league: "La Liga (Esp)", tier: "Elite", salary: 9500 },
  { name: "Manchester City", league: "Premier League (Ing)", tier: "Elite", salary: 12000 },
  { name: "Bayern Munich", league: "Bundesliga (Ale)", tier: "Elite", salary: 11000 },
  { name: "Boca Juniors", league: "Liga Profesional (Arg)", tier: "A", salary: 2500 },
  { name: "River Plate", league: "Liga Profesional (Arg)", tier: "A", salary: 2500 },
  { name: "Flamengo", league: "Brasileirão", tier: "A", salary: 3000 },
  { name: "Palmeiras", league: "Brasileirão", tier: "A", salary: 3000 },
  { name: "Atlético Nacional", league: "Liga BetPlay (Col)", tier: "B", salary: 1800 },
  { name: "Millonarios", league: "Liga BetPlay (Col)", tier: "B", salary: 1700 },
  { name: "Independiente", league: "Liga Profesional (Arg)", tier: "B", salary: 1500 },
  { name: "Racing Club", league: "Liga Profesional (Arg)", tier: "B", salary: 1600 },
  { name: "San Lorenzo", league: "Liga Profesional (Arg)", tier: "B", salary: 1400 },
  { name: "América de Cali", league: "Liga BetPlay (Col)", tier: "B", salary: 1600 },
  { name: "Once Caldas", league: "Liga BetPlay (Col)", tier: "D", salary: 700 },
  { name: "La Equidad", league: "Liga BetPlay (Col)", tier: "D", salary: 500 },
  { name: "Deportivo Laferrere", league: "Ascenso (Arg)", tier: "E", salary: 300 },
  { name: "San Telmo", league: "Ascenso (Arg)", tier: "E", salary: 350 },
  { name: "Bogotá FC", league: "Torneo BetPlay", tier: "E", salary: 250 },
  { name: "Estrella del Sur", league: "Potrero / Barrio", tier: "E", salary: 150 },
  { name: "Deportivo Potrero", league: "Potrero / Barrio", tier: "E", salary: 100 }
];

let player = {
  name: "JUGADOR",
  age: 16,
  position: "LD",
  club: "ESTRELLA DEL SUR",
  league: "Potrero / Barrio",
  nation: "🇨🇴 COLOMBIA",
  ovr: 50,
  energy: 100,
  money: 450,
  salary: 150,
  season: 1,
  year: 2026,
  contractYears: 2
};

let seasonProgress = {
  decisionsDone: 0,
  trainingsDone: 0,
  seasonScore: 0
};

/* ============================================================
   2. BIBLIOTECA MASIVA DE EVENTOS (65) Y ENTRENAMIENTOS (87)
   ============================================================ */
const MASTER_EVENTS_POOL = [
  { id: 1, tier: "E", title: "El partido nocturno alumbrado por autos", desc: "Se hizo de noche y la única luz son los faros de dos camionetas.", options: [{text: "Jugar arriesgando físico", o: 2, e: -25, score: 2}, {text: "Tocar suave y evitar lesiones", o: 0, e: -10, score: 0}] },
  { id: 2, tier: "E", title: "¡Invasión de un perro callejero!", desc: "Un perro se robó el balón en pleno contragolpe.", options: [{text: "Correr a quitarle el esférico", o: 1, e: -10, score: 1}, {text: "Ofrecerle comida para que lo suelte", o: 0, e: -5, money: -10, score: 0}] },
  { id: 3, tier: "E", title: "Apuesta de asado con el barrio vecino", desc: "El perdedor paga la carne y las gaseosas para todos.", options: [{text: "Echarse el equipo al hombro", o: 2, e: -20, money: 50, score: 2}, {text: "Jugar relajado", o: 0, e: -10, score: 0}] },
  { id: 4, tier: "E", title: "El árbitro es el carnicero del barrio", desc: "Cada falta tuya es ignorada con total parcialidad.", options: [{text: "Protestar y ganar amarilla", o: -1, e: -5, score: -1}, {text: "Responder con un golazo", o: 2, e: -15, score: 2}] },
  { id: 5, tier: "E", title: "Cancha con un árbol en mitad de la banda", desc: "El diseño del terreno incluye un tronco enorme.", options: [{text: "Practicar efectos con rosca", o: 2, e: -15, score: 2}, {text: "Jugar al pelotazo simple", o: 0, e: -5, score: 0}] },
  { id: 6, tier: "E", title: "Discusión por el alquiler de la cancha", desc: "Los dueños amenazan con cerrar el predio antes de tiempo.", options: [{text: "Poner dinero propio para extender", o: 0, e: -5, money: -20, score: 1}, {text: "Jugar un rondo rápido", o: 1, e: -10, score: 0}] },
  { id: 7, tier: "E", title: "Ojeador aficionado en la tribuna", desc: "Un hombre con libreta vieja anota tus movimientos.", options: [{text: "Lucirse con jugadas vistosas", o: 2, e: -20, score: 2}, {text: "Jugar en equipo y serio", o: 1, e: -10, score: 1}] },
  { id: 8, tier: "E", title: "Torneo relámpago bajo lluvia torrencial", desc: "El campo se convirtió en una piscina de lodo.", options: [{text: "Barrerse con todo", o: 2, e: -30, score: 1}, {text: "Dosificar esfuerzos", o: 0, e: -10, score: 0}] },
  { id: 9, tier: "E", title: "Balón pinchado en el alambre de púa", desc: "El único esférico oficial quedó destruido.", options: [{text: "Poner cooperacha para comprar otro", o: 0, e: -5, money: -15, score: 1}, {text: "Jugar con una pelota de trapo vieja", o: 1, e: -10, score: 0}] },
  { id: 10, tier: "E", title: "Disputa por el arco con pendiente", desc: "Juegan cuesta arriba en el primer tiempo.", options: [{text: "Atacar con furia en la cuesta abajo", o: 2, e: -20, score: 2}, {text: "Dosificar aire", o: 0, e: -10, score: 0}] },
  { id: 11, tier: "E", title: "Apuesta de sodas con los veteranos", desc: "Los mayores retan a los jóvenes del potrero.", options: [{text: "Gambetearlos con velocidad juvenil", o: 2, e: -15, money: 20, score: 2}, {text: "Jugar simple al pie", o: 1, e: -5, score: 1}] },
  { id: 12, tier: "E", title: "Invasión de abejas en el banco suplente", desc: "Un panal molesta a los jugadores sentados.", options: [{text: "Espantarlas con las chaquetas", o: 0, e: -5, score: 0}, {text: "Concentrarse en el juego", o: 1, e: -10, score: 1}] },
  { id: 13, tier: "E", title: "Ruptura de guayos en pleno partido", desc: "La suela de tu zapato izquierdo se abrió por la mitad.", options: [{text: "Seguir jugando descalzo un tiempo", o: 1, e: -20, score: 1}, {text: "Pedir prestados unos de otra talla", o: 0, e: -5, score: 0}] },
  { id: 14, tier: "E", title: "Apagón general en el barrio", desc: "La luz pública se corta en plena final barrial.", options: [{text: "Esperar paciente con linternas", o: 0, e: -2, score: 0}, {text: "Continuar con la luz de la luna", o: 2, e: -15, score: 2}] },
  { id: 15, tier: "E", title: "Festejo en tienda de la esquina", desc: "Los vecinos invitan gaseosa tras la victoria.", options: [{text: "Compartir con todos", o: 1, e: -5, money: -10, score: 1}, {text: "Ir a descansar a casa", o: 0, e: 5, score: 0}] },
  { id: 16, tier: "E", title: "Piquete de tránsito bloquea la llegada", desc: "El bus de línea tarda horas en llegar al predio.", options: [{text: "Correr los últimos 4 kilómetros", o: 2, e: -25, score: 2}, {text: "Llegar sobre la hora fatigado", o: -1, e: -10, score: -1}] },
  { id: 17, tier: "E", title: "Rival con fama de golpeador", desc: "Un defensor rival busca lesionar intencionalmente.", options: [{text: "Eludirlos con amagues rápidos", o: 2, e: -15, score: 2}, {text: "Jugar de primera para evitar fricción", o: 1, e: -5, score: 1}] },
  { id: 18, tier: "E", title: "Premio en efectivo recolectado en gorra", desc: "Los espectadores juntaron monedas para la figura.", options: [{text: "Aceptar agradecido el dinero", o: 0, e: 0, money: 40, score: 1}, {text: "Donarlo para reponer redes", o: 1, e: 0, score: 2}] },
  { id: 19, tier: "E", title: "Discusión con el dueño de casa vecina", desc: "Un balón rompió el vidrio de una ventana cercana.", options: [{text: "Poner dinero para el vidrio", o: 0, e: -5, money: -25, score: 1}, {text: "Escabullirse rápido", o: -1, e: -5, score: -1}] },
  { id: 20, tier: "E", title: "Entrenamiento en terreno baldío con piedras", desc: "El piso tiene gravilla peligrosa para las rodillas.", options: [{text: "Bajar intensidad y cuidar físico", o: 0, e: -5, score: 0}, {text: "Arriesgar técnica en espacios cortos", o: 2, e: -20, score: 2}] },
  { id: 21, tier: "E", title: "Visita de familiares al borde de la línea", desc: "Tus padres gritan indicaciones desde afuera.", options: [{text: "Dedicarles una jugada magistral", o: 2, e: -10, score: 2}, {text: "Ignorar y mantener concentración", o: 1, e: -5, score: 1}] },
  { id: 22, tier: "E", title: "Falta de arquero titular", desc: "Deben rifar quién se pone los guantes improvisados.", options: [{text: "Ofrecerse de defensa aguerrido", o: 1, e: -10, score: 1}, {text: "Jugar de delantero total", o: 2, e: -15, score: 2}] },
  { id: 23, tier: "E", title: "Venta de rifas para comprar uniformes", desc: "Debes ofrecer talonarios a los vecinos.", options: [{text: "Vender todas caminando el barrio", o: 1, e: -15, money: 30, score: 2}, {text: "Comprar los números tú mismo", o: 0, e: 0, money: -20, score: 0}] },
  { id: 24, tier: "E", title: "Desafío de penales al atardecer", desc: "Duelo mano a mano contra el mejor atajador local.", options: [{text: "Patear al ángulo superior", o: 2, e: -15, score: 2}, {text: "Tirar al medio seguro", o: 0, e: -5, score: 0}] },
  { id: 25, tier: "E", title: "Promesa de fichaje por ojeador barrial", desc: "Te ofrecen llevarte a probar a un club de cuarta.", options: [{text: "Aceptar con ilusión y entrenar extra", o: 2, e: -10, score: 2}, {text: "Tomarlo con escepticismo", o: 0, e: 0, score: 0}] },
  { id: 26, tier: "B", title: "Fiesta clandestina filtrada en redes", desc: "La prensa rosa publicó fotos tuyas de madrugada.", options: [{text: "Pedir perdón y entrenar doble", o: 2, e: -30, score: 2}, {text: "Contratar abogado e ignorar", o: 0, e: -5, money: -200, score: -1}] },
  { id: 27, tier: "B", title: "El dorsal número 10 vacante", desc: "El club te ofrece la camiseta histórica y su presión.", options: [{text: "Aceptar el reto con personalidad", o: 3, e: -15, score: 3}, {text: "Preferir un número bajo perfil", o: 1, e: -5, score: 1}] },
  { id: 28, tier: "B", title: "Huelga de jugadores por retraso de sueldos", desc: "El plantel amenaza con no concentrar.", options: [{text: "Liderar el reclamo como referente", o: 2, e: -10, money: 200, score: 2}, {text: "Romper la huelga y entrenar", o: 0, e: -10, score: -2}] },
  { id: 29, tier: "B", title: "Entrevista picante con periodista hostil", desc: "Intentan minimizar tus capacidades en TV.", options: [{text: "Responder con elegancia", o: 2, e: -10, score: 2}, {text: "Entrar en discusión encendida", o: -1, e: -15, score: -1}] },
  { id: 30, tier: "B", title: "Viaje eterno en bus de la categoría", desc: "14 horas de trayecto para jugar de visitante.", options: [{text: "Estirar y descansar en paradas", o: 1, e: -5, score: 1}, {text: "Pasar la noche jugando cartas", o: 0, e: -15, score: -1}] },
  { id: 31, tier: "B", title: "Pelea en el parking tras práctica", desc: "Dos compañeros se empujan por una entrada fuerte.", options: [{text: "Intervenir para calmar aguas", o: 2, e: -10, score: 2}, {text: "Mirar hacia otro lado", o: 0, e: 0, score: 0}] },
  { id: 32, tier: "B", title: "Visita sorpresa de barra brava", desc: "Exigen explicaciones por la mala racha.", options: [{text: "Dar la cara y prometer entrega", o: 2, e: -15, score: 2}, {text: "Esconderse con seguridad", o: -1, e: -5, score: -2}] },
  { id: 33, tier: "B", title: "Propuesta de marca de bebidas", desc: "Contrato publicitario menor por redes sociales.", options: [{text: "Firmar y cumplir publicaciones", o: 0, e: -5, money: 300, score: 1}, {text: "Rechazar para foco deportivo", o: 2, e: 0, score: 2}] },
  { id: 34, tier: "B", title: "Cambio repentino de director técnico", desc: "Llega un entrenador con ideas muy defensivas.", options: [{text: "Adaptarse corriendo el doble", o: 3, e: -25, score: 2}, {text: "Mostrar molestia pública", o: -1, e: -10, score: -2}] },
  { id: 35, tier: "B", title: "Simulación descarada de rival", desc: "Delantero contrario finge falta en el área.", options: [{text: "Delatar simulación con calma", o: 1, e: -5, score: 1}, {text: "Reclamar con furia al juez", o: 0, e: -10, score: 0}] },
  { id: 36, tier: "B", title: "Convocatoria sorpresiva a selección menor", desc: "Te llaman para un amistoso internacional.", options: [{text: "Acudir con máxima ilusión", o: 2, e: -15, score: 2}, {text: "Priorizar descanso en el club", o: 0, e: 0, score: 0}] },
  { id: 37, tier: "B", title: "Críticas de la hinchada por penal fallado", desc: "El estadio entero te silba en el calentamiento.", options: [{text: "Silenciarlos con partidazo", o: 3, e: -20, score: 3}, {text: "Jugar cauto sin arriesgar", o: 0, e: -5, score: -1}] },
  { id: 38, tier: "B", title: "Problema muscular leve en cuádriceps", desc: "Molestia en vísperas de partido clave.", options: [{text: "Parar preventivamente", o: -1, e: 10, score: 0}, {text: "Infiltrarse y jugar igual", o: 3, e: -30, score: 2}] },
  { id: 39, tier: "B", title: "Cambio de empresario o representante", desc: "Te prometen contactos en ligas del exterior.", options: [{text: "Firmar nueva representación", o: 1, e: 0, money: -50, score: 1}, {text: "Mantener agencia actual", o: 0, e: 0, score: 1}] },
  { id: 40, tier: "B", title: "Robo en el vestuario visitante", desc: "Desaparecen objetos de valor de los jugadores.", options: [{text: "Exigir seguridad al club", o: 1, e: -5, score: 1}, {text: "Concentrarse solo en el juego", o: 0, e: 0, score: 0}] },
  { id: 41, tier: "B", title: "Cena de camaradería obligatoria", desc: "El capitán organiza asiento para unir grupo.", options: [{text: "Asistir y afianzar liderazgo", o: 1, e: -5, score: 1}, {text: "Descansar en casa temprano", o: 0, e: 5, score: 0}] },
  { id: 42, tier: "B", title: "Presión fiscal con impuestos atrasados", desc: "Hacienda revisa tus ingresos deportivos.", options: [{text: "Pagar asesor contable", o: 0, e: -2, money: -150, score: 1}, {text: "Ignorar notificación inicial", o: -1, e: -5, score: -2}] },
  { id: 43, tier: "B", title: "Piedras contra el bus del equipo", desc: "Hinchas rivales apedrean la ventana en la llegada.", options: [{text: "Mantener la calma y entrar", o: 1, e: -10, score: 1}, {text: "Protestar por falta de custodia", o: 0, e: -5, score: 0}] },
  { id: 44, tier: "B", title: "Duelo directo contra tu ex equipo", desc: "Te enfrentas a los colores que defendiste antes.", options: [{text: "Celebrar gol con respeto", o: 2, e: -15, score: 2}, {text: "Jugar contenido sin brillo", o: 0, e: -5, score: 0}] },
  { id: 45, tier: "B", title: "Premio especial de directiva por clásico", desc: "Bono extra si ganan el partido del domingo.", options: [{text: "Jugar desatado por el premio", o: 3, e: -25, money: 400, score: 3}, {text: "Mantener esquema táctico", o: 1, e: -10, score: 1}] },
  { id: 46, tier: "Elite", title: "Alfombra Roja del Balón de Oro", desc: "Estás nominado entre los tres mejores del planeta.", options: [{text: "Asistir con elegancia", o: 2, e: -10, money: 1000, score: 3}, {text: "Quedarse en gimnasio haciendo físico", o: 4, e: -35, score: 4}] },
  { id: 47, tier: "Elite", title: "Discusión de penales en final de Champions", desc: "Minuto 90, tú y la estrella reclaman el cobro.", options: [{text: "Pedir balón con jerarquía", o: 3, e: -20, money: 500, score: 3}, {text: "Ceder cobro para evitar conflicto", o: 1, e: -5, score: 0}] },
  { id: 48, tier: "Elite", title: "Tentación multimillonaria de liga exótica", desc: "Un jeque triplica tu sueldo actual de inmediato.", options: [{text: "Rechazar por gloria europea", o: 3, e: 0, score: 3}, {text: "Aceptar cheque por futuro financiero", o: 0, e: 0, money: 10000, score: -2}] },
  { id: 49, tier: "Elite", title: "Llamada secreta del DT de la Selección", desc: "Te propone la capitanía absoluta del combinado.", options: [{text: "Aceptar con honor y liderazgo", o: 3, e: -10, score: 3}, {text: "Pedir tiempo por fatiga", o: 0, e: 0, score: -1}] },
  { id: 50, tier: "Elite", title: "Campaña publicitaria global de lujo", desc: "Multinacional de moda te contrata para Times Square.", options: [{text: "Realizar sesión internacional", o: 1, e: -15, money: 4000, score: 2}, {text: "Rechazar para descansar de cara a copa", o: 3, e: 0, score: 3}] },
  { id: 51, tier: "Elite", title: "Oferta de dirección técnica futura", desc: "El presidente propone rol directivo al retirarte.", options: [{text: "Aceptar acuerdo de fidelidad", o: 2, e: 0, money: 2000, score: 3}, {text: "Centrarse unidispositivamente en jugar", o: 3, e: -10, score: 2}] },
  { id: 52, tier: "Elite", title: "Filtración de cláusula de rescisión", desc: "Cuesta 200 millones y medio mundo pregunta.", options: [{text: "Publicar comunicado de compromiso", o: 2, e: -5, score: 2}, {text: "Dejar que agentes manejen especulación", o: 1, e: 0, score: 0}] },
  { id: 53, tier: "Elite", title: "Lesión muscular previa a semifinal", desc: "Molestia en abductor a tres días del gran duelo.", options: [{text: "Infiltrarse cueste lo que cueste", o: 4, e: -40, score: 3}, {text: "Parar a tiempo para no arruinar año", o: -1, e: 10, score: -1}] },
  { id: 54, tier: "Elite", title: "Homenaje de leyenda en estadio rival", desc: "Hinchada contraria se pone de pie para aplaudirte.", options: [{text: "Agradecer con humildad a grada", o: 3, e: -5, score: 3}, {text: "Saludar sobrio y concentrarse en ganar", o: 2, e: -5, score: 2}] },
  { id: 55, tier: "Elite", title: "Exigencia extrema de dueño por triplete", desc: "Exigen ganar absolutamente todo sin rotar plantel.", options: [{text: "Aceptar reto físico y liderar", o: 3, e: -30, score: 3}, {text: "Dialogar para dosificar cargas", o: 1, e: -10, score: 1}] },
  { id: 56, tier: "Elite", title: "Rueda de prensa sobre tu posible retiro", desc: "Periodistas preguntan cuánto te queda en la élite.", options: [{text: "Anunciar ambición de ganar más títulos", o: 2, e: -5, score: 2}, {text: "Evasivas diplomáticas", o: 0, e: 0, score: 0}] },
  { id: 57, tier: "Elite", title: "Premio Fair Play de la FIFA", desc: "Reconocimiento mundial a tu deportividad.", options: [{text: "Asistir a recibir galardón", o: 1, e: -5, money: 500, score: 2}, {text: "Enviar video y entrenar", o: 3, e: -10, score: 3}] },
  { id: 58, tier: "Elite", title: "Propuesta de fundar academia propia", desc: "Invertir en juveniles de tu país natal.", options: [{text: "Crear fundación benéfica", o: 1, e: 0, money: -1500, score: 3}, {text: "Postergar para cuando te retires", o: 0, e: 0, score: 1}] },
  { id: 59, tier: "Elite", title: "Asedio de paparazzi en vacaciones", desc: "Fotógrafos invaden tu privacidad familiar.", options: [{text: "Ignorar con elegancia", o: 0, e: 0, score: 1}, {text: "Acción legal inmediata", o: 0, e: -5, money: -300, score: 0}] },
  { id: 60, tier: "Elite", title: "Test de dopaje sorpresa a las 6 AM", desc: "Delegados llegan a tu domicilio temprano.", options: [{text: "Colaborar con total transparencia", o: 0, e: -5, score: 1}, {text: "Quejarse por el horario", o: -1, e: -5, score: -1}] },
  { id: 61, tier: "Elite", title: "Documental biográfico en plataforma streaming", desc: "Productora mundial quiere filmar tu vida.", options: [{text: "Firmar contrato y participar", o: 1, e: -10, money: 2500, score: 2}, {text: "Rechazar para mantener perfil bajo", o: 2, e: 0, score: 2}] },
  { id: 62, tier: "Elite", title: "Sorteo de Champions League como mano inocente", desc: "Invitado especial de la UEFA a la ceremonia.", options: [{text: "Asistir y disfrutar el momento", o: 1, e: -5, score: 2}, {text: "Declinar por sesión táctica", o: 3, e: -10, score: 3}] },
  { id: 63, tier: "Elite", title: "Récord histórico de goleo en juego", desc: "Estás a un tanto de superar la marca centenaria.", options: [{text: "Buscar el arco todo el partido", o: 3, e: -25, score: 3}, {text: "Jugar para el compañero libre", o: 2, e: -10, score: 2}] },
  { id: 64, tier: "Elite", title: "Propuesta de compra de club modesto", desc: "Inversionistas te ofrecen ser copropietario.", options: [{text: "Invertir en el proyecto", o: 0, e: 0, money: -3000, score: 3}, {text: "Declinar inversión de riesgo", o: 1, e: 0, score: 1}] },
  { id: 65, tier: "Elite", title: "Cena de capitanes de Champions", desc: "Reunión cumbre de referentes europeos.", options: [{text: "Asistir y debatir mejoras del juego", o: 2, e: -5, score: 2}, {text: "Descansar en la habitación", o: 0, e: 5, score: 1}] }
];

const MASTER_TRAINING_POOL = [];
for(let i=101; i<=187; i++) {
  MASTER_TRAINING_POOL.push({
    id: i,
    title: `Sesión Técnica Especializada #${i-100}`,
    desc: "Entrenamiento táctico y físico de alto rendimiento para mejorar atributos.",
    o: (i % 2 === 0) ? 2 : 1,
    e: -15
  });
}

let usedDecisionIds = [];
let usedTrainingIds = [];


/* ============================================================
   3. REGISTRO E INICIO DEL JUEGO
   ============================================================ */
const nameInput = document.getElementById('r-name');
document.querySelectorAll('.pos-node').forEach(node => {
  node.addEventListener('click', (e) => {
    document.querySelectorAll('.pos-node').forEach(n => n.classList.remove('selected'));
    e.target.classList.add('selected');
    document.getElementById('r-pos-val').value = e.target.dataset.pos;
  });
});

document.getElementById('reg-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if(nameInput.value.trim().length < 2) { nameInput.classList.add('invalid'); return; }
  
  document.getElementById('btn-submit').textContent = 'FIRMANDO CONTRATO...';
  
  setTimeout(() => {
    document.getElementById('success-overlay').classList.add('show');
    setTimeout(() => {
      document.getElementById('success-overlay').classList.remove('show');
      player.name = nameInput.value.trim().toUpperCase();
      player.age = parseInt(document.getElementById('r-age').value) || 16;
      player.position = document.getElementById('r-pos-val').value;
      player.club = document.getElementById('r-club').value.toUpperCase();
      player.nation = document.getElementById('r-nation').value.toUpperCase();
      
      const found = WORLD_CLUBS.find(c => c.name.toUpperCase() === player.club);
      player.salary = found ? found.salary : 150;
      
      startGame();
    }, 1200);
  }, 600);
});

function startGame() {
  document.getElementById('auth-screen').classList.remove('active');
  document.getElementById('game-screen').classList.add('active');
  updatePlayerUI();
  loadNextMatchEvent();
}


/* ============================================================
   4. INTERFAZ Y ACTUALIZACIÓN
   ============================================================ */
function updatePlayerUI() {
  document.getElementById('ui-name').textContent = player.name;
  document.getElementById('ui-pos').textContent = `POSICIÓN: ${player.position}`;
  document.getElementById('ui-age').textContent = `${player.age} años`;
  document.getElementById('ui-nation').textContent = player.nation;
  document.getElementById('ui-club').textContent = player.club;
  document.getElementById('ui-season').textContent = `Temp ${player.season} (${player.year}) | Decisión: ${seasonProgress.decisionsDone}/4 | Entreno: ${seasonProgress.trainingsDone}/5`;
  document.getElementById('ui-contract').textContent = `${player.contractYears} Temp`;
  document.getElementById('ui-salary').textContent = `$${player.salary} USD`;
  document.getElementById('ui-money').textContent = `$${player.money} USD`;

  document.getElementById('ui-ovr').textContent = player.ovr;
  document.getElementById('ui-num-level').textContent = player.ovr;
  document.getElementById('ui-num-energy').textContent = player.energy;

  const percentage = Math.min(100, Math.max(0, player.ovr));
  document.getElementById('ui-ovr-circle').style.background = `conic-gradient(var(--accent-color) ${percentage}%, rgba(255,255,255,0.05) 0)`;
  document.getElementById('ui-bar-level').style.width = `${percentage}%`;
  document.getElementById('ui-bar-energy').style.width = `${player.energy}%`;
}


/* ============================================================
   5. SISTEMA DE DECISIONES
   ============================================================ */
function getNextEvent() {
  const currentClub = WORLD_CLUBS.find(c => c.name.toUpperCase() === player.club.toUpperCase());
  let tier = currentClub ? currentClub.tier : "E";
  
  let candidates = MASTER_EVENTS_POOL.filter(e => {
    if (tier === "Elite") return e.tier === "Elite";
    if (tier === "A" || tier === "B") return e.tier === "B" || e.tier === "E";
    return e.tier === "E";
  }).filter(e => !usedDecisionIds.includes(e.id));

  if(candidates.length === 0) { 
    usedDecisionIds = []; 
    candidates = MASTER_EVENTS_POOL.filter(e => e.tier === tier || e.tier === "E"); 
  }
  
  const selected = candidates[Math.floor(Math.random() * candidates.length)];
  usedDecisionIds.push(selected.id);
  return selected;
}

function loadNextMatchEvent() {
  if (seasonProgress.decisionsDone >= 4) {
    switchMode('train');
    return;
  }

  const ev = getNextEvent();
  document.getElementById('event-tag').textContent = `DECISIÓN ${seasonProgress.decisionsDone + 1}/4`;
  document.getElementById('event-title').textContent = ev.title;
  document.getElementById('event-desc').textContent = ev.desc;

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  ev.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<div class="opt-text">${opt.text}</div>`;
    btn.onclick = () => applyDecision(opt.o || 0, opt.e || 0, opt.money || 0, opt.score || 0);
    container.appendChild(btn);
  });
}

function applyDecision(ovrChange, engChange, moneyChange, scoreChange) {
  player.ovr = Math.max(30, Math.min(99, player.ovr + ovrChange));
  player.energy = Math.max(0, Math.min(100, player.energy + engChange));
  player.money = Math.max(0, player.money + (moneyChange || 0));
  
  seasonProgress.decisionsDone++;
  seasonProgress.seasonScore += scoreChange;

  if(player.energy <= 0) {
    player.ovr -= 3; 
    player.energy = 40;
    showModalAlert("Lesión", "🚨 ¡TE LESIONASTE! Exigiste tu físico sin energía.", "ADVERTENCIA");
  }
  
  updatePlayerUI();
  checkSeasonProgress();
  
  if (seasonProgress.decisionsDone < 4) {
    loadNextMatchEvent();
  } else {
    showModalAlert("Decisiones Completadas", "📌 ¡Decisiones completadas! Pasa a la sesión de entrenamientos interactivos.", "PROGRESO", () => {
      switchMode('train');
    });
  }
}


/* ============================================================
   6. SISTEMA DE ENTRENAMIENTOS CON MINIJUEGOS INTERACTIVOS
   ============================================================ */
function getNextTraining() {
  let candidates = MASTER_TRAINING_POOL.filter(t => !usedTrainingIds.includes(t.id));
  if(candidates.length === 0) { 
    usedTrainingIds = []; 
    candidates = MASTER_TRAINING_POOL; 
  }
  const selected = candidates[Math.floor(Math.random() * candidates.length)];
  usedTrainingIds.push(selected.id);
  return selected;
}

function loadRandomTrainingMinigame() {
  if (seasonProgress.trainingsDone >= 5) {
    checkSeasonProgress();
    return;
  }

  const mgView = document.getElementById('minigame-view');
  mgView.classList.add('active');

  const tr = getNextTraining();
  seasonProgress.trainingsDone++;

  document.getElementById('mg-title').textContent = `${tr.title} (${seasonProgress.trainingsDone}/5)`;
  document.getElementById('mg-desc').textContent = `${tr.desc} — Supera el minijuego para puntuar.`;

  const controls = document.getElementById('mg-controls');
  controls.innerHTML = '';

  const gameType = Math.floor(Math.random() * 3);

  if (gameType === 0) {
    controls.innerHTML = `
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">Presiona cuando el indicador esté en la zona óptima.</p>
      <div id="timing-bar" style="width:100%; height:12px; background:rgba(255,255,255,0.1); border-radius:6px; position:relative; overflow:hidden; margin-bottom:1rem;">
        <div id="timing-marker" style="width:20px; height:100%; background:var(--accent-color); position:absolute; left:0; border-radius:4px;"></div>
        <div style="width:30px; height:100%; background:#10b981; position:absolute; left:60%; opacity:0.7;"></div>
      </div>
      <button class="mg-btn" id="btn-action-mg">¡IMPACTAR BALÓN!</button>
    `;
    let pos = 0;
    let dir = 3;
    let active = true;
    const marker = document.getElementById('timing-marker');
    
    const interval = setInterval(() => {
      if(!active) return;
      pos += dir;
      if(pos > 90 || pos < 0) dir *= -1;
      marker.style.left = pos + '%';
    }, 20);

    document.getElementById('btn-action-mg').onclick = () => {
      if(!active) return;
      active = false;
      clearInterval(interval);
      
      if(pos >= 55 && pos <= 75) {
        applyStatsTraining(tr.o + 1, tr.e, 15, "🎯 ¡Ejecución perfecta! Bonificación de rendimiento.");
      } else {
        applyStatsTraining(tr.o, tr.e, 5, "👍 Entrenamiento completado con rendimiento estándar.");
      }
    };

  } else if (gameType === 1) {
    controls.innerHTML = `
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">Espera a que la luz cambie a verde y presiona rápido.</p>
      <div id="flash-box" style="width:100%; height:60px; background:#ef4444; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:bold; color:white; margin-bottom:1rem; transition:0.2s;">ESPERANDO SEÑAL...</div>
      <button class="mg-btn" id="btn-action-mg" disabled style="opacity:0.5;">¡REACCIONAR!</button>
    `;
    const box = document.getElementById('flash-box');
    const btnAction = document.getElementById('btn-action-mg');
    let ready = false;
    let startTime = 0;

    setTimeout(() => {
      box.style.background = '#10b981';
      box.textContent = '¡AHORA!';
      btnAction.disabled = false;
      btnAction.style.opacity = '1';
      startTime = Date.now();
    }, 1000 + Math.random() * 1500);

    btnAction.onclick = () => {
      if(!ready && startTime > 0) {
        const reactionTime = Date.now() - startTime;
        if(reactionTime < 450) {
          applyStatsTraining(tr.o + 1, tr.e, 15, `⚡ ¡Reflejos de élite! (${reactionTime}ms).`);
        } else {
          applyStatsTraining(tr.o, tr.e, 5, `⏱️ Entrenamiento completado (${reactionTime}ms).`);
        }
      }
    };

  } else {
    controls.innerHTML = `
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.5rem;">Atrapa el objetivo flotante antes de que expire.</p>
      <div id="target-area" style="width:100%; height:80px; background:rgba(255,255,255,0.03); border-radius:8px; position:relative; overflow:hidden; margin-bottom:1rem; border:1px solid rgba(255,255,255,0.1);">
        <div id="moving-target" style="width:36px; height:36px; background:var(--accent-color); border-radius:50%; position:absolute; top:20px; left:10px; cursor:pointer; box-shadow:0 0 10px var(--accent-color);"></div>
      </div>
    `;
    const target = document.getElementById('moving-target');
    let tX = 10;
    let tDir = 4;
    let hit = false;

    const interval = setInterval(() => {
      if(hit) return;
      tX += tDir;
      if(tX > 250 || tX < 5) tDir *= -1;
      target.style.left = tX + 'px';
    }, 25);

    target.onclick = () => {
      if(hit) return;
      hit = true;
      clearInterval(interval);
      applyStatsTraining(tr.o + 1, tr.e, 20, "🎯 ¡Diana acertada con precisión milimétrica!");
    };
  }
}

function applyStatsTraining(ovrChange, engChange, moneyChange, message) {
  player.ovr = Math.max(30, Math.min(99, player.ovr + ovrChange));
  player.energy = Math.max(0, Math.min(100, player.energy + engChange));
  player.money = Math.max(0, player.money + (moneyChange || 0));
  seasonProgress.seasonScore += 1; 

  updatePlayerUI();
  
  showModalAlert("Entrenamiento", message, "RENDIMIENTO", () => {
    if (seasonProgress.trainingsDone < 5) {
      loadRandomTrainingMinigame();
    } else {
      checkSeasonProgress();
    }
  });
}

function switchMode(mode) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if(mode === 'match') {
    document.getElementById('tab-match').classList.add('active');
    document.getElementById('minigame-view').classList.remove('active');
    document.getElementById('event-view').classList.add('active');
    if (seasonProgress.decisionsDone < 4) loadNextMatchEvent();
  } else {
    document.getElementById('tab-train').classList.add('active');
    document.getElementById('event-view').classList.remove('active');
    loadRandomTrainingMinigame();
  }
}


/* ============================================================
   7. CONTROL DE TEMPORADA Y FICHAJES
   ============================================================ */
function checkSeasonProgress() {
  if (seasonProgress.decisionsDone >= 4 && seasonProgress.trainingsDone >= 5) {
    triggerSeasonEnd();
  }
}

function triggerSeasonEnd() {
  let performanceMsg = "";
  if (seasonProgress.seasonScore >= 6) {
    performanceMsg = "🌟 ¡TEMPORADA BRILLANTE! Los gigantes de Europa buscan tus servicios.";
  } else if (seasonProgress.seasonScore >= 2) {
    performanceMsg = "👍 ¡Campaña sólida! Mantienes estabilidad en el mercado.";
  } else {
    performanceMsg = "⚠️ ¡TEMPORADA BAJA! Tu nivel descendió y ficharás obligatoriamente en categoría menor.";
  }
  
  showModalAlert(`Fin de Temporada ${player.season}`, performanceMsg, "BALANCE", () => {
    openTransferModal();
  });
}

function openTransferModal() {
  const modal = document.getElementById('transfer-modal');
  modal.classList.add('active');

  document.getElementById('modal-current-club-info').textContent = 
    `${player.club} — Rendimiento: ${seasonProgress.seasonScore} pts | Sueldo: $${player.salary} USD`;

  document.getElementById('btn-renew').onclick = () => {
    player.contractYears += 2;
    player.salary += 350;
    modal.classList.remove('active');
    resetSeasonAndRestart();
  };

  renderMarketList("");
  document.getElementById('search-club').oninput = (e) => {
    renderMarketList(e.target.value.toLowerCase());
  };
}

function renderMarketList(filter) {
  const container = document.getElementById('market-list-container');
  container.innerHTML = '';

  const isGoodSeason = seasonProgress.seasonScore >= 6;
  const isBadSeason = seasonProgress.seasonScore < 2;

  const availableClubs = WORLD_CLUBS.filter(c => {
    const matchesFilter = c.name.toLowerCase().includes(filter) || c.league.toLowerCase().includes(filter);
    let allowedByPerformance = true;
    if (isGoodSeason) {
      if (c.tier !== "Elite" && c.tier !== "A") allowedByPerformance = false;
    } else if (isBadSeason) {
      if (c.tier !== "D" && c.tier !== "E") allowedByPerformance = false;
    } else {
      if (c.tier === "Elite") allowedByPerformance = false;
    }
    return matchesFilter && allowedByPerformance;
  });

  if(availableClubs.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:1rem;">No hay clubes disponibles con ese filtro para tu nivel actual.</p>`;
    return;
  }

  availableClubs.forEach(club => {
    const item = document.createElement('div');
    item.className = 'market-item';
    item.innerHTML = `
      <div class="market-info">
        <h4>${club.name} <span style="font-size:0.75rem; color:var(--accent-color);">(${club.league})</span></h4>
        <p>Tier: ${club.tier} | Sueldo: $${club.salary} USD/sem</p>
      </div>
      <button class="btn-sign" onclick="signWithClub('${club.name}', ${club.salary})">Fichar</button>
    `;
    container.appendChild(item);
  });
}

function signWithClub(clubName, salary) {
  player.club = clubName.toUpperCase();
  player.salary = salary;
  player.contractYears = 2;
  player.money += 750;
  
  document.getElementById('transfer-modal').classList.remove('active');
  showModalAlert("Fichaje Exitoso", `🤝 ¡FICHADO! Has firmado con ${player.club}.`, "CONTRATO", () => {
    resetSeasonAndRestart();
  });
}


/* ============================================================
   8. RETIRO Y REINICIO
   ============================================================ */
function checkRetirement() {
  if (player.age >= 40) {
    showModalAlert("Fin de Carrera", "🎓 ¡LEYENDA DEL FÚTBOL! Has alcanzado los 40 años. Tu carrera ha finalizado con éxito.", "RETIRO", () => {
      location.reload();
    });
    return true;
  }
  return false;
}

function resetSeasonAndRestart() {
  player.age++;
  if (checkRetirement()) return;

  player.season++;
  player.year++;
  player.energy = 100;
  seasonProgress.decisionsDone = 0;
  seasonProgress.trainingsDone = 0;
  seasonProgress.seasonScore = 0;

  updatePlayerUI();
  switchMode('match');
}

/* ============================================================
   9. FUNCIONES DE MODAL PERSONALIZADA (ÁMBITO GLOBAL)
   ============================================================ */
function showModalAlert(title, message, tag = "NOTIFICACIÓN", callback = null) {
  document.getElementById('custom-alert-title').innerText = title;
  document.getElementById('custom-alert-desc').innerText = message;
  document.getElementById('custom-alert-tag').innerText = tag;
  
  const modal = document.getElementById('custom-alert-modal');
  modal.classList.add('active');

  window.customAlertCallback = callback;
}

function closeCustomAlert() {
  const modal = document.getElementById('custom-alert-modal');
  modal.classList.remove('active');
  
  if (typeof window.customAlertCallback === 'function') {
    window.customAlertCallback();
    window.customAlertCallback = null;
  }
}