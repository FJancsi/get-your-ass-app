import notify from './src/notification.mjs';

const callbackFn = (response, meta) => {
    console.log(`${response}, ${meta}`);
}

notify('mozogj', 'emeld fel a segged', callbackFn);