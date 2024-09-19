import { Outlet } from "react-router-dom"
import styles from "./Sidebar.module.css"
import Logo from "./Logo"
import AppNav from "./AppNav"

function SideBar() {
      return (
            <div className={styles.sidebar}>
                  <Logo />
                  <AppNav />

                  <Outlet />

                  <footer className={styles.footer}>
                        <p className={styles.copyright}>
                              &copy; Copyright {new Date().getFullYear()} by the World Wide Web Ltd.
                        </p>
                  </footer>
            </div>
      )
}

export default SideBar
