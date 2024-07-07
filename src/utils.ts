export function printError(text: string) {
  console.log(
    `%c ${text}`,
    'color: #fff; background-color: #F44336; padding: 10px; border-radius: 5px;',
  );
}

export function printSuccess(text: string) {
  console.log(
    `%c ${text}`,
    'color: #fff; background-color: #4CAF50; padding: 10px; border-radius: 5px;',
  );
}
