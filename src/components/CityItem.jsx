import styles from "./CityItem.module.css"
import PropTypes from "prop-types"

function formatDate(date) {
      return new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
      }).format(new Date(date))
}

export default function CityItem({city}) {
const {cityName, emoji, date } = city

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.cityName}>{cityName}</span>
      <time className={styles.date}>{formatDate(date)}</time>
    </li>
  )
}

CityItem.propTypes = {
      city: PropTypes.object.isRequired
}
