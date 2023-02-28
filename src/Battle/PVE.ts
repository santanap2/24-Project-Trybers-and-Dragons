import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _character: Fighter,
    private _enemies: SimpleFighter[] | Fighter[],
  ) {
    super(_character);
  }

  public get character() { return this._character; }
  public get enemies() { return this._enemies; }

  fight(): number {
    while (
      this._character.lifePoints !== -1
      && this._enemies.every((one) => one.lifePoints !== -1)
    ) {
      this._enemies.forEach((item) => this._character.attack(item));
      this._enemies.forEach((item) => item.attack(this._character));
    }

    return this._character.lifePoints === -1 ? -1 : 1;
  }
}
