import notify from './src/notification.mjs';
import config from './config/default.json';

const { interval, title, subtitle, message, icon, closeLabel, actions } = config;

setInterval(() => {
  notify({ title, subtitle, message, icon, closeLabel, actions });
}, interval);
