import { NotificationCenter } from 'node-notifier';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const notify = (subtitle, message, callback) => {
  const notifier = new NotificationCenter({
    withFallback: false,
  });

  notifier.notify(
    {
      title: 'Get your ass app!',
      subtitle: subtitle,
      message: message,
      sound: 'Funk', // Case Sensitive string for location of sound file, or use one of macOS' native sounds (see below)
      icon: path.join(__dirname, 'scotsman.png'), // Absolute Path to Triggering Icon
      wait: true, // Wait for User Action against Notification or times out. Same as timeout = 5 seconds

      // New in latest version. See `example/macInput.js` for usage
      timeout: 10, // Takes precedence over wait if both are defined.
      closeLabel: 'Got it!', // String. Label for cancel button
      actions: [5, 10], // String | Array<String>. Action label or list of labels in case of dropdown
      dropdownLabel: 'Remind me in',
      reply: true, // Boolean. If notification should take input. Value passed as third argument in callback and event emitter.
    },
    (error, response, metadata) => {
      callback(response, metadata);
    }
  );
};

export default notify;
