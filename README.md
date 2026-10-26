Práctica de laboratorio orientada al diseño, implementación y evaluación de estrategias de entrega de interfaces web 
 **Responsive Web Design (RWD)** y **Adaptive Web Design (AWD)**.

---

##  Estructura del Proyecto

Peral/
├── node_modules/         # Dependencias de Node.js
├── Views/                # Plantillas del servidor para AWD
│   ├── desktop.ejs       # Vista completa (Escritorio)
│   └── mobile.ejs        # Vista aligerada (Móvil)
├── Catalago_Hardware.HTML # Versión Responsive (RWD)
├── Estilo_catalago.CSS    # Hoja de estilos principal compartida
├── Script.js              # Lógica de interfaz móvil (menú desplegable)
├── server.js              # Servidor Express con detección de User-Agent
└── package.json           # Configuración y dependencias del proyecto

Instrucciones de Instalación y Arranque Local

-------------1. Prerrequisitos---------------
Asegúrate de tener instalado en tu equipo:

Node.js (versión LTS recomendada).

Como instalarlo: 

Paso 1: Instalar Node.js
Entra a la página oficial de Node.js: nodejs.org
Descarga la versión recomendada para la mayoría de los usuarios (LTS).
Ejecuta el instalador descargado. Durante el proceso de instalación, dale a siguiente a todo, pero asegúrate de que la opción "Add to PATH" (Agregar al PATH) esté seleccionada (suele venir activada por defecto). Esto es fundamental para que Windows reconozca el comando npm.

Paso 2: Reiniciar Visual Studio Code
Una vez finalizada la instalación:
Cierra por completo Visual Studio Code (todas las ventanas abiertas).
Vuelve a abrir Visual Studio Code y abre la carpeta del proyecto. Esto es necesario para que la terminal cargue las nuevas rutas del sistema.

Paso 3: Volver a ejecutar los comandos
Abre la terminal integrada de nuevo en VS Code (Ctrl + ñ o en el menú Terminal > Nueva terminal) y ejecuta los comandos en orden:
Inicializar el proyecto:

Primero:
npm init -y

Segundo:
npm install express express-useragent ejs

-------------2.- Arrancar el servidor local---------------
Despues de instalar las herramientas necesarias, arrancamos el servidor ejecutando el siguiente comando en la terminal

node server.js

Si esta todo bien, deberia aparecer es to en la terminal

Servidor AWD corriendo en http://localhost:3000/adaptive
Servidor RWD corriendo en http://localhost:3000/responsive