export const isEmpty = (value) => {
  if (!value) {
    return true;
  }
  return false;
}

export const isLength = (password) => {
  if (password.length < 6) {
    return true;
  }
  return false
}

export const isMatch = (password, confirmPassword) => {
  if (password === confirmPassword) {
    return true;
  }
  return false;
}