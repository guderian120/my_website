document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const AUTH_TOKEN = "9e3f9a1dc1632d6fdbdea1047029a18d6ba515a5eeaf5466ccf2a5fad841aad0";
    const form = e.target;
    // const submitBtn = form.querySelector('button[type="submit"]');
    const submitBtn = document.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    
    try {
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };
      
      // Send to your Lambda function
      const response = await fetch("https://6o46wt8gye.execute-api.eu-north-1.amazonaws.com/prod/andynetlify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth_token": AUTH_TOKEN  // Only include if your API requires it
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Redirect to success page
        window.location.href = '/success.html';
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      alert('There was an error sending your message. Please try again later.');
      console.error('Error:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });