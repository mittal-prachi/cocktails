import { Filter } from './filter';

export interface FilterNode {
  name: string;
  selected: boolean;
  group?: Filter;
  expanded?: boolean;
  children?: FilterNode[];
}
