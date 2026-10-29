// 1. GALLERY LIVE VIEW FRAME
function previewImage(cardElement) {
    const previewBox = document.getElementById('galleryPreviewBox');
    const previewImg = document.getElementById('mainPreviewImage');
    const previewTitle = document.getElementById('previewTitle');

    const clickedImg = cardElement.querySelector('.gallery-img');

    if (!clickedImg || !previewBox || !previewImg || !previewTitle) return;

    previewBox.classList.remove('d-none');
    previewImg.src = clickedImg.src;
    previewTitle.innerText = "📍 Viewing: " + clickedImg.alt;
    
    previewBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    previewImg.classList.remove('animate-fade');
    void previewImg.offsetWidth; // Trigger DOM reflow to restart animation safely
    previewImg.classList.add('animate-fade');
}

// 2. CLIENT-SIDE FORM VALIDATION
function validateForm(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const feedbackBox = document.getElementById('formFeedback');

    if (!feedbackBox) return;

    feedbackBox.classList.remove('d-none', 'alert-success', 'alert-danger');

    // Validation Check 1: Name length
    if (nameInput.value.trim().length < 4) {
        showFeedback("Error: Please enter your full name (minimum 4 characters).", "alert-danger");
        nameInput.focus();
        return;
    }

    // Validation Check 2: Phone numeric pattern 
    const phonePattern = /^[0-9+\s-]{8,15}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        showFeedback("Error: Please enter a valid phone number format.", "alert-danger");
        phoneInput.focus();
        return;
    }

    // Validation Check 3: Secure password limit
    if (passwordInput.value.length < 6) {
        showFeedback("Error: Password must be at least 6 characters long.", "alert-danger");
        passwordInput.focus();
        return;
    }

    // SUCCESS DEPLOYMENT
    showFeedback(`Success! Thank you ${nameInput.value.trim()}, your booking request has been captured safely.`, "alert-success");
    document.getElementById('touristForm').reset();
}

function showFeedback(message, alertClass) {
    const feedbackBox = document.getElementById('formFeedback');
    feedbackBox.innerText = message;
    feedbackBox.classList.add(alertClass);
    feedbackBox.classList.remove('d-none');
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
