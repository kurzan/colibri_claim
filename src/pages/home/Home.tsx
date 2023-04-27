import Box from "../../components/Box/Box";
import Header from "../../components/header/Header";
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <main>

        <div className={styles.bgBox}></div>
        <p className={styles.subtitle}>Launch on Arbitrum</p>
        <p className={styles.title}>Co-built by AI creatures and our community</p>
        <Box>
          <>
            <p className={styles.claimTitle}>Airdrop is coming soon!</p>
            <p className={styles.claimText}>A total of 200,000,000,000,000,000 AICOLIBRI tokens are now available to be claimed by those who have claimed the ARB airdrop and NFT holders.</p>
            
            <p className={styles.remainText}>Remains to claim</p>
            <p className={styles.remainTimer}>81 : 45 : 42  </p>

            <input className={styles.input} readOnly value={0} /> 
            <button className={styles.button}>Claim Airdrop</button>

          </>
        </Box>

      </main>
    </>
  )
};

export default Home;