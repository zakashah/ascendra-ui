export type PropDef = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export type ComponentMeta = {
  slug: string;
  name: string;
  description: string;
  importPath: string;
  importNames: string[];
  props?: PropDef[];
};

export type NavItem = {
  name: string;
  slug: string;
};

export type NavCategory = {
  title: string;
  items: NavItem[];
};
