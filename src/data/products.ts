export type ProductCategory =
  | 'dry-fruits'
  | 'nuts'
  | 'dried-fruits'
  | 'desi-products'
  | 'balochistan-specials';

export type ProductStatus = 'available' | 'coming-soon';

export interface Product {
  id: string;
  slug: string;
  name: string;
  urduName: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  benefits: string[];
  characteristics: string[];
  sizes: string[];
  image: string;
  status: ProductStatus;
  bestSeller?: boolean;
}

export const categoryLabels: Record<ProductCategory, string> = {
  'dry-fruits': 'Dry Fruits',
  nuts: 'Nuts',
  'dried-fruits': 'Dried Fruits',
  'desi-products': 'Desi Products',
  'balochistan-specials': 'Balochistan Specials',
};

export const categorySlugs: Record<ProductCategory, string> = {
  'dry-fruits': 'dry-fruits',
  nuts: 'nuts',
  'dried-fruits': 'dried-fruits',
  'desi-products': 'desi-products',
  'balochistan-specials': 'balochistan-specials',
};

export const WHATSAPP_NUMBER = '923333089753';
export const WHATSAPP_DISPLAY = '+92 333 3089753';
export const MAPS_QUERY = 'Gandawah Main Bazar Qazi Market Balochistan Pakistan';
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildProductWhatsAppLink(product: Product, quantity?: number): string {
  let msg = `Assalam-o-Alaikum, I want to order ${product.name} (${product.urduName}) from Balochistan Dry Fruit. Please share price, available quantity and delivery details.`;
  if (quantity && quantity > 1) {
    msg += `\n\nQuantity: ${quantity}`;
  }
  return buildWhatsAppLink(msg);
}

