"use client";
import Link from "next/link";
import styles from "./Blog.module.css";

const foodData = [
  {
    id: 1,
    title: "Pizza",
    desc: "A delicious cheesy pizza with toppings you love.",
    image: "/pizza.jpg",
  },
  {
    id: 2,
    title: "Burger",
    desc: "Juicy burger with crispy lettuce and tomato.",
    image: "/burger.jpg",
  },
  {
    id: 3,
    title: "Briyani",
    desc: "Spicy Briyani with soft lettuce and Chicken.",
    image: "/briyani.jpg",
  },
  {
    id: 4,
    title: "Dosa",
    desc: "spicy masala dossa with crispy lettuce and tomato.",
    image: "/dosa.jpg",
  },
  {
    id: 5,
    title: "Fish",
    desc: "Spicy Fish with crispy lettuce and soft cooked.",
    image: "/fish.jpg",
  },
  {
    id: 6,
    title: "Lollipop",
    desc: "crispy and tasty lollipop  with crispy lettuce and tomato.",
    image: "/lollipop.jpg",
  },
  {
    id: 7,
    title: "Momos",
    desc: "Juicy and soft momos with crispy lettuce and tomato.",
    image: "/momos.jpg",
  },
  {
    id: 8,
    title: "noodles",
    desc: "A delicious noodles with chicken and spicy incredients",

    image: "/noodles.jpg",
  },
  {
    id: 9,
    title: "Grill",
    desc: "A delicious and tasty grill with smoothy texture",
    image: "/grill.jpg",
  },
  {
    id: 10,
    title: "Panipuri",
    desc: "Juicy and crispy panipuri  with pani and masala onion bunch!",
    image: "/panipuri.jpg",
  },
  {
    id: 11,
    title: "Prawn",
    desc: "Crispy and soft Prawn with tasty masala.",
    image: "/prawn.jpg",
  },
  {
    id: 12,
    title: "Sandwich",
    desc: "a delicious sandwich with crispy lettuce and tomato.",
    image: "/sandwich.jpg",
  },
  {
    id: 13,
    title: "Cake",
    desc: "A sweet and soft chocolate blackforest cake.",
    image: "/cake.jpg",
  },
  {
    id: 14,
    title: "IceCream",
    desc: "A Chill desert in different flavours",
    image: "/icecream.jpg",
  },
  {
    id: 15,
    title: "Jamun",
    desc: "Smooth and softy texture sweet for kids and families.",
    image: "/jamun.jpg",
  },
];

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Food Blog</h1>
      <div className={styles.grid}>
        {foodData.map((food) => (
          <div key={food.id} className={styles.card}>
            <Link href={`/blog/${food.id}`} className={styles.link}>
              <img src={food.image} alt={food.title} className={styles.img} />
            </Link>
            <h2 className={styles.title}>
              <Link href={`/blog/${food.id}`} className={styles.link}>
                {food.title}
              </Link>
            </h2>
            <p className={styles.pa}>{food.desc}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;
