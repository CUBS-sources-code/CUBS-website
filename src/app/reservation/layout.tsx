import styles from "./booking.module.css";

export default function BookingLayout({children}:{children:React.ReactNode}) {
    return (
      <div className={styles.sectionlayout}>
        {children}
      </div>
    )
  }