
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

const modal = document.getElementById('contactModal');
const supportLink = document.getElementById('supportLink');
const closeBtn = document.querySelector('.close-btn');
const contactForm = document.getElementById('contactForm');

supportLink.addEventListener('click', (e) => {
	e.preventDefault();
	modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.style.display = 'none';
	}
});

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let isValid = true;

	// Validate name
	const name = document.getElementById('name');
	const nameError = document.getElementById('nameError');
	if (!name.value.trim()) {
		nameError.textContent = 'Name is required';
		isValid = false;
	} else {
		nameError.textContent = '';
	}

	const email = document.getElementById('email');
	const emailError = document.getElementById('emailError');
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email.value)) {
		emailError.textContent = 'Please enter a valid email';
		isValid = false;
	} else {
		emailError.textContent = '';
	}

	const phone = document.getElementById('phone');
	const phoneError = document.getElementById('phoneError');
	if (phone.value && !/^\+380\d{9}$/.test(phone.value)) {
		phoneError.textContent = 'Please enter a valid Ukrainian phone number';
		isValid = false;
	} else {
		phoneError.textContent = '';
	}

	const consent = document.getElementById('consent');
	const consentError = document.getElementById('consentError');
	if (!consent.checked) {
		consentError.textContent = 'You must agree to continue';
		isValid = false;
	} else {
		consentError.textContent = '';
	}

	if (isValid) {
		alert('Thank you for your message! We will contact you soon.');
		contactForm.reset();
		modal.style.display = 'none';
	}
});

document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('active');
	});
});