import ApplicationSummary from './ApplicationSummary'
import AvailableMeals from './AvailableMeals';
import classes from './Meals.module.css'

const Meals = () => {
    return <div className={classes.container}>
        <ApplicationSummary />
        <AvailableMeals />
    </div>
}

export default Meals;