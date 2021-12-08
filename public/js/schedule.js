var myModal = new bootstrap.Modal(document.getElementById("evento"), {});
var baseURL = 'http://localhost:81/agenda/public';
/*document.onreadystatechange = function () {
    myModal.show();
};*/
document.addEventListener("DOMContentLoaded", function () {
    //Obtenemos el formulario
    let formulario = document.querySelector("#form-event");

    var calendarEl = document.getElementById("agenda");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        locale: "es",
        displayEventTime: false,
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth",
        }, //Ibtener los eventos registrados
        //events: baseURL+"/evento/mostrar",
        eventSources:{
          url: baseURL+"/evento/mostrar",
          method: "POST",
          extraParams:{
            _token: formulario._token.value,
          }
        },
        //Modal para guardar el evento
        dateClick: function (info) {
            formulario.reset();
            formulario.start.value = info.dateStr;
            formulario.end.value = info.dateStr;
            myModal.show();
        }, //Presionar el evento
        eventClick: function (info) {
            var evento = info.event;
            //console.log(info.event.id);
            axios
                .post(
                  baseURL+"/evento/editar/" +
                        info.event.id
                )
                .then((respuesta) => {
                    formulario.id.value = respuesta.data.id;
                    formulario.title.value = respuesta.data.title;
                    formulario.descripcion.value = respuesta.data.descripcion;
                    formulario.start.value = respuesta.data.start;
                    formulario.end.value = respuesta.data.end;
                    myModal.show();
                })
                .catch((e) => {
                    // Podemos mostrar los errores en la consola
                    console.log(e);
                });
        },
    });
    calendar.render();

    //Accion de boton
    document
        .getElementById("btnGuardar")
        .addEventListener("click", function () {
            enviarDatos("/evento/agregar");
        });
    document
        .getElementById("btnEliminar")
        .addEventListener("click", function () {
            enviarDatos(
                "/evento/borrar/" +
                    formulario.id.value
            );
        });
    document
        .getElementById("btnModificar")
        .addEventListener("click", function () {
            enviarDatos(
                "/evento/actualizar/" +
                    formulario.id.value
            );
        });
    function enviarDatos(url) {
        const nuevURL = baseURL+url;
        const datos = new FormData(formulario);
        axios
            .post(nuevURL, datos)
            .then((respuesta) => {
                //Ocultamos el modal cuando se guarda la info
                calendar.refetchEvents();
                myModal.hide();
            })
            .catch((e) => {
                // Podemos mostrar los errores en la consola
                console.log(e);
            });
    }
});
