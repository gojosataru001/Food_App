import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from "./MealItem/MealItem"

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Schnitzel',
    description: 'A German specialty!',
    price: 16.5,
  },
  {
    id: 'm2',
    name: 'Cheeseburger',
    description: 'Juicy beef burger with cheddar cheese',
    price: 12.99,
  },
  {
    id: 'm3',
    name: 'Chicken Biryani',
    description: 'Spiced chicken with basmati rice',
    price: 14.25,
  },
  {
    id: 'm4',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes and mozzarella',
    price: 10.0,
  },
  {
    id: 'm5',
    name: 'Pasta Alfredo',
    description: 'Creamy Alfredo pasta with mushrooms',
    price: 13.5,
  },
];


const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal=><MealItem key={meal.id} id={meal.id}  name={meal.name} description={meal.description} price={meal.price} />)
    return ( 
    <section className={classes.meals}>
        <Card>
          <ul>
            {mealsList}
        </ul>
        </Card>
    </section>)
  
}

export default AvailableMeals