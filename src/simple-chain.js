const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (value === undefined){
      this.array.push('(  )')
    } else {
      this.array.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position <= this.array.length && position > 0 ){
      this.array.splice(position - 1, 1);
      return this;
    } else {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
