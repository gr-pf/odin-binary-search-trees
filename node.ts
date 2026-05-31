export class Node {
  constructor(
    public data: number,
    public left: Node | null = null,
    public right: Node | null = null,
  ) {}
}
