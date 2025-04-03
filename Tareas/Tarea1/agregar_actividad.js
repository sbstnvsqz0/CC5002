console.log("Script cargado");
const regiones_comunas = {
    "Región de Arica y Parinacota": [
        "Arica", "Camarones", "General Lagos", "Putre"
    ],
    "Región de Tarapacá": [
        "Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"
    ],
    "Región de Antofagasta": [
        "Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", 
        "Sierra Gorda", "Taltal", "Tocopilla"
    ],
    "Región de Atacama": [
        "Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", 
        "Huasco", "Tierra Amarilla", "Vallenar"
    ],
    "Región de Coquimbo": [
        "Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", 
        "Los Vilos", "Monte Patria", "Ovalle", "Paiguano", "Punitaqui", "Río Hurtado", 
        "Salamanca", "Vicuña"
    ],
    "Región de Valparaíso": [
        "Algarrobo", "Cabildo", "Calera", "Calle Larga", "Cartagena", "Casablanca", "Concón", 
        "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Cruz", 
        "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", "Panquehue", 
        "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", 
        "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", 
        "Valparaíso", "Villa Alemana", "Viña del Mar", "Zapallar"
    ],
    "Región Metropolitana de Santiago": [
        "Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", 
        "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", 
        "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", 
        "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", 
        "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", 
        "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", 
        "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", 
        "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", 
        "Tiltil", "Vitacura"
    ],
    "Región del Libertador General Bernardo O'Higgins": [
        "Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", 
        "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchihue", 
        "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", 
        "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", 
        "Rancagua", "Rengo", "Requínoa", "San Fernando", "San Vicente", "Santa Cruz"
    ],
    "Región del Maule": [
        "Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", 
        "Hualañé", "Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", 
        "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", 
        "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", 
        "Yerbas Buenas"
    ],
    "Región de Ñuble": [
        "Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", 
        "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", 
        "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"
    ],
    "Región del Biobío": [
        "Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", 
        "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", 
        "Los Álamos", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", 
        "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", 
        "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"
    ],
    "Región de La Araucanía": [
        "Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", 
        "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", 
        "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", 
        "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", 
        "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"
    ],
    "Región de Los Ríos": [
        "Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Máfil", 
        "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"
    ],
    "Región de Los Lagos": [
        "Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", 
        "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", 
        "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", 
        "Puqueldón", "Purranque", "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", 
        "Río Negro", "San Juan de la Costa", "San Pablo"
    ],
    "Región de Aysén del General Carlos Ibáñez del Campo": [
        "Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", 
        "O'Higgins", "Río Ibáñez", "Tortel"
    ],
    "Región de Magallanes y de la Antártica Chilena": [
        "Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", 
        "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"
    ]
};
let regionSel = document.getElementById("region");
let comunaSel = document.getElementById("comuna")
function updateRegion(){
    if (regionSel){
        Object.keys(regiones_comunas).forEach(key => {
            let option = document.createElement("option");
            option.value = key;
            option.textContent = key; 
            regionSel.appendChild(option);
        });
    }
}
function updateComuna(){
    let selectedRegion = regionSel.value;
    comunaSel.innerHTML = "<option value='' disabled selected>Seleccione una comuna</option>";
    if (selectedRegion){
        let comunas= regiones_comunas[selectedRegion];
        comunas.forEach(comuna => {
            let option = document.createElement("option");
            option.value = comuna;
            option.textContent = comuna;
            comunaSel.appendChild(option);
            });
    }
}



updateRegion();

if (regionSel) {
    regionSel.addEventListener("change", function() {
        updateComuna();
    });
}