export const getCheckboxItems = (checkboxList) => {
  let printCheckedIdem = []
  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
      printCheckedIdem.push(checkboxList[i].value)
    }
  }
  console.log(`Knowledge: ${printCheckedIdem.join(', ')}`.toUpperCase());
}