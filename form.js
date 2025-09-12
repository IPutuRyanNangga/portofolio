
(function () {
    emailjs.init("8CBvbC9oh-lSYCMI8"); 
  })();
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const params = {
        from_name: form.querySelector('[name="from_name"]').value,
        from_email: form.querySelector('[name="from_email"]').value,
        message: form.querySelector('[name="message"]').value
      };
  
      emailjs.send("service_teyzcnc", "template_kkp372x", params)
        .then(function (response) {
          alert("Pesan berhasil dikirim!");
          console.log("SUCCESS!", response.status, response.text);
          form.reset();
        }, function (error) {
          alert("Gagal mengirim pesan. Coba lagi.");
          console.error("FAILED...", error);
        });
    });
  });
  