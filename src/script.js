/** Add any JavaScript you need to this file. */

const data1 = [
  {
    id: 1,
    title: 'T-Shirts',
    image: '.\\images\\p1Male.jpg',
    text:
      'Quality t-shirts are made with high-grade materials that are both durable and comfortable.',
    category: 'Male',
    price: '10$'
  },
  {
    id: 2,
    title: 'Royal Suits',
    image: '.\\images\\p2Male.jpg',
    text:
      'Fine and royal suits are meticulously crafted from the finest materials to ensure a luxurious look and feel.',
    category: 'Male',
    price: '70$'
  },
  {
    id: 3,
    title: 'Casual Suit',
    image: '.\\images\\pboth.jpg',
    text:
      'Casual suits are a versatile wardrobe staple that can be dressed up or down depending on the occasion',
    category: 'Male',
    price: '65$'
  },
  {
    id: 4,
    title: 'Denim Jackets',
    image: '.\\images\\pboth2.jpg',
    text:
      'Denim jackets are a timeless fashion item that are versatile, durable, and stylish, perfect for adding a touch of casual-cool to any outfit.',
    category: 'Male',
    price: '40$'
  },
  {
    id: 5,
    title: 'Casual Summer Shirts',
    image: '.\\images\\p5Male.jpg',
    text:
      'Casual summer shirts are lightweight and breathable, with colorful prints and patterns that are perfect for staying comfortable and stylish in warmer weather',
    category: 'Male',
    price: '10$'
  },
  {
    id: 6,
    title: 'Pants',
    image: '.\\images\\p6Male.jpg',
    text:
      'Quality pants are made from durable and comfortable fabrics, and are expertly tailored to provide a perfect fit',
    category: 'Male',
    price: '15$'
  },
  {
    id: 7,
    title: 'Half Sleeves',
    image: '.\\images\\p7Male.jpg',
    text:
      'Half-sleeve shirts are a comfortable and versatile choice for warmer weather, featuring a casual yet stylish design',
    category: 'Male',
    price: '9$'
  },
  {
    id: 8,
    title: 'Local Outfit',
    image: '.\\images\\p8Male.jpg',
    text:
      'Local outfits reflect the unique cultural traditions and styles of a particular region, often featuring vibrant colors',
    category: 'Male',
    price: '10$'
  },
  {
    id: 9,
    title: 'Dress pants',
    image: '.\\images\\p9Male.jpg',
    text:
      'Dress pants are a formal and stylish type of trousers that are typically made from high-quality fabrics and feature a tailored fit',
    category: 'Male',
    price: '20$'
  },
  {
    id: 10,
    title: 'Colorgul Outfits',
    image: '.\\images\\p10Male.jpg',
    text:
      'Colorful outfits can add a vibrant and energetic element to any wardrobe, featuring bold hues and playful patterns that can make a statement and express individuality.',
    category: 'Male',
    price: '32$'
  }
];

const cardContainer = document.querySelector('.items');

data1.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.style.width = '285px';
  cardImage.style.height = '250px';
  cardImage.src = item.image;
  cardImage.alt = 'Card Image';

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = item.title;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.style.width = '250px';
  cardText.innerText = item.text;

  const category = document.createElement('p');
  category.classList.add('card-category');
  category.innerText = item.category;

  const price = document.createElement('p');
  price.classList.add('card-price');
  price.innerText = item.price;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(category);
  cardBody.appendChild(price);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  cardContainer.appendChild(card);
});

const data2 = [
  {
    id: 1,
    title: 'High Neck',
    image: '.\\images\\p1F.jpg',
    text:
      'High necks are a versatile and stylish clothing option that adds sophistication and elegance to any outfit.',
    category: 'Female',
    price: '20$'
  },
  {
    id: 2,
    title: 'Long Shirts',
    image: '.\\images\\p2F.jpg',
    text:
      'Quality long shirts offer a comfortable and practical wardrobe essential that can be dressed up or down to suit any occasion.',
    category: 'Female',
    price: '50$'
  },
  {
    id: 3,
    title: 'Half sleeves T-Shirt',
    image: '.\\images\\p3F.jpg',
    text:
      'T-shirts are a classic and timeless garment that can be worn in endless ways to express personal style and creativity.',
    category: 'Female',
    price: '25$'
  },
  {
    id: 4,
    title: 'Denim Jacket',
    image: '.\\images\\pboth2.jpg',
    text:
      'Denim jackets are a durable and stylish outerwear option that can elevate any casual outfit with their timeless, versatile appeal.',
    category: 'Female',
    price: '60$'
  },
  {
    id: 5,
    title: 'Cultural Shawls',
    image: '.\\images\\p5F.jpg',
    text:
      'Cultural shawls of high quality are not only a beautiful accessory to any outfit, but also carry deep cultural significance ',
    category: 'Female',
    price: '40$'
  },
  {
    id: 6,
    title: 'Wool Jackets',
    image: '.\\images\\p6F.jpg',
    text:
      'Wool jackets offer warmth, comfort, and style for colder weather, making them a reliable and fashionable addition to any winter wardrobe.',
    category: 'Female',
    price: '45$'
  },
  {
    id: 7,
    title: 'Jeans Pants',
    image: '.\\images\\p7F.jpg',
    text:
      'Quality jeans are a versatile and durable wardrobe staple that can be dressed up or down and worn for any occasion',
    category: 'Female',
    price: '20$'
  },
  {
    id: 8,
    title: 'Scarfs',
    image: '.\\images\\p10F.jpg',
    text:
      'A quality scarf not only provides warmth and protection from the elements, but also adds a touch of elegance and sophistication to any outfit',
    category: 'Female',
    price: '10$'
  },
  {
    id: 9,
    title: 'Long Coats',
    image: '.\\images\\p9F.jpg',
    text:
      'Quality coats are an essential investment for any winter wardrobe, providing both style and protection from the harsh elements while remaining durable and versatile enough to last for years.',
    category: 'Female',
    price: '80$'
  },
  {
    id: 10,
    title: 'Cotton Scarfs',
    image: '.\\images\\p11F.jpg',
    text:
      'Cotton scarfs are a breathable and lightweight accessory that can add a pop of color and texture to any outfit while remaining comfortable and practical for everyday wear.',
    category: 'Female',
    price: '15$'
  }
];

const cardContainer2 = document.querySelector('.items-women');

data2.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImage = document.createElement('img');
  cardImage.style.width = '250px';
  cardImage.style.height = '250px';
  cardImage.src = item.image;
  cardImage.alt = 'Card Image';

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = item.title;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.style.width = '250px';
  cardText.innerText = item.text;

  const category = document.createElement('p');
  category.classList.add('card-category');
  category.innerText = item.category;

  const price = document.createElement('p');
  price.classList.add('card-price');
  price.innerText = item.price;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(category);
  cardBody.appendChild(price);

  card.appendChild(cardImage);
  card.appendChild(cardBody);

  cardContainer2.appendChild(card);
});

const elementToToggle2 = document.querySelector('.women');
const womenClick = document.getElementById('women-btn');

const menClick = document.getElementById('men-btn');
const elementToToggle1 = document.querySelector('.men');
menClick.addEventListener('click', function() {
  if (elementToToggle1.style.display === 'block') {
    elementToToggle1.style.display = 'none';
  } else {
    elementToToggle1.style.display = 'block';
    elementToToggle2.style.display = 'none';
  }
});

womenClick.addEventListener('click', function() {
  if (elementToToggle2.style.display === 'block') {
    elementToToggle2.style.display = 'none';
  } else {
    elementToToggle2.style.display = 'block';
    elementToToggle1.style.display = 'none';
  }
});
