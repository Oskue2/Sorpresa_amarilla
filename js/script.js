/* =========================================================
   SKYROUTE / PARA CHANGUITA
   JAVASCRIPT GENERAL
   Funciona para:
   - index.html
   - jardin.html
   - flores.html
========================================================= */


/* =========================================================
   PÉTALOS
========================================================= */

const contenedorPetalos =
    document.getElementById("petalos");


if (contenedorPetalos) {

    function crearPetalo() {

        const petalo =
            document.createElement("div");


        petalo.classList.add("petalo");


        const flores = [
            "🌼",
            "🌻",
            "🌼"
        ];


        petalo.textContent =
            flores[
            Math.floor(
                Math.random() * flores.length
            )
            ];


        petalo.style.left =
            Math.random() * 100 + "vw";


        const duracion =
            6 + Math.random() * 6;


        petalo.style.animationDuration =
            duracion + "s, 2s";


        petalo.style.opacity =
            0.4 + Math.random() * 0.5;


        petalo.style.fontSize =
            10 + Math.random() * 13 + "px";


        contenedorPetalos.appendChild(
            petalo
        );


        setTimeout(() => {

            petalo.remove();

        }, duracion * 1000);

    }


    /* Pétalos continuos */

    setInterval(
        crearPetalo,
        900
    );


    /* Pétalos iniciales */

    for (
        let i = 0;
        i < 8;
        i++
    ) {

        setTimeout(() => {

            crearPetalo();

        }, i * 500);

    }

}


/* =========================================================
   NAVEGACIÓN DESDE LA PORTADA
========================================================= */

const btnAbrir =
    document.getElementById("btnAbrir");


if (btnAbrir) {

    btnAbrir.addEventListener(
        "click",
        () => {

            document.body.classList.add(
                "salir-pagina"
            );


            setTimeout(() => {

                window.location.href =
                    "jardin.html";

            }, 500);

        }
    );

}


/* =========================================================
   NAVEGACIÓN ENTRE PÁGINAS
   Sirve para cualquier enlace interno que queramos
   animar posteriormente.
========================================================= */

const enlacesInternos =
    document.querySelectorAll(
        'a[href$=".html"]'
    );


enlacesInternos.forEach(enlace => {

    enlace.addEventListener(
        "click",
        event => {

            const destino =
                enlace.getAttribute("href");


            if (
                !destino ||
                destino.startsWith("#") ||
                enlace.target === "_blank"
            ) {

                return;

            }


            event.preventDefault();


            document.body.classList.add(
                "salir-pagina"
            );


            setTimeout(() => {

                window.location.href =
                    destino;

            }, 500);

        }
    );

});


/* =========================================================
   FLORES INTERACTIVAS
========================================================= */

const flores =
    document.querySelectorAll(
        ".flor-interactiva"
    );


const mensajeFlor =
    document.getElementById(
        "mensajeFlor"
    );


const textoFlor =
    document.getElementById(
        "textoFlor"
    );


const imagenFlor =
    document.getElementById(
        "imagenFlor"
    );


/*
    Este bloque solamente se ejecutará
    cuando estemos en jardin.html.
*/

if (
    flores.length > 0 &&
    mensajeFlor &&
    textoFlor &&
    imagenFlor
) {

    flores.forEach(flor => {

        flor.addEventListener(
            "click",
            () => {


                /* Obtener mensaje */

                const mensaje =
                    flor.getAttribute(
                        "data-mensaje"
                    );


                /* Obtener imagen */

                const imagen =
                    flor.getAttribute(
                        "data-imagen"
                    );


                /* Colocar contenido */

                textoFlor.textContent =
                    mensaje;


                if (imagen) {

                    imagenFlor.src =
                        imagen;

                }


                /* Mostrar modal */

                mensajeFlor.classList.add(
                    "activo"
                );

            }
        );

    });

}


/* =========================================================
   CERRAR MENSAJE DE LA FLOR
========================================================= */

const cerrarMensaje =
    document.getElementById(
        "cerrarMensaje"
    );


if (
    cerrarMensaje &&
    mensajeFlor
) {

    cerrarMensaje.addEventListener(
        "click",
        () => {

            mensajeFlor.classList.remove(
                "activo"
            );

        }
    );

}


/* =========================================================
   CERRAR MODAL AL HACER CLICK FUERA
========================================================= */

if (mensajeFlor) {

    mensajeFlor.addEventListener(
        "click",
        event => {

            if (
                event.target === mensajeFlor
            ) {

                mensajeFlor.classList.remove(
                    "activo"
                );

            }

        }
    );

}


/* =========================================================
   CERRAR MODAL CON ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            mensajeFlor
        ) {

            mensajeFlor.classList.remove(
                "activo"
            );

        }

    }
);

/* =========================================================
   SORPRESA FINAL — FLORES DISPARADAS
========================================================= */

const btnFlores =
    document.getElementById("btnFlores");


if (btnFlores) {

    const floresDisparo = [
        "img/flores/girasol.png",
        "img/flores/margarita.png",
        "img/flores/rosaamarilla (1).png",
        "img/flores/flor.png"
    ];


    btnFlores.addEventListener(
        "click",
        () => {

            /* Crear muchas flores */

            for (let i = 0; i < 32; i++) {

                setTimeout(() => {

                    const flor =
                        document.createElement("img");


                    flor.classList.add(
                        "flor-disparada"
                    );


                    /* Elegir una flor */

                    flor.src =
                        floresDisparo[
                            Math.floor(
                                Math.random() *
                                floresDisparo.length
                            )
                        ];


                    /* Trayectoria horizontal */

                    const x =
                        (Math.random() * 1000) - 500;


                    /* Altura */

                    const y =
                        -(window.innerHeight *
                        (0.55 +
                        Math.random() * 0.65));


                    /* Tamaño final */

                    const escala =
                        0.7 +
                        Math.random() * 1.2;


                    /* Rotación */

                    const rotacion =
                        (Math.random() * 1000) - 500;


                    flor.style.setProperty(
                        "--x",
                        x + "px"
                    );


                    flor.style.setProperty(
                        "--y",
                        y + "px"
                    );


                    flor.style.setProperty(
                        "--escala",
                        escala
                    );


                    flor.style.setProperty(
                        "--rotacion",
                        rotacion + "deg"
                    );


                    document.body.appendChild(
                        flor
                    );


                    /* Eliminar después de la animación */

                    setTimeout(() => {

                        flor.remove();

                    }, 2300);

                }, i * 45);

            }


            /* Evitar spam inmediato */

            btnFlores.disabled = true;


            setTimeout(() => {

                btnFlores.disabled = false;

            }, 3000);

        }
    );

}