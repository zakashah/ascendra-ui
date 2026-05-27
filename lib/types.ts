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

export type FormComplexity = 'Simple' | 'Medium' | 'Complex';

export type FormMeta = {
  slug: string;
  name: string;
  description: string;
  domain: string;
  complexity: FormComplexity;
  layout: string;
  components: string[];
  hasEditMode?: boolean;
};

export type DialogType = 'Confirmation' | 'Destructive' | 'Input' | 'Alert' | 'Feature';

export type DialogMeta = {
  slug: string;
  name: string;
  description: string;
  type: DialogType;
  components: string[];
};

export type SheetType = 'Detail' | 'Preview' | 'Activity' | 'Settings';

export type SheetMeta = {
  slug: string;
  name: string;
  description: string;
  type: SheetType;
  domain: string;
  components: string[];
};
