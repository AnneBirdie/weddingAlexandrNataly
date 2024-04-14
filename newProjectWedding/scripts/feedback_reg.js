

const scriptURLreg = 'https://script.google.com/macros/s/AKfycbyOju1_DWvgIjadU1AQf96FkOrbQzbZ8igYRR_Wff0oHjyJLOamthOyiTk-YHJwkAUm/exec'
const formReg = document.forms['submit-to-google-sheet_reg']

let nameGuest = document.getElementById('name');
let surnameGuest = document.getElementById('surname');
let registredGuest = document.getElementById("registred");


formReg.addEventListener('submit', e => {
  e.preventDefault()
  

    if (registredGuest.selectedIndex === 0 || nameGuest.value === '' || surnameGuest.value === ''){
        alert("Заполните обязательные поля");
    }else{
        fetch(scriptURLreg, { method: 'POST', body: new FormData(formReg)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    
        nameGuest.value  = '';
        surnameGuest.value = '';
        registredGuest.selectedIndex = 0;
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox =>{
            checkbox.checked = false;
        });
        document.getElementById('comment').value = '';
    
    
        alert ("Вы успешно зарегистрировались");
    }
    
})