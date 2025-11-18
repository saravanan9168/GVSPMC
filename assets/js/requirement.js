
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const successBox = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent form from submitting immediately

        let isValid = true;

        // Clear previous errors
        const errors = form.querySelectorAll(".error-message");
        errors.forEach(err => err.style.display = "none");

        const inputs = form.querySelectorAll(".form-input, .form-textarea");

        inputs.forEach(input => {
            const errorMsg = input.nextElementSibling;

            if (input.hasAttribute("required") && input.value.trim() === "") {
                errorMsg.innerText = "This field is required";
                errorMsg.style.display = "block";
                isValid = false;
            }

            // Email validation
            if (input.name === "email" && input.value.trim() !== "") {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value)) {
                    errorMsg.innerText = "Enter a valid email address";
                    errorMsg.style.display = "block";
                    isValid = false;
                }
            }

            // Phone validation (10 digits only)
            if (input.name === "phone" && input.value.trim() !== "") {
                const phonePattern = /^[0-9]{10}$/;
                if (!phonePattern.test(input.value)) {
                    errorMsg.innerText = "Phone number must be 10 digits";
                    errorMsg.style.display = "block";
                    isValid = false;
                }
            }
        });

        // If invalid → stop
        if (!isValid) {
            return;
        }

        // If valid → submit the form
        successBox.innerText = "Message sent successfully! We'll get back to you soon.";
        successBox.style.display = "block";

        setTimeout(() => {
            form.submit(); // Real form submission to formsubmit.co
        }, 800); // small delay so user sees success
    });
});

