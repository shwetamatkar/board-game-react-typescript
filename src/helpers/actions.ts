import {PATH} from "./constants";

export const startGame = (ckb: Function) => {

  fetch(PATH.DOMAIN + PATH.START)
    .then(response => response.text())
    .then(res => ckb(res))
    .catch(error => console.error(error));
}
