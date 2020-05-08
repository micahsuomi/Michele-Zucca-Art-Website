import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'
import styles from './styles.module.scss';
const ShareButtons = ({ twitterHandle, url, title, tags }) => {
    console.log(twitterHandle, url, title, tags)
    return (
<div className={styles.shareButtonsContainer}>
    <div>
    <h4>Share</h4>
    </div>
    <div className={styles.shareButtonsWrapper}>
    <FacebookShareButton url={url} className={styles.share}>
      <FacebookIcon width={40} className={styles.shareIcon}/>
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags} className={styles.share}>
      <TwitterIcon width={40}/>
    </TwitterShareButton>

    <LinkedinShareButton url={url} className={styles.share}>
      <LinkedinIcon width={40}/>
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title} className={styles.share}>
      <RedditIcon width={40}/>
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title} className={styles.share}>
      <WhatsappIcon width={40}/>
    </WhatsappShareButton>
    </div>
  </div>
    )
  
}

export default ShareButtons