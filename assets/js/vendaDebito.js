function vendaDebito(){
  let capitalDebito = output1.innerHTML;
  let jurosDebito = ('1.99');
  let entradaDebito = output3.innerHTML;
  let total_debito = document.getElementById('total_debito').value;
  jurosDebito = jurosDebito / 100;
  let baseJuros = (capitalDebito - entradaDebito);
  montanteDebito = ((baseJuros) * jurosDebito) + (baseJuros);
  totDebito = montanteDebito.toString();       
  saida_total_debito = document.getElementById("total_debito");
  saida_total_debito.innerHTML = parseFloat(totDebito).toFixed(2);
}