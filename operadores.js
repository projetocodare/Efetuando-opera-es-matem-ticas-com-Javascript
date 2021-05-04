function calcularOperacao(v) {
    const operacao = eval($("#valor1").val() + `${v}` + $("#valor2").val());
    $("#total").text("Total:" + operacao);
}