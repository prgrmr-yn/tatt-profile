
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

function sendData(name, email, telNo, message) {
  fetch('https://discord.com/api/webhooks/1094866818394492991/2Pi2xIFlPq76ISOTSmOx94m9eiBYOKYIACjixj3kWUjEbzAKvyEEACpPUlKCa2qDi1SJ', {
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
  .then(response => response)
  .then(data => data)
  .catch(error => console.error(error))
}
