

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwumyEQ7ZxQZxMiBA7AUCQSPxQ4NljGaIh5ZDkdLM05-gLHqmlmNdyrg5GfjMiuCeAn/exec'
  const form = document.forms['submit-to-google-sheet']

  let commentWish = document.getElementById("comment_wish");
  let nameWish = document.getElementById("name_wish");


  form.addEventListener('submit', e => {
    e.preventDefault()

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

    
      alert('Ваше поздравление принято и будет опубликовано после проверки');
      nameWish.value = '';
      commentWish.value = '';

  })
