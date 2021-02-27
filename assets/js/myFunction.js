function myFunction(_idTab, _linhaPersistente) { //Função myFunction recebendo nome da tabela e linha persistente por parâmetro

  //alert(output1.innerHTML);
  //alert(output3.innerHTML);

  if (output1.innerHTML == 10000) {

    alert("Informe um valor de compra menor do que o valor máximo. Ex. R$ 9.999,99");

    location.reload(); 

  } else if (output3.innerHTML == 10000) {

    alert("Informe um valor de entrada menor do que o valor máximo. Ex. R$ 9.999,99");

    location.reload();
    
  } else if (output3.innerHTML > output1.innerHTML) {

    alert("Valor da entrada maior que o valor da compra! Informe outro valor.");

    location.reload();
    
  } else {

    var numeroParcelas = output2.innerHTML; //Coleta Número de parcelas
    var i; //Inicializando variável i

    if ($("myTable").is(':empty')){ //Se a tabela estiver vazia
      alert('Tabela vazia!'); //Alerta - Vazia
    } else {
      var linhas = document.getElementById("myTable").rows; //Coleta quantidade de linhas da tabela myTable
      var i = 0;
      for (i = linhas.length-1; i>=0; i--){ //Faça i igual a quantidade de linhas da tabela menos 1; i>=0; i++;
        if (i != (_linhaPersistente-1) ){ //Se i for diferente da linha Persistente
            document.getElementById("myTable").deleteRow(i); //Delete linha
        }
      }

      for (i = 1; i <= numeroParcelas; i++) { //Faça i=1; aonde i deverá ser <= ao némero de parcelas; somando i = i +i;
        var table = document.getElementById("myTable"); //Definindo Tabela
        var row = table.insertRow(-1); // Definindo Posição da inserção da linha da tabela
        var cell1 = row.insertCell(0); //Definindo variável para inserção de valor na célula 1
        var cell2 = row.insertCell(1); //Definindo variável para inserção de valor na célula 2
        var cell3 = row.insertCell(2); //Definindo variável para inserção de valor na célula 3

        cell1.innerHTML = ""; //Inserindo valor da célula 1
        cell2.innerHTML = "<h5>"+i+"x</h5>"; //Inserindo valor da célula 2
        cell3.innerHTML = "<h5>R$&nbsp;<span id='mensal'>"+parseFloat(men).toFixed(2)+"</span></h5>"; //Inserindo valor da célula 3
      }
    } 

  }

}
