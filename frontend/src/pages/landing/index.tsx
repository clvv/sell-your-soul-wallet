import Button from 'components/button'
import CommonLayout from 'components/common-layout'
import styles from './index.module.scss'
import { Profile } from 'components/wallet'
import { mintNFTWallet } from 'helpers/mintNFTWallet'

const LandingPage = () => {

    return (
        <CommonLayout className={styles.page}>
           <div className={styles.firstView}>
        <div className={styles.heading}>Sell Your Soul Wallet is ....</div>
        <div className={styles.description}>
            This is ...
        </div>
        <Profile />
        <Button
          className={styles.button}
          onClick={() => mintNFTWallet()}
        >
          Mint now!
        </Button>
      </div>

      
      {/* <div className={styles.howTo}>
        <div className={styles.heading}>How you can use it?</div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <p>Mint your NFT and get your NFT Wallet</p>
            <p>
              <b>AND</b>
            </p>
            <p>Get your NFT Wallet</p>
          </div>
          <div className={styles.arrow} />
          <div className={styles.step}>
            <p>Buy ERC20/NFT/SBT with Your NFT Wallet</p>
          </div>
          <div className={styles.arrow} />
          <div className={styles.step}>
            <p>Transfer the ownership by just one click!</p>
            <br />
            <p>
              <small>
                (SBT, or Soulbound Tokens, are non-transferrable NFT designed to
                show your permenant credentials)
              </small>
            </p>
          </div>
        </div>
      </div> */}
        </CommonLayout>
      )
    }
    
    export default LandingPage