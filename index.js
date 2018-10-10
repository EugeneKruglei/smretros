class Sorter {
  constructor() {
      this.elem = [];
      this.reverse = (left, right) => right - left;
  }

  add(element) {
      this.elem.push(element);
  }

  at(index) {
      return this.elem[index];
  }

  get length() {
      return this.elem.length;
  }

  toArray() {
      return this.elem;
  }

  sort(indices) {
      let arr = [];

      for ( let i in indices ) {
          arr.push( this.elem[ indices[i] ] );
      }

      arr.sort( this.reverse );
      indices.sort( this.reverse );

      let number = 0;
      for ( const y in indices ) {
          this.elem[indices[y]] = arr[number];
          number++;
      }

  }

  setComparator(compareFunction) {
      this.reverse = ;
  }
}

module.exports = Sorter;