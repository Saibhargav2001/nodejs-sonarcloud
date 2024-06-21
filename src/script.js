const axios = require('axios');

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

const message = {
  username: 'CI/CD Bot',
  embeds: [
    {
      title: 'tp-customers-ui-v3-alpha',
      fields: [
        { name: 'Environment', value: 'alpha', inline: true },
        { name: 'Stage', value: 'Build', inline: true },
        { name: 'Status', value: 'STARTED', inline: true },
        { name: 'PR Number', value: '76', inline: true },
        { name: 'PR Author', value: 'pv-hamed', inline: true },
        { name: 'PR Approvers', value: 'None', inline: true },
        { name: 'PR Merger', value: 'pv-amir', inline: true }
      ],
      timestamp: new Date(),
      color: 5814783
    }
  ]
};

axios.post(webhookUrl, message)
  .then(response => {
    console.log('Notification sent successfully');
  })
  .catch(error => {
    console.error('Error sending notification', error);
  });
