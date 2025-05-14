//let elementosSelecionados = [];

//function selecioneElemento(elemento) {
  //  if (elementosSelecionados.includes(elemento)) {
  //      elemento.classList.remove("selected");
 //       elementosSelecionados = elementosSelecionados.filter(e => e !== elemento);
 //   } else {
//        elemento.classList.add("selected");
//        elementosSelecionados.push(elemento);
//    }
//}

//function moveParaDiv1() {
 //   elementosSelecionados.forEach(elemento => {
 //       document.getElementById("div1").appendChild(elemento);
//        elemento.classList.remove("selected");
//    });
//    elementosSelecionados = [];
//}

//function moveParaDiv2() {
//    elementosSelecionados.forEach(elemento => {
//        document.getElementById("div2").appendChild(elemento);
//        elemento.classList.remove("selected");
//    });
//    elementosSelecionados = [];
//}

const op = window.document.getElementsByTagName("button");
const vai = window.document.getElementsByClassName("hallo");
//vai.style.display = "none";
 
 function disable(position){
	 op[position].setAttribute("disabled", true);
 }
  function Listdisable(position){
	 vai[position].setAttribute("disabled", true);
 }
 
 function move(){
	 
	for( let i = 0; i <= op.length - 2; i++){
		if(op[i].disabled == true && vai[i].innerText == ""){
			
			vai[i].innerText = op[i].innerText;
			op[i].innerText ="";
			op[i].disabled = false
			op[i].style.visibility = "hidden";
			vai[i].style.visibility = "visible";
		}
	}
}
		
function sai(){
    for (let i = 0; i <= vai.length - 1; i++) {

        if(vai[i].disabled == true){
            op[i].innerText =  vai[i].innerText;
            op[i].disabled = false;
            vai[i].innerText = "";
            vai[i].disabled = false;
			vai[i].style.visibility = "hidden";
			op[i].style.visibility = "visible";
        }
    }[1].innerText = "";
}