import styles from "./AvailableMeal.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailableMeal = () => {
     const mealList = DUMMY_MEALS.map(meals =>
     <MealItem 
     key = {meals.id}
     name={meals.name}
     price={meals.price}
     description={meals.description}
     />
     )
     return(
        <section className={styles.meals}>
            <Card>
              {mealList}
            </Card>
        </section>
     )
  }
  export default AvailableMeal