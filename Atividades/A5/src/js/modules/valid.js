export const valid = {
  nome(value) {
    if (value == '' || value == ' ' || value.length < 4) {
      return false;
    }
    return true;
  },

  cpf(value) {
    if (value == '' || value == ' ' || value.length < 14) {
      return false;
    }

    // Limpar máscara
    value = value.replace(/\D/g, "");

    var sum;
    var rest;
    sum = 0;

    if (
      value == "00000000000" ||
      value == "11111111111" ||
      value == "22222222222" ||
      value == "33333333333" ||
      value == "44444444444" ||
      value == "55555555555" ||
      value == "66666666666" ||
      value == "77777777777" ||
      value == "88888888888" ||
      value == "99999999999"
    ) {
      return false
    }

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(value.substring(i - 1, i)) * (11 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }

    if (rest != parseInt(value.substring(9, 10))) {
      return false;
    }

    sum = 0;

    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(value.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) {
      rest = 0;
    }

    if (rest != parseInt(value.substring(10, 11))) {
      return false;
    }

    return true;
  },

  date(value) {
    if (value == '' || value == ' ' || value.length < 10) {
      return false;
    }

    let dat = value.split('/');

    if (dat[0] < 1 || dat[0] > 31) {
      return false;
    }

    if (dat[1] < 0 || dat[1] > 12) {
      return false;
    }

    if (dat[2] < 1900 || dat[2] > new Date().getFullYear()) {
      return false;
    }

    return true;
  },

  email(value) {
    if (value == '' || value == ' ' || value.length < 9) {
      return false;
    }
    return true;
  },

  fone(value) {
    if (value == '' || value == ' ' || value.length < 14) {
      return false;
    }

    value = value.replace(/\D/g, '');

    if (!(value.length >= 10 && value.length <= 11)) return false;

    if (value.length == 11 && parseInt(value.substring(2, 3)) != 9) return false;

    for (var n = 0; n < 10; n++) {
      if (value == new Array(11).join(n) || value == new Array(12).join(n)) return false;
    }

    var DDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
      21, 22, 24, 27, 28, 31, 32, 33, 34,
      35, 37, 38, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 51, 53, 54, 55, 61, 62,
      64, 63, 65, 66, 67, 68, 69, 71, 73,
      74, 75, 77, 79, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 91, 92, 93, 94, 95,
      96, 97, 98, 99];

    if (DDD.indexOf(parseInt(value.substring(0, 2))) == -1) return false;

    if (new Date().getFullYear() < 2017) return true;
    if (value.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(value.substring(2, 3))) == -1) return false;

    return true;
  },

  cep(value) {
    if (value == '' || value == ' ' || value.length < 9) {
      return false;
    }
    return true;
  }
}