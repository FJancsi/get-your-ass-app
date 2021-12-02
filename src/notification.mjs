import { NotificationCenter } from 'node-notifier';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const notify = ({ title, subtitle, message, icon, closeLabel, actions }) => {
  const notifier = new NotificationCenter({
    withFallback: false,
  });

  notifier.notify(
    {
      title: title || '',
      subtitle: subtitle || '',
      message: message || '',
      sound: true,
      icon: icon ? path.join(dirname, icon) : 'Terminal Icon',
      timeout: 5,
      closeLabel: closeLabel || '',
      reply: true,
      actions: actions || '',
    },
    (error, response, metadata) => {
      if (error) {
        throw error;
      }

      console.log(`Response: ${JSON.stringify(response)}, ${JSON.stringify(metadata)}`);

      if (metadata.activationValue === actions) {
        console.log('Bye bye!');
        process.exit();
      }
    }
  );
};

export default notify;
