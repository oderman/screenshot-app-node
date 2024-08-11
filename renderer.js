const form = document.getElementById('screenshot-form');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = document.getElementById('url');
  const format = document.getElementById('format');
  const submitButton = document.getElementById('submitButton');
  const backgroundSubmitButton = submitButton.style.backgroundColor;

  try {
    url.setAttribute('disabled', true);
    format.setAttribute('disabled', true);
    submitButton.setAttribute('disabled', true);
    submitButton.style.backgroundColor = 'lightgray';
    message.textContent = 'Generating...';
    const filePath = await window.electronAPI.capture(url.value, format.value);
    message.textContent = `Screenshot saved in: ${filePath}`;
    url.removeAttribute('disabled');
    format.removeAttribute('disabled');
    submitButton.removeAttribute('disabled');
    submitButton.style.backgroundColor = backgroundSubmitButton;
  } catch (error) {
    message.textContent = `Error: ${error.message}`;
    url.removeAttribute('disabled');
    format.removeAttribute('disabled');
    submitButton.removeAttribute('disabled');
    submitButton.style.backgroundColor = backgroundSubmitButton;
  }
});
