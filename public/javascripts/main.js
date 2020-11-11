const hideAlerts = () => {
  const alerts = document.getElementsByClassName('alert')

  for (const alert of alerts) {
    if(alert.classList.contains('alert-visible')) {
      alert.classList.remove('alert-visible')
    }
  
    if(!alert.classList.contains('alert-invisible')) {
      alert.classList.add('alert-invisible')
    }
  }
}

const showAlert = (alertID) => {
  const contactAlert = document.getElementById(alertID)

  if(contactAlert.classList.contains('alert-invisible')) {
    contactAlert.classList.remove('alert-invisible')
  }

  contactAlert.classList.add('alert-visible')
}

const sendComments = () => {
  const form = document.getElementById('contactForm')
  hideAlerts()
    
  if (form.checkValidity() === true) {
    const body = {
      to: 'contacto@navenanutricion.com',
      subject: `Main Contact: ${document.getElementById('nameInput').value} | ${document.getElementById('emailInput').value}`,
      message: document.getElementById('commentsInput').value
    }
    
    const options = {
      headers:{
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body),
    }
    
    fetch('/sendEmail', options)
    .then(res => {
      if(res.status == 200) {
        showAlert('alertOk')
      } else {
        showAlert('alertError')
      }
    })
    .catch(error => {
      console.log(error)
      showAlert('alertError')
    })
  } 
  
  form.classList.add('was-validated');
}

const menuItemSelected = (item) => {
    let menuItems = document.getElementsByClassName('nav-link-selected')

    for(menuItem of menuItems) {
        menuItem.classList.remove('nav-link-selected')
        menuItem.classList.add('nav-link-text')
    }

    item.classList.remove('nav-link-text')
    item.classList.add('nav-link-selected')
}

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.on('click',function(event) {
// On-page links
if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
  && 
  location.hostname == this.hostname
) {
  // Figure out element to scroll to
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  // Does a scroll target exist?
  if (target.length) {
    // Only prevent default if animation is actually gonna happen
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top-50
    }, 1000, function() {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
    });
  }
}
});