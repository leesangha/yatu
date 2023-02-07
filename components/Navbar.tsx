import Image from "next/image";
import logo from "@/public/Halite_Logo.webp";
import Avatar from "@/public/avatar.svg";
import Cart from "@/public/cart.svg";
import Finder from "@/public/finder.svg";
import styles from "styles/components/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.NavBlock}>
        <div className={styles.Block}>
          <Image width={188} height={52} src={logo} alt="logo" />
        </div>
        <nav className={styles.Nav}>
          <ul className={styles.Menus}>
            <li className={styles.Menu}>
              <a className={styles.Button}>Shop</a>
            </li>
            <li className={styles.Menu}>International Orders</li>
            <li className={styles.Menu}>Veterans</li>
            <li className={styles.Menu}>Contact</li>
          </ul>
        </nav>
        <div className={styles.Block}>
          <div className={styles.Icons}>
            <div className={styles.Svg}>
              <Avatar width={20} height={20} />
            </div>
            <div className={styles.Svg}>
              <Finder width={20} height={20} />
            </div>
            <div className={styles.Svg}>
              <Cart width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
