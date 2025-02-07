import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const mensagem = useToast();

export const email = ref('');
export const senha = ref('');

export const login = async () => {

  if (email.value == '') {
    mensagem.info('Informe o email', { timeout: 5000 });
    email.value.focus();
    return

  }

  if (senha.value == '') {
    mensagem.info('Informe a sua Senha', { timeout: 5000 });
    senha.value.focus();
    return

  }

  await axios.post('login', { email: email.value }, { senha: senha.value }).then(sucesso => { }).catch(erro => {

    mensagem.error(erro.response.data.message);

  });


}