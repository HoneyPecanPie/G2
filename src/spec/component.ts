import { Primitive } from '../runtime';
import { UsePrefix } from './utils';

export type Component =
  | TitleComponent
  | AxisComponent
  | LegendComponent
  | ScrollbarComponent
  | SliderComponent
  | TooltipComponent;

export type TitleComponent = {
  /**
   * Height of title, default is 36.
   */
  size?: number;
  /**
   * Text of title.
   */
  title?: string;
  /**
   * Text of subtitle.
   */
  subtitle?: string | null;
  /**
   * Styles.
   */
  style?: UsePrefix<'title' | 'subtitle', Record<string, any>> & {
    /**
     * Align method for title.
     */
    align?: 'left' | 'center' | 'right';
    /**
     * The vertical spacing between title and subtitle, default is 2.
     */
    spacing?: number;
  };
};

export type AxisComponent = {
  tickCount?: number;
  labelFormatter?: any;
  tickFilter?: any;
  title?: any;
  state?: Partial<
    Record<
      'active' | 'selected' | 'inactive' | 'unselected',
      Record<string, any>
    >
  >;
  [key: string]: any; // @todo
};

export type LegendComponent = {
  tickCount?: number;
  labelFormatter?: any;
  tickFilter?: any;
  title?: any;
  position?: string;
  state?: Partial<
    Record<
      'active' | 'selected' | 'inactive' | 'unselected',
      Record<string, any>
    >
  >;
  [key: string]: any; // @todo
};

export type SliderComponent = any; // @todo

export type ScrollbarComponent = any; // @todo

export type TooltipComponent =
  | TooltipItem
  | TooltipItem[]
  | {
      title?: Encodeable<TooltipTitle>;
      items?: TooltipItem[] | null | false;
      [key: string]: any;
    }
  | null;

export type TooltipTitle =
  | string
  | { field?: string; channel?: string; value?: string };

export type TooltipItem =
  | string
  | {
      name?: string;
      color?: string;
      channel?: string;
      field?: string;
      value?: string;
      valueFormatter?: string | ((d: any) => string);
    }
  | Encodeable<Primitive>
  | Encodeable<TooltipItemValue>;

export type TooltipItemValue = {
  name?: string;
  color?: string;
  value?: Primitive;
};

export type Encodeable<T> =
  | T
  | ((d: any, index?: number, data?: any[], column?: any) => T);