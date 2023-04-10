//inicializamos la clase SpeechSynthesisUtterance
var message = new SpeechSynthesisUtterance($("#text").val());
//obtenemos las voces disponibles del api
var voices = speechSynthesis.getVoices();
//se captura el mensaje agregado en el input
$("input").on("change", function () {
    console.log($(this).attr("id"), $(this).val());
    message[$(this).attr("id")] = $(this).val();
});
//se setea el valor de la voz seleccionada y se imprime en consola
$("select").on("change", function () {
    message.voice = voices[$(this).val()];
    var valor = $(this).val();
    console.log(valor);
});
//evento que acciona la funcion de reproducir el texto en voz
$("button").on("click", function () {
    speechSynthesis.speak(message);
});

// Hack around voices bug
var interval = setInterval(function () {
    voices = speechSynthesis.getVoices();
    if (voices.length) clearInterval(interval); else return;

    for (var i = 0; i < voices.length; i++) {
        $("select").append("<option value=\"" + i + "\">" + voices[i].name + "</option>");
    }
}, 10);
