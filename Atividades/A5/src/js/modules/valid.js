export const valid = {
  cep(value) {
    if (value == '' || value == ' ' || value.length < 9) {
      return false;
    }
    return true;
  }
}