document.querySelector('#phone-input').addEventListener('input', ({ target }) => {
  const numberGroups = target.value
    .replace(/^\+7|\D/g, '')
    .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

  if (numberGroups[1]) {
    const result = '+7 (' + numberGroups[1] + ') ' +
      numberGroups[2] + '-' +
      numberGroups[3] + '-' +
      numberGroups[4];

    target.value = result.replace(/\D*$/g, '');
  }
  else target.value = '';
});
