function calculaJuros(){
  //Captura dos valores dos inputs e declaração de variáveis
  let capital = output1.innerHTML;

  //let taxaJuros = document.getElementById('taxaJuros').value; --juros variavel --
  //let taxaJuros = (0.916666666666667);
  let tempoAplicacao = output2.innerHTML;
  let valorEntrada = output3.innerHTML;
  let total = document.getElementById('total_credito').value;
  let mensal = document.getElementById('mensal').value;
  
  if (tempoAplicacao < 2) {
    taxaJuros = (2.6); 
  }else if (tempoAplicacao <7) {
      taxaJuros = (1.8);
  } else {
    taxaJuros =(0.99);
  }
  
  
  //Vamos dividir a taxa de juros por 100
  taxaJuros = taxaJuros/100;
  
  //Com as variáveis criadas e definidas, tá na hora da gente definer o montante, usando as variáveis acima
  montante = (capital-valorEntrada) * Math.pow((1 + taxaJuros), tempoAplicacao);
  
  //Agora é mamão com açúcar! Basta definir o valor total, na var tot e o valor mensal na var men.
  tot = montante.toString(); //Converte o total para string
  men = tot/tempoAplicacao; //Quanto pago mensalmente ?

  //exibindo isso em alguns inputs na página
  //console.log(tot);
  //console.log(men); 
  document.getElementById('total_credito').value = parseFloat(tot).toFixed(2);
  document.getElementById('mensal').value = parseFloat(men).toFixed(2);

  //Inseriondo valor no campo SPAN do valor total do crédito
  saida_total_credito = document.getElementById("total_credito"); //Atribuindo total commo saída saida_total_credito
  saida_total_credito.innerHTML = parseFloat(tot).toFixed(2);
  

}
