export default class Airport {
  constructor(name, code) {
    // Type validation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Store in underscore attributes
    this._name = name;
    this._code = code;
  }

  // Default string description
  toString() {
    return this._code;
  }
}
