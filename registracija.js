 function Preuzmipodatke(event){
        event.preventDefault();
        const ime=document.querySelector('input[type="text"]').value.trim();
        const email=document.querySelector('input[type="email"]').value.trim();
        const sifra=document.querySelector('input[type="password"]').value.trim();
        const polunos=document.querySelector('input[name="Pol"]:checked');
        const pol=polunos ? polunos.nextElementSibling.textContent:"Nije odabrano";
        const uslovi="Prihvaćeno";
        alert(`Podaci o korisniku:\n`+`Ime: ${ime}\n`+`Email: ${email}\n`+`Šifra: ${sifra}\n`+`Pol: ${pol}\n`+`Uslovi korišćenja: ${uslovi}`);
    }
    function prikazisifru(event){
        event.preventDefault();
        const sifra=document.querySelector('input[name="sifra"]');
        if(sifra.type==="password"){
            sifra.type="text";
        }
        else{
            sifra.type="password";
        }
    }