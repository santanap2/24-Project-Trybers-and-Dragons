import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _character1: Fighter,
    private _character2: Fighter,
  ) {
    super(_character1);
  }
  
  public get character1() { return this._character1; }
  public get character2() { return this._character2; }

  fight(): number {
    while (
      this._character1.lifePoints !== -1
      && this._character2.lifePoints !== -1
    ) {
      this._character1.attack(this._character2);
      this._character2.attack(this._character1);
    }

    return this._character1.lifePoints === -1 ? -1 : 1;
  }
}
