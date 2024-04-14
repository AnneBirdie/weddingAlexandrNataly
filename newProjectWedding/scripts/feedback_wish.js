

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwVBAMHESe3BXhlnEoD8XOCnzZ830PnobHo9VvNbwZkwdh_eC9j1Rq4n-WJhW_tuDtngw/exec'
  const form = document.forms['submit-to-google-sheet']

  let commentWish = document.getElementById("comment_wish");
  let nameWish = document.getElementById("name_wish");


  form.addEventListener('submit', e => {
    e.preventDefault()

      alert('Ваше поздравление принято и будет опубликовано после проверки');
      nameWish.value = '';
      commentWish.value = '';
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

  })
