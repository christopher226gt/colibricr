/*<!-- Inicialización de i18next y definiciones de traducciones*/
const resources = {

    en: {
        translation: {
            page: { title: "Colibri Cabins - Mountain Retreat" },
            topbar_reservar: "RESERVE",
            topbar_contactenos: "CONTACT US",
            topbar_maps: "MAPS",
            navbar_inicio: "HOME",
            navbar_concepto: "CONCEPT",
            navbar_habitaciones: "ROOMS",
            navbar_actividades: "ACTIVITIES",
            navbar_galeria: "GALLERY",
            navbar_ubicacion: "LOCATION",
            navbar_contacto: "CONTACT",
            navbar_menu: "MENU",
            slider: {
                title: "SWISS CABIN",
                subtitle: "with 5 mountain rooms in Heredia, Costa Rica",
                description: `Discover our cabins for couples or groups with <br> ideal spaces to relax and connect with nature, <br> only 15 min from San José - route 32. <a href="https://www.waze.com/en/live-map/directions/cabanas-colibri-c-yerba-buena?navigate=yes&place=w.180879460.1808663530.7942460" target="_blank" class="link-btn"><i class="fa-brands fa-waze"></i> Waze</a>
<a href="https://maps.app.goo.gl/TVxgWLvrNZrfi4Mn7" target="_blank" class="link-btn"><i class="fa-solid fa-map-location-dot"></i> Maps</a>`,
                reserve: "Reserve"
            },
            concepto: {
                title: "CONCEPT (SERVICES AND AMENITIES)",
                description: "Construction of 4 rooms inside a chalet inspired by Switzerland with independent rooms. Additionally, 1 external room surrounded by nature, flora, and fauna of San Isidro de Heredia and the slopes of Zurquí.",
                amenities: {
                    amenity1: "Construction of 4 rooms inside a Swiss-inspired chalet. Includes parking.",
                    amenity2: "1 separate room from the chalet with an ideal space for a family gathering or group. (Room #5) Parking available.",
                    amenity3: "100m long trail.",
                    amenity4: "3 rooms feature a spacious jacuzzi.",
                    amenity5: "Breakfast served in the room.",
                    amenity6: "Includes internet and TV service."
                }
            },
            habitaciones: {
                title: "Our Rooms",
                description: "Discover our rooms designed for your comfort and relaxation. Each offers a unique experience in a natural setting.",
                room1: {
                    title: "Room #1 - Geneva",
                    description: "Room in Swiss cabin.",
                    link: "View Room"
                },
                room2: {
                    title: "Room #2 - Zurich",
                    description: "Room in Swiss cabin.",
                    link: "View Room"
                },
                room3: {
                    title: "Room #3 - Lugano",
                    description: "Room in Swiss cabin.",
                    link: "View Room"
                },
                room4: {
                    title: "Room #4 - Bern",
                    description: "Room in Swiss cabin.",
                    link: "View Room"
                },
                room5: {
                    title: "Room #5 - Zermatt",
                    description: "Spacious room, outside Swiss cabin.",
                    link: "View Room"
                }                
            },
            explora: {
                title: "Explore and Enjoy",
                description: "Discover restaurants, activities, and tourist spots near our cabin.",
                filters: {
                    comun: "🌟 Common",
                    all: "All",
                    restaurante: "🍽 Restaurants",
                    actividad: "🎭 Activities",
                    parque: "🌲 Parks"
                },
                lugares: {
                    toucan: {
                        title: "Toucan Rescue Ranch",
                        description: "Animal shelter.",
                        link: "View More"
                    },
                    trattoria: {
                        title: "Trattoria Il Gusto Toscano",
                        description: "Nearby Restaurant.",
                        link: "View More"
                    },
                    riverside: {
                        title: "Riverside",
                        description: "Nearby Restaurant.",
                        link: "View More"
                    },
                    laSelva: {
                        title: "La selva",
                        description: "Nearby Restaurant.",
                        link: "View More"
                    },
                    lasJuntas: {
                        title: "Las Juntas",
                        description: "Nearby Restaurant.",
                        link: "View More"
                    },
                    lasTranqueras: {
                        title: "Las tranqueras",
                        description: "Beach resort.",
                        link: "View More"
                    },
                    bosque: {
                        title: "Bosque Caricias los Leones",
                        description: "Explore the region's biodiversity.",
                        link: "View More"
                    },
                    chocolate: {
                        title: "Chocolate Sibö",
                        description: "Chocolatería - Chocolate Tour.",
                        link: "View More"
                    },
                    laPaz: {
                        title: "La Paz Waterfall Gardens",
                        description: "Waterfall on the road.",
                        link: "View More"
                    },
                    braulio: {
                        title: "Braulio Carrillo National Park",
                        description: "National Park.",
                        link: "View More"
                    },
                    monte: {
                        title: "Monte de la Cruz",
                        description: "Recreational Center.",
                        link: "View More"
                    },
                    aerial_tram: {
                        title: "Aerial Tram",
                        description: "Tours",
                        link: "View More"
                    }                    
                }
            },
            galeria: {
                title: "Gallery of Our Cabin",
                description: "Explore our gallery and immerse yourself in the beauty and comfort we offer.",
                mas: "See more photos",
                menos:"See less"
            },
            ubicacion: {
                title: "LOCATION",
                description: "We are located in Santa Elena, San Isidro de Heredia, Costa Rica. 300 meters from the sports plaza, near route 32 toward Limón. Visit us and experience our cabin for a time of relaxation and peace in nature.",
                schedule: "Schedule: Regular check-in from 4pm and check-out at 11:00am the next day. Please check availability for special hours.",
                contactForm: {
                    title: "SEND US YOUR MESSAGE",
                    namePlaceholder: "Name *",
                    emailPlaceholder: "Email *",
                    phonePlaceholder: "Phone",
                    messagePlaceholder: "Message",
                    button: "SEND"
                }
            },
            reserva: {
                title: "RESERVE",
                description1: "To reserve: call or message(WhatsApp) <strong>+(506) 8836-9997</strong> <i class='fab fa-whatsapp'></i>",
                description2: "Room availability is subject to confirmation.",
                description3: "Reservation details will be sent via <strong>Sinpe Móvil</strong> – bank accounts for deposit of at least half, and the remainder upon arrival.",
                button: "Reserve",
                notice: "In case of late check-out, a fee of 5,000 colones per hour will be charged. Fine for smoking in the room: 10,000 colones."
            },
            footer: {
                location: {
                    title: "Location",
                    description: "Santa Elena, San Isidro de Heredia, Costa Rica. 300 meters from the sports plaza, near route 32 toward Limón."
                },
                links: {
                    title: "Quick Links",
                    home: "Home",
                    concept: "Concept",
                    rooms: "Rooms",
                    activities: "Activities",
                    gallery: "Gallery",
                    location: "Location",
                    contact: "Contact"
                },
                social: {
                    title: "Follow us",
                },
                copyright: "&copy; 2025 colibricr.com All rights reserved. Developed by <a href='https://www.wincodecr.com/' target='_blank'>Wincodecr</a>",
            },
            menu: {
                desayuno:{
                    desayuno: `Breakfast <img src="assets/img/menu/switzerland.png"
                              alt="Breakfast icon" class="icono-switzerland">`,
                    principal:  "INCLUDED IN THE RATE",
                    secundario:  "2 people",
                    i1: "Coffee, Tea or Orange Juice.",
                    i2: "2 Toasts.",
                    i3: "Scrambled / chopped eggs.",
                    i4: "Chopped fruit. (papaya, banana).",
                    det1: "<strong>Additional pinto portion:</strong> 1,000 COLONES (Request the day before)",
                    det2: "Served to the room between 8am and 10am (Time indicated the day before)<br> Additional breakfasts: 2,500 colones.",                    
                },
                servicio:{
                    titulo:"ROOM SERVICE",
                    telservicio:"2268-4488",
                    pizzas:{
                        det:"Pizzas - ₡11,000.00 (12 slices).",
                        i1:"1- Supreme (Cheese, Salami, Ham, Bell Pepper, Onion, Bacon, Beef and pizza sauce).",
                        i2:"2- Neapolitan (Cheese, Salami, pizza sauce).",
                        i3:"3- Capricciosa (Cheese, Salami, Ham, Bell Pepper, Onion, pizza sauce).",
                        i4:"4- Hawaiian (Cheese, Salami, Ham, Mushrooms and Pineapple, pizza sauce).",
                        i5:"5- Mushroom Mix (Cheese, Salami, Ham, Mushrooms, pizza sauce).",
                        i6:"6- Bacon (Bacon, Salami, Ham, Bell Pepper, Onion, Mushrooms, pizza sauce).",
                        i7:"7- Pepperoni (Tomato sauce, Cheese and Pepperoni).",
                        i8:"8- Vegetarian (Cheese, Bell Pepper, Onion, Mushrooms, Tomato and pizza sauce).",
                        i9:"9- Mozzarella (Cheese and pizza sauce).",
                        i10:"10- Jalapeño (Cheese, Bacon, Bell Pepper, Onion, Mushrooms, Beef and pizza sauce).",
                        i11:"11- Margherita (Cheese, Tomato, Oregano, Basil and pizza sauce).",
                    },
                    permite: "*You may order half of one flavor and half of another.",
                    bebidas:{
                        det:"Drinks",
                        i1:"1- Coca Cola - ₡1,500.",
                        i2:"2- Peach Iced Tea - ₡1,500.",
                        i3:"3- Bottle of water - ₡1,500.",
                        i4:"4- Coffee with milk or Tea - ₡1,200.",
                        i5:"5- Beer can (Pilsener 350ml) - ₡1,600.",
                        i6:"6- Glass of red wine / Bottle - ₡2,000 / ₡9,000.",
                        i7:"7- Bubble soap bottle - ₡2,000.",
                    },
                    otros:"You can use your own food or order from delivery platforms.<br> For any other request or craving, please call us and if it's within our means, we’ll gladly fulfill it.",
                },
            }, 
            ginebra: {
                title: "Room #1 Ginebra",
                detalle: "Room Details",
                descripcion: "Room #1, named GINEBRA, combines a design inspired by Swiss elegance with modern comfort. Enjoy a spacious rest area, feel surrounded by greenery, and enjoy a large private jacuzzi that evokes the grandeur of Lake Geneva.",
                capacidad: "<strong>Capacity:</strong> 2 people 1 Full Double Bed.",
                comodidades: "<strong>Amenities:</strong> Private Jacuzzi (shower inside the jacuzzi), 32” Smart TV, WIFI, Microwave and Mini-fridge.",
                vistas: "<strong>Views:</strong> Garden nature view.",
                ubicacion: "<strong>Location:</strong> Ground floor at the back, in the cabin with Swiss design.",
                reservar1: "Book Now",
                galeria: "Room Gallery",
                caracteristicas: "Additional Features",
                internet: "Internet",
                internet_detalle: "Stay connected.",
                tv: "TV",
                tv_detalle: "32” Smart TV",
                servicio: "Room Service",
                servicio_detalle: "Care for your comfort.",
                habitacion: "Room",
                habitacion_detalle: "Full Double Bed.",
                jacuzzi: "Private Jacuzzi",
                jacuzzi_detalle: "Relax in your own jacuzzi.",
                eletrodomesticos: "Appliances",
                eletrodomesticos_detalle: "Microwave and Mini-fridge.",
                reservar2: "Book Room Ginebra now.",
            },
            zurich: {
                title: "Room #2 Zurich",
                detalle: "Room Details",
                descripcion: "Room #2, named ZURICH, combines a design inspired by the great Swiss city with modern basic comfort. Enjoy a modern room with a spacious shower, feel surrounded by greenery, and enjoy a multicultural room with the possibility of expanding to host up to 4 people using 2 adjoining rooms.",
                capacidad: "<strong>Capacity:</strong> 2–4 people 1 Full Double Bed and 2 Twin Beds.",
                comodidades: "<strong>Amenities:</strong> Spacious Shower, 3x 32” Smart TVs, WIFI, Microwave and Mini-fridge.",
                vistas: "<strong>Views:</strong> Garden nature view.",
                ubicacion: "<strong>Location:</strong> Ground floor at the front, in the cabin with Swiss design, Accessible.",
                reservar1: "Book Now",
                galeria: "Room Gallery",
                caracteristicas: "Additional Features",
                internet: "Internet",
                internet_detalle: "Stay connected.",
                tv: "TV",
                tv_detalle: "3x 32” Smart TVs",
                servicio: "Room Service",
                servicio_detalle: "Care for your comfort.",
                habitacion: "Room",
                habitacion_detalle: "1 Full Double Bed and 2 Twin Beds.",
                jacuzzi: "Spacious Shower",
                jacuzzi_detalle: "Spacious Shower.",
                eletrodomesticos: "Appliances",
                eletrodomesticos_detalle: "Microwave and Mini-fridge.",
                reservar2: "Book Room Zurich now.",
            },            
            lugano: {
                title: "Room #3 Lugano",
                detalle: "Room Details",
                descripcion: "Room #3, named LUGANO, blends a design inspired by the warm and beautiful Swiss city with its great lake and stunning views. Enjoy a modern room with rustic cypress touches and a large window facing the forest. Feel surrounded by greenery and enjoy a jacuzzi filled by cascading water.",
                capacidad: "<strong>Capacity:</strong> 2 people 1 Full Double Bed.",
                comodidades: "<strong>Amenities:</strong> Private Jacuzzi, Shower, 1x 32” Smart TV, WIFI, Microwave and Mini-fridge.",
                vistas: "<strong>Views:</strong> Forest view from the bed or jacuzzi.",
                ubicacion: "<strong>Location:</strong> Upper floor at the back, in the cabin with Swiss design, stairs required.",
                reservar1: "Book Now",
                galeria: "Room Gallery",
                caracteristicas: "Additional Features",
                internet: "Internet",
                internet_detalle: "Stay connected.",
                tv: "TV",
                tv_detalle: "1x 32” Smart TV.",
                servicio: "Room Service",
                servicio_detalle: "Care for your comfort.",
                habitacion: "Room",
                habitacion_detalle: "1 Full Double Bed.",
                jacuzzi: "Private Jacuzzi",
                jacuzzi_detalle: "Relax in your own jacuzzi.",
                eletrodomesticos: "Appliances",
                eletrodomesticos_detalle: "Microwave and Mini-fridge.",
                reservar2: "Book Room Lugano now.",
            },            
            berna: {
                title: "Room #4 Berna",
                detalle: "Room Details",
                descripcion: "Room #4, named BERNA, features a design inspired by the rustic capital city. Enjoy a modern room with rustic cypress touches and a fully equipped kitchen. Feel comfortable, warm, and prepare your own meals.",
                capacidad: "<strong>Capacity:</strong> 2 people 1 Full Double Bed.",
                comodidades: "<strong>Amenities:</strong> Kitchen, Refrigerator, Sink, Microwave, Shower, 1x 32” Smart TV, WIFI.",
                vistas: "<strong>Views:</strong> Garden view from the external balcony only.",
                ubicacion: "<strong>Location:</strong> Upper floor at the front, in the cabin with Swiss design, stairs required.",
                reservar1: "Book Now",
                galeria: "Room Gallery",
                caracteristicas: "Additional Features",
                internet: "Internet",
                internet_detalle: "Stay connected.",
                tv: "TV",
                tv_detalle: "1x 32” Smart TV.",
                servicio: "Room Service",
                servicio_detalle: "Care for your comfort.",
                habitacion: "Room",
                habitacion_detalle: "1 Full Double Bed.",
                jacuzzi: "Private Jacuzzi",
                jacuzzi_detalle: "Relax in your own jacuzzi.",
                eletrodomesticos: "Appliances",
                eletrodomesticos_detalle: "Kitchen, Refrigerator, Sink, Microwave.",
                reservar2: "Book Room Berna now.",
            },            
            zermatt: {
                title: "Room #5 Zermatt",
                detalle: "Room Details",
                descripcion: "Room #5, named ZERMATT, combines a rustic mountain design with the grandeur of the iconic Matterhorn. Enjoy an exclusive outdoor area with a firepit and grill, a fully equipped kitchen, and a giant jacuzzi perfect for couples or family relaxation.",
                capacidad: "<strong>Capacity:</strong> 2–4 people 2 Full Double Beds.",
                comodidades: "<strong>Amenities:</strong> Giant Jacuzzi, Firepit, Grill, Kitchen, Refrigerator, Sink, Microwave, Shower, 1x 40” Smart TV, WIFI.",
                vistas: "<strong>Views:</strong> Garden and rustic cabin from the outdoor area.",
                ubicacion: "<strong>Location:</strong> Ground floor, isolated from the other rooms, accessible.",
                reservar1: "Book Now",
                galeria: "Room Gallery",
                caracteristicas: "Additional Features",
                internet: "Internet",
                internet_detalle: "Stay connected.",
                tv: "TV",
                tv_detalle: "1x 40” Smart TV.",
                servicio: "Room Service",
                servicio_detalle: "Care for your comfort.",
                habitacion: "Room",
                habitacion_detalle: "2 Full Double Beds.",
                jacuzzi: "Giant Private Jacuzzi",
                jacuzzi_detalle: "Relax in your own jacuzzi and shower.",
                eletrodomesticos: "Appliances and more",
                eletrodomesticos_detalle: "Kitchen, Refrigerator, Sink, Microwave, Firepit, Grill.",
                reservar2: "Book Room Zermatt now.",
            },                                   
        }
    },
    es: {
        translation: {
            page: { title: "Cabañas Colibrí - De Montaña" },
            topbar_reservar: "RESERVAR",
            topbar_contactenos: "CONTÁCTENOS",
            topbar_maps: "MAPS",
            navbar_inicio: "INICIO",
            navbar_concepto: "CONCEPTO",
            navbar_habitaciones: "HABITACIONES",
            navbar_actividades: "ACTIVIDADES",
            navbar_galeria: "GALERÍA",
            navbar_ubicacion: "UBICACIÓN",
            navbar_contacto: "CONTACTO",
            navbar_menu: "MENU",
            slider: {
                title: "CABAÑA SUIZA",
                subtitle: "con 5 Habitaciones de Montaña en Heredia, Costa Rica",
                description: `Descubre nuestras cabañas para parejas o grupos con <br> espacios ideales para relajarte y conectar con la naturaleza, <br> a solo 15 min de San José - Ruta 32. <a href="https://www.waze.com/en/live-map/directions/cabanas-colibri-c-yerba-buena?navigate=yes&place=w.180879460.1808663530.7942460" target="_blank" class="link-btn"><i class="fa-brands fa-waze"></i> Waze</a>
<a href="https://maps.app.goo.gl/TVxgWLvrNZrfi4Mn7" target="_blank" class="link-btn"><i class="fa-solid fa-map-location-dot"></i> Maps</a> `,
                reserve: "Reservar"
            },
            concepto: {
                title: "CONCEPTO (SERVICIOS Y AMENIDADES)",
                description: "Construcción de 4 habitaciones dentro de chalet inspirado en Suiza con habitaciones independientes. Además, 1 habitación externa rodeada de naturaleza, flora y fauna de San Isidro de Heredia y las faldas del Zurquí.",
                amenities: {
                    amenity1: "Construcción de 4 habitaciones dentro de chalet inspirado en Suiza. Incluye parqueo.",
                    amenity2: "1 Habitación separada del chalet con espacio ideal para reunión familiar o grupo. (Habitación #5) Parqueo.",
                    amenity3: "Sendero de 100m de largo.",
                    amenity4: "3 habitaciones cuentan con amplio jacuzzi.",
                    amenity5: "Desayuno servido a la habitación.",
                    amenity6: "Incluye servicio de internet y TV."
                }
            },
            habitaciones: {
                title: "Nuestras Habitaciones",
                description: "Descubre nuestras habitaciones diseñadas para tu confort y relajación. Cada una ofrece una experiencia única en un entorno natural.",
                room1: {
                    title: "Habitación #1 - Ginebra",
                    description: "Habitación en cabaña Suiza.",
                    link: "Ver Habitación"
                },
                room2: {
                    title: "Habitación #2 - Zúrich",
                    description: "Habitación en cabaña Suiza.",
                    link: "Ver Habitación"
                },
                room3: {
                    title: "Habitación #3 - Lugano",
                    description: "Habitación en cabaña Suiza.",
                    link: "Ver Habitación"
                },
                room4: {
                    title: "Habitación #4 - Berna",
                    description: "Habitación en cabaña Suiza.",
                    link: "Ver Habitación"
                },
                room5: {
                    title: "Habitación #5 - Zermatt",
                    description: "Habitación amplia, externa a cabaña Suiza.",
                    link: "Ver Habitación"
                }
            },
            explora: {
                title: "Explora y Disfruta",
                description: "Descubre restaurantes, actividades y lugares turísticos cerca de nuestra cabaña.",
                filters: {
                    comun: "🌟 Común",
                    all: "Todos",
                    restaurante: "🍽 Restaurantes",
                    actividad: "🎭 Actividades",
                    parque: "🌲 Parques"
                },
                lugares: {
                    toucan: {
                        title: "Toucan Rescue Ranch",
                        description: "Refugio de animales.",
                        link: "Ver más"
                    },
                    trattoria: {
                        title: "Trattoria Il Gusto Toscano",
                        description: "Restaurante Cercano.",
                        link: "Ver más"
                    },
                    riverside: {
                        title: "Riverside",
                        description: "Restaurante Cercano.",
                        link: "Ver más"
                    },
                    laSelva: {
                        title: "La selva",
                        description: "Restaurante Cercano.",
                        link: "Ver más"
                    },
                    lasJuntas: {
                        title: "Las Juntas",
                        description: "Restaurante Cercano.",
                        link: "Ver más"
                    },
                    lasTranqueras: {
                        title: "Las tranqueras",
                        description: "Balneario.",
                        link: "Ver más"
                    },
                    bosque: {
                        title: "Bosque Caricias los Leones",
                        description: "Explora la biodiversidad de la región.",
                        link: "Ver más"
                    },
                    chocolate: {
                        title: "Chocolate Sibö",
                        description: "Chocolatería - Tour de Chocolate.",
                        link: "Ver más"
                    },
                    laPaz: {
                        title: "La Paz Waterfall Gardens",
                        description: "Catarata sobre carretera.",
                        link: "Ver más"
                    },
                    braulio: {
                        title: "Parque Nacional Brauilio Carrillo",
                        description: "Parque Nacional.",
                        link: "Ver más"
                    },
                    monte: {
                        title: "Monte de la Cruz",
                        description: "Centro Recreativo.",
                        link: "Ver más"
                    },
                    aerial_tram: {
                        title: "Aerial Tram",
                        description: "Tours",
                        link: "Ver más"
                    }  
                }
            },
            galeria: {
                title: "Galería de Nuestra Cabaña",
                description: "Explora nuestra galería y sumérgete en la belleza y confort que ofrecemos.",
                mas: "Ver más fotos",
                menos:"Ver menos"
            },
            ubicacion: {
                title: "UBICACIÓN",
                description: "Estamos ubicados en Santa Elena, San Isidro de Heredia, Costa Rica. A 300 metros de la plaza de deportes, cerca de ruta 32 carretera a Limón. Visítenos y conozca nuestra cabaña para pasar un tiempo de relajación y paz en medio de la naturaleza.",
                schedule: "Horario: Entrada regular a partir de las 4pm y salida a las 11:00am del día siguiente. Consulte disponibilidad para horarios especiales.",
                contactForm: {
                    title: "ENVÍENOS SU MENSAJE",
                    namePlaceholder: "Nombre *",
                    emailPlaceholder: "Correo electrónico *",
                    phonePlaceholder: "Teléfono",
                    messagePlaceholder: "Mensaje",
                    button: "ENVIAR"
                }
            },
            reserva: {
                title: "RESERVAR",
                description1: "Para reservar: llame o escriba(WhatsApp) al <strong>+(506) 8836-9997</strong> <i class='fab fa-whatsapp'></i>",
                description2: "Se verifica la disponibilidad de la habitación.",
                description3: "Se procede a enviar detalle de reserva, <strong>Sinpe Móvil</strong> – Cuentas bancarias para el depósito de mínimo la mitad y el resto al llegar.",
                button: "Reservar",
                notice: "En caso de exceder la hora de salida, se cobrará 5.000 colones por cada hora de retraso. Multa por fumar dentro de la habitación: 10.000 colones."
            },
            footer: {
                location: {
                    title: "Ubicación",
                    description: "Santa Elena, San Isidro de Heredia, Costa Rica. A 300 metros de la plaza de deportes, cerca de ruta 32 carretera a Limón."
                },
                links: {
                    title: "Enlaces Rápidos",
                    home: "Inicio",
                    concept: "Concepto",
                    rooms: "Habitaciones",
                    activities: "Actividades",
                    gallery: "Galería",
                    location: "Ubicación",
                    contact: "Contacto"
                },
                social: {
                    title: "Síguenos"
                },
                copyright: "&copy; 2025 colibricr.com Todos los derechos reservados. Desarrollado por <a href='https://www.wincodecr.com/' target='_blank'>Wincodecr</a>"
            },
            menu: {
                desayuno:{
                    desayuno: `Desayuno <img src="assets/img/menu/switzerland.png"
                              alt="Icono de desayuno" class="icono-switzerland">`,
                    principal:  "INCLUIDO DENTRO DE LA TARIFA",
                    secundario:  "2 personas",
                    i1: "Café, Té o Jugo de Naranja.",
                    i2: "2 Tostadas.",
                    i3: "Huevos revueltos / picados.",
                    i4: "Fruta picada. (papaya, banano).",
                    det1: "<strong >Porción de pinto adicional:</strong> 1,000 COLONES (Solicitar día anterior)",
                    det2: "Servido a la habitación entre las 8am y 10am (Hora indicada día antes)<br> Desayunos adicionales: 2.500 colones.",                    
                },
                servicio:{
                    titulo:"SERVICIO A LA HABITACIÓN",
                    telservicio:"2268-4488",
                    pizzas:{
                        det:"Pizzas - ₡11,000.00 (12 piezas).",
                        i1:"1- Suprema (Queso, Salami, Jamón, Chile, Cebolla, Tocineta, Carne de Res y salsa de pizza).",
                        i2:"2- Napolitana (Queso, salami, salsa de pizza).",
                        i3:"3- Caprichosa (Queso, salami, jamón, Chile, Cebolla, salsa de pizza).",
                        i4:"4- Hawaiana (Queso, salami, jamón, Hongos y piña, salsa de pizza).",
                        i5:"5- Hongonada (Queso, salami, jamón, Hongos, salsa de pizza).",
                        i6:"6- Tocineta (Tocineta, salami, jamón, Chile, cebolla, hongos, salsa de pizza).",
                        i7:"7- Pepperoni (Salsa de tomate, queso y pepperoni).",
                        i8:"8- Vegetariana (Queso, chile, cebolla, hongos, tomate y salsa de pizza).",
                        i9:"9- Mozzarella (Queso y salsa de pizza).",
                        i10:"10- Jalapeña (Queso, tocineta, chile, cebolla, hongos, carne de res y salsa de pizza).",
                        i11:"11- Margarita (Queso, tomate, Orégano, Albahaca y salsa de pizza).",

                    },
                    permite: "*Se permite pedir mitad de un sabor y mitad de otro.",
                    bebidas:{
                        det:"Bebidas",
                        i1:"1- Coca Cola - ₡1,500.",
                        i2:"2- Té frío Melocotón - ₡1,500.",
                        i3:"3- Botella de agua - ₡1,500.",
                        i4:"4- Café con leche o Té - ₡1,200.",
                        i5:"5- Cerveza lata (Pilsener de 350ml) - ₡1,600.",
                        i6:"6- Copa de vino tinto / Botella - ₡2,000 / ₡9,000.",
                        i7:"7- Botella jabón de burbujas - ₡2,000.",
                    },
                    otros:"Puedes usar tu propia comida u ordenar a plataformas express.<br> Cualquier otro requerimiento o antojo favor llamar y si está en nuestras posibilidades te complacemos con gusto.",
                },
            },
            ginebra: {
                title:"Habitación #1 Ginebra",
                detalle:"Detalle de la Habitación",
                descripcion:"La Habitación #1, denominada GINEBRA, combina un diseño inspirado en la elegancia suiza con la comodidad moderna. Disfruta de una amplia área de descanso, siéntase rodeado de vegetación y disfrute de un amplio jacuzzi privado que evoca la grandeza del lago de Ginebra.",
                capacidad:"<strong>Capacidad:</strong>2 personas 1 Cama Matrimonial Full.",
                comodidades:"<strong>Comodidades:</strong>Jacuzzi privado (ducha dentro del jacuzzi), Pantalla Smart 32”, WIFI, Microondas y Minirefri.",
                vistas:"<strong>Vistas:</strong>A la naturaleza del Jardín.",
                ubicacion:"<strong>Ubicación:</strong>Planta baja al fondo, en la cabaña con diseño suizo.",
                reservar1:"Reservar Ahora",
                galeria:"Galería de la Habitación",
                caracteristicas:"Características Adicionales",
                internet:"Internet",
                internet_detalle:"Mantente conectado.",
                tv:"TV",
                tv_detalle:"Pantalla Smart 32”",
                servicio:"Servicio a la habitación",
                servicio_detalle:"Atención para tu comodidad.",
                habitacion:"Habitación",
                habitacion_detalle:"Cama Matrimonial Full.",
                jacuzzi:"Jacuzzi Privado",
                jacuzzi_detalle:"Relájate en tu propio jacuzzi.",
                eletrodomesticos:"Electrodomésticos",
                eletrodomesticos_detalle:"Microondas y Minirefri.",
                reservar2:"Reservar Habitación Ginebra ahora.",
            },
            zurich: {
                title:"Habitación #2 Zurich",
                detalle:"Detalle de la Habitación",
                descripcion:"La Habitación #2, denominada ZURICH, combina un diseño inspirado en la gran ciudad suiza con la comodidad básica moderna.  Disfruta de una habitación moderna con amplia ducha, siéntase rodeado de vegetación y disfrute de una habitación mutlicultural y con capacidad de ampliarse para albergar hasta 4 personas aprovechando 2 habitaciones anexas.",
                capacidad:"<strong>Capacidad:</strong>2-4 personas	1 Cama Matrimonial Full y 2 camas individuales Twin.",
                comodidades:"<strong>Comodidades:</strong>Amplia Ducha, 3 Pantalla Smart 32”, WIFI, Microondas y Minirefri.",
                vistas:"<strong>Vistas:</strong>A la naturaleza del Jardín.",
                ubicacion:"<strong>Ubicación:</strong>Planta baja al frente, en la cabaña con diseño suizo, Accesible.",
                reservar1:"Reservar Ahora",
                galeria:"Galería de la Habitación",
                caracteristicas:"Características Adicionales",
                internet:"Internet",
                internet_detalle:"Mantente conectado.",
                tv:"TV",
                tv_detalle:"3 Pantalla Smart 32”",
                servicio:"Servicio a la habitación",
                servicio_detalle:"Atención para tu comodidad.",
                habitacion:"Habitación",
                habitacion_detalle:"1 Cama Matrimonial Full y 2 camas individuales Twin.",
                jacuzzi:"Amplia Ducha",
                jacuzzi_detalle:"Amplia Ducha.",
                eletrodomesticos:"Electrodomésticos",
                eletrodomesticos_detalle:"Microondas y Minirefri.",
                reservar2:"Reservar Habitación Zurich ahora.",
            },
            lugano: {
                title:"Habitación #3 Lugano",
                detalle:"Detalle de la Habitación",
                descripcion:"La Habitación #3, denominada LUGANO, combina un diseño inspirado en la cálida y hermosa ciudad suiza con su gran lago y hermosas vistas. Disfruta de una habitación moderna con toques rústicos de ciprés y gran ventanal al bosque, siéntase rodeado de vegetación y  disfrute de un jacuzzi que para llenarse el agua baja en cascada.",
                capacidad:"<strong>Capacidad:</strong>2 personas	1 Cama Matrimonial Full.",
                comodidades:"<strong>Comodidades:</strong>Jacuzzi privado, ducha ,1 Pantalla Smart 32”, WIFI, Microondas y Minirefri.",
                vistas:"<strong>Vistas:</strong>Al bosque desde la cama o el jacuzzi.",
                ubicacion:"<strong>Ubicación:</strong>Planta alta al fondo, en la cabaña con diseño suizo, subir gradas.",
                reservar1:"Reservar Ahora",
                galeria:"Galería de la Habitación",
                caracteristicas:"Características Adicionales",
                internet:"Internet",
                internet_detalle:"Mantente conectado.",
                tv:"TV",
                tv_detalle:"1 Pantalla Smart 32”.",
                servicio:"Servicio a la habitación",
                servicio_detalle:"Atención para tu comodidad.",
                habitacion:"Habitación",
                habitacion_detalle:"1 Cama Matrimonial Full.",
                jacuzzi:"Jacuzzi privado",
                jacuzzi_detalle:"Relájate en tu propio jacuzzi.",
                eletrodomesticos:"Electrodomésticos",
                eletrodomesticos_detalle:"Microondas y Minirefri.",
                reservar2:"Reservar Habitación Lugano ahora.",
            },
            berna: {
                title:"Habitación #4 Berna",
                detalle:"Detalle de la Habitación",
                descripcion:"La Habitación #4, denominada BERNA, combina un diseño inspirado en la rústica ciudad capital. Disfruta de una habitación moderna con toques rústicos de ciprés y equipada con cocina, siéntase cómodo, cálido y prepare sus propios alimentos.",
                capacidad:"<strong>Capacidad:</strong>2 personas 1 Cama Matrimonial Full.",
                comodidades:"<strong>Comodidades:</strong>Cocina, Refrigerador, fregadero, microondas, ducha ,1 Pantalla Smart 32”, WIFI.",
                vistas:"<strong>Vistas:</strong>Solo al Jardin desde balcón externo.",
                ubicacion:"<strong>Ubicación:</strong>Planta alta al frente, en la cabaña con diseño suizo, subir gradas.",
                reservar1:"Reservar Ahora",
                galeria:"Galería de la Habitación",
                caracteristicas:"Características Adicionales",
                internet:"Internet",
                internet_detalle:"Mantente conectado.",
                tv:"TV",
                tv_detalle:"1 Pantalla Smart 32”.",
                servicio:"Servicio a la habitación",
                servicio_detalle:"Atención para tu comodidad.",
                habitacion:"Habitación",
                habitacion_detalle:"1 Cama Matrimonial Full.",
                jacuzzi:"Jacuzzi privado",
                jacuzzi_detalle:"Relájate en tu propio jacuzzi.",
                eletrodomesticos:"Electrodomésticos",
                eletrodomesticos_detalle:"Cocina, Refrigerador, Fregadero, Microondas.",
                reservar2:"Reservar Habitación Berna ahora.",
            },
            zermatt: {
                title:"Habitación #5 Zermatt ",
                detalle:"Detalle de la Habitación",
                descripcion:"La Habitación #5, denominada ZERMATT, combina un diseño rústico de montaña con la grandeza del ícono del gigante Cervino o Matterhorn. Disfruta externamente de un área de fogata y parrilla exclusivo de esta habitación , cocina con sus implementos, y un Jacuzzi gigante digno de su disfrute en pareja o en familia.",
                capacidad:"<strong>Capacidad:</strong>2-4 personas	2 Camas Matrimonial Full.",
                comodidades:"<strong>Comodidades:</strong>Jacuzzi gigante, fogata, parrilla, cocina, refrigerador, fregadero, microondas, ducha ,1 Pantalla Smart 40”, WIFI.",
                vistas:"<strong>Vistas:</strong>Al Jardín y cabaña rústica desde área externa.",
                ubicacion:"<strong>Ubicación:</strong>Planta baja, aislada de las demás habitaciones, accesible.",
                reservar1:"Reservar Ahora",
                galeria:"Galería de la Habitación",
                caracteristicas:"Características Adicionales",
                internet:"Internet",
                internet_detalle:"Mantente conectado.",
                tv:"TV",
                tv_detalle:"1 Pantalla Smart 40”.",
                servicio:"Servicio a la habitación",
                servicio_detalle:"Atención para tu comodidad.",
                habitacion:"Habitación",
                habitacion_detalle:"2 Camas Matrimonial Full.",
                jacuzzi:"Jacuzzi privado Gigante",
                jacuzzi_detalle:"Relájate en tu propio jacuzzi y ducha.",
                eletrodomesticos:"Electrodomésticos y demás",
                eletrodomesticos_detalle:"Cocina, refrigerador, fregadero, microondas, fogata, parrilla.",
                reservar2:"Reservar Habitación Zermatt ahora.",
            },
        }
    },
    de: {
        translation: {
            page: { title: "Colibri Hütten - Bergstil" },
            topbar_reservar: "RESERVIEREN",
            topbar_contactenos: "KONTAKTIEREN SIE UNS",
            topbar_maps: "KARTEN",
            navbar_inicio: "STARTSEITE",
            navbar_concepto: "KONZEPT",
            navbar_habitaciones: "ZIMMER",
            navbar_actividades: "AKTIVITÄTEN",
            navbar_galeria: "GALERIE",
            navbar_ubicacion: "STANDORT",
            navbar_contacto: "KONTAKT",
            navbar_menu: "SPEISEKARTE",
            slider: {
                title: "SCHWEIZER HÜTTE",
                subtitle: "mit 5 Bergzimmern in Heredia, Costa Rica",
                description: `Entdecke unsere gemütlichen Hütten für Paare oder Gruppen – <br> perfekt zum Entspannen und um die Natur zu genießen, <br> nur 15 Minuten von San José entfernt, an der Route 32. <a href="https://www.waze.com/en/live-map/directions/cabanas-colibri-c-yerba-buena?navigate=yes&place=w.180879460.1808663530.7942460" target="_blank" class="link-btn"><i class="fa-brands fa-waze"></i> Waze</a>
<a href="https://maps.app.goo.gl/TVxgWLvrNZrfi4Mn7" target="_blank" class="link-btn"><i class="fa-solid fa-map-location-dot"></i> Maps</a>`,
                reserve: "Reservieren"
            },
            concepto: {
                title: "KONZEPT (DIENSTLEISTUNGEN UND ANNEHMLICHKEITEN)",
                description: "Bau von 4 Zimmern innerhalb eines Chalets, inspiriert von der Schweiz, mit unabhängigen Zimmern. Zusätzlich, 1 externes Zimmer, umgeben von Natur, Flora und Fauna in San Isidro de Heredia und den Hängen von Zurquí.",
                amenities: {
                    amenity1: "Bau von 4 Zimmern innerhalb eines von der Schweiz inspirierten Chalets. Parkplatz inklusive.",
                    amenity2: "1 separates Zimmer vom Chalet mit idealem Platz für ein Familientreffen oder Gruppe. (Zimmer #5) Parkplatz vorhanden.",
                    amenity3: "100 Meter langer Pfad.",
                    amenity4: "3 Zimmer verfügen über einen großzügigen Whirlpool.",
                    amenity5: "Frühstück wird im Zimmer serviert.",
                    amenity6: "Inklusive Internet- und TV-Service."
                }
            },
            habitaciones: {
                title: "Unsere Zimmer",
                description: "Entdecken Sie unsere Zimmer, die für Ihren Komfort und Ihre Entspannung gestaltet wurden. Jedes bietet ein einzigartiges Erlebnis in einer natürlichen Umgebung.",
                room1: {
                    title: "Zimmer #1 - Genf",
                    description: "Zimmer in Schweizer Hütte.",
                    link: "Zimmer ansehen"
                },
                room2: {
                    title: "Zimmer #2 - Zürich",
                    description: "Zimmer in Schweizer Hütte.",
                    link: "Zimmer ansehen"
                },
                room3: {
                    title: "Zimmer #3 - Lugano",
                    description: "Zimmer in Schweizer Hütte.",
                    link: "Zimmer ansehen"
                },
                room4: {
                    title: "Zimmer #4 - Bern",
                    description: "Zimmer in Schweizer Hütte.",
                    link: "Zimmer ansehen"
                },
                room5: {
                    title: "Zimmer #5 - Zermatt",
                    description: "Geräumiges Zimmer, außerhalb der Schweizer Hütte.",
                    link: "Zimmer ansehen"
                }                
            },
            explora: {
                title: "Entdecken und Genießen",
                description: "Entdecken Sie Restaurants, Aktivitäten und touristische Orte in der Nähe unserer Hütte.",
                filters: {
                    comun: "🌟 Gemeinsam",
                    all: "Alle",
                    restaurante: "🍽 Restaurants",
                    actividad: "🎭 Aktivitäten",
                    parque: "🌲 Parks"
                },
                lugares: {
                    toucan: {
                        title: "Toucan Rescue Ranch",
                        description: "Tierschutzheim.",
                        link: "Mehr erfahren"
                    },
                    trattoria: {
                        title: "Trattoria Il Gusto Toscano",
                        description: "Nahegelegenes Restaurant.",
                        link: "Mehr erfahren"
                    },
                    riverside: {
                        title: "Riverside",
                        description: "Nahegelegenes Restaurant.",
                        link: "Mehr erfahren"
                    },
                    laSelva: {
                        title: "La selva",
                        description: "Nahegelegenes Restaurant.",
                        link: "Mehr erfahren"
                    },
                    lasJuntas: {
                        title: "Las Juntas",
                        description: "Nahegelegenes Restaurant.",
                        link: "Mehr erfahren"
                    },
                    lasTranqueras: {
                        title: "Las tranqueras",
                        description: "Erholungsbad.",
                        link: "Mehr erfahren"
                    },
                    bosque: {
                        title: "Bosque Caricias los Leones",
                        description: "Erkunden Sie die Biodiversität der Region.",
                        link: "Mehr erfahren"
                    },
                    chocolate: {
                        title: "Chocolate Sibö",
                        description: "Schokoladenladen - Schokoladentour.",
                        link: "Mehr erfahren"
                    },
                    laPaz: {
                        title: "La Paz Waterfall Gardens",
                        description: "Wasserfall an der Straße.",
                        link: "Mehr erfahren"
                    },
                    braulio: {
                        title: "Braulio Carrillo Nationalpark",
                        description: "Nationalpark.",
                        link: "Mehr erfahren"
                    },
                    monte: {
                        title: "Monte de la Cruz",
                        description: "Freizeitzentrum.",
                        link: "Mehr erfahren"
                    },
                    aerial_tram: {
                        title: "Aerial Tram",
                        description: "Touren",
                        link: "Mehr erfahren"
                    }
                }
            },
            galeria: {
                title: "Galerie unserer Hütte",
                description: "Durchstöbern Sie unsere Galerie und tauchen Sie ein in die Schönheit und den Komfort, den wir bieten.",
                mas: "Mehr Fotos ansehen",
                menos:"Weniger anzeigen"
            },
            ubicacion: {
                title: "STANDORT",
                description: "Wir befinden uns in Santa Elena, San Isidro de Heredia, Costa Rica. 300 Meter vom Sportplatz entfernt, in der Nähe der Route 32 in Richtung Limón. Besuchen Sie uns und erleben Sie unsere Hütte für eine Zeit der Entspannung und des Friedens inmitten der Natur.",
                schedule: "Öffnungszeiten: Check-in ab 16 Uhr und Check-out um 11:00 Uhr am nächsten Tag. Bitte prüfen Sie die Verfügbarkeit für spezielle Zeiten.",
                contactForm: {
                    title: "SENDEN SIE UNS IHRE NACHRICHT",
                    namePlaceholder: "Name *",
                    emailPlaceholder: "E-Mail *",
                    phonePlaceholder: "Telefon",
                    messagePlaceholder: "Nachricht",
                    button: "SENDEN"
                }
            },
            reserva: {
                title: "RESERVIEREN",
                description1: "Um zu reservieren: Rufen an oder schreiben(WhatsApp) Sie <strong>+(506) 8836-9997</strong> <i class='fab fa-whatsapp'></i>",
                description2: "Die Verfügbarkeit des Zimmers wird überprüft.",
                description3: "Reservierungsdetails werden gesendet, <strong>Sinpe Móvil</strong> – Bankverbindungen für die Anzahlung von mindestens der Hälfte, und der Rest bei Ankunft.",
                button: "Reservieren",
                notice: "Bei verspätetem Check-out wird eine Gebühr von 5.000 Colones pro Stunde berechnet. Strafgebühr für das Rauchen im Zimmer: 10.000 Colones."
            },
            footer: {
                location: {
                    title: "Standort",
                    description: "Santa Elena, San Isidro de Heredia, Costa Rica. 300 Meter vom Sportplatz entfernt, in der Nähe der Route 32 in Richtung Limón."
                },
                links: {
                    title: "Schnellzugriff",
                    home: "Startseite",
                    concept: "Konzept",
                    rooms: "Zimmer",
                    activities: "Aktivitäten",
                    gallery: "Galerie",
                    location: "Standort",
                    contact: "Kontakt"
                },
                social: {
                    title: "Folgen Sie uns"
                },
                copyright: "&copy; 2025 colibricr.com Alle Rechte vorbehalten. Entwickelt von <a href='https://www.wincodecr.com/' target='_blank'>Wincodecr</a>"
            },
            menu: {
                desayuno:{
                    desayuno: `Frühstück <img src="assets/img/menu/switzerland.png"
                              alt="Frühstückssymbol" class="icono-switzerland">`,
                    principal:  "IM PREIS INBEGRIFFEN",
                    secundario:  "2 Personen",
                    i1: "Kaffee, Tee oder Orangensaft.",
                    i2: "2 Toasts.",
                    i3: "Rührei / gehackte Eier.",
                    i4: "Geschnittenes Obst. (Papaya, Banane).",
                    det1: "<strong>Zusätzliche Portion Pinto:</strong> 1.000 COLONES (Am Vortag anfordern)",
                    det2: "Wird zwischen 8 und 10 Uhr aufs Zimmer serviert (Uhrzeit am Vortag angeben)<br> Zusätzliches Frühstück: 2.500 Colones.",                    
                },
                servicio:{
                    titulo:"ZIMMERSERVICE",
                    telservicio:"2268-4488",
                    pizzas:{
                        det:"Pizzen - ₡11.000,00 (12 Stücke).",
                        i1:"1- Supreme (Käse, Salami, Schinken, Paprika, Zwiebel, Speck, Rindfleisch und Pizzasoße).",
                        i2:"2- Neapolitanisch (Käse, Salami, Pizzasoße).",
                        i3:"3- Capricciosa (Käse, Salami, Schinken, Paprika, Zwiebel, Pizzasoße).",
                        i4:"4- Hawaiisch (Käse, Salami, Schinken, Pilze und Ananas, Pizzasoße).",
                        i5:"5- Pilzmix (Käse, Salami, Schinken, Pilze, Pizzasoße).",
                        i6:"6- Speck (Speck, Salami, Schinken, Paprika, Zwiebel, Pilze, Pizzasoße).",
                        i7:"7- Pepperoni (Tomatensoße, Käse und Pepperoni).",
                        i8:"8- Vegetarisch (Käse, Paprika, Zwiebel, Pilze, Tomate und Pizzasoße).",
                        i9:"9- Mozzarella (Käse und Pizzasoße).",
                        i10:"10- Jalapeño (Käse, Speck, Paprika, Zwiebel, Pilze, Rindfleisch und Pizzasoße).",
                        i11:"11- Margherita (Käse, Tomate, Oregano, Basilikum und Pizzasoße).",
                    },
                    permite: "*Es ist möglich, eine Hälfte mit einem Belag und die andere Hälfte mit einem anderen zu bestellen.",
                    bebidas:{
                        det:"Getränke",
                        i1:"1- Coca Cola - ₡1.500.",
                        i2:"2- Pfirsich-Eistee - ₡1.500.",
                        i3:"3- Wasserflasche - ₡1.500.",
                        i4:"4- Milchkaffee oder Tee - ₡1.200.",
                        i5:"5- Bierdose (Pilsener 350ml) - ₡1.600.",
                        i6:"6- Glas Rotwein / Flasche - ₡2.000 / ₡9.000.",
                        i7:"7- Seifenblasenflasche - ₡2.000.",
                    },
                    otros:"Du kannst dein eigenes Essen mitbringen oder über Lieferdienste bestellen.<br> Für weitere Wünsche oder Gelüste rufe uns bitte an – wenn es uns möglich ist, erfüllen wir sie gerne.",
                },
            },     
            ginebra: {
                title: "Zimmer Nr. 1 Ginebra",
                detalle: "Zimmerdetails",
                descripcion: "Zimmer Nr. 1, genannt GINEBRA, verbindet ein vom schweizerischen Stil inspiriertes Design mit modernem Komfort. Genieße einen großzügigen Ruhebereich, sei von Natur umgeben und entspanne dich in einem großen privaten Whirlpool, der an die Pracht des Genfersees erinnert.",
                capacidad: "<strong>Kapazität:</strong> 2 Personen, 1 Doppelbett (Full).",
                comodidades: "<strong>Annehmlichkeiten:</strong> Privater Whirlpool (Dusche im Whirlpool), 32\" Smart-TV, WLAN, Mikrowelle und Minikühlschrank.",
                vistas: "<strong>Aussicht:</strong> Auf die Gartenlandschaft.",
                ubicacion: "<strong>Lage:</strong> Erdgeschoss im hinteren Bereich, in der Hütte mit Schweizer Design.",
                reservar1: "Jetzt buchen",
                galeria: "Zimmergalerie",
                caracteristicas: "Zusätzliche Merkmale",
                internet: "Internet",
                internet_detalle: "Bleibe verbunden.",
                tv: "Fernseher",
                tv_detalle: "32\" Smart-TV",
                servicio: "Zimmerservice",
                servicio_detalle: "Service für deinen Komfort.",
                habitacion: "Zimmer",
                habitacion_detalle: "Doppelbett (Full).",
                jacuzzi: "Privater Whirlpool",
                jacuzzi_detalle: "Entspanne dich in deinem eigenen Whirlpool.",
                eletrodomesticos: "Haushaltsgeräte",
                eletrodomesticos_detalle: "Mikrowelle und Minikühlschrank.",
                reservar2: "Zimmer Ginebra jetzt buchen.",
            },            
            zurich: {
                title: "Zimmer Nr. 2 Zurich",
                detalle: "Zimmerdetails",
                descripcion: "Zimmer Nr. 2, genannt ZURICH, kombiniert ein vom pulsierenden Stadtleben inspiriertes Design mit einfachem modernen Komfort. Genieße ein modernes Zimmer mit großzügiger Dusche, sei von Natur umgeben und profitiere von einem multikulturellen Raum mit Erweiterungsmöglichkeit für bis zu 4 Personen durch zwei angrenzende Zimmer.",
                capacidad: "<strong>Kapazität:</strong> 2–4 Personen, 1 Doppelbett (Full) und 2 Einzelbetten (Twin).",
                comodidades: "<strong>Annehmlichkeiten:</strong> Große Dusche, 3x 32\" Smart-TVs, WLAN, Mikrowelle und Minikühlschrank.",
                vistas: "<strong>Aussicht:</strong> Auf die Gartenlandschaft.",
                ubicacion: "<strong>Lage:</strong> Erdgeschoss vorne, in der Hütte mit Schweizer Design, barrierefrei.",
                reservar1: "Jetzt buchen",
                galeria: "Zimmergalerie",
                caracteristicas: "Zusätzliche Merkmale",
                internet: "Internet",
                internet_detalle: "Bleibe verbunden.",
                tv: "Fernseher",
                tv_detalle: "3x 32\" Smart-TVs",
                servicio: "Zimmerservice",
                servicio_detalle: "Service für deinen Komfort.",
                habitacion: "Zimmer",
                habitacion_detalle: "1 Doppelbett (Full) und 2 Einzelbetten (Twin).",
                jacuzzi: "Große Dusche",
                jacuzzi_detalle: "Große Dusche.",
                eletrodomesticos: "Haushaltsgeräte",
                eletrodomesticos_detalle: "Mikrowelle und Minikühlschrank.",
                reservar2: "Zimmer Zurich jetzt buchen.",
            },            
            lugano: {
                title: "Zimmer Nr. 3 Lugano",
                detalle: "Zimmerdetails",
                descripcion: "Zimmer Nr. 3, genannt LUGANO, vereint ein Design, inspiriert von der warmen und schönen Schweizer Stadt mit ihrem großen See und herrlichen Ausblicken. Genieße ein modernes Zimmer mit rustikalen Zypressen-Elementen und großem Fenster zum Wald, sei von Natur umgeben und genieße einen Whirlpool, der sich wie ein Wasserfall füllt.",
                capacidad: "<strong>Kapazität:</strong> 2 Personen, 1 Doppelbett (Full).",
                comodidades: "<strong>Annehmlichkeiten:</strong> Privater Whirlpool, Dusche, 1x 32\" Smart-TV, WLAN, Mikrowelle und Minikühlschrank.",
                vistas: "<strong>Aussicht:</strong> In den Wald, vom Bett oder Whirlpool aus.",
                ubicacion: "<strong>Lage:</strong> Obergeschoss im hinteren Bereich, in der Hütte mit Schweizer Design, Treppensteigen erforderlich.",
                reservar1: "Jetzt buchen",
                galeria: "Zimmergalerie",
                caracteristicas: "Zusätzliche Merkmale",
                internet: "Internet",
                internet_detalle: "Bleibe verbunden.",
                tv: "Fernseher",
                tv_detalle: "1x 32\" Smart-TV.",
                servicio: "Zimmerservice",
                servicio_detalle: "Service für deinen Komfort.",
                habitacion: "Zimmer",
                habitacion_detalle: "1 Doppelbett (Full).",
                jacuzzi: "Privater Whirlpool",
                jacuzzi_detalle: "Entspanne dich in deinem eigenen Whirlpool.",
                eletrodomesticos: "Haushaltsgeräte",
                eletrodomesticos_detalle: "Mikrowelle und Minikühlschrank.",
                reservar2: "Zimmer Lugano jetzt buchen.",
            },            
            berna: {
                title: "Zimmer Nr. 4 Berna",
                detalle: "Zimmerdetails",
                descripcion: "Zimmer Nr. 4, genannt BERNA, kombiniert ein Design, inspiriert von der rustikalen Hauptstadt der Schweiz. Genieße ein modernes Zimmer mit Zypressenholz und ausgestatteter Küche, fühle dich wohl, warm und bereite deine eigenen Mahlzeiten zu.",
                capacidad: "<strong>Kapazität:</strong> 2 Personen, 1 Doppelbett (Full).",
                comodidades: "<strong>Annehmlichkeiten:</strong> Küche, Kühlschrank, Spüle, Mikrowelle, Dusche, 1x 32\" Smart-TV, WLAN.",
                vistas: "<strong>Aussicht:</strong> Nur vom Balkon auf den Garten.",
                ubicacion: "<strong>Lage:</strong> Obergeschoss vorne, in der Hütte mit Schweizer Design, Treppensteigen erforderlich.",
                reservar1: "Jetzt buchen",
                galeria: "Zimmergalerie",
                caracteristicas: "Zusätzliche Merkmale",
                internet: "Internet",
                internet_detalle: "Bleibe verbunden.",
                tv: "Fernseher",
                tv_detalle: "1x 32\" Smart-TV.",
                servicio: "Zimmerservice",
                servicio_detalle: "Service für deinen Komfort.",
                habitacion: "Zimmer",
                habitacion_detalle: "1 Doppelbett (Full).",
                jacuzzi: "Privater Whirlpool",
                jacuzzi_detalle: "Entspanne dich in deinem eigenen Whirlpool.",
                eletrodomesticos: "Haushaltsgeräte",
                eletrodomesticos_detalle: "Küche, Kühlschrank, Spüle, Mikrowelle.",
                reservar2: "Zimmer Berna jetzt buchen.",
            },            
            zermatt: {
                title: "Zimmer Nr. 5 Zermatt",
                detalle: "Zimmerdetails",
                descripcion: "Zimmer Nr. 5, genannt ZERMATT, kombiniert rustikales Berghütten-Design mit der Größe des Matterhorns. Genieße einen exklusiven Außenbereich mit Feuerstelle und Grill, eine ausgestattete Küche und einen riesigen Whirlpool – perfekt für Paare oder Familien.",
                capacidad: "<strong>Kapazität:</strong> 2–4 Personen, 2 Doppelbetten (Full).",
                comodidades: "<strong>Annehmlichkeiten:</strong> Riesiger Whirlpool, Feuerstelle, Grill, Küche, Kühlschrank, Spüle, Mikrowelle, Dusche, 1x 40\" Smart-TV, WLAN.",
                vistas: "<strong>Aussicht:</strong> Auf den Garten und die rustikale Hütte vom Außenbereich.",
                ubicacion: "<strong>Lage:</strong> Erdgeschoss, von den anderen Zimmern getrennt, barrierefrei.",
                reservar1: "Jetzt buchen",
                galeria: "Zimmergalerie",
                caracteristicas: "Zusätzliche Merkmale",
                internet: "Internet",
                internet_detalle: "Bleibe verbunden.",
                tv: "Fernseher",
                tv_detalle: "1x 40\" Smart-TV.",
                servicio: "Zimmerservice",
                servicio_detalle: "Service für deinen Komfort.",
                habitacion: "Zimmer",
                habitacion_detalle: "2 Doppelbetten (Full).",
                jacuzzi: "Riesiger Privater Whirlpool",
                jacuzzi_detalle: "Entspanne dich in deinem eigenen Whirlpool und Dusche.",
                eletrodomesticos: "Haushaltsgeräte und mehr",
                eletrodomesticos_detalle: "Küche, Kühlschrank, Spüle, Mikrowelle, Feuerstelle, Grill.",
                reservar2: "Zimmer Zermatt jetzt buchen.",
            },                   
        }
    }
};

