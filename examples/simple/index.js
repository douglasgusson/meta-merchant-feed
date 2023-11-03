import { FeedBuilder } from "meta-merchant-feed";

const feedBuilder = new FeedBuilder();

feedBuilder.withTitle("My Feed");
feedBuilder.withLink("https://example.com");
feedBuilder.withDescription("This is my feed");

feedBuilder.withProduct({
  id: "DB_1",
  title: "Dog Bowl In Blue",
  description: "Solid plastic Dog Bowl in marine blue color",
  link: "http://www.example.com/bowls/db-1.html",
  imageLink: "http://images.example.com/DB_1.png",
  availability: "in stock",
  price: {
    currency: "GBP",
    value: 9.99,
  },
  shipping: {
    country: "UK",
    service: "Standard",
    price: {
      currency: "GBP",
      value: 4.95,
    },
  },
  googleProductCategory: "Animals > Pet Supplies",
  customLabels: ["Made in Waterford, IE"],
  // Other fields
});

const xml = feedBuilder.buildXml();

console.log(xml);
