import Race from './Race';

export default class Orc extends Race {
  private static instances = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Orc.instances += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
