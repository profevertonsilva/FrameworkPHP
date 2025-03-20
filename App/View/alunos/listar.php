<?php
    use FW\Controller\FuncoesGlobais;

    $global = new FuncoesGlobais();
?>

<div class="row">
    <div class="col">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <h5 class="card-title"><?= $this->getview()->title; ?></h5>
                    </div>
                    <!-- <div class="col-md-2">
                        <a href="/dashboard/profissionais/relatorio">
                            <button type="button" class="btn btn-primary rounded-pill">
                                Gerar PDF
                            </button>
                        </a>
                    </div> -->
                    <div class="col-md-4">
                        <a href="/dashboard/administradores/cadastro">
                            <button type="button" class="btn btn-primary rounded-pill">
                                Cadastrar Administrador
                            </button>
                        </a>
                    </div>
                </div>
                <hr>
                <table id="zero-conf" class="display" style="width:100%">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <?php foreach ($this->getView()->administradores as $administradores) { ?>
                            <tr>
                                <th scope="row"><?php echo $administradores->__get('adm_id'); ?></th>
                                <td><img src="<?= $_ENV['BASE_URL'].'resources/img/administradores/'.$administradores->__get('adm_foto'); ?>" width="70px" style="border-radius:50%"></td>
                                <td><?php echo $administradores->__get('adm_nome'); ?></td>
                                <td><?php echo $administradores->__get('log_email'); ?></td>
                                <td><a href="https://wa.me/55<?php echo $administradores->__get('adm_telefone'); ?>" target="_blank"><?php echo $global->formatarTelefone($administradores->__get('adm_telefone')); ?>&nbsp;<i class="fa-brands fa-whatsapp tamanho_icone"></i></a></td>
                                <td>Ação</td>
                                
                                
                            </tr>
                            <?php } ?>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Foto</th>
                                <th scope="col">Nome</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Ações</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>

