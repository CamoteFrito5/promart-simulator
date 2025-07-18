document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    // Esta sección simula los datos que vendrían de una base de datos MySQL.
    // En una aplicación real, se haría una petición (fetch) a un API en el backend
    // que a su vez consultaría la base de datos.
    
    // Lista de productos. La estructura (id, sku, name, etc.) está pensada
    // para ser compatible con una tabla de productos en MySQL.
    const products = [
        { id: 1, sku: 'HER-001', name: 'Taladro Percutor Inalámbrico 1/2" 20V', price: 499.90, image: 'product-tool.png', category: 'Herramientas Eléctricas', description: 'Potente taladro percutor inalámbrico de 20V con batería de litio, ideal para perforaciones en concreto, metal y madera. Incluye cargador rápido y estuche de transporte.' },
        { id: 2, sku: 'PIN-001', name: 'Pintura Látex Interior Blanco 1 Galón', price: 59.90, image: 'product-paint.png', category: 'Pinturas y acabados', description: 'Pintura látex de alta calidad para interiores, color blanco puro, secado rápido y excelente cobertura. Ideal para renovar tus ambientes con un acabado mate y duradero.' },
        { id: 3, sku: 'ILU-001', name: 'Foco LED Luz Cálida 9W E27', price: 9.90, image: 'product-lighting.png', category: 'Iluminación', description: 'Foco LED de 9W con rosca E27, emite una luz cálida y acogedora. Ahorra energía y tiene una larga vida útil. Perfecto para salas, dormitorios y áreas de descanso.' },
        { id: 4, sku: 'PIS-001', name: 'Piso Cerámico tipo Madera 45x45cm Caja 1.62m2', price: 34.90, image: 'product-floor.png', category: 'Pisos y Cerámicos', description: 'Caja de 1.62m2 de piso cerámico con diseño de madera natural, ideal para interiores y exteriores. Resistente al tránsito y fácil de limpiar, brinda un toque rústico y elegante a tus espacios.' },
        { id: 5, sku: 'ORG-001', name: 'Caja Organizadora Plástica 50L Transparente', price: 39.90, image: 'product-organizer.png', category: 'Organización y Decohogar', description: 'Caja organizadora de plástico transparente de 50 litros con tapa, perfecta para guardar ropa, juguetes, herramientas u otros objetos. Su diseño apilable ahorra espacio y permite ver el contenido fácilmente.' },
        { id: 6, sku: 'JAR-001', name: 'Manguera de Jardín 15m con Pistola de Riego', price: 79.90, image: 'product-garden.png', category: 'Jardinería', description: 'Manguera de jardín de 15 metros de largo, fabricada con material resistente y flexible. Incluye una pistola de riego multifunción con diferentes chorros para adaptarse a todas tus necesidades de jardinería.' },
        { id: 7, sku: 'HER-002', name: 'Amoladora Angular 4 1/2" 820W', price: 189.90, image: 'product-tool.png', category: 'Herramientas Eléctricas', description: 'Amoladora angular compacta de 4 1/2 pulgadas y 820W de potencia, ideal para cortar, desbastar y pulir metales. Diseño ergonómico para un manejo cómodo y seguro.' },
        { id: 8, sku: 'PIN-002', name: 'Rodillo de Espuma 9" para Esmalte', price: 15.90, image: 'product-paint-roller.png', category: 'Pinturas y acabados', description: 'Rodillo de espuma de 9 pulgadas, perfecto para aplicar esmaltes, barnices y pinturas sintéticas. Proporciona un acabado liso y uniforme sin dejar marcas.' },
        { id: 9, sku: 'ILU-002', name: 'Lámpara de Techo Colgante Vintage', price: 129.90, image: 'product-lighting.png', category: 'Iluminación', description: 'Lámpara de techo colgante con diseño vintage, ideal para dar un toque retro a tu hogar. Fabricada con materiales de alta calidad, perfecta para decorar salas, comedores o cocinas.' },
        { id: 10, sku: 'PIS-002', name: 'Porcelanato Pulido Beige 60x60cm Caja 1.44m2', price: 69.90, image: 'product-floor.png', category: 'Pisos y Cerámicos', description: 'Caja de 1.44m2 de porcelanato pulido color beige de 60x60cm, perfecto para crear ambientes modernos y elegantes. Su superficie lisa y brillante es fácil de limpiar y resistente al alto tránsito.' },
        { id: 11, sku: 'HER-003', name: 'Juego de Destornilladores 6 piezas', price: 45.90, image: 'product-tool-kit.png', category: 'Herramientas Manuales', description: 'Set de 6 destornilladores de precisión con puntas variadas (planas y estrella), ideal para trabajos en electrónica y reparaciones pequeñas. Mangos ergonómicos para un agarre cómodo.' },
        { id: 12, sku: 'ORG-002', name: 'Estante Metálico 5 Niveles 150x70cm', price: 249.90, image: 'product-organizer.png', category: 'Organización y Decohogar', description: 'Estante metálico de 5 niveles con dimensiones de 150x70cm, ideal para organizar garajes, almacenes u oficinas. Fácil de armar y muy resistente, soporta cargas pesadas.' },
        { id: 13, sku: 'JAR-002', name: 'Podadora de Césped Eléctrica 1200W', price: 399.90, image: 'product-garden.png', category: 'Jardinería', description: 'Podadora de césped eléctrica de 1200W, ligera y fácil de manejar. Ideal para jardines pequeños y medianos. Cuenta con ajuste de altura de corte para un acabado perfecto.' },
        { id: 14, sku: 'HER-004', name: 'Caja de Herramientas Plástica 19"', price: 89.90, image: 'product-tool-kit.png', category: 'Accesorios de Herramientas', description: 'Caja de herramientas plástica de 19 pulgadas con bandeja extraíble y cierres metálicos. Resistente y duradera, perfecta para organizar y transportar tus herramientas de forma segura.' },
        { id: 15, sku: 'PIN-003', name: 'Esmalte Sintético Negro Brillante 1/4 Galón', price: 25.90, image: 'product-paint.png', category: 'Pinturas y acabados', description: 'Esmalte sintético negro brillante de 1/4 de galón, ideal para proteger y decorar superficies de metal y madera. Ofrece un acabado de alto brillo y gran durabilidad.' },
        { id: 16, sku: 'ILU-003', name: 'Reflector LED para Exterior 50W', price: 65.90, image: 'product-lighting.png', category: 'Iluminación', description: 'Reflector LED de 50W para exteriores, con alta luminosidad y bajo consumo energético. Resistente al agua y polvo (IP65), ideal para iluminar jardines, fachadas o áreas de seguridad.' },
        { id: 17, sku: 'PIS-003', name: 'Piso Laminado 7mm Roble Caja 2.69m2', price: 89.90, image: 'product-floor.png', category: 'Pisos y Cerámicos', description: 'Caja de 2.69m2 de piso laminado de 7mm de espesor con diseño de roble natural. Fácil de instalar y mantener, ideal para dar un aspecto cálido y moderno a tus habitaciones.' },
        { id: 18, sku: 'ORG-003', name: 'Ropero Armable de Tela 175x110cm', price: 119.90, image: 'product-organizer.png', category: 'Organización y Decohogar', description: 'Ropero armable de tela con estructura metálica, dimensiones 175x110cm. Ligero y fácil de transportar, ideal para organizar ropa en espacios pequeños o como solución temporal.' },
        { id: 19, sku: 'JAR-003', name: 'Set de Jardinería 3 Piezas Metálico', price: 29.90, image: 'product-garden.png', category: 'Jardinería', description: 'Set de 3 piezas de jardinería con herramientas metálicas de alta resistencia: pala, rastrillo y cultivador. Mangos ergonómicos para un agarre cómodo, ideal para tus tareas de jardín.' },
        { id: 20, sku: 'HER-005', name: 'Sierra Circular 7-1/4" 1500W', price: 349.90, image: 'product-tool.png', category: 'Herramientas Eléctricas', description: 'Sierra circular de 7-1/4 pulgadas y 1500W de potencia, ideal para cortes precisos en madera. Incluye disco de corte y guía paralela para mayor exactitud.' },
        { id: 21, sku: 'TEC-001', name: 'Smart TV 55" 4K UHD', price: 1899.90, image: 'product-tv.png', category: 'Tecnología Electrohogar', description: 'Televisor inteligente de 55 pulgadas con resolución 4K UHD, HDR, y sistema operativo con acceso a tus aplicaciones favoritas. Ideal para una experiencia inmersiva.' },
        { id: 22, sku: 'TEC-002', name: 'Refrigeradora No Frost 300L Inox', price: 1250.00, image: 'product-fridge.png', category: 'Tecnología Electrohogar', description: 'Refrigeradora de 300 litros de capacidad, sistema No Frost, diseño moderno en acero inoxidable. Eficiencia energética A+ y bajo nivel de ruido.' },
        { id: 23, sku: 'TEC-003', name: 'Lavadora Automática Carga Superior 10kg', price: 750.00, image: 'product-washer.png', category: 'Tecnología Electrohogar', description: 'Lavadora automática de carga superior de 10kg, con múltiples programas de lavado y tecnología de ahorro de agua. Ideal para familias medianas.' },
        { id: 24, sku: 'TEC-004', name: 'Microondas Digital 20 Litros', price: 249.90, image: 'product-microwave.png', category: 'Tecnología Electrohogar', description: 'Microondas digital de 20 litros con funciones preestablecidas y descongelamiento rápido. Diseño compacto y fácil de usar, perfecto para tu cocina.' },
        { id: 25, sku: 'MUE-001', name: 'Sofá Seccional 3 Cuerpos Gris', price: 1499.90, image: 'product-sofa.png', category: 'Muebles', description: 'Sofá seccional de 3 cuerpos en tela chenille color gris, con chaise longue reversible. Ideal para salas amplias y confort familiar.' },
        { id: 26, sku: 'MUE-002', name: 'Mesa de Centro de Madera Nórdica', price: 299.90, image: 'product-coffeetable.png', category: 'Muebles', description: 'Mesa de centro con diseño nórdico, fabricada en madera de pino y patas cónicas. Perfecta para complementar tu sala con estilo y funcionalidad.' },
        { id: 27, sku: 'MUE-003', name: 'Juego de Comedor 4 Sillas Moderno', price: 899.90, image: 'product-dining.png', category: 'Muebles', description: 'Juego de comedor con mesa de vidrio templado y 4 sillas tapizadas en ecocuero. Diseño moderno y elegante, ideal para espacios compactos.' },
        { id: 28, sku: 'BAN-001', name: 'Inodoro One Piece Blanco Cerámico', price: 399.90, image: 'product-toilet.png', category: 'Baño', description: 'Inodoro de una sola pieza en cerámica blanca, diseño compacto y fácil de limpiar. Doble descarga para ahorro de agua y máxima higiene.' },
        { id: 29, sku: 'BAN-002', name: 'Grifería Monocomando para Lavatorio', price: 129.90, image: 'product-faucet.png', category: 'Baño', description: 'Grifería monocomando para lavatorio, fabricada en latón cromado de alta resistencia. Diseño moderno y sistema de ahorro de agua integrado.' },
        { id: 30, sku: 'BAN-003', name: 'Ducha Española Cromada Redonda', price: 189.90, image: 'product-shower.png', category: 'Baño', description: 'Ducha española redonda cromada con rociador grande y brazo de pared. Proporciona una lluvia relajante y uniforme, ideal para un baño moderno.' },
        { id: 31, sku: 'COC-001', name: 'Encimera de Gas 4 Hornillas Acero', price: 549.90, image: 'product-cooktop.png', category: 'Cocina', description: 'Encimera de gas de 4 hornillas con superficie de acero inoxidable y parrillas de hierro fundido. Diseño elegante y fácil de limpiar, ideal para tu cocina.' },
        { id: 32, sku: 'COC-002', name: 'Campana Extractora Decorativa 60cm', price: 429.90, image: 'product-hood.png', category: 'Cocina', description: 'Campana extractora decorativa de 60cm en acero inoxidable, con filtros lavables y 3 velocidades. Elimina olores y vapores eficientemente, manteniendo tu cocina fresca.' },
        { id: 33, sku: 'DOR-001', name: 'Cama Queen Size con Tarima Minimalista', price: 850.00, image: 'product-bed.png', category: 'Dormitorio', description: 'Cama Queen Size con tarima tapizada en tela, diseño minimalista y estructura de madera robusta. Incluye cabecera acolchada para mayor confort.' },
        { id: 34, sku: 'DOR-002', name: 'Velador con Cajones de Pino Nórdico', price: 189.90, image: 'product-nightstand.png', category: 'Dormitorio', description: 'Velador de 2 cajones fabricado en madera de pino con acabado nórdico. Perfecto para el dormitorio, ofrece espacio de almacenamiento y una superficie para lámpara.' },
        { id: 35, sku: 'CON-001', name: 'Saco de Cemento Portland Tipo I 42.5kg', price: 25.50, image: 'product-cement.png', category: 'Construcción', description: 'Saco de cemento Portland tipo I de 42.5kg, de alta resistencia y fraguado rápido. Ideal para todo tipo de obras de construcción, albañilería y cimientos.' },
        { id: 36, sku: 'CON-002', name: 'Ladrillo King Kong 18 Huecos Unidad', price: 1.20, image: 'product-brick.png', category: 'Construcción', description: 'Ladrillo de arcilla King Kong de 18 huecos, de alta calidad y resistencia estructural. Ideal para muros portantes y no portantes en construcciones residenciales y comerciales.' },
        { id: 37, sku: 'ELE-001', name: 'Cable Eléctrico THW 2.5mm Rollo 100m', price: 110.00, image: 'product-cable.png', category: 'Electricidad', description: 'Rollo de cable eléctrico THW de 2.5mm x 100m, ideal para instalaciones eléctricas residenciales y comerciales. Conductor de cobre aislado y resistente.' },
        { id: 38, sku: 'ELE-002', name: 'Interruptor Termomagnético 2x32A', price: 45.90, image: 'product-breaker.png', category: 'Electricidad', description: 'Interruptor termomagnético bipolar de 32A, para protección de circuitos eléctricos contra sobrecargas y cortocircuitos. Fácil instalación en tablero.' },
        { id: 39, sku: 'GAS-001', name: 'Tubo PVC Presión 1/2" x 5m', price: 18.90, image: 'product-pvc.png', category: 'Gasfitería', description: 'Tubo de PVC para instalaciones de agua a presión de 1/2 pulgada y 5 metros de longitud. Resistente a la corrosión y alta presión, ideal para sistemas de abastecimiento.' },
        { id: 40, sku: 'GAS-002', name: 'Kit de Reparación de Cisterna de Inodoro', price: 35.90, image: 'product-cisternkit.png', category: 'Gasfitería', description: 'Kit completo para reparación de cisterna de inodoro, incluye válvula de llenado, válvula de descarga y pulsador. Solución eficaz para fugas y mal funcionamiento.' },
        { id: 41, sku: 'FER-001', name: 'Cerradura de Pomo para Puerta Interior', price: 59.90, image: 'product-lock.png', category: 'Ferretería y Puertas', description: 'Cerradura de pomo de acero inoxidable para puertas interiores, con llave reversible. Fácil instalación y diseño elegante, apta para dormitorios o baños.' },
        { id: 42, sku: 'FER-002', name: 'Set de Bisagras de Acero Inoxidable 3"', price: 18.50, image: 'product-hinges.png', category: 'Ferretería y Puertas', description: 'Set de 3 bisagras de acero inoxidable de 3 pulgadas, con tornillos incluidos. Ideales para puertas interiores y exteriores, alta resistencia a la corrosión.' },
        { id: 43, sku: 'LIM-001', name: 'Aspiradora Ciclónica sin Bolsa 1600W', price: 389.90, image: 'product-vacuum.png', category: 'Limpieza', description: 'Aspiradora ciclónica sin bolsa de 1600W, con filtro HEPA lavable. Alta potencia de succión para polvo y alérgenos, ideal para hogares con mascotas.' },
        { id: 44, sku: 'LIM-002', name: 'Set de Limpieza Balde y Mopa Giratoria', price: 79.90, image: 'product-mop.png', category: 'Limpieza', description: 'Set de limpieza con balde y mopa giratoria de microfibra, sistema de escurrido sin esfuerzo. Ideal para limpiar todo tipo de pisos de forma rápida y eficiente.' },
        { id: 45, sku: 'AUT-001', name: 'Cargador de Batería de Auto Inteligente', price: 159.90, image: 'product-carcharger.png', category: 'Automotriz', description: 'Cargador de batería inteligente para auto, compatible con baterías de 6V/12V. Protección contra sobrecarga y cortocircuitos, ideal para mantener tu batería en óptimas condiciones.' },
        { id: 46, sku: 'AUT-002', name: 'Kit de Limpieza para Automóvil 5 Piezas', price: 49.90, image: 'product-carclean.png', category: 'Automotriz', description: 'Kit de limpieza para automóvil que incluye shampoo, cera, abrillantador de llantas, y paños de microfibra. Mantén tu vehículo impecable por dentro y por fuera.' },
        { id: 47, sku: 'OFI-001', name: 'Silla Ergonómica de Oficina con Ruedas', price: 299.90, image: 'product-officechair.png', category: 'Oficina y Escolar', description: 'Silla de oficina ergonómica con respaldo reclinable, altura ajustable y reposabrazos. Ideal para largas horas de trabajo, ofrece comodidad y soporte adecuado.' },
        { id: 48, sku: 'OFI-002', name: 'Set de Útiles Escolares Básicos 20 Piezas', price: 29.90, image: 'product-stationery.png', category: 'Oficina y Escolar', description: 'Set completo de útiles escolares básicos que incluye cuadernos, lápices, borrador, tajador, y reglas. Perfecto para el regreso a clases o la oficina.' },
        { id: 49, sku: 'INF-001', name: 'Cuna Convertible de Madera Blanca', price: 780.00, image: 'product-crib.png', category: 'Infantil', description: 'Cuna de bebé convertible fabricada en madera blanca, ajustable en altura y transformable en cama para niño. Diseño seguro y duradero para el crecimiento de tu bebé.' },
        { id: 50, sku: 'SAL-001', name: 'Bicicleta Estática Plegable con Monitor', price: 450.00, image: 'product-bike.png', category: 'Salud y Deportes', description: 'Bicicleta estática plegable con monitor LCD que registra tiempo, distancia, velocidad y calorías. Ideal para hacer ejercicio en casa con ahorro de espacio.' },
        { id: 51, sku: 'MAS-001', name: 'Cama para Perro Grande Ortopédica', price: 120.00, image: 'product-dogbed.png', category: 'Mascotas', description: 'Cama ortopédica para perro grande, con espuma viscoelástica que alivia la presión en articulaciones. Funda lavable y antideslizante, proporciona máximo confort a tu mascota.' },
        { id: 52, sku: 'TEL-005', name: 'Funda Silicona Transparente para iPhone 15', price: 39.90, image: 'product-funda-silicona-transparente-iphono-15.png', category: 'Tecnología Electrohogar', description: 'Protege tu iPhone 15 con esta funda de silicona transparente de alta calidad, resistente a golpes y rayones, manteniendo el diseño original de tu teléfono.' },
        { id: 53, sku: 'OFI-003', name: 'Soporte de Escritorio Ajustable para Celular', price: 29.90, image: 'product-soporte-de-escritorio-para-celular-ajustable.png', category: 'Oficina y Escolar', description: 'Soporte de aluminio elegante y ajustable para tu celular, ideal para videollamadas, ver contenido o mantener tu espacio de trabajo ordenado.' },
        { id: 54, sku: 'COC-003', name: 'Juego de Ollas Antiadherentes 5 Piezas', price: 189.90, image: 'product-juego-de-ollas-antiadherentes-5-piezas.png', category: 'Cocina', description: 'Set completo de ollas y sartenes antiadherentes de 5 piezas con tapas de vidrio, ideal para cocinar todo tipo de alimentos sin que se peguen. Distribución uniforme del calor.' },
        { id: 55, sku: 'TEL-006', name: 'Auriculares Inalámbricos SoundBass Pro', price: 149.90, image: 'product-auriculares-inalambricos-soundbass-pro.png', category: 'Tecnología Electrohogar', description: 'Experimenta un sonido potente con los auriculares inalámbricos SoundBass Pro. Conexión Bluetooth 5.0, estuche de carga portátil y hasta 20 horas de batería.' },
        { id: 56, sku: 'ORG-004', name: 'Manta de Sofá Tejida Gris Oscuro', price: 69.90, image: 'product-manta-de-sofa-tejida-gris-oscuro.png', category: 'Organización y Decohogar', description: 'Manta suave y cálida de tejido grueso en color gris oscuro, perfecta para decorar tu sofá y brindarte confort en los días fríos. Ideal para noches de películas.' },
        { id: 57, sku: 'TEL-007', name: 'Audífonos On-Ear Bluetooth Plegables', price: 99.90, image: 'product-audifonos-on-ear-bluetooth-plegables.png', category: 'Tecnología Electrohogar', description: 'Audífonos inalámbricos con diseño on-ear plegable para fácil transporte. Sonido nítido, controles integrados y hasta 15 horas de reproducción continua.' },
        { id: 58, sku: 'SAL-002', name: 'Smartwatch GigaFit Sport Negro', price: 299.90, image: 'product-smartwatch-gigafit-sport-negro.png', category: 'Salud y Deportes', description: 'Monitorea tu actividad física y salud con el Smartwatch GigaFit Sport. Resistente al agua, con sensor de ritmo cardíaco, contador de pasos y notificaciones de smartphone.' },
        { id: 59, sku: 'TEL-008', name: 'Kit de Limpieza para Pantallas Electrónicas', price: 19.90, image: 'product-kit-de-limpieza-para-pantallas-electronicas.png', category: 'Tecnología Electrohogar', description: 'Mantén tus pantallas limpias y sin manchas con este kit especializado. Incluye spray limpiador no abrasivo y paño de microfibra. Ideal para TVs, laptops y celulares.' },
        { id: 60, sku: 'TEL-009', name: 'Cargador Portátil PowerBank 10000mAh', price: 79.90, image: 'product-cargador-portatil-powerbank-10000mah.png', category: 'Tecnología Electrohogar', description: 'Batería externa de 10000mAh para cargar tus dispositivos móviles en cualquier lugar. Diseño compacto, doble puerto USB y compatible con la mayoría de smartphones y tablets.' },
        { id: 61, sku: 'TEL-010', name: 'Adaptador de Carga Rápida 20W USB-C', price: 49.90, image: 'product-adaptador-de-carga-rapida-20w-usb-c.png', category: 'Tecnología Electrohogar', description: 'Carga tus dispositivos a máxima velocidad con este adaptador de 20W con puerto USB-C. Compatible con carga rápida para smartphones, tablets y otros dispositivos modernos.' },
        { id: 62, sku: 'TEL-011', name: 'Smartphone Xylo Pro 256GB Negro', price: 999.90, image: 'product-smartphone-xylo-pro-256gb-negro.png', category: 'Tecnología Electrohogar', description: 'Potente smartphone con 256GB de almacenamiento, pantalla AMOLED de 6.5 pulgadas y triple cámara de alta resolución. Rendimiento excepcional para trabajo y entretenimiento.' },
        { id: 63, sku: 'TEL-012', name: 'Cable USB-C a USB-C Trenzado 2m', price: 25.90, image: 'product-cable-usb-c-a-usb-c-trenzado-2m.png', category: 'Tecnología Electrohogar', description: 'Cable de carga y datos USB-C a USB-C de 2 metros con diseño trenzado para mayor durabilidad. Compatible con carga rápida y transferencia de datos de alta velocidad.' },
        { id: 64, sku: 'DOR-003', name: 'Juego de Sábanas Queen Algodón Percale', price: 119.90, image: 'product-juego-de-sabanas-queen-algodon-percale.png', category: 'Dormitorio', description: 'Juego de sábanas tamaño Queen de algodón percale, suaves, frescas y resistentes al uso. Incluye sábana encimera, bajera ajustable y dos fundas de almohada.' },
        { id: 65, sku: 'COC-004', name: 'Licuadora de Vaso de Vidrio 1.5L', price: 159.90, image: 'product-licuadora-de-vaso-de-vidrio-1-5l.png', category: 'Cocina', description: 'Potente licuadora con vaso de vidrio de 1.5 litros, ideal para preparar jugos, batidos y salsas. Cuchillas de acero inoxidable y múltiples velocidades.' },
        { id: 66, sku: 'COC-005', name: 'Tostadora Eléctrica 2 Rebanadas Inox', price: 89.90, image: 'product-tostadora-electrica-2-rebanadas-inox.png', category: 'Cocina', description: 'Tostadora compacta de 2 rebanadas en acero inoxidable, con funciones de descongelar, recalentar y cancelar. Ideal para un desayuno rápido y delicioso.' },
        { id: 67, sku: 'COC-006', name: 'Cafetera de Goteo Programable', price: 129.90, image: 'product-cafetera-de-goteo-programable.png', category: 'Cocina', description: 'Disfruta de café fresco todas las mañanas con esta cafetera de goteo programable. Capacidad de 12 tazas, filtro permanente y función de mantener caliente.' },
        { id: 68, sku: 'TEL-013', name: 'Soporte Anillo para Celular con Adhesivo', price: 15.90, image: 'product-soporte-anillo-para-celular-con-adhesivo.png', category: 'Tecnología Electrohogar', description: 'Anillo adhesivo multiusos para celular, mejora el agarre y funciona como soporte para ver videos. Compatible con la mayoría de smartphones.' },
        { id: 69, sku: 'DOR-004', name: 'Almohada Viscoelástica Ergonómica', price: 79.90, image: 'product-almohada-viscoelastica-ergonomica.png', category: 'Dormitorio', description: 'Almohada de espuma viscoelástica que se adapta a la forma de tu cuello y cabeza, brindando soporte ergonómico para un descanso reparador y alivio de la presión.' },
        { id: 70, sku: 'TEL-014', name: 'Batería Externa Solar 20000mAh', price: 129.90, image: 'product-bateria-externa-solar-20000mah.png', category: 'Tecnología Electrohogar', description: 'Cargador portátil de 20000mAh con panel solar, ideal para actividades al aire libre. Resistente al agua y polvo, con linterna LED integrada.' },
        { id: 71, sku: 'TEL-015', name: 'Memoria MicroSDXC 128GB Clase 10', price: 59.90, image: 'product-memoria-microsdxc-128gb-clase-10.png', category: 'Tecnología Electrohogar', description: 'Expande el almacenamiento de tus dispositivos con esta tarjeta MicroSDXC de 128GB Clase 10. Ideal para smartphones, tablets, cámaras y drones. Incluye adaptador SD.' },
        { id: 72, sku: 'TEL-016', name: 'Smartphone Phoniq Lite 64GB Azul', price: 599.90, image: 'product-smartphone-phoniq-lite-64gb-azul.png', category: 'Tecnología Electrohogar', description: 'Smartphone compacto y ligero con 64GB de almacenamiento, pantalla de 5.5 pulgadas y cámara de 13MP. Color azul vibrante y rendimiento fluido para el día a día.' },
        { id: 73, sku: 'TEL-017', name: 'Router WiFi Dual Band AC1200', price: 199.90, image: 'product-router-wifi-dual-band-ac1200.png', category: 'Tecnología Electrohogar', description: 'Mejora tu conexión a internet con este router WiFi Dual Band AC1200. Velocidades de hasta 1200Mbps, ideal para streaming 4K y juegos online. Fácil configuración.' },
        { id: 74, sku: 'COC-007', name: 'Vajilla de Cerámica 4 Puestos Beige', price: 179.90, image: 'product-vajilla-de-ceramica-4-puestos-beige.png', category: 'Cocina', description: 'Juego de vajilla de cerámica para 4 puestos en color beige, diseño moderno y elegante. Incluye platos llanos, hondos, de postre y tazas. Apto para microondas y lavavajillas.' }
    ];

    // Datos para los selectores y menús
    const departmentsOfPeru = [
        "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", 
        "Cusco", "Huancavelica", "Huánuco", "Ica", "Junín", "La Libertad", "Lambayeque", 
        "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", 
        "San Martín", "Tacna", "Tumbes", "Ucayali"
    ];

    const categories = {
        main: { 
            name: 'Categorías', 
            icon: 'bi-list',
            subcategories: [
                { 
                    name: 'Hogar y Decoración', 
                    subcategories: [
                        'Muebles', 
                        'Organización y Decohogar', 
                        'Baño', 
                        'Cocina', 
                        'Dormitorio',
                        'Limpieza'
                    ] 
                },
                { 
                    name: 'Construcción y Acabados', 
                    subcategories: [
                        'Pisos y Cerámicos', 
                        'Construcción', 
                        'Electricidad', 
                        'Iluminación',
                        'Gasfitería', 
                        'Pinturas y acabados',
                        'Ferretería y Puertas'
                    ] 
                },
                { 
                    name: 'Herramientas', 
                    subcategories: [
                        'Herramientas Eléctricas', 
                        'Herramientas Manuales', 
                        'Accesorios de Herramientas'
                    ] 
                },
                { 
                    name: 'Exterior y Jardín', 
                    subcategories: [
                        'Terrazas y Aire Libre', 
                        'Jardinería'
                    ] 
                },
                { 
                    name: 'Tecnología y Otros', 
                    subcategories: [
                        'Tecnología Electrohogar', 
                        'Automotriz', 
                        'Oficina y Escolar', 
                        'Infantil', 
                        'Salud y Deportes', 
                        'Mascotas'
                    ] 
                }
            ]
        },
        otherLinks: [
            { name: 'Ofertas', url: '#' },
            { name: 'Novedades', url: '#' },
        ]
    };

    // Cart data - retrieved from localStorage or initialized as empty
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // --- DOM Elements ---
    const homepageContent = document.getElementById('homepage-content');
    const productDetailSection = document.getElementById('product-detail-section');
    const detailProductImage = document.getElementById('detail-product-image');
    const detailProductName = document.getElementById('detail-product-name');
    const detailProductPrice = document.getElementById('detail-product-price');
    const detailProductDescription = document.getElementById('detail-product-description');
    const quantityInput = document.getElementById('quantity');
    const detailAddToCartBtn = document.getElementById('detail-add-to-cart');
    const backToProductsBtn = document.getElementById('back-to-products');
    const productGrid = document.getElementById('product-grid');

    // Cart specific DOM elements
    const cartIconContainer = document.getElementById('cart-icon-container');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartDropdownList = document.getElementById('cart-dropdown-list');
    const cartDropdownEmptyMessage = cartDropdown.querySelector('.cart-dropdown-empty-message');
    const cartDropdownTotal = document.getElementById('cart-dropdown-total');
    const viewCartBtn = document.getElementById('view-cart-btn');

    const cartSection = document.getElementById('cart-section');
    const backToHomepageFromCartBtn = document.getElementById('back-to-homepage-from-cart');
    const fullCartList = document.getElementById('full-cart-list');
    const cartTotalItemsCount = document.getElementById('cart-total-items-count');
    const cartSummarySubtotal = document.getElementById('cart-summary-subtotal');
    const cartSummaryTotal = document.getElementById('cart-summary-total');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Category Products Section DOM Elements
    const categoryProductsSection = document.getElementById('category-products-section');
    const categoryProductsTitle = document.getElementById('category-products-title');
    const categoryProductGrid = document.getElementById('category-product-grid');
    const backToHomepageFromCategoryBtn = document.getElementById('back-to-homepage-from-category');

    // Search specific DOM elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // New Account/Login DOM elements
    const accountActionContainer = document.getElementById('account-action-container');
    const accountDropdown = document.getElementById('account-dropdown');
    const loginDropdownBtn = document.getElementById('login-dropdown-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModalBtn = document.getElementById('close-login-modal');
    const loginForm = document.querySelector('.login-form');

    // New: Category Mega Menu DOM elements (will be assigned after renderCategoriesNav)
    let categoryMenuToggle;
    let mainCategoryMegaMenu;

    // --- UTILITY FUNCTIONS ---

    /**
     * Hides all main content sections and shows the specified one.
     * @param {HTMLElement} sectionToShow The section to display.
     */
    function showSection(sectionToShow) {
        homepageContent.style.display = 'none';
        productDetailSection.style.display = 'none';
        cartSection.style.display = 'none';
        categoryProductsSection.style.display = 'none'; // Hide category/search section
        sectionToShow.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Shows the login modal.
     */
    function showLoginModal() {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }

    /**
     * Hides the login modal.
     */
    function hideLoginModal() {
        loginModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    /**
     * Hides the account dropdown.
     */
    function hideAccountDropdown() {
        if (accountActionContainer) {
            accountActionContainer.classList.remove('active');
        }
    }

    /**
     * Hides the category mega menu.
     */
    function hideCategoryMegaMenu() {
        if (mainCategoryMegaMenu) {
            mainCategoryMegaMenu.classList.remove('active');
        }
    }


    // --- CART LOGIC ---

    /**
     * Saves the current cart items to localStorage.
     */
    function saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    /**
     * Calculates the total number of items in the cart.
     * @returns {number} The total quantity of items.
     */
    function getCartItemCount() {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    /**
     * Calculates the total price of all items in the cart.
     * @returns {number} The total monetary value of items.
     */
    function getCartTotalPrice() {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    /**
     * Adds a product to the cart or updates its quantity if already present.
     * @param {number} productId The ID of the product to add.
     * @param {number} quantity The quantity to add.
     */
    function addToCart(productId, quantity) {
        const productToAdd = products.find(p => p.id === productId);
        if (!productToAdd) {
            console.error('Product not found:', productId);
            return;
        }

        const existingCartItem = cartItems.find(item => item.id === productId);

        if (existingCartItem) {
            existingCartItem.quantity += quantity;
        } else {
            cartItems.push({
                id: productToAdd.id,
                name: productToAdd.name,
                image: productToAdd.image,
                price: productToAdd.price,
                quantity: quantity
            });
        }
        saveCart();
        renderMiniCart();
        alert(`"${productToAdd.name}" agregado al carrito.`);
    }

    /**
     * Removes an item from the cart.
     * @param {number} productId The ID of the product to remove.
     */
    function removeFromCart(productId) {
        cartItems = cartItems.filter(item => item.id !== productId);
        saveCart();
        renderMiniCart();
        if (cartSection.style.display === 'block') { // If on cart page, re-render it
            renderCartPage();
        }
    }

    /**
     * Updates the quantity of a product in the cart.
     * @param {number} productId  The ID of the product to update.
     * @param {number} newQuantity The new quantity.
     */
    function updateCartQuantity(productId, newQuantity) {
        const cartItem = cartItems.find(item => item.id === productId);
        if (cartItem) {
            if (newQuantity <= 0) {
                removeFromCart(productId);
            } else {
                cartItem.quantity = newQuantity;
                saveCart();
                renderMiniCart(); // Update dropdown total
                if (cartSection.style.display === 'block') {
                    renderCartPage(); // Update full cart if visible
                }
            }
        }
    }

    /**
     * Renders the contents of the mini-cart dropdown.
     */
    function renderMiniCart() {
        cartDropdownList.innerHTML = '';
        if (cartItems.length === 0) {
            cartDropdownEmptyMessage.style.display = 'block';
            cartDropdownList.style.display = 'none';
        } else {
            cartDropdownEmptyMessage.style.display = 'none';
            cartDropdownList.style.display = 'block';
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.className = 'cart-dropdown-item';
                li.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-dropdown-item-info">
                        <p class="item-name">${item.name}</p>
                        <p class="item-price">S/ ${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}"><i class="bi bi-x-circle-fill"></i></button>
                `;
                cartDropdownList.appendChild(li);
            });
        }
        cartDropdownTotal.textContent = `S/ ${getCartTotalPrice().toFixed(2)}`;
    }

    /**
     * Renders the contents of the dedicated cart page.
     */
    function renderCartPage() {
        fullCartList.innerHTML = '';
        if (cartItems.length === 0) {
            fullCartList.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">Tu carrito de compras está vacío.</p>';
        } else {
            cartItems.forEach(item => {
                const div = document.createElement('div');
                div.className = 'full-cart-item';
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="full-cart-item-details">
                        <p class="item-name">${item.name}</p>
                        <p class="item-price">S/ ${item.price.toFixed(2)}</p>
                        <div class="full-cart-item-quantity">
                            <label for="quantity-${item.id}">Cantidad:</label>
                            <input type="number" id="quantity-${item.id}" value="${item.quantity}" min="1" max="99" data-id="${item.id}">
                        </div>
                    </div>
                    <p class="full-cart-item-subtotal">S/ ${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="remove-item-btn" data-id="${item.id}"><i class="bi bi-trash-fill"></i></button>
                `;
                fullCartList.appendChild(div);
            });
        }
        
        cartTotalItemsCount.textContent = getCartItemCount();
        cartSummarySubtotal.textContent = `S/ ${getCartTotalPrice().toFixed(2)}`;
        cartSummaryTotal.textContent = `S/ ${getCartTotalPrice().toFixed(2)}`; // Assuming no shipping cost for now
    }

    // --- RENDER FUNCTIONS ---

    /**
     * Carga los productos en la grilla principal de la página.
     */
    function renderProducts() {
        if (!productGrid) return;

        productGrid.innerHTML = ''; // Limpiar la grilla antes de agregar productos
        
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = product.id; // Store product ID
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <p class="product-name">${product.name}</p>
                <p class="product-price">S/ ${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Agregar al Carrito</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    /**
     * Carga los departamentos del Perú en el selector de dirección.
     */
    function renderDepartmentSelector() {
        const departmentSelect = document.getElementById('department-select');
        if (!departmentSelect) return;

        departmentsOfPeru.forEach(department => {
            const option = document.createElement('option');
            option.value = department.toLowerCase().replace(' ', '-');
            option.textContent = department;
            departmentSelect.appendChild(option);
        });
    }
    
    /**
     * Carga las categorías y subcategorías en la barra de navegación.
     */
    function renderCategoriesNav() {
        const categoryNav = document.getElementById('category-nav');
        if (!categoryNav) return;
        categoryNav.innerHTML = '';

        // --- Crear el menú principal de "Categorías" ---
        const mainCat = categories.main;
        const mainLi = document.createElement('li');
        mainLi.classList.add('mega-menu-container');
        mainLi.id = 'category-menu-toggle'; // Assign ID here for easy targeting
        mainLi.innerHTML = `<a href="#"><i class="bi ${mainCat.icon}"></i> ${mainCat.name}</a>`;

        const megaMenu = document.createElement('div');
        megaMenu.className = 'mega-menu';
        megaMenu.id = 'main-category-mega-menu'; // Assign ID here for easy targeting
        
        const megaMenuContent = document.createElement('div');
        megaMenuContent.className = 'mega-menu-content';

        mainCat.subcategories.forEach(cat => {
            const column = document.createElement('div');
            column.className = 'mega-menu-column';
            let columnHTML = `<h4><a href="#" class="category-link" data-category="${cat.name}">${cat.name}</a></h4><ul>`;
            cat.subcategories.forEach(sub => {
                columnHTML += `<li><a href="#" class="category-link" data-category="${sub}">${sub}</a></li>`;
            });
            columnHTML += `</ul>`;
            column.innerHTML = columnHTML;
            megaMenuContent.appendChild(column);
        });
        
        megaMenu.appendChild(megaMenuContent);
        mainLi.appendChild(megaMenu);
        categoryNav.appendChild(mainLi);

        // --- Crear otros links de la navegación ---
        categories.otherLinks.forEach(link => {
             const li = document.createElement('li');
             li.innerHTML = `<a href="${link.url}">${link.name}</a>`;
             categoryNav.appendChild(li);
        });
    }

    /**
     * Renders products filtered by a given category name.
     * This function handles both main categories and subcategories.
     * @param {string} categoryName The name of the category or subcategory to filter by.
     */
    function renderProductsByCategory(categoryName) {
        categoryProductsTitle.textContent = categoryName; // Set the title of the section
        categoryProductGrid.innerHTML = ''; // Clear existing products

        const filteredProducts = products.filter(p => {
            // Check if product's category matches the requested category directly (e.g., "Herramientas Eléctricas")
            if (p.category === categoryName) {
                return true;
            }
            // Check if the requested category is a main category and product's category is one of its subcategories
            const mainCategoryObj = categories.main.subcategories.find(cat => cat.name === categoryName);
            if (mainCategoryObj && mainCategoryObj.subcategories.includes(p.category)) {
                return true;
            }
            return false;
        });

        if (filteredProducts.length === 0) {
            categoryProductGrid.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">No hay productos disponibles en esta categoría.</p>';
        } else {
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.dataset.id = product.id; // Store product ID
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">S/ ${product.price.toFixed(2)}</p>
                    <button class="add-to-cart-btn" data-id="${product.id}">Agregar al Carrito</button>
                `;
                categoryProductGrid.appendChild(productCard);
            });
        }
        showSection(categoryProductsSection);
    }

    /**
     * Performs a search based on the query and displays results.
     * @param {string} query The user's search query.
     */
    function performSearch(query) {
        const normalizedQuery = query.toLowerCase().trim();
        if (!normalizedQuery) {
            goBackToProductGrid(); // If search is empty, go back to homepage
            return;
        }

        const searchKeywords = normalizedQuery.split(/\s+/).filter(word => word.length > 0);
        const foundProductIds = new Set();

        // Strategy 1: Attempt to match query directly to a category or subcategory
        let categoryToFilterBy = null;
        for (const mainCat of categories.main.subcategories) {
            // Check if main category name contains the query (e.g., query "hogar" matches "Hogar y Decoración")
            if (mainCat.name.toLowerCase().includes(normalizedQuery)) {
                categoryToFilterBy = mainCat.name;
                break;
            }
            // Check if any subcategory name contains the query (e.g., query "muebles" matches "Muebles")
            for (const subCat of mainCat.subcategories) {
                if (subCat.toLowerCase().includes(normalizedQuery)) {
                    categoryToFilterBy = subCat;
                    break;
                }
            }
            if (categoryToFilterBy) break;
        }

        if (categoryToFilterBy) {
            const matchedMainCategory = categories.main.subcategories.find(c => c.name.toLowerCase() === categoryToFilterBy.toLowerCase());
            if (matchedMainCategory) {
                // If the matched item is a main category, include all its listed subcategories
                matchedMainCategory.subcategories.forEach(subName => {
                    products.filter(p => p.category.toLowerCase() === subName.toLowerCase())
                            .forEach(p => foundProductIds.add(p.id));
                });
            } else {
                // It's a direct subcategory match (e.g., "Muebles"), so only include products from that exact category
                products.filter(p => p.category.toLowerCase() === categoryToFilterBy.toLowerCase())
                        .forEach(p => foundProductIds.add(p.id));
            }
        }

        // Strategy 2: Keyword matching in product name/description/product's own category
        products.forEach(product => {
            const productName = product.name.toLowerCase();
            const productDescription = product.description.toLowerCase();
            const productCategory = product.category.toLowerCase();

            // Check if ANY of the search keywords are present in product name OR description OR product's category
            const isKeywordMatch = searchKeywords.some(keyword =>
                productName.includes(keyword) ||
                productDescription.includes(keyword) ||
                productCategory.includes(keyword)
            );

            if (isKeywordMatch) {
                foundProductIds.add(product.id);
            }
        });

        // Convert set of unique product IDs back to product objects
        const relevantProducts = Array.from(foundProductIds).map(id => products.find(p => p.id === id)).filter(Boolean); // .filter(Boolean) removes undefined if an ID somehow doesn't map to a product

        renderSearchResults(relevantProducts, query);
    }

    /**
     * Renders the search results in the category products section.
     * @param {Array<Object>} productsToDisplay An array of product objects to display.
     * @param {string} query The original search query for display.
     */
    function renderSearchResults(productsToDisplay, query) {
        categoryProductsTitle.textContent = `Resultados de búsqueda para "${query}"`;
        categoryProductGrid.innerHTML = '';

        if (productsToDisplay.length === 0) {
            categoryProductGrid.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">No se encontraron productos que coincidan con su búsqueda.</p>';
        } else {
            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.dataset.id = product.id;
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">S/ ${product.price.toFixed(2)}</p>
                    <button class="add-to-cart-btn" data-id="${product.id}">Agregar al Carrito</button>
                `;
                categoryProductGrid.appendChild(productCard);
            });
        }
        showSection(categoryProductsSection);
    }


    // --- PAGE NAVIGATION LOGIC ---

    /**
     * Shows the product detail page for a given product ID.
     * @param {number} productId The ID of the product to display.
     */
    function showProductDetail(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.error('Product not found for ID:', productId);
            return;
        }

        // Populate product detail elements
        detailProductImage.src = product.image;
        detailProductImage.alt = product.name;
        detailProductName.textContent = product.name;
        detailProductPrice.textContent = `S/ ${product.price.toFixed(2)}`;
        detailProductDescription.textContent = product.description;
        quantityInput.value = 1; // Reset quantity to 1 when showing a new product
        detailAddToCartBtn.dataset.id = product.id; // Set product ID for add to cart button

        showSection(productDetailSection);
    }

    /**
     * Hides the product detail page and shows the homepage content.
     */
    function goBackToProductGrid() {
        showSection(homepageContent);
    }

    /**
     * Shows the dedicated cart page.
     */
    function showCartPage() {
        renderCartPage();
        showSection(cartSection);
    }

    /**
     * Hides the cart page and shows the homepage content.
     */
    function goBackToHomepageFromCart() {
        showSection(homepageContent);
    }


    // --- EVENT LISTENERS ---

    // Delegate click events on the product grid to handle product card clicks
    productGrid.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const addToCartButton = event.target.closest('.add-to-cart-btn');

        if (addToCartButton && productCard) { // Clicked "Agregar al Carrito" on product card
            const productId = parseInt(addToCartButton.dataset.id);
            addToCart(productId, 1); // Add 1 item to cart
            event.stopPropagation(); // Prevent card click from showing detail page
        } else if (productCard) { // Clicked anywhere else on product card
            const productId = parseInt(productCard.dataset.id);
            showProductDetail(productId);
        }
    });

    // Delegate click events on the category product grid to handle product card clicks
    categoryProductGrid.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const addToCartButton = event.target.closest('.add-to-cart-btn');

        if (addToCartButton && productCard) { // Clicked "Agregar al Carrito" on product card
            const productId = parseInt(addToCartButton.dataset.id);
            addToCart(productId, 1); // Add 1 item to cart
            event.stopPropagation(); // Prevent card click from showing detail page
        } else if (productCard) { // Clicked anywhere else on product card
            const productId = parseInt(productCard.dataset.id);
            showProductDetail(productId);
        }
    });

    // Event listener for "Agregar al Carrito" button on detail page
    detailAddToCartBtn.addEventListener('click', (event) => {
        const productId = parseInt(event.target.dataset.id);
        const quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            addToCart(productId, quantity);
        } else {
            alert('Por favor, ingresa una cantidad válida.');
        }
    });

    // Event listener for the back button on the product detail page
    backToProductsBtn.addEventListener('click', goBackToProductGrid);

    // Event listener for the cart icon to toggle dropdown
    cartIconContainer.addEventListener('click', (event) => {
        // Prevent click on cart dropdown from propagating and closing it immediately
        if (event.target.closest('.cart-dropdown')) {
            return;
        }
        cartIconContainer.classList.toggle('active');
        // If dropdown is now active, ensure it's rendered
        if (cartIconContainer.classList.contains('active')) {
            renderMiniCart();
        }
        event.stopPropagation(); // Prevent this click from closing the dropdown via global listener
    });

    // New: Event listener for "Mi Cuenta" dropdown toggle
    if (accountActionContainer) {
        accountActionContainer.addEventListener('click', (event) => {
            // If the click is inside the dropdown itself, don't close/toggle it, let child elements handle their own clicks
            if (event.target.closest('.account-dropdown')) {
                return;
            }
            accountActionContainer.classList.toggle('active');
            event.stopPropagation(); // Prevent this click from closing the dropdown via global listener
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        // Close cart dropdown
        if (!cartIconContainer.contains(event.target) && cartIconContainer.classList.contains('active')) {
            cartIconContainer.classList.remove('active');
        }
        // Close account dropdown
        if (accountActionContainer && !accountActionContainer.contains(event.target) && accountActionContainer.classList.contains('active')) {
            accountActionContainer.classList.remove('active');
        }
        // Close category mega menu if it's open and click is outside its toggle or the menu itself
        if (mainCategoryMegaMenu && categoryMenuToggle && !categoryMenuToggle.contains(event.target) && !mainCategoryMegaMenu.contains(event.target)) {
            hideCategoryMegaMenu();
        }
    });

    // Delegate click events for remove buttons in mini-cart
    cartDropdownList.addEventListener('click', (event) => {
        const removeBtn = event.target.closest('.remove-item-btn');
        if (removeBtn) {
            const productId = parseInt(removeBtn.dataset.id);
            removeFromCart(productId);
            event.stopPropagation(); // Prevent closing dropdown if this click triggers it
        }
    });

    // Event listener for "Ver mi Carrito" button in mini-cart
    viewCartBtn.addEventListener('click', () => {
        cartIconContainer.classList.remove('active'); // Close dropdown
        showCartPage();
    });

    // Event listener for back button on full cart page
    backToHomepageFromCartBtn.addEventListener('click', goBackToHomepageFromCart);

    // Event listener for back button on category products page (also used for search results)
    backToHomepageFromCategoryBtn.addEventListener('click', goBackToProductGrid);

    // Delegate events for full cart page (remove and quantity update)
    fullCartList.addEventListener('click', (event) => {
        const removeBtn = event.target.closest('.remove-item-btn');
        if (removeBtn) {
            const productId = parseInt(removeBtn.dataset.id);
            removeFromCart(productId);
        }
    });

    fullCartList.addEventListener('change', (event) => {
        const quantityInput = event.target.closest('input[type="number"]');
        if (quantityInput) {
            const productId = parseInt(quantityInput.dataset.id);
            const newQuantity = parseInt(quantityInput.value);
            updateCartQuantity(productId, newQuantity);
        }
    });

    // Placeholder for checkout button
    checkoutBtn.addEventListener('click', () => {
        alert('¡Procediendo al pago! (Esta es una funcionalidad de ejemplo)');
        // In a real app, this would redirect to a checkout page or trigger payment processing
    });

    // Event listener for category links in the main navigation
    document.querySelector('.main-nav').addEventListener('click', (event) => {
        const categoryLink = event.target.closest('.category-link');
        if (categoryLink) {
            event.preventDefault(); // Prevent default link navigation
            const categoryName = categoryLink.dataset.category;
            if (categoryName) {
                renderProductsByCategory(categoryName);
                hideCategoryMegaMenu(); // Close the mega menu after a category link is clicked
            }
        }
    });

    // Event listener for search button click
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });

    // Event listener for "Enter" key press in search input
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    // New: Event listeners for login modal
    if (loginDropdownBtn) {
        loginDropdownBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent any default link behavior
            hideAccountDropdown(); // Close account dropdown
            showLoginModal();
        });
    }

    if (closeLoginModalBtn) {
        closeLoginModalBtn.addEventListener('click', hideLoginModal);
    }

    if (loginModal) {
        // Close modal if clicking outside modal content
        loginModal.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                hideLoginModal();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // In a real application, you would send this to a backend for authentication
            alert(`Simulando inicio de sesión con:\nCorreo: ${email}\nContraseña: ${password}\n(Esta es una simulación)`);
            hideLoginModal();
            // Clear form
            loginForm.reset();
        });
    }


    // --- INITIALIZE PAGE ---
    renderProducts();
    renderDepartmentSelector();
    renderCategoriesNav();
    // Assign category mega menu elements after they have been rendered
    categoryMenuToggle = document.getElementById('category-menu-toggle');
    mainCategoryMegaMenu = document.getElementById('main-category-mega-menu');
    
    // Add click listener for the category menu toggle
    if (categoryMenuToggle) {
        categoryMenuToggle.addEventListener('click', (event) => {
            // Prevent click inside mega menu from propagating and closing it immediately
            if (event.target.closest('.mega-menu')) {
                return;
            }
            mainCategoryMegaMenu.classList.toggle('active');
            event.stopPropagation(); // Prevent this click from closing the dropdown via global listener
        });
    }

    renderMiniCart(); // Render cart state on load
});