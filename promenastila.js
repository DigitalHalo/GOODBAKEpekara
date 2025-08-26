const krofna=document.getElementById("SlikaKrofne");
const minipizza=document.getElementById("SlikaMinipizze");
    function uvecaj(x){
        if(x===1){
            krofna.style.transform="scale(1.03)";
            krofna.style.boxShadow="0px 8px 15px white";
            krofna.style.transition="0.3s";

            minipizza.style.transform="scale(1)";
            minipizza.style.boxShadow="";
            minipizza.style.transition="";
        }
        else if(x===2){
            krofna.style.transform="scale(1)";
            krofna.style.boxShadow="";
            krofna.style.transition="";

            minipizza.style.transform="scale(1.03)";
            minipizza.style.boxShadow="0px 8px 15px white";
            minipizza.style.transition="0.3s";
        }
        else{
            krofna.style.transform="scale(1)";
            krofna.style.boxShadow="";
            krofna.style.transition="";

            minipizza.style.transform="scale(1)";
            minipizza.style.boxShadow="";
            minipizza.style.transition="";
        }
    }