
  function Base() {
      this.a = 3;
  }

  Base.prototype = {
      constructor: Base,
      b: () => console.log('b from aprent')
  }

  //Base.prototype.b = () => console.log('b from aprent');

  function Inherited() {
      Base.call(this);
    this.c = 'Inherited';
  }

  Inherited.prototype.bc = 'from Inherited prototye';

  Base.sta = 'static';

  Object.setPrototypeOf(Inherited.prototype, Base.prototype);
  Object.setPrototypeOf(Inherited, Base);

  console.log(Inherited.prototype);
  console.log(Base.prototype);

  const c = new Inherited();
  console.log(c);

  /*for (const key in c) {
  console.log(key);
  }

  const {a, b, c: cprop} = c;
  console.log(a);*/

