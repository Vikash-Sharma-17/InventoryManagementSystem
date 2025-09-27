
export const UOM_OPTIONS = [
  'COUNT',
  'KG.',
  'LTR.',
  'PKT.',
  'UNIT',
  'BOX',
  'ROLL',
  'SET',
  'G.',
] as const;

export type Uom = typeof UOM_OPTIONS[number];

export interface InventoryItem {
  id: number;
  name: string;
  uom: Uom;
  opening: number | string;
  receiving: number | string;
  closing: number | string;
}

export type ItemKey = keyof Omit<InventoryItem, 'id'>;

export interface InventoryCategory {
  category: string;
  items: InventoryItem[];
}
