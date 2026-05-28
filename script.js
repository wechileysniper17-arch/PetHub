const form = document.getElementById("formPet");
const listaPets = document.getElementById("listaPets");

let pets = JSON.parse(localStorage.getItem("pets")) || [];

mostrarPets();

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const especie = document.getElementById("especie").value;
    const raca = document.getElementById("raca").value;
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;
    const tutor = document.getElementById("tutor").value;

    if(nome.length < 2){

        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Nome inválido!'
        });

        return;
    }

    const pet = {
        nome,
        especie,
        raca,
        idade,
        peso,
        tutor
    };

    pets.push(pet);

    localStorage.setItem("pets", JSON.stringify(pets));

    Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Pet cadastrado!'
    });

    form.reset();

    mostrarPets();

});

function mostrarPets(){

    listaPets.innerHTML = "";

    pets.forEach((pet) => {

        listaPets.innerHTML += `
        
        <div class="pet-card">

            <p><strong>Nome:</strong> ${pet.nome}</p>
            <p><strong>Espécie:</strong> ${pet.especie}</p>

        </div>
        
        `;
    });

}