function getInputValues(elemID: string): string {
  const inputElem: HTMLInputElem = <HTMLInputElement> document.getElementById(elemID);
  return inputElem.value;
}

function getInputValAll(elem: string): string {
  const valElem: HTMLInputElem = <HTMLInputElement> document.querySelector(elem);
  return valEleme.value;
}

function logger(message: string): void {
  console.log(message)
}

export { getInputValues as getValue, getInputValAll as getVallAll, logger};
