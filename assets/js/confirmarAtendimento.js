<script type="text/javascript">

     // MODAL DELETAR -----------------------------------
    $('a.btn.btn-success.btn-xs').on('click', function() {

        var id = $(this).data('id');
        var aut = $(this).data('aut');
        var url = "../../control/controlConfirmarAtendimento.php?acao=confirmar&sol="+id+"&aut="+aut+";";

        //var id = $(this).data('id'); /* Pegar o ID a ser removido */
        $('span.id').text(id); // inserir o ID da tabela dentro do modal


        $("a.confirma-sim").click(function() {
            $.ajax({
                type: "GET",
                dataType: "html",
                url: url,
                data: 'id='+id, /*atributo ID deve estar no Controller para ser recebido como GET ou Request */
                data: 'aut='+aut,

                success: function(respostaDaURL) {

                    $("#modalConfirmacao").modal('hide');

                    if (respostaDaURL == "") {
                        respostaDaURL = "Não houve resposta da página" + url;
                    }

                    $('span.status').text(respostaDaURL);
                    $("#modalStatus").modal('show');

                    $("a.status-yes").click(function() {
                        window.location.reload("../../view/autonomo/listarNovasSolicitacoes.php?id="+aut+"");
                    });


                },
                error: function(respostaDaURL) {

                    $("#modalConfirmacao").modal('hide');

                    if (respostaDaURL == "") {
                        respostaDaURL = "Não houve resposta da página" + url;
                    }

                    $('span.status').text(respostaDaURL);
                    $("#modalStatus").modal('show');

                    $("a.status-yes").click(function() {
                        window.location.reload();
                    });
                }
            });
        });

        $('#modalConfirmacao').modal('show'); // modal aparece
    });


    </script>
