document.addEventListener('DOMContentLoaded', function () {
    const lightModeIcon = document.getElementById('light-mode');
    const darkModeIcon = document.getElementById('dark-mode');

    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    lightModeIcon.addEventListener('click', function () {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
    });

    darkModeIcon.addEventListener('click', function () {
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    });
});

function searchFunction() {
    const searchText = document.getElementById('search').value;
    alert("Searching for: " + searchText);
}

document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    var icon = this.querySelector('i');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

// Change javacsript kodlari bu hissede yerlesir

const skillsSelect = document.getElementById('skillsSelect');

const profiles = document.querySelectorAll('.intro');

skillsSelect.addEventListener('change', function() {
    const selectedSkill = skillsSelect.value;

    profiles.forEach(profile => {
        if (selectedSkill === "" || profile.classList.contains(selectedSkill)) {
            profile.style.display = 'block'; 
        } else {
            profile.style.display = 'none'; 
        }
    });
});


//tools hisse ucun olan javascript kodumu qeyd edirem

// Redakte etmek ucun istifade etdiyim kodlar

function editField(button) {
    const textElement = button.previousElementSibling;
    const currentText = textElement.innerText;
    
    const inputField = document.createElement('input');
    inputField.value = currentText;
    
    textElement.innerHTML = '';
    textElement.appendChild(inputField);
    
    button.innerHTML = '<i class="fas fa-save"></i>'; 
    button.setAttribute('onclick', 'saveField(this)'); 
  }

  function saveField(button) {
    const inputField = button.previousElementSibling.querySelector('input');
    const updatedText = inputField.value;

    const textElement = button.previousElementSibling;
    textElement.innerHTML = updatedText;

    button.innerHTML = '<i class="fas fa-edit"></i>';
    button.setAttribute('onclick', 'editField(this)'); 
  }