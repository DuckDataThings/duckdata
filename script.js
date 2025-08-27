<<<<<<< HEAD
  lucide.createIcons();
  function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        document.getElementById('form-status').textContent = response.ok ? 'Thanks for your message!' : 'Oops! Something went wrong.';
        if (response.ok) form.reset();
      }).catch(() => {
        document.getElementById('form-status').textContent = 'Oops! Something went wrong.';
      });
    }
     function closePopup() {
    document.getElementById("whatsapp-popup").style.display = "none";
  }

  window.addEventListener("load", () => {
    document.getElementById("whatsapp-popup").style.display = "block";
  });

 
=======
  lucide.createIcons();
  function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        document.getElementById('form-status').textContent = response.ok ? 'Thanks for your message!' : 'Oops! Something went wrong.';
        if (response.ok) form.reset();
      }).catch(() => {
        document.getElementById('form-status').textContent = 'Oops! Something went wrong.';
      });
    }
     function closePopup() {
    document.getElementById("whatsapp-popup").style.display = "none";
  }

  window.addEventListener("load", () => {
    document.getElementById("whatsapp-popup").style.display = "block";
  });

 
>>>>>>> d0df90e (First commit from VS Code)
