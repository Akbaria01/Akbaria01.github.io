function handleFormSubmit(event, formType) {
    event.preventDefault(); 
    const messageContainer = document.getElementById(`${formType}-message`);
    messageContainer.textContent = `Thank you! Your ${formType} form has been submitted successfully.`;
    messageContainer.style.display = 'block'; 

    const form = event.target;
    form.reset();
}
document.addEventListener('DOMContentLoaded', () => {
    const volunteerForm = document.getElementById('volunteer-form');
    const donationForm = document.getElementById('donation-form');
    volunteerForm.addEventListener('submit', (event) => {
      handleFormSubmit(event, 'volunteer');
    });
    donationForm.addEventListener('submit', (event) => {
        handleFormSubmit(event, 'donation');
      });
  });


