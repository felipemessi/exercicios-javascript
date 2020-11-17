$( "#create_user" ).click(function() {
    var dados = {
        cpf: document.getElementById("cpf").value,
        birthday_year : document.getElementById("birthday_year").value,
        city: document.getElementById("city").value,
        uf: document.getElementById("uf").value,
        sexo: $("input:radio[name=sexo]:checked").val()
    }
    $.ajax
    ({
        //json object to sent to the authentication url
        data : JSON.stringify(dados),
        contentType : 'application/json',
        type : 'POST',
        //the url where you want to sent the userName and password to
        url: 'http://localhost:3333/create-user',
        dataType: 'json',
        async: false,
        
        success: function () {
            alert("Thanks!"+ "\nStatus: " + status); 
        }
    })
})

// $( "#listar_cadastros" ).click(function() {
//     // $.get("http://localhost:3333/create-user", function(resultado){
//     //     console.log(resultado)
//     //     $("#resultado").html(resultado);
//     // })
//     $.getJSON( "http://localhost:3333/create-user", function( resultado ) {
//         var items = [];
//         $.each( resultado[0], function( key, val ) {
//           items.push( "<li id='" + key + "'>" + val + "</li>" );
//         });
       
//         $( "<ul/>", {
//           "class": "my-new-list",
//           html: items.join( "" )
//         }).appendTo( "body" );
//       });
// })

























