const express = require('express');
const useragent = require('express-useragent');
const path = require('path');

const app = express();

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

// Servir archivos estáticos (CSS e imágenes) desde la raíz
app.use(express.static(path.join(__dirname)));
app.use(useragent.express());

// Ruta /adaptive requerida por la práctica
app.get('/adaptive', (req, res) => {
    // Si la petición proviene de un dispositivo móvil
    if (req.useragent.isMobile) {
        res.render('mobile');
    } else {
        // Si es de escritorio / laptop
        res.render('desktop');
    }
});

app.get('/responsive', (req, res) => {
    res.sendFile(path.join(__dirname, 'Catalago_Hardware.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor AWD corriendo en http://localhost:${PORT}/adaptive`);
    console.log(`Servidor RWD corriendo en http://localhost:${PORT}/responsive`);
});