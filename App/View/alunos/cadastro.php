<div class="page-info">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Apps</a></li>
                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
        </nav>
    </div>
<div class="row">
    
    <div class="col-xl">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"><?= $this->getView()->title; ?></h5>
                <form id="cad_administrador" action="/dashboard/administradores/salvar" method="post">
                    <div class="form-group">
                        <label for="pro_nome">Nome Completo</label>
                        <input type="text" class="form-control" id="adm_nome" name="adm_nome" placeholder="Digite seu Nome Completo">
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="pro_nome">Whatsapp</label>
                            <input type="text" class="form-control" id="adm_telefone" name="adm_telefone" placeholder="Whatsapp">
                        </div>
                    </div>
                    <hr>
                    <h3>Login</h3>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="pro_nome">E-mail</label>
                            <input type="text" class="form-control" id="log_email" name="log_email" placeholder="Digite aqui seu E-Mail">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="pro_nome">Senha</label>
                            <div style="display: flex; align-items: center;">
                                <input type="password" id="log_senha" name="log_senha" class="form-control" style="flex: 1;" />
                                <button type="button" id="toggleSenha" class="btn btn-secondary" style="margin-left: 5px;">Exibir</button>
                            </div>
                            <small id="forca_senha" class="form-text"></small>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="pro_nome">Confirmação de Senha</label>
                            <div style="display: flex; align-items: center;">
                                <input type="password" id="log_senha_c" name="log_senha_c" class="form-control" style="flex: 1;" />
                                <button type="button" id="toggleSenha_c" class="btn btn-secondary" style="margin-left: 5px;">Exibir</button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary rounded-pill btn_salvar">Salvar</button>&nbsp;<button type="cancel" class="btn btn-primary rounded-pill btn_salvar">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>