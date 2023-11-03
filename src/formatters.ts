import {
  XmlPropertiesMapNode,
  XmlPropertiesMapNodeItems,
} from "./xml-properties-map";

/**
 * Processes a single XML item based on the provided properties map.
 *
 * @param prop - The property to process.
 * @param map - The map of properties to use for processing.
 * @param root - The root object to add the processed property to.
 *
 * @returns The processed property.
 */
function xmlSingleItemProcessor<T = unknown>(
  prop: T,
  map: XmlPropertiesMapNode,
  root: Record<string, string>,
) {
  if (map.xmlFormatter) {
    return map.xmlFormatter(prop, map.items, root);
  }

  return prop;
}

/**
 * Formats an object into an XML object based on a given map of properties.
 *
 * @param contents - The object to format.
 * @param map - The map of properties to use for formatting.
 *
 * @returns The formatted XML object.
 */
export function xmlObjectFormatter<T extends Record<string, unknown>>(
  contents: T,
  map: XmlPropertiesMapNodeItems,
): Record<string, any> {
  const item: Record<string, any> = {};

  for (const [mapKey, mapValue] of Object.entries(map)) {
    const content = contents[mapKey];
    if (content !== undefined) {
      const result =
        Array.isArray(content) && mapValue.allowRepeat
          ? content.map((s: any) => xmlSingleItemProcessor(s, mapValue, item))
          : xmlSingleItemProcessor(content, mapValue, item);

      if (mapValue.xmlName && result !== undefined) {
        item[mapValue.xmlName] = result;
      }
    }
  }

  return item;
}
