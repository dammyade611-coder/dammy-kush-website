const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '✕' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = [
    'Hello DAMMY KUSH DESIGN! I would like to make a project enquiry.',
    '',
    `Name: ${data.get('name')}`,
    `Email or WhatsApp: ${data.get('contactInfo')}`,
    `Service: ${data.get('service')}`,
    `Estimated budget: ${data.get('budget') || 'Not specified'}`,
    '',
    'Project details:',
    data.get('details')
  ].join('\n');

  const url = `https://wa.me/2349075558221?text=${encodeURIComponent(message)}`;
  document.getElementById('form-feedback').textContent = 'WhatsApp is opening with your message. Review it and press Send to submit your enquiry.';
  window.open(url, '_blank', 'noopener,noreferrer');
});
