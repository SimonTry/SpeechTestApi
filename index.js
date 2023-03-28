var message = new SpeechSynthesisUtterance($("#text").val());
var voices = speechSynthesis.getVoices();

$("input").on("change", function () {
    console.log($(this).attr("id"), $(this).val());
    message[$(this).attr("id")] = $(this).val();
});

$("select").on("change", function () {
    message.voice = voices[$(this).val()];
    var valor = $(this).val();
    console.log(valor);
});

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