import { ref } from "vue";

export const valor = ref(0);

export const funMenos = () => {
  valor.value--;

}

export function funMais() {
  valor.value++
}