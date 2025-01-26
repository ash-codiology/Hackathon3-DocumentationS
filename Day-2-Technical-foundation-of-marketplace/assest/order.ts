export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'userId', type: 'string', title: 'User ID' }, // Unique identifier for the user placing the order
      {
        name: 'items',
        type: 'array',
        title: 'Ordered Items',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'productId', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
              { name: 'quantity', type: 'number', title: 'Quantity' },
            ],
          },
        ],
      },
      { name: 'total', type: 'number', title: 'Total Price' },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: { list: ['Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'] }, // Added 'Cancelled' as a potential status
      },
      { name: 'timestamp', type: 'datetime', title: 'Order Time' }, // Automatically track order time
      { name: 'deliveryDate', type: 'datetime', title: 'Delivery Date' }, // Optional field for estimated delivery time
    ],
  };
  