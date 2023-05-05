export type CardProps = {
  name: string;
  image?: string
  id: number;
};

export class Item implements CardProps {
  constructor(
    readonly name: CardProps['name'],
    readonly id: CardProps['id'],
    readonly image: CardProps['image']
  ) { }

  static fromObject(plainItem: CardProps) {
    return new Item(plainItem.name, plainItem.id, plainItem.image);
  }

  toObject(): CardProps {
    return {
      image: this.image,
      id: this.id,
      name: this.name,
    };
  }
}
