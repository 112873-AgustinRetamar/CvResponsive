/* toggle de dark mode*/
$(document).ready(function(){
    $('#modo').click(function(){
        var element = document.getElementById('derecha');
        element.classList.toggle("darkmode");
    });
});