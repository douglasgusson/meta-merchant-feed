import {
  AgeGroup,
  Availability,
  Color,
  Condition,
  CustomLabels,
  CustomNumbers,
  DateRange,
  Description,
  Gender,
  Integer,
  Link,
  Material,
  Price,
  Product,
  RichTextDescription,
  Shipping,
  Status,
  Title,
  ValueWithUnit,
  Video,
} from "./models";

export type XmlPropertiesMapNode = {
  xmlName?: string;
  xmlFormatter?: (...value: any) => Record<string, string> | string | void;
  allowRepeat?: boolean;
  items?: Record<string, XmlPropertiesMapNode>;
};

export type XmlPropertiesMapNodeItems = XmlPropertiesMapNode["items"];

export const xmlPropertiesMap: Record<keyof Product, XmlPropertiesMapNode> = {
  id: { xmlName: "g:id" },
  title: { xmlName: "g:title", xmlFormatter: Title.formatter },
  description: {
    xmlName: "g:description",
    xmlFormatter: Description.formatter,
  },
  availability: {
    xmlName: "g:availability",
    xmlFormatter: Availability.formatter,
  },
  condition: { xmlName: "g:condition", xmlFormatter: Condition.formatter },
  price: { xmlName: "g:price", xmlFormatter: Price.formatter },
  link: { xmlName: "g:link", xmlFormatter: Link.formatter },
  imageLink: { xmlName: "g:image_link", xmlFormatter: Link.formatter },
  brand: { xmlName: "g:brand" },
  quantityToSellOnFacebook: {
    xmlName: "g:quantity_to_sell_on_facebook",
    xmlFormatter: Integer.formatter,
  },
  size: { xmlName: "g:size" },
  salePrice: { xmlName: "g:sale_price", xmlFormatter: Price.formatter },
  salePriceEffectiveDate: {
    xmlName: "g:sale_price_effective_date",
    xmlFormatter: DateRange.formatter,
  },
  itemGroupId: { xmlName: "item_group_id" },
  status: { xmlName: "status", xmlFormatter: Status.formatter },
  additionalImageLinks: {
    xmlName: "g:additional_image_link",
    xmlFormatter: Link.formatter,
    allowRepeat: true,
  },
  googleProductCategory: { xmlName: "g:google_product_category" },
  fbProductCategory: { xmlName: "fb_product_category" },
  color: { xmlName: "g:color", xmlFormatter: Color.formatter },
  gender: { xmlName: "g:gender", xmlFormatter: Gender.formatter },
  ageGroup: { xmlName: "g:age_group", xmlFormatter: AgeGroup.formatter },
  material: { xmlName: "g:material", xmlFormatter: Material.formatter },
  pattern: { xmlName: "g:pattern", xmlFormatter: Material.formatter },
  richTextDescription: {
    xmlName: "rich_text_description",
    xmlFormatter: RichTextDescription.formatter,
  },
  video: { xmlName: "video", xmlFormatter: Video.formatter },
  shipping: { xmlName: "g:shipping", xmlFormatter: Shipping.formatter },
  shippingWeight: {
    xmlName: "g:shipping_weight",
    xmlFormatter: ValueWithUnit.formatter,
  },
  customLabels: { xmlFormatter: CustomLabels.formatter },
  customNumbers: { xmlFormatter: CustomNumbers.formatter },
};
