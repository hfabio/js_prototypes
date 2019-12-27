module.exports = (() => {
  /**
 * to clone an object.
 * @memberof Object
 * @example <caption>Example usage of obj.clone()</caption>
 * const obj_b = obja.clone();
 * @return {Object} Returns an object clone
 */
  Object.prototype.clone = function () {
    return JSON.parse(JSON.stringify(this))
  }
  /**
   * to get all keys from object.
   * @memberof Object
   * @example <caption>Example usage of obj.keys()</caption>
   * //returns something like ['name', 'height', 'weight']
   * const keys = person.keys();
   * @return {array} Returns an array with object keys
   */
  Object.prototype.keys = function () {
    return Object.keys(this);
  }
  /**
   * to get all values from object.
   * @memberof Object
   * @example <caption>Example usage of obj.values()</caption>
   * //returns something like ['Helton', 1.76, 95]
   * const values = person.values();
   * @return {array} Returns an array with object values
   */
  Object.prototype.values = function () {
    return Object.keys(this).map(e => this[e]);
  }
  /**
   * to verify if this object contain this key
   * @memberof Object
   * @param {string} key - The key to be verified in hashMap
   * @example <caption>Example usage of obj.hasKey()</caption>
   * //returns a boolean with true value if this object has this key and false if dont
   * person.hasKey('tail');
   * @return {boolean} Returns an array with object values
   */
  Object.prototype.hasKey = function (key) {
    return (this[key]) ? true : false;
  }
  /**
   * to set a value to object as an java hashMap
   * @memberof Object
   * @param {string} key - The key to set in hashMap
   * @param {any} value - The value to be set in that key
   * @example <caption>Example usage of obj.set()</caption>
   * //returns undefined
   *  myHashMap.set(1231, {id: 1231, name: 'ashwagandha', recipe: 'capsules'})
   * @return {undefined} This method has no return
   */
  Object.prototype.set = function (key, value) {
    this[key] = value;
  }
  /**
   * to return a unidirecional difference list (what we have in a and dont have in b)
   * @memberof Array
   * @param {array} array
   * @example <caption>Example usage of obj.diff()</caption>
   * //returns an array with the difference from a to b (in this case: [ 1, 2, 3 ])
   *  const a = [1,2,3,4,5];
   *  const b = [4,5,6,7,8];
   *  a.diff(b);
   * @return {array} Array with entries in a not contained in b
   */
  Array.prototype.diff = function (a) {
    return this.filter(function (i) { return a.indexOf(i) < 0; });
  };
  /**
   * to return a bidimentional difference list (what we have in one array and not in another)
   * @memberof Array
   * @param {array} array
   * @example <caption>Example usage of obj.diff()</caption>
   * //returns an array with the difference from a to b (in this case: [ 1, 2, 3, 6, 7, 8 ])
   *  const a = [1,2,3,4,5];
   *  const b = [4,5,6,7,8];
   *  a.diffList(b);
   * @return {array} Array with entries contained in only one array and not in another
   */
  Array.prototype.diffList = function (a) {
    const b = this;
    return [...b.filter(function (i) { return a.indexOf(i) < 0; }), ...a.filter(function (i) { return b.indexOf(i) < 0; })];
  };
  /**
   * to transform an array to a hashMap
   * @memberof Array
   * @param {string} field - The field to transform the array in hashmap
   * @example <caption>Example usage of obj.toHashMap()</caption>
   * //returns an hashMap from object array (in this case: { 10: { id: 10, nome: "pedro" },20: { id: 20, nome: "Helton" }, 50: { id: 50, nome: "Luana" } })
   *  const data = [{id: 10, nome:"pedro"}, {id: 20, nome:"Helton"}, {id: 50, nome:"Luana"}]
   *  data.toHashMap('id')
   * @return {array} Array with entries contained in only one array and not in another
   */
  Array.prototype.toHashMap = function (field) {
    const retorno = {};
    this.forEach(e => retorno[e[field]] = e);
    return retorno;
  };
  /**
   * group data in array if is a simple data, or by key if is an object
   * @memberof Array
   * @param {string} field - The field to group the array, empty if its a simples data type array
   * @example <caption>Example usage of obj.group()</caption>
   * //returns an grouped array from object array (in this case: [{ id: 10, nome: "pedro" }, { id: 20, nome: "Helton" }, { id: 50, nome: "Luana" }])
   *  const data = [{id: 10, nome:"pedro"}, {id: 20, nome:"Helton"}, {id: 50, nome:"Luana"}, {id: 12, nome: "Helton"}]
   *  data..group('nome')
   * @return {array} Array with entries grouped
   */
  Array.prototype.group = function (field = '') {
    if (field === '') {
      return Array.from(new Set(this));
    } else {
      const return_object = {};
      const ids = Array.from(new Set(this.map(e => e[field])));
      for (const i of ids) {
        return_object[i] = this.find(e => e[field] === i);
      }
      return Object.keys(return_object).map(e => return_object[e]);
    }
  }
});