export const products: Product[] = [
  // ===== DRY FRUITS / NUTS =====
  {
    id: '1',
    slug: 'almonds',
    name: 'Premium Almonds',
    urduName: 'Badam',
    category: 'dry-fruits',
    shortDescription: 'Carefully selected premium almonds with a naturally rich taste and satisfying crunch.',
    description:
      'Carefully selected premium almonds with a naturally rich taste and satisfying crunch. Sourced from trusted growers, these almonds are chosen for their freshness, size, and consistent quality. A versatile dry fruit enjoyed as a snack or used in a variety of dishes.',
    benefits: [
      'Naturally rich in plant-based protein',
      'Good source of dietary fiber',
      'Contains healthy fats',
      'A satisfying and filling snack',
    ],
    characteristics: [
      'Carefully selected for size and freshness',
      'Naturally rich, nutty flavor',
      'Satisfying crunch',
      'Versatile for snacking and cooking',
    ],
    sizes: ['250g', '500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/6003907/pexels-photo-6003907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
    bestSeller: true,
  },
  {
    id: '2',
    slug: 'walnuts',
    name: 'Walnuts',
    urduName: 'Akhrot',
    category: 'dry-fruits',
    shortDescription: 'Whole walnuts with a rich, earthy flavor and satisfying texture.',
    description:
      'Whole walnuts carefully selected for quality and freshness. Known for their distinctive earthy flavor and satisfying texture, these walnuts are perfect for snacking, baking, or adding to traditional dishes.',
    benefits: [
      'Good source of omega-3 fatty acids',
      'Contains protein and fiber',
      'Naturally rich in antioxidants',
      'A versatile ingredient for cooking and baking',
    ],
    characteristics: [
      'Whole, premium-grade walnuts',
      'Rich, earthy flavor profile',
      'Freshly selected for quality',
      'Suitable for snacking and cooking',
    ],
    sizes: ['250g', '500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/30741210/pexels-photo-30741210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
    bestSeller: true,
  },
  {
    id: '3',
    slug: 'cashews',
    name: 'Cashews',
    urduName: 'Kaju',
    category: 'dry-fruits',
    shortDescription: 'Creamy, premium cashews with a smooth and buttery texture.',
    description:
      'Premium cashews selected for their creamy texture and naturally sweet, buttery flavor. These cashews are a popular choice for snacking and are also widely used in both sweet and savory dishes.',
    benefits: [
      'Good source of healthy fats',
      'Contains minerals like zinc and magnesium',
      'Creamy, satisfying texture',
      'Versatile for snacking and cooking',
    ],
    characteristics: [
      'Creamy, buttery texture',
      'Naturally sweet flavor',
      'Carefully graded for size',
      'Freshly packed for quality',
    ],
    sizes: ['250g', '500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/33653865/pexels-photo-33653865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '4',
    slug: 'pistachios',
    name: 'Pistachios',
    urduName: 'Pista',
    category: 'dry-fruits',
    shortDescription: 'Premium pistachios with a distinctive flavor and vibrant green color.',
    description:
      'Premium pistachios known for their distinctive flavor and vibrant green color. Carefully selected for quality, these pistachios are a popular choice for snacking, desserts, and traditional sweets.',
    benefits: [
      'Good source of protein and fiber',
      'Contains healthy fats',
      'Naturally rich in antioxidants',
      'A popular and satisfying snack',
    ],
    characteristics: [
      'Distinctive, rich flavor',
      'Vibrant green color',
      'Carefully selected for quality',
      'Ideal for snacking and desserts',
    ],
    sizes: ['250g', '500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
    bestSeller: true,
  },
  {
    id: '5',
    slug: 'pine-nuts-chilgoza',
    name: 'Pine Nuts',
    urduName: 'Chilgoza',
    category: 'dry-fruits',
    shortDescription: 'Premium chilgoza pine nuts with a delicate, buttery flavor.',
    description:
      'Premium chilgoza (pine nuts) known for their delicate, buttery flavor and soft texture. A prized dry fruit in Pakistani culture, chilgoza is often enjoyed on special occasions and used in traditional dishes.',
    benefits: [
      'Good source of healthy fats',
      'Contains protein and dietary fiber',
      'Delicate, buttery flavor',
      'A prized dry fruit in Pakistani culture',
    ],
    characteristics: [
      'Delicate, buttery taste',
      'Soft, premium texture',
      'Carefully selected for quality',
      'Popular for special occasions',
    ],
    sizes: ['100g', '250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/35704976/pexels-photo-35704976.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
    bestSeller: true,
  },
  {
    id: '6',
    slug: 'hazelnuts',
    name: 'Hazelnuts',
    urduName: 'Bundak',
    category: 'dry-fruits',
    shortDescription: 'Premium hazelnuts with a rich, nutty flavor and satisfying crunch.',
    description:
      'Premium hazelnuts selected for their rich, nutty flavor and satisfying crunch. These hazelnuts are versatile and can be enjoyed as a snack or used in baking, desserts, and savory dishes.',
    benefits: [
      'Good source of healthy fats',
      'Contains vitamin E and minerals',
      'Rich, nutty flavor',
      'Versatile for snacking and baking',
    ],
    characteristics: [
      'Rich, nutty flavor profile',
      'Satisfying crunch',
      'Carefully selected for freshness',
      'Suitable for snacking and cooking',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/939955/pexels-photo-939955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '7',
    slug: 'raisins',
    name: 'Raisins',
    urduName: 'Kishmish',
    category: 'dried-fruits',
    shortDescription: 'Naturally sweet raisins, carefully dried for maximum flavor.',
    description:
      'Naturally sweet raisins, carefully dried to preserve their flavor and texture. A versatile dried fruit enjoyed as a snack, used in baking, or added to traditional dishes and desserts.',
    benefits: [
      'Naturally sweet with no added sugar',
      'Good source of dietary fiber',
      'Contains natural antioxidants',
      'A versatile ingredient for sweet and savory dishes',
    ],
    characteristics: [
      'Naturally sweet flavor',
      'Carefully dried for quality',
      'Soft, chewy texture',
      'Versatile for snacking and cooking',
    ],
    sizes: ['250g', '500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/35166629/pexels-photo-35166629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '8',
    slug: 'dates',
    name: 'Premium Dates',
    urduName: 'Khajoor',
    category: 'dried-fruits',
    shortDescription: 'Premium quality dates, naturally sweet and soft.',
    description:
      'Premium quality dates, naturally sweet and soft. Dates are a staple in Pakistani households, enjoyed during Ramadan and throughout the year. These dates are carefully selected for freshness and quality.',
    benefits: [
      'Naturally sweet energy source',
      'Good source of dietary fiber',
      'Contains natural minerals',
      'A traditional and popular food',
    ],
    characteristics: [
      'Naturally sweet and soft',
      'Carefully selected for quality',
      'Popular during Ramadan and year-round',
      'Versatile for snacking and desserts',
    ],
    sizes: ['250g', '500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/17877978/pexels-photo-17877978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
    bestSeller: true,
  },
  {
    id: '9',
    slug: 'dried-figs',
    name: 'Dried Figs',
    urduName: 'Anjeer',
    category: 'dried-fruits',
    shortDescription: 'Naturally sweet dried figs with a soft, chewy texture.',
    description:
      'Naturally sweet dried figs with a soft, chewy texture and rich flavor. A popular dried fruit enjoyed as a snack or used in desserts and traditional recipes.',
    benefits: [
      'Good source of dietary fiber',
      'Naturally sweet with no added sugar',
      'Contains natural minerals',
      'A satisfying and chewy snack',
    ],
    characteristics: [
      'Naturally sweet flavor',
      'Soft, chewy texture',
      'Carefully dried for quality',
      'Versatile for snacking and desserts',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/39059584/pexels-photo-39059584.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '10',
    slug: 'dried-apricots',
    name: 'Dried Apricots',
    urduName: 'Khubani',
    category: 'dried-fruits',
    shortDescription: 'Vibrant dried apricots with a naturally sweet and tangy flavor.',
    description:
      'Vibrant dried apricots with a naturally sweet and tangy flavor. These apricots are carefully dried to preserve their color and taste, making them a popular snack and ingredient in desserts.',
    benefits: [
      'Good source of dietary fiber',
      'Naturally sweet and tangy',
      'Contains natural antioxidants',
      'A versatile dried fruit',
    ],
    characteristics: [
      'Vibrant color and flavor',
      'Naturally sweet and tangy',
      'Carefully dried for quality',
      'Popular for snacking and desserts',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/38571526/pexels-photo-38571526.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '11',
    slug: 'prunes',
    name: 'Prunes',
    urduName: 'Aalo Bukhara',
    category: 'dried-fruits',
    shortDescription: 'Naturally sweet prunes with a soft, rich texture.',
    description:
      'Naturally sweet prunes with a soft, rich texture. Prunes are dried plums known for their deep flavor and are enjoyed as a snack or used in cooking and baking.',
    benefits: [
      'Good source of dietary fiber',
      'Naturally sweet with no added sugar',
      'Deep, rich flavor',
      'A versatile dried fruit',
    ],
    characteristics: [
      'Naturally sweet flavor',
      'Soft, rich texture',
      'Carefully dried for quality',
      'Suitable for snacking and cooking',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/7111409/pexels-photo-7111409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '12',
    slug: 'dried-cranberries',
    name: 'Dried Cranberries',
    urduName: 'Dried Cranberries',
    category: 'dried-fruits',
    shortDescription: 'Tangy-sweet dried cranberries, perfect for snacking and baking.',
    description:
      'Tangy-sweet dried cranberries, perfect for snacking, baking, or adding to trail mix. These cranberries are carefully dried to preserve their vibrant flavor and color.',
    benefits: [
      'Tangy-sweet flavor',
      'Good source of dietary fiber',
      'Versatile for snacking and baking',
      'A colorful addition to trail mix',
    ],
    characteristics: [
      'Tangy-sweet flavor profile',
      'Vibrant color',
      'Carefully dried for quality',
      'Ideal for snacking and baking',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/6004721/pexels-photo-6004721.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '13',
    slug: 'dried-blueberries',
    name: 'Dried Blueberries',
    urduName: 'Dried Blueberries',
    category: 'dried-fruits',
    shortDescription: 'Naturally sweet dried blueberries, rich in flavor.',
    description:
      'Naturally sweet dried blueberries, rich in flavor and perfect for snacking, baking, or adding to cereals and desserts. Carefully dried to preserve their taste and nutritional value.',
    benefits: [
      'Naturally sweet flavor',
      'Good source of dietary fiber',
      'Contains natural antioxidants',
      'Versatile for snacking and baking',
    ],
    characteristics: [
      'Naturally sweet and rich',
      'Carefully dried for quality',
      'Ideal for cereals and desserts',
      'A versatile dried fruit',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/6507038/pexels-photo-6507038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '14',
    slug: 'dried-coconut',
    name: 'Dried Coconut',
    urduName: 'Nariyal',
    category: 'dried-fruits',
    shortDescription: 'Fresh dried coconut, versatile for cooking and snacking.',
    description:
      'Fresh dried coconut, versatile for cooking, baking, and snacking. A staple ingredient in many Pakistani and South Asian dishes, our dried coconut is selected for freshness and quality.',
    benefits: [
      'Versatile for cooking and baking',
      'Naturally rich in flavor',
      'A staple in South Asian cuisine',
      'Good source of dietary fiber',
    ],
    characteristics: [
      'Fresh, natural flavor',
      'Versatile for cooking and snacking',
      'Carefully selected for quality',
      'A staple ingredient in Pakistani dishes',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/5608054/pexels-photo-5608054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '15',
    slug: 'dried-mulberries',
    name: 'Dried Mulberries',
    urduName: 'Shehtoot',
    category: 'dried-fruits',
    shortDescription: 'Naturally sweet dried mulberries with a unique flavor.',
    description:
      'Naturally sweet dried mulberries with a unique, honey-like flavor. These mulberries are carefully dried to preserve their natural sweetness and are enjoyed as a snack or added to cereals and desserts.',
    benefits: [
      'Naturally sweet, honey-like flavor',
      'Good source of dietary fiber',
      'Contains natural antioxidants',
      'A unique and satisfying snack',
    ],
    characteristics: [
      'Unique, honey-like flavor',
      'Naturally sweet',
      'Carefully dried for quality',
      'Ideal for snacking and cereals',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/5425023/pexels-photo-5425023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '16',
    slug: 'dried-plums',
    name: 'Dried Plums',
    urduName: 'Aalo Bukhara',
    category: 'dried-fruits',
    shortDescription: 'Naturally sweet dried plums, rich and satisfying.',
    description:
      'Naturally sweet dried plums, rich and satisfying. These dried plums are carefully selected and dried to preserve their deep flavor and soft texture.',
    benefits: [
      'Naturally sweet flavor',
      'Good source of dietary fiber',
      'Rich and satisfying texture',
      'A versatile dried fruit',
    ],
    characteristics: [
      'Deep, rich flavor',
      'Soft, satisfying texture',
      'Carefully dried for quality',
      'Suitable for snacking and cooking',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/38934652/pexels-photo-38934652.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '17',
    slug: 'mixed-dry-fruits',
    name: 'Mixed Dry Fruits',
    urduName: 'Mixed Dry Fruits',
    category: 'dry-fruits',
    shortDescription: 'A premium assortment of assorted dry fruits in one pack.',
    description:
      'A premium assortment of assorted dry fruits, carefully combined for variety and flavor. This mix includes a selection of popular dry fruits, perfect for gifting or enjoying at home.',
    benefits: [
      'A variety of dry fruits in one pack',
      'Good source of dietary fiber',
      'A versatile and satisfying snack',
      'Ideal for gifting and sharing',
    ],
    characteristics: [
      'Premium assortment of dry fruits',
      'Carefully combined for variety',
      'Fresh and quality-selected',
      'Ideal for gifting and snacking',
    ],
    sizes: ['500g', '1kg', '2kg', '5kg'],
    image: 'https://images.pexels.com/photos/32281733/pexels-photo-32281733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
    bestSeller: true,
  },
  {
    id: '18',
    slug: 'premium-mixed-nuts',
    name: 'Premium Mixed Nuts',
    urduName: 'Mixed Nuts',
    category: 'nuts',
    shortDescription: 'A premium blend of assorted nuts for snacking and gifting.',
    description:
      'A premium blend of assorted nuts, carefully selected for quality and flavor. This mix includes almonds, cashews, pistachios, and other nuts, making it a versatile and satisfying snack.',
    benefits: [
      'A blend of premium nuts',
      'Good source of protein and healthy fats',
      'A satisfying and filling snack',
      'Ideal for gifting and sharing',
    ],
    characteristics: [
      'Premium blend of assorted nuts',
      'Carefully selected for quality',
      'Fresh and flavorful',
      'Ideal for snacking and gifting',
    ],
    sizes: ['500g', '1kg', '2kg', '5kg'],
    image: 'https://images.pexels.com/photos/38727565/pexels-photo-38727565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '19',
    slug: 'trail-mix',
    name: 'Trail Mix',
    urduName: 'Trail Mix',
    category: 'nuts',
    shortDescription: 'A nutritious blend of nuts and dried fruits for energy on the go.',
    description:
      'A nutritious blend of nuts and dried fruits, carefully combined for a balanced and satisfying snack. Perfect for energy on the go, hiking, or a quick and healthy bite.',
    benefits: [
      'A balanced blend of nuts and dried fruits',
      'Good source of energy',
      'Contains protein and dietary fiber',
      'A convenient and satisfying snack',
    ],
    characteristics: [
      'Balanced blend of nuts and fruits',
      'Carefully combined for flavor',
      'Fresh and quality-selected',
      'Ideal for energy on the go',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/11350074/pexels-photo-11350074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '20',
    slug: 'roasted-almonds',
    name: 'Roasted Almonds',
    urduName: 'Roasted Badam',
    category: 'nuts',
    shortDescription: 'Roasted almonds with an enhanced, rich flavor and crunch.',
    description:
      'Roasted almonds with an enhanced, rich flavor and satisfying crunch. These almonds are carefully roasted to bring out their natural flavor, making them a popular and delicious snack.',
    benefits: [
      'Enhanced, rich roasted flavor',
      'Satisfying crunch',
      'Good source of protein',
      'A popular and delicious snack',
    ],
    characteristics: [
      'Carefully roasted for flavor',
      'Enhanced, rich taste',
      'Satisfying crunch',
      'A popular snack choice',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/34533459/pexels-photo-34533459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '21',
    slug: 'roasted-cashews',
    name: 'Roasted Cashews',
    urduName: 'Roasted Kaju',
    category: 'nuts',
    shortDescription: 'Roasted cashews with a golden, crispy texture and rich flavor.',
    description:
      'Roasted cashews with a golden, crispy texture and rich flavor. These cashews are carefully roasted to enhance their natural sweetness and creamy texture.',
    benefits: [
      'Golden, crispy texture',
      'Enhanced, rich roasted flavor',
      'Good source of healthy fats',
      'A satisfying and delicious snack',
    ],
    characteristics: [
      'Carefully roasted for flavor',
      'Golden, crispy texture',
      'Enhanced, rich taste',
      'A popular snack choice',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/13682249/pexels-photo-13682249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '22',
    slug: 'salted-pistachios',
    name: 'Salted Pistachios',
    urduName: 'Salted Pista',
    category: 'nuts',
    shortDescription: 'Salted pistachios in shell with a savory, satisfying flavor.',
    description:
      'Salted pistachios in shell with a savory, satisfying flavor. These pistachios are lightly salted to enhance their natural taste, making them a popular snack for sharing.',
    benefits: [
      'Savory, satisfying flavor',
      'Lightly salted for taste',
      'Good source of protein',
      'A popular snack for sharing',
    ],
    characteristics: [
      'Lightly salted for flavor',
      'In-shell for freshness',
      'Savory, satisfying taste',
      'A popular snack choice',
    ],
    sizes: ['250g', '500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/4931455/pexels-photo-4931455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '23',
    slug: 'salted-almonds',
    name: 'Salted Almonds',
    urduName: 'Salted Badam',
    category: 'nuts',
    shortDescription: 'Salted almonds with a savory crunch and rich flavor.',
    description:
      'Salted almonds with a savory crunch and rich flavor. These almonds are lightly salted and roasted to enhance their natural taste, making them a satisfying and popular snack.',
    benefits: [
      'Savory, satisfying crunch',
      'Lightly salted for flavor',
      'Good source of protein',
      'A popular and satisfying snack',
    ],
    characteristics: [
      'Lightly salted and roasted',
      'Savory, rich flavor',
      'Satisfying crunch',
      'A popular snack choice',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/6660308/pexels-photo-6660308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },

  // ===== DESI PRODUCTS =====
  {
    id: '24',
    slug: 'pure-honey',
    name: 'Pure Honey',
    urduName: 'Shehad',
    category: 'desi-products',
    shortDescription: 'Natural, pure honey sourced from trusted beekeepers.',
    description:
      'Natural, pure honey sourced from trusted beekeepers. Our honey is unprocessed and retains its natural flavor and aroma. A staple in Pakistani households, honey is enjoyed with breakfast, in tea, or as a natural sweetener.',
    benefits: [
      'Natural and unprocessed',
      'A versatile natural sweetener',
      'Enjoyed with breakfast and tea',
      'A staple in Pakistani households',
    ],
    characteristics: [
      'Natural, pure honey',
      'Unprocessed and unfiltered',
      'Rich, natural flavor and aroma',
      'Sourced from trusted beekeepers',
    ],
    sizes: ['250g', '500g', '1kg', '2kg'],
    image: 'https://images.pexels.com/photos/4921856/pexels-photo-4921856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
    bestSeller: true,
  },
  {
    id: '25',
    slug: 'desi-ghee',
    name: 'Desi Ghee',
    urduName: 'Desi Ghee',
    category: 'desi-products',
    shortDescription: 'Traditional desi ghee with a rich aroma and golden color.',
    description:
      'Traditional desi ghee with a rich aroma and golden color. Made using traditional methods, our desi ghee is a staple in Pakistani cooking, used for parathas, sweets, and traditional dishes.',
    benefits: [
      'Rich, traditional aroma',
      'A staple in Pakistani cooking',
      'Made using traditional methods',
      'Versatile for cooking and sweets',
    ],
    characteristics: [
      'Traditional, rich aroma',
      'Golden, natural color',
      'Made using traditional methods',
      'A staple in Pakistani cuisine',
    ],
    sizes: ['500g', '1kg', '2kg', '5kg'],
    image: 'https://images.pexels.com/photos/7965940/pexels-photo-7965940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
    bestSeller: true,
  },
  {
    id: '26',
    slug: 'desi-makhan',
    name: 'Desi Makhan',
    urduName: 'Makhan',
    category: 'desi-products',
    shortDescription: 'Fresh, traditional butter made from pure milk.',
    description:
      'Fresh, traditional butter (makhan) made from pure milk. Known for its rich, creamy texture and natural flavor, desi makhan is a beloved traditional product enjoyed with parathas and traditional bread.',
    benefits: [
      'Fresh, traditional butter',
      'Rich, creamy texture',
      'Made from pure milk',
      'A beloved traditional product',
    ],
    characteristics: [
      'Fresh, natural flavor',
      'Rich, creamy texture',
      'Made from pure milk',
      'A traditional Pakistani product',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/7965886/pexels-photo-7965886.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '27',
    slug: 'desi-dahi',
    name: 'Desi Dahi',
    urduName: 'Dahi',
    category: 'desi-products',
    shortDescription: 'Fresh, traditional yogurt with a natural, tangy flavor.',
    description:
      'Fresh, traditional yogurt (dahi) with a natural, tangy flavor. A staple in Pakistani cuisine, dahi is enjoyed with meals, used in raita, or eaten on its own.',
    benefits: [
      'Fresh, natural yogurt',
      'Tangy, traditional flavor',
      'A staple in Pakistani cuisine',
      'Versatile for meals and raita',
    ],
    characteristics: [
      'Fresh, natural yogurt',
      'Tangy, traditional flavor',
      'Made using traditional methods',
      'A staple in Pakistani cuisine',
    ],
    sizes: ['500g', '1kg'],
    image: 'https://images.pexels.com/photos/2569760/pexels-photo-2569760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '28',
    slug: 'lassi',
    name: 'Lassi',
    urduName: 'Lassi',
    category: 'desi-products',
    shortDescription: 'Refreshing traditional yogurt drink, sweet or salty.',
    description:
      'Refreshing traditional yogurt drink (lassi), available sweet or salty. A beloved Pakistani beverage, lassi is perfect for hot days and is often enjoyed with meals.',
    benefits: [
      'Refreshing and cooling',
      'A traditional Pakistani beverage',
      'Available sweet or salty',
      'Made from fresh yogurt',
    ],
    characteristics: [
      'Refreshing, traditional drink',
      'Sweet or salty options',
      'Made from fresh yogurt',
      'A beloved Pakistani beverage',
    ],
    sizes: ['1 glass', '500ml', '1L'],
    image: 'https://images.pexels.com/photos/18142603/pexels-photo-18142603.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '29',
    slug: 'shakkar-desi-sugar',
    name: 'Shakkar / Desi Sugar',
    urduName: 'Shakkar',
    category: 'desi-products',
    shortDescription: 'Traditional unrefined sugar with a natural, rich flavor.',
    description:
      'Traditional unrefined sugar (shakkar) with a natural, rich flavor. Used in traditional Pakistani cooking and desserts, shakkar is a less processed alternative to refined sugar.',
    benefits: [
      'Traditional, unrefined sugar',
      'Natural, rich flavor',
      'Less processed than refined sugar',
      'Used in traditional cooking and desserts',
    ],
    characteristics: [
      'Unrefined, natural sugar',
      'Rich, traditional flavor',
      'Less processed alternative',
      'Used in traditional Pakistani cooking',
    ],
    sizes: ['500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/13746824/pexels-photo-13746824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '30',
    slug: 'gur',
    name: 'Gur (Jaggery)',
    urduName: 'Gur',
    category: 'desi-products',
    shortDescription: 'Traditional jaggery with a deep, molasses-like flavor.',
    description:
      'Traditional jaggery (gur) with a deep, molasses-like flavor. A natural sweetener used in Pakistani and South Asian cooking, gur is enjoyed on its own or used in traditional dishes and desserts.',
    benefits: [
      'Natural, traditional sweetener',
      'Deep, molasses-like flavor',
      'Used in traditional cooking',
      'A natural alternative to refined sugar',
    ],
    characteristics: [
      'Traditional jaggery',
      'Deep, rich flavor',
      'Natural and unrefined',
      'Used in Pakistani and South Asian cooking',
    ],
    sizes: ['500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/11952642/pexels-photo-11952642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '31',
    slug: 'pure-milk',
    name: 'Pure Milk',
    urduName: 'Doodh',
    category: 'desi-products',
    shortDescription: 'Fresh, pure milk delivered with care.',
    description:
      'Fresh, pure milk delivered with care. Our milk is sourced locally and is a daily essential for Pakistani households, used for tea, cooking, and making traditional dairy products.',
    benefits: [
      'Fresh and pure',
      'Sourced locally',
      'A daily essential',
      'Used for tea, cooking, and dairy products',
    ],
    characteristics: [
      'Fresh, pure milk',
      'Locally sourced',
      'A daily household essential',
      'Versatile for tea and cooking',
    ],
    sizes: ['1 liter', '2 liters', '5 liters'],
    image: 'https://images.pexels.com/photos/4324320/pexels-photo-4324320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '32',
    slug: 'homemade-pickles',
    name: 'Homemade Pickles',
    urduName: 'Achaar',
    category: 'desi-products',
    shortDescription: 'Traditional homemade pickles with authentic Pakistani flavors.',
    description:
      'Traditional homemade pickles (achaar) with authentic Pakistani flavors. Made using traditional recipes, our pickles are a beloved accompaniment to meals, adding flavor and spice.',
    benefits: [
      'Traditional, homemade pickles',
      'Authentic Pakistani flavors',
      'Made using traditional recipes',
      'A beloved meal accompaniment',
    ],
    characteristics: [
      'Homemade, traditional pickles',
      'Authentic Pakistani flavors',
      'Made with traditional recipes',
      'A flavorful meal accompaniment',
    ],
    sizes: ['250g', '500g', '1kg'],
    image: 'https://images.pexels.com/photos/9005955/pexels-photo-9005955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '33',
    slug: 'desi-masala-mix',
    name: 'Desi Masala Mix',
    urduName: 'Masala Mix',
    category: 'desi-products',
    shortDescription: 'A traditional blend of spices for authentic Pakistani cooking.',
    description:
      'A traditional blend of spices for authentic Pakistani cooking. Our desi masala mix is carefully prepared to bring out the rich flavors of traditional dishes.',
    benefits: [
      'Traditional spice blend',
      'Authentic Pakistani flavors',
      'Carefully prepared mix',
      'Versatile for traditional cooking',
    ],
    characteristics: [
      'Traditional spice blend',
      'Carefully prepared mix',
      'Authentic Pakistani flavors',
      'Versatile for cooking',
    ],
    sizes: ['100g', '250g', '500g'],
    image: 'https://images.pexels.com/photos/31280796/pexels-photo-31280796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '34',
    slug: 'sattu',
    name: 'Sattu',
    urduName: 'Sattu',
    category: 'desi-products',
    shortDescription: 'Traditional roasted gram flour, a nutritious and versatile ingredient.',
    description:
      'Traditional roasted gram flour (sattu), a nutritious and versatile ingredient used in Pakistani and South Asian cooking. Sattu is used to make refreshing drinks, parathas, and traditional dishes.',
    benefits: [
      'Nutritious and versatile',
      'Used in traditional cooking',
      'A source of plant-based protein',
      'Used for drinks and parathas',
    ],
    characteristics: [
      'Traditional roasted gram flour',
      'Nutritious and versatile',
      'Used in Pakistani cooking',
      'A source of plant-based protein',
    ],
    sizes: ['500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/7182054/pexels-photo-7182054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '35',
    slug: 'makai-atta',
    name: 'Makai Atta',
    urduName: 'Makai Atta',
    category: 'desi-products',
    shortDescription: 'Corn flour (maize flour) for traditional rotis and dishes.',
    description:
      'Corn flour (makai atta) for traditional rotis and dishes. A staple in Pakistani and rural cooking, makai atta is used to make makai roti, a traditional bread enjoyed with sarson ka saag.',
    benefits: [
      'Traditional corn flour',
      'Used for makai roti',
      'A staple in rural Pakistani cooking',
      'Versatile for traditional dishes',
    ],
    characteristics: [
      'Corn flour (maize flour)',
      'Used for traditional rotis',
      'A staple in Pakistani cooking',
      'Freshly milled for quality',
    ],
    sizes: ['1kg', '5kg', '10kg'],
    image: 'https://images.pexels.com/photos/39337619/pexels-photo-39337619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '36',
    slug: 'besan',
    name: 'Besan',
    urduName: 'Besan',
    category: 'desi-products',
    shortDescription: 'Gram flour (chickpea flour) for traditional cooking and sweets.',
    description:
      'Gram flour (besan) for traditional cooking and sweets. A versatile ingredient in Pakistani cuisine, besan is used for pakoras, sweets, and a variety of traditional dishes.',
    benefits: [
      'Versatile gram flour',
      'Used for pakoras and sweets',
      'A staple in Pakistani cuisine',
      'A source of plant-based protein',
    ],
    characteristics: [
      'Gram flour (chickpea flour)',
      'Versatile for cooking and sweets',
      'A staple in Pakistani cuisine',
      'Freshly milled for quality',
    ],
    sizes: ['500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/35041879/pexels-photo-35041879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '37',
    slug: 'wheat-flour',
    name: 'Wheat Flour',
    urduName: 'Atta',
    category: 'desi-products',
    shortDescription: 'Fresh wheat flour for daily rotis and bread.',
    description:
      'Fresh wheat flour (atta) for daily rotis and bread. A daily essential in Pakistani households, our wheat flour is freshly milled for quality and consistency.',
    benefits: [
      'Fresh, daily essential',
      'Freshly milled for quality',
      'Used for rotis and bread',
      'A staple in Pakistani households',
    ],
    characteristics: [
      'Fresh wheat flour',
      'Freshly milled for quality',
      'Used for daily rotis',
      'A household staple',
    ],
    sizes: ['1kg', '5kg', '10kg', '20kg'],
    image: 'https://images.pexels.com/photos/11726089/pexels-photo-11726089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '38',
    slug: 'barley-flour',
    name: 'Barley Flour',
    urduName: 'Jau Atta',
    category: 'desi-products',
    shortDescription: 'Barley flour for traditional and nutritious cooking.',
    description:
      'Barley flour (jau atta) for traditional and nutritious cooking. A versatile flour used in Pakistani and South Asian cooking for rotis and traditional dishes.',
    benefits: [
      'Nutritious barley flour',
      'Used for traditional cooking',
      'A source of dietary fiber',
      'Versatile for rotis and dishes',
    ],
    characteristics: [
      'Barley flour (jau atta)',
      'Nutritious and versatile',
      'Used in traditional cooking',
      'Freshly milled for quality',
    ],
    sizes: ['500g', '1kg', '5kg'],
    image: 'https://images.pexels.com/photos/4863970/pexels-photo-4863970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '39',
    slug: 'multigrain-flour',
    name: 'Multigrain Flour',
    urduName: 'Multigrain Atta',
    category: 'desi-products',
    shortDescription: 'A nutritious blend of multiple grains for wholesome rotis.',
    description:
      'A nutritious blend of multiple grains for wholesome rotis. Our multigrain flour combines wheat, barley, and other grains for a balanced and nutritious alternative to regular flour.',
    benefits: [
      'Nutritious multigrain blend',
      'A balanced alternative to regular flour',
      'A source of dietary fiber',
      'Used for wholesome rotis',
    ],
    characteristics: [
      'Blend of multiple grains',
      'Nutritious and balanced',
      'Used for wholesome rotis',
      'Freshly milled for quality',
    ],
    sizes: ['1kg', '5kg', '10kg'],
    image: 'https://images.pexels.com/photos/36617918/pexels-photo-36617918.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'coming-soon',
  },

  // ===== BALOCHISTAN SPECIALS =====
  {
    id: '40',
    slug: 'balochistan-mixed-dry-fruits',
    name: 'Balochistan Mixed Dry Fruits',
    urduName: 'Balochistan Special Mix',
    category: 'balochistan-specials',
    shortDescription: 'A special selection of dry fruits inspired by Balochistan traditions.',
    description:
      'A special selection of dry fruits inspired by the rich traditions and natural heritage of Balochistan. This mix brings together a variety of premium dry fruits, carefully selected for quality and freshness.',
    benefits: [
      'A special selection of dry fruits',
      'Inspired by Balochistan traditions',
      'Carefully selected for quality',
      'A versatile and satisfying mix',
    ],
    characteristics: [
      'Special Balochistan-inspired mix',
      'Premium quality selection',
      'Carefully combined for variety',
      'Fresh and quality-selected',
    ],
    sizes: ['500g', '1kg', '2kg', '5kg'],
    image: 'https://images.pexels.com/photos/2952869/pexels-photo-2952869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '41',
    slug: 'balochistan-dates-special',
    name: 'Balochistan Special Dates',
    urduName: 'Balochistan Khajoor',
    category: 'balochistan-specials',
    shortDescription: 'Premium dates selected with a focus on quality and freshness.',
    description:
      'Premium dates selected with a focus on quality and freshness. Dates are a beloved part of Pakistani culture and cuisine, and our Balochistan special dates are carefully chosen for their natural sweetness and soft texture.',
    benefits: [
      'Premium quality dates',
      'Naturally sweet and soft',
      'A beloved part of Pakistani culture',
      'Carefully selected for freshness',
    ],
    characteristics: [
      'Premium quality dates',
      'Naturally sweet and soft',
      'Carefully selected for freshness',
      'A traditional and popular food',
    ],
    sizes: ['500g', '1kg', '2kg', '5kg'],
    image: 'https://images.pexels.com/photos/15807109/pexels-photo-15807109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'available',
  },
  {
    id: '42',
    slug: 'balochistan-honey-special',
    name: 'Balochistan Special Honey',
    urduName: 'Balochistan Shehad',
    category: 'balochistan-specials',
    shortDescription: 'Natural honey from the Balochistan region, pure and unprocessed.',
    description:
      'Natural honey from the Balochistan region, pure and unprocessed. Sourced from local beekeepers, this honey captures the natural flora and character of the region.',
    benefits: [
      'Natural and unprocessed honey',
      'Sourced from local beekeepers',
      'Captures the natural flora of the region',
      'A versatile natural sweetener',
    ],
    characteristics: [
      'Natural, pure honey',
      'From the Balochistan region',
      'Unprocessed and unfiltered',
      'Sourced from local beekeepers',
    ],
    sizes: ['250g', '500g', '1kg', '2kg'],
    image: 'https://images.pexels.com/photos/38164883/pexels-photo-38164883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    status: 'coming-soon',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id && p.status === 'available'
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.id !== product.id && p.status === 'available'
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller && p.status === 'available');
}
