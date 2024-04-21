class City {
  constructor(id, name, title, distance, image, dec) {
      this.id = id;
      this.name = name;
      this.title = title;
      this.distance = distance;
      this.image = image;
      this.dec = dec;
  }
}

class Vehicle {
  constructor(id, kind, range, count, image) {
      this.id = id;
      this.kind = kind;
      this.range = range;
      this.count = count;
      this.image = image;
  }
}

class Criminal {
  constructor(id, name, image, dec) {
      this.id = id;
      this.name = name;
      this.dec = dec;
      this.image = image;
  }
}

class Cops {
  constructor(id, name, image) {
      this.id = id;
      this.name = name;
      this.image = image;
  }
}
module.exports = { City, Vehicle, Criminal, Cops};
