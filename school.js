
  const form = document.getElementById('admissionForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      fullName: document.getElementById('fullName').value,
      dob: document.getElementById('dob').value,
      gender: document.getElementById('gender').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      classApplied: document.getElementById('classApplied').value,
      address: document.getElementById('address').value,
      photo: document.getElementById('photo').value,
      signature: document.getElementById('signature').value,
      adhar: document.getElementById('adhar').value
    };

    fetch('https://script.google.com/macros/s/AKfycbzKcHa7wx_oRFbSRNxS7oJt-fk7Afe-OAknhiJyoGc7gDQ_bVfBQGFNOw3mvcqnsyNycA/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Submission failed.");
      }
    });
  });
