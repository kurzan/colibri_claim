import styles from "./Header.module.css";
import logo from '../../images/colibri.jpg';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = ({nav} : {nav?: boolean}) => {
  return(
    <header className={styles.header}>
        <div className={styles.company}>
          <div className={styles.logobox}>
            <img src={logo} alt="" />
          </div>
          <p className={styles.companyName}>ARB COLIBRI</p>
        </div>


        <ConnectButton/>
    </header>
  )
};

export default Header;