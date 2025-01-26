export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'tags', type: 'array', of: [{ type: 'string' }], title: 'Tags' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'image', type: 'image', title: 'Product Image' },
      { name: 'category', type: 'string', title: 'Category' }, // Example: Furniture, Decor
      { name: 'discount', type: 'number', title: 'Discount Percentage' }, // Optional
      { name: 'isNew', type: 'boolean', title: 'Is New Arrival?' }, // For marking new arrivals
    ],
  };
  