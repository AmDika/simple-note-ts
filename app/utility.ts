// function getInputValues(elemID: string): string {
//   const inputElem: HTMLInputElem = <HTMLInputElement> document.getElementById(elemID);
//   return inputElem.value;
// }

function getInputValAll(elem: string): string {
  const valElem = <HTMLInputElement> document.querySelector(elem);
  return valElem.value;
}

function logger(message: string): void {
  console.log(message)
}

export { getInputValAll as getValues, logger};
