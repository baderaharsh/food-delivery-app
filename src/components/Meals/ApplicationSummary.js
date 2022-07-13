import classes from './ApplicationSummary.module.css'
import Card from '../UI/Card'

const ApplicationSummary = () => {
    return <Card classes={classes['summary-card']}>
        <h2>
            Welcome
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui porttitor, vulputate ante.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mollis ex. Quisque gravida, ligula ut facilisis blandit.
        </p>
    </Card>
}

export default ApplicationSummary;