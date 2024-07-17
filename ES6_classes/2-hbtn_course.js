export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArrayOfStrings(students, 'students');
  }

  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  _validateArrayOfStrings(value, attribute) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
    return value;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    this._name = this._validateString(value, 'name');
  }

  set length(value) {
    this._length = this._validateNumber(value, 'length');
  }

  set students(value) {
    this._students = this._validateArrayOfStrings(value, 'students');
  }
}
