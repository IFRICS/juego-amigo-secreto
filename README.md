# Juego: Amigo Secreto

Este proyecto es una aplicación web sencilla para jugar al **Amigo Secreto**.  
Permite agregar nombres de amigos a una lista y luego sortear de manera aleatoria quién será el "amigo secreto".

## Características

- Agregar nombres a una lista de amigos.
- Validación de entradas vacías (no permite agregar nombres en blanco).
- Visualización dinámica de la lista de amigos.
- Sorteo aleatorio utilizando `Math.random()` y `Math.floor()`.
- Interfaz sencilla y responsive.

## Tecnologías utilizadas

- **HTML5** → estructura del contenido.  
- **CSS3** → estilos y diseño.  
- **JavaScript** → lógica de la aplicación (DOM, validaciones, sorteo).

## Estructura de archivos

/proyecto

├── index.html # Página principal

├── style.css # Estilos del juego

├── app.js # Funciones en JavaScript

└── assets/ # Carpeta con imágenes e íconos

## Funcionalidades principales

### Agregar un amigo
- Captura el nombre ingresado en el campo de texto.  
- Valida que no esté vacío.  
- Añade el nombre al array `amigos`.  
- Limpia el campo de entrada.  
- Muestra la lista actualizada en pantalla.  

### Sortear un amigo
- Valida que existan nombres en la lista.  
- Genera un índice aleatorio con `Math.random()` y `Math.floor()`.  
- Obtiene el amigo sorteado y lo muestra en pantalla.  

## Uso

1. Abrir el archivo `index.html` en un navegador.  
2. Escribir un nombre en el campo de texto.  
3. Presionar **"Añadir"** para agregarlo a la lista.  
4. Repetir hasta completar todos los participantes.  
5. Hacer clic en **"Sortear amigo"** para elegir un amigo secreto al azar.  

## Vista previa

![Vista previa del juego](assets/amigo-secreto.png)
