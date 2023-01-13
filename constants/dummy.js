import assets from "./assets";

const RESTData = [
  {
    id: "restaurant-01",
    name: "Mozzeria DC",
    neighborhood: "Dupont Circle ∙  0.2 mi",
    eventsNearby: 3,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.restaurant01,
    specials: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "restaurant-02",
    name: "Cane on H st",
    neighborhood: "H St Corridor ∙ 0.3 mi",
    eventsNearby: 6,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.restaurant02,
    specials: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "restaurant-03",
    name: "Hook Hall",
    neighborhood: "NoMa ∙ 245 ft",
    eventsNearby: 3,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.restaurant03,
    specials: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "restaurant-04",
    name: "Nifty restaurant",
    neighborhood: "Putri Intan",
    eventsNearby: 2,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur.",
    image: assets.restaurant04,
    specials: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "restaurant-05",
    name: "HalfSmoke",
    neighborhood: "Shaw ∙ 0.2 mi",
    eventsNearby: 0,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural.",
    image: assets.restaurant05,
    bids: [
      {
        id: "BID-51",
        name: "Jessica Tan",
        price: 10.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "restaurant-06",
    name: "Lydia on H st",
    neighborhood: "H St Corridor ∙ 0.3 mi",
    eventsNearby: 6,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis.",
    image: assets.restaurant06,
    specials: [
      {
        id: "BID-61",
        name: "Jessica Tan",
        price: 20.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-62",
        name: "Jennifer Sia",
        price: 20.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-63",
        name: "Rosie Wong",
        price: 20.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-64",
        name: "Siti Nurhaliza",
        price: 21.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-65",
        name: "Kaitlyn Lee",
        price: 7.25,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "restaurant-07",
    name: "Alero Restauarant",
    neighborhood: "U St Corridor ∙ 0.1 mi",
    eventsNearby: 6,
    description:
      "The action painter abstract expressionists were directly influenced by automatism. Pollock channelled this into producing gestural. Lorem ipsum dolor sit amet consectetur adipiscing elit consequat accumsan sapien, lectus convallis malesuada odio curae habitasse dignissim nascetur. Nulla sed velit erat vitae leo sem inceptos diam fames arcu hendrerit, quis ultrices in eleifend posuere ipsum conubia porttitor felis. Ullamcorper platea penatibus ornare egestas nulla ligula hendrerit nisl suscipit sociosqu maximus, tincidunt aptent habitant purus pharetra ultrices dapibus laoreet nisi lacinia. Porta malesuada netus vel sapien conubia porttitor aliquam ut pretium ante litora molestie senectus magna egestas sociosqu, eget aliquet fames pharetra felis posuere varius fringilla quisque in arcu montes eu ullamcorper.",
    image: assets.restaurant07,
    specials: [],
  },
];

export { RESTData };