const price = pricing => {
  if (pricing.type === 'manual') {
    return pricing.price;
  } else if (pricing.type === 'pages') {
    return pricing.pages * pricing.price_per_page;
  } else if (pricing.type === 'discount') {
    return price(pricing.basePricing) * (1 - pricing.percent);
  } else {
    throw `I don't know how to calculate ${pricing.type}`;
  }
};

// returns 5
price({ type: 'manual', price: 5.00 });

// returns 45
price({ type: 'pages', pages: 150, price_per_page: 0.3 });

// returns 8
price({ type: 'discount', percent: 0.2, basePricing: { type: 'manual', price: 10 } });