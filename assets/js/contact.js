console.log('hi');
const nameEl = quer('name')
const emailEl = quer('email')
const telEl = quer('tel-el')
const messageEl = quer('message')
const submitEl = quer('submit-el')

function quer(el) {
  return document.getElementById(el);
}

function clearData(nameEl, emailEl, telEl, messageEl) {
  nameEl.value = '';
  emailEl.value = '';
  telEl.value = '';
  messageEl.value = '';
}

console.log(submitEl);

submitEl.addEventListener('enter', processInformation)
submitEl.addEventListener('click', processInformation)

function processInformation(e) {
  e.preventDefault();
  const name = nameEl.value;
  const email = emailEl.value;
  const telNo = telEl.value;
  const message = messageEl.value;

  console.log([name, email, telNo, message,]);
  sendData(name, email, telNo, message);
  clearData(nameEl, emailEl, telEl, messageEl);
}
const webhookUrl = 'https://discord.com/api/webhooks/1131834486678622228/1Xikrrrz_UTcsMxB5afmL9ZW8c4G0tD1mzpDWt627deyaA3YA8n8iA9ifRfavHJ1QeJu';
function sendData(name, email, telNo, message) {
  fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(
    {
      "content": null,
      "embeds": [
        {
          "color": 5814783,
          "fields": [
            {
              "name": `Name: ${name}`,
              "value": "______"
            },
            {
              "name": `Email: ${email}`,
              "value": "______"
            },
            {
              "name": `Telephone: ${telNo}`,
              "value": "______"
            },
            {
              "name": `Message: `,
              "value": `${message}`,
            }
          ]
        }
      ],
      "attachments": []
    } )
})
  .then(response => console.log(response))
  .then(data => data)
  .catch(error => console.error(error))
}
