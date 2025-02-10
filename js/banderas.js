
fetch("https://restcountries.com/v3.1/all")
.then(response=>{
    $("#cargando").hide();
    return response.json()})
.then(data=>{
    let banderas = document.getElementById("banderas");
    data.forEach(element => {
        let img = document.createElement("img");
        img.src = element.flags.png;
        img.alt = element.name.common;
        img.className = "bandera";
        banderas.appendChild(img);
    });
    $(".bandera").click(function(){
        alert("El pais seleccionado es:   "+ $(this).attr("alt"));
    });
})
.catch(error=>console.log(error));