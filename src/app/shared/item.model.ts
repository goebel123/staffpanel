export class Item {

  constructor(
    public ean: number,
    public artNr: string,
    public name: string,
    public amount: number,
    public orderedAmount: number,
    public delivery: string,
    public marked: boolean) {}

  /**
   * amount is only for kollis (lieferant in wawi) "Kugelschreiber blau 5er Pack"
   */

}