i18next.init({
    lng: 'es',
    debug: false,
    interpolation: { escapeValue: false }, // ¡Importante! No escapar etiquetas HTML
    resources
}, function (err, t) {
    jqueryI18next.init(i18next, $, { useOptionsAttr: true });
    $('body').localize();
    $('[data-i18n]').each(function () {
        $(this).html(i18next.t($(this).attr('data-i18n')));
    });
});

// Cambiar idioma cuando el usuario seleccione un nuevo idioma en el top bar
$('#languageSwitcher').on('change', function () {
    const lang = $(this).val();
    console.log('Idioma seleccionado desde top bar:', lang);
    i18next.changeLanguage(lang, () => {
        $('body').localize();
        $('[data-i18n]').each(function () {
            $(this).html(i18next.t($(this).attr('data-i18n')));
        });
    });
});

$(document).ready(function () {
    // Mostrar el menú cuando se haga clic en la burbuja
    $('#languageBubble').on('click', function (e) {
        e.stopPropagation(); // Evitar que el clic se propague y cierre el menú
        $('.language-menu').toggle(); // Mostrar u ocultar el menú
    });

    // Cambiar idioma cuando el usuario seleccione un nuevo idioma en la burbuja
    $('#languageSwitcherBubble').on('change', function () {
        const lang = $(this).val();
        console.log('Idioma seleccionado desde burbuja:', lang);
        i18next.changeLanguage(lang, () => {
            $('body').localize();
            $('[data-i18n]').each(function () {
                $(this).html(i18next.t($(this).attr('data-i18n')));
            });
        });

        // Cerrar el menú **solo después de seleccionar un idioma**
        $('.language-menu').hide();
    });

    // Cerrar el menú si se hace clic fuera de la burbuja
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#languageBubble').length) {
            $('.language-menu').hide(); // Cerrar el menú si el clic está fuera
        }
    });

    // Evitar que el menú se cierre al hacer clic dentro del select
    $('.language-menu select').on('click', function (e) {
        e.stopPropagation(); // Evitar que el clic se propague y cierre el menú
    });
});
