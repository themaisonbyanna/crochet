// EDIT THIS: Add your WhatsApp number with country code, digits only.
// Example for India: 919876543210 (do not include +, spaces, or dashes).
const WHATSAPP_NUMBER = "918078174990";

// EDIT THESE: Sample products and prices. Replace images with your own
// by changing image to a local path such as "images/rose-bouquet.jpg".
// The current photos are illustrative placeholders, not actual crochet products.
const products = [
  {name:"Artificial Flower Bouquet",category:"bouquets",price:1200 ,description:"A bouquet of timeless beauty, made to be treasured forever.",image: "bouque.jpeg"},
  {name:"Cute Crochet Duckling",category:"plushies",price:499 ,description:"A tiny bundle of sunshine, stitched with love.",image:"duck.jpeg"},
  {name:"Mini Crochet World Cup",category:"plushies",price:349,description:"A little trophy for your biggest victories.",image:"world cup.jpeg"},
  {name:"Crochet Baby Boots",category:"baby",price:349,description:"Tiny stitches for the tiniest feet.",image:"boots.jpeg"},
  {name:"Bag Embroidery",category:"embroidery",price:799,description:"Turning everyday essentials into wearable art.",image:"bag.jpeg"},
  {name:"Cute Bunny ",category:"plushies",price:899,description:"Floppy ears, endless cuddles, and handmade love.",image:"bunny.jpeg"},
  {name:"Spiderman",category:"plushies",price:699,description:"A little superhero with a whole lot of charm.",image:"spiderman.jpeg"},
  {name:"Crochet Name",category:"names",price:599,description:"Your name, beautifully woven into something special.",image:"name crochey.png"},
  {name:"Flower Hairband",category:"hairs",price:249,description:"A little bloom for your everyday look.",image:"hairband.png"},
  {name:"Photo Bouquet",category:"bouquets",price:1299,description:"Your favourite memories, wrapped in love.",image:"poto bouque.jpeg"},
  {name:"Wedding Embroidery Hoop",category:"embroidery",price:1799,description:"A love story stitched into a forever keepsake.",image:"hoop.jpeg"},
  {name:"Embroidery Clip",category:"hairs",price:199,description:"Delicate floral details for a timeless touch.",image:"black slide.png"},
  {name:"Crochet Hair Bow",category:"hairs",price:179,description:"A little bow, a lot of charm.",image:"bow.jpeg"},
  {name:"Sunflower Clip",category:"hairs",price:249,description:"Little sunflowers to brighten every hairstyle.",image:"clip.jpeg"},
  {name:"Crochet Long Tail Bow",category:"hairs",price:299,description:"Soft, graceful, and effortlessly pretty.",image:"hairbow.png"},
  {name:"Strawberry Keychain",category:"key",price:179,description:"A berry sweet little companion for every day.",image:"strawberry.jpeg"},
  {name:"Sunflower Keychain",category:"key",price:199,description:"Carry a little sunshine wherever you go.",image:"sunflower keychain.jpeg"},
  {name:"Crochet Alphabet",category:"names",price:179,description:"Little letters, lovingly stitched just for you.",image:"alpha.jpeg"},
  {name:"Fresh Flower Bouquet",category:"bouquets",price:300,description:"A little bunch of happiness, beautifully arranged with fresh blooms to make every moment special.",image:"fresh.jpeg"},
  {name:"Resin Photo Frame",category:"resin",price:1400,description:"Preserve your favourite memories in a beautifully handcrafted resin frame, made to treasure forever.",image:"resin frame.jpeg"},
  {name:"Purple Pearl Trinket Tray",category:"resin",price:399,description:"A touch of elegance for your everyday essentials. Handcrafted with dreamy purple swirls, pearl accents and delicate golden edges.",image:"resin bowl.png"}

];

const grid = document.querySelector("#product-grid");
const formatPrice = price => `₹${price.toLocaleString("en-IN")}`;
const whatsappLink = message => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

function renderProducts(filter="all") {
  const visible = products.filter(p => filter === "all" || p.category === filter);
  grid.replaceChildren();
  visible.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";
    const imageWrap = document.createElement("div"); imageWrap.className = "product-image";
    const img = document.createElement("img"); img.src=product.image; img.alt=product.name+" (illustrative placeholder photo)"; img.loading="lazy";
    
    imageWrap.append(img);
    const info = document.createElement("div"); info.className="product-info";
    const title = document.createElement("h3"); title.textContent=product.name;
    const desc = document.createElement("p"); desc.textContent=product.description;
    const bottom = document.createElement("div"); bottom.className="product-bottom";
    const price = document.createElement("span"); price.className="price"; price.textContent=formatPrice(product.price);
    const order = document.createElement("a"); order.className="order-btn"; order.textContent="Order ↗"; order.target="_blank"; order.rel="noopener noreferrer";
    order.href=whatsappLink(`Hi! I'm interested in the ${product.name} (${formatPrice(product.price)}). Is it available?`);
    bottom.append(price,order); info.append(title,desc,bottom); card.append(imageWrap,info); grid.append(card);
  });
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(b => {b.classList.remove("active");b.setAttribute("aria-pressed","false");});
  button.classList.add("active");button.setAttribute("aria-pressed","true");renderProducts(button.dataset.filter);
}));

const menuToggle=document.querySelector(".menu-toggle"), navLinks=document.querySelector(".nav-links");
menuToggle.addEventListener("click",()=>{const isOpen=navLinks.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(isOpen));menuToggle.setAttribute("aria-label",isOpen?"Close navigation":"Open navigation");menuToggle.textContent=isOpen?"✕":"☰";});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label","Open navigation");menuToggle.textContent="☰";}));
document.querySelector("#contact-whatsapp").href=whatsappLink("Hi! I'd like to know more about your crochet products and custom orders.");
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
renderProducts();
