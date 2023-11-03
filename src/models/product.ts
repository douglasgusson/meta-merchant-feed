import { AgeGroup } from "./age-group";
import { Availability } from "./availability";
import { Color } from "./color";
import { Condition } from "./condition";
import { CustomLabels } from "./custom-labels";
import { CustomNumbers } from "./custom-numbers";
import { DateRange } from "./date-range";
import { Description } from "./description";
import { Gender } from "./gender";
import { Integer } from "./integer";
import { Link } from "./link";
import { Material } from "./material";
import { Pattern } from "./pattern";
import { Price } from "./price";
import { RichTextDescription } from "./rich-text-description";
import { Shipping } from "./shipping";
import { Status } from "./status";
import { Title } from "./title";
import { ValueWithUnit } from "./value-with-unit";
import { Video } from "./video";

export type Product = {
  id?: string;
  title?: Title;
  description?: Description;
  availability?: Availability;
  condition?: Condition;
  price?: Price;
  link?: Link;
  imageLink?: Link;
  brand?: string;
  quantityToSellOnFacebook?: Integer;
  size?: string;
  salePrice?: Price;
  salePriceEffectiveDate?: DateRange;
  itemGroupId?: string;
  status?: Status;
  additionalImageLinks?: Link[];
  googleProductCategory?: string;
  fbProductCategory?: string;
  color?: Color;
  gender?: Gender;
  ageGroup?: AgeGroup;
  material?: Material;
  pattern?: Pattern;
  richTextDescription?: RichTextDescription;
  video?: Video[];
  shipping?: Shipping | Shipping[];
  shippingWeight?: ValueWithUnit;
  customLabels?: CustomLabels;
  customNumbers?: CustomNumbers;
};