import Race from './Race';

export default class Elf extends Race {
  private static instances = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Elf.instances += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
