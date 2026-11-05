function createForm(){
    const div_modal = document.createElement('div');
    div_modal.classList.add('modal');
    
    div_modal.innerHTML=`
        <div tabindex="-1" class="modal-form">
            <div class="modal-title-form">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16">
                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z"/>
                </svg>
                
                <h2>Solicitação de serviço</h2>
                <button id="id-btn-closed-form" class="btn-modal-closed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>
                
                

            <div class="modal-content-form">
                <form action="" method="post">
                    <div class="modal-form-data">
                        <label for="name">Nome</label>
                        <input type="text" id="name" name="name" placeholder="Seu nome" autocomplete="name" required>
                    </div>

                    <div class="modal-form-data">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="seu.email@gmail.com" autocomplete="email" required>
                    </div>

                    <div class="modal-form-data">
                        <label for="message_req">Mensagem</label>
                        <textarea name="message_req" id="message_req" placeholder="Descreva sobre seu projeto..." minlength="100" cols="20" rows="10" required></textarea>
                    </div>
                        
                    <div class="modal-form-btn-submit">
                        <button type="submit" class="btn-push">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                            </svg>
                            Enviar proposta
                        </button>
                    </div>
                </form>
            </div>
        </div>`;

    
    document.body.appendChild(div_modal);
    div_modal.focus()
    document.body.classList.add("no-scroll")


    // Remove/fecha o formulário pelo button ou div_modal
    const div = document.querySelector('.modal');
    div.addEventListener('click', removeForm);
}


function removeForm(){
    const div = document.querySelector('.modal');
    div.remove();
    document.body.classList.remove("no-scroll")
}


// Gera/cria o formulário
const button_open = document.querySelector('#id-btn-open-form');
button_open.addEventListener('click', createForm);
