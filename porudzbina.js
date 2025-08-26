function dodajPDV(cena){
        return cena*1.2;
    }
    function upisUtabelu(event){
        event.preventDefault();
        let podaci=[];
        podaci.push(document.querySelector("input[placeholder='Ime']").value);
        podaci.push(document.querySelector("input[placeholder='Prezime']").value);
        podaci.push(document.querySelectorAll("#Unos input")[2].value);
        podaci.push(document.querySelectorAll("#Unos input")[3].value);
        podaci.push(document.querySelectorAll("#Unos input")[4].value);

        let nacinPlacanja=document.querySelector("input[name='Način plaćanja']:checked").nextElementSibling.textContent.trim();
        podaci.push(nacinPlacanja);

        let proizvod=sessionStorage.getItem("proizvod") || "Nije odabran";
        let dodatak=sessionStorage.getItem("dodatak") || "Nema dodataka";
        let cena=sessionStorage.getItem("cena") || 0;
        let cenasapdv=dodajPDV(parseFloat(cena));
        podaci.push(proizvod+"("+ dodatak +")");
        podaci.push(cenasapdv.toFixed(2) + "din");

        function napraviRed(niz){
            let red="<tr>";
            for(let i=0; i<niz.length; i++){
                red +="<td>" + niz[i] + "</td>";
            }
            red +="</tr>";
            return red;
        }

        let divTabela=document.getElementById("TabelaPorudzbine");
        let tabela=document.querySelector(".Tabela");
        if(!tabela){
            tabela=document.createElement("table")
            tabela.className="Tabela";
            let thead=document.createElement("thead");
            thead.innerHTML=`<tr>
                                <th>Ime</th>
                                <th>Prezime</th>
                                <th>Ulica</th>
                                <th>Spart i dodatne informacije</th>
                                <th>Telefon</th>
                                <th>Plaćanje</th>
                                <th>Proizvod</th>
                                <th>Cena sa PDV-om</th>
                            </tr>`;
                            tabela.appendChild(thead);
            let tbody=document.createElement("tbody");
            tabela.appendChild(tbody);
            divTabela.appendChild(tabela);
        }
        let novired=napraviRed(podaci);
        tabela.querySelector("tbody").innerHTML += novired;
        return false;
    }
    function naruci(event){
        let proizvodDiv=event.target.closest("div[id^='Proizvod' ]");
        if(!proizvodDiv) return;
        let proizvodelem=proizvodDiv.querySelector("h4").textContent;
        let dodatakelem=proizvodDiv.querySelector("select");
        let selectovi=proizvodDiv.querySelectorAll("select");
        let dodatak=Array.from(selectovi).map(s=>s.value).join(" , ");
        let cenatext=proizvodDiv.querySelectorAll("h4")[1].textContent;
        let cenaBroj=parseFloat(cenatext.replace(/[^0-9]/g, ""));
        sessionStorage.setItem("proizvod",proizvodelem);
        sessionStorage.setItem("dodatak",dodatak);
        sessionStorage.setItem("cena",cenaBroj);
        window.location.href="Dostava.html";
    }