function create_user (){
    var cpf = document.getElementById("cpf").value
    var birthday_year = document.getElementById("birthday_year").value
    var city = document.getElementById("city").value
    var uf = document.getElementById("uf").value
    var sexo = $("input:radio[name=sexo]:checked").val()

    var dados = {
        cpf: cpf,
        birthday_year : birthday_year,
        city: city,
        uf: uf,
        sexo: sexo,
    }
    dados = JSON.stringify(dados)

    $.post("http://localhost:3333/create-user",{
        cpf: document.getElementById("cpf").value,
        birthday_year : document.getElementById("birthday_year").value,
        city: document.getElementById("city").value,
        uf: document.getElementById("uf").value,
        sexo: $("input:radio[name=sexo]:checked").val(),
    },
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
}
