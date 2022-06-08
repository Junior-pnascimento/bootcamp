import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.12:3333',
});

export default api;

// iOS com emulador: localhost
// iOS com fisico(celular): IP da maquina

// android com emulador: localhost(adb reverse)
// android com emulador: 10.0.2.2(android studio)
// android com emulador 10.0.3.2(Genymotion)
// android com fisico(celular): IP da maquina
