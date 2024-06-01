export function ratePassword(password) {
  let score = 0;

  const lengthScore = Math.min(password.length / 8, 1.5);
  const upperCaseScore = Math.min((password.match(/[A-Z]/g) || []).length / 2, 1);
  const lowerCaseScore = Math.min((password.match(/[a-z]/g) || []).length / 2, 1);
  const numberScore = Math.min((password.match(/\d/g) || []).length / 2, 1);
  const symbolScore = Math.min((password.match(/[!@#$%^&*()_+{}[\]|\:;"'<>,.?/~`]/g) || []).length / 2, 1);

  score = lengthScore + upperCaseScore + lowerCaseScore + numberScore + symbolScore;

  const rating = Math.min(Math.floor((score / 5) * 5), 5);

  return rating;
}

export function generatePassword({ length, uppercase, lowercase, numbers, symbols }) {
  let characters = '';
  let password = '';

  if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) characters += '0123456789';
  if (symbols) characters += '!@#$%^&*()_+{}[]|;:,.<>?/~`';

  if (characters === '') {
    console.error('At least one character set must be selected.');
    return null;
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
