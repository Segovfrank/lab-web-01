exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('products').del()
      .then(function () {
        // Inserts seed entries
        return knex('products').insert([
          { name: 'Google Pixel 3 XL', description: 'El Google Pixel 3 XL, posee una pantalla de 6.3 pulgadas, con una gran resolución de 1440 x 2960 pixeles', price: 16000 },
          { name: 'One plus 7 Pro', 
          description: 'Pantalla Fluid AMOLED de 6.67" con 90Hz, 3120 x 1440 pixeles 516ppi, 3D Corning Gorilla Glass', 
          price: 19000 },
          { name: 'Samsung S10', description: 'El smartphone que no solo destaca, se distingue', price: 13000 },
        ]);
      });
  };