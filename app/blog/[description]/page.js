import styles from "./FoodDetail.module.css";
import Notfound from "@/app/not-found";
const foodData = [
  {
    id: 1,
    title: "Pizza",
    desc: "Pizza is a beloved Italian dish made of a flattened dough base topped with tomato sauce, cheese, and a variety of toppings like vegetables, meats, and herbs. It's baked in an oven to perfection. Popular types include Margherita, Pepperoni, and Veggie Deluxe. Best enjoyed hot and shared with friends or family.",
    image: "/pizza.jpg",
  },
  {
    id: 2,
    title: "Burger",
    desc: "A burger is a sandwich consisting of a cooked patty of ground meat, usually beef or chicken, placed inside a sliced bun. It often comes with lettuce, tomato, cheese, pickles, and condiments like ketchup or mayonnaise. Burgers are fast, filling, and customizable to your taste.",
    image: "/burger.jpg",
  },
  {
    id: 3,
    title: "Briyani",
    desc: "Briyani is a fragrant and spicy rice dish made by layering marinated meat like chicken or mutton with partially cooked basmati rice and aromatic spices. Cooked in the traditional 'dum' style, it's served with raita, boiled egg, or salan. A celebration of flavor in every bite.",
    image: "/briyani.jpg",
  },
  {
    id: 4,
    title: "Dosa",
    desc: "Dosa is a South Indian crepe made from a fermented batter of rice and urad dal. Masala dosa is filled with a spiced potato mixture and served with coconut chutney and sambar. It is crispy, healthy, and a popular breakfast across India.",
    image: "/dosa.jpg",
  },
  {
    id: 5,
    title: "Fish",
    desc: "Fish dishes vary across cultures. This one features pan-fried or grilled fish marinated in a blend of spices, served with lemon slices and mint chutney. High in protein and omega-3 fatty acids, it’s both healthy and tasty.",
    image: "/fish.jpg",
  },
  {
    id: 6,
    title: "Lollipop",
    desc: "Chicken Lollipop is a popular Indo-Chinese appetizer made from chicken wings, where the meat is pushed down the bone to form a lollipop shape. It is marinated with spicy sauces, deep-fried, and coated in a hot garlic sauce. Great for party starters!",
    image: "/lollipop.jpg",
  },
  {
    id: 7,
    title: "Momos",
    desc: "Momos are steamed dumplings filled with minced meat or vegetables, wrapped in a thin flour dough. Originating from Tibet and Nepal, they are served with spicy chutney. They can also be fried or tandoori-style for variation.",
    image: "/momos.jpg",
  },
  {
    id: 8,
    title: "Noodles",
    desc: "Noodles are a staple in Asian cuisine. These are stir-fried with vegetables, soy sauce, garlic, and your choice of chicken, egg, or paneer. Often served hot with chili sauce, they are quick to make and hard to resist.",
    image: "/noodles.jpg",
  },
  {
    id: 9,
    title: "Grill",
    desc: "Grilled chicken is a smoky, flavorful dish where the chicken is marinated in spices and herbs, then grilled over flame or charcoal. It’s juicy on the inside and crispy outside. Served best with green chutney or garlic mayo.",
    image: "/grill.jpg",
  },
  {
    id: 10,
    title: "Panipuri",
    desc: "Panipuri is a famous Indian street food made with crisp puris filled with spicy mashed potatoes, tangy tamarind water, and flavorful chutneys. Also known as Golgappa or Puchka, it’s a burst of flavor in your mouth with every bite.",
    image: "/panipuri.jpg",
  },
  {
    id: 11,
    title: "Prawn",
    desc: "Prawns are sautéed or grilled with Indian masalas to create a spicy, succulent dish. This seafood favorite is served with rice or flatbreads and is rich in flavor, offering a perfect balance of spice and juiciness.",
    image: "/prawn.jpg",
  },
  {
    id: 12,
    title: "Sandwich",
    desc: "A sandwich is a versatile food consisting of vegetables, cheese, sauces, and sometimes grilled meats, placed between two slices of bread. Toasted or cold, they make a quick and tasty snack or lunch option.",
    image: "/sandwich.jpg",
  },
  {
    id: 13,
    title: "Cake",
    desc: "This Black Forest Cake is rich with layers of chocolate sponge, whipped cream, and cherries. Topped with chocolate shavings, it's a popular choice for birthdays and celebrations. Sweet, moist, and simply irresistible!",
    image: "/cake.jpg",
  },
  {
    id: 14,
    title: "IceCream",
    desc: "Ice cream is a frozen dessert made from milk, cream, sugar, and flavorings. Available in many flavors like vanilla, chocolate, and mango, it’s loved by all age groups. Perfect for summer treats or dessert cravings.",
    image: "/icecream.jpg",
  },
  {
    id: 15,
    title: "Jamun",
    desc: "Gulab Jamun is a traditional Indian dessert made of khoya (milk solids), deep-fried and soaked in sugar syrup. These soft, spongy balls melt in your mouth and are served warm. A favorite during festivals and weddings.",
    image: "/jamun.jpg",
  },
];

const FoodDetail = ({ params }) => {
  const foodId = parseInt(params.description);
  const food = foodData.find((item) => item.id === foodId);

  if (!food) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Food item not found!
        <Notfound></Notfound>
      </div>
    );
  }

  return (
    <div className={styles.detail}>
      <h1 className={styles.title}>{food.title}</h1>
      <img src={food.image} alt={food.title} className={styles.img} />
      <p className={styles.desc}>{food.desc}</p>
    </div>
  );
};
export default FoodDetail;
