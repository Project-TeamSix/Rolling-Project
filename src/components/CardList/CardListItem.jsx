import clsx from "clsx";

import styles from "./CardListItem.module.css";

import RollingPaperInfo from "../RollingPaperInfo/RollingPaperInfo";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import BadgeEmojiList from "../BadgeEmoji/BadgeEmojiList";

const CardListItem = ({
  backgroundImageStyle,
  hasBackgroundImage,
  recipientName,
  backgroundColor = "",
  backgroundImageURL = "",
  messageCount,
  profileImageURLs = "",
  emojiData,
}) => {
  return (
    <div style={backgroundImageStyle} className={styles.container}>
      <div className={clsx(styles.card, backgroundImageURL ? "" : styles[backgroundColor])}>
        <RollingPaperInfo style={"card"} recipientName={recipientName} hasBackgroundImage={hasBackgroundImage}>
          <ProfileInfo
            style={"card"}
            messageCount={messageCount}
            profileImageURLs={profileImageURLs}
            hasBackgroundImage={hasBackgroundImage}
          />
        </RollingPaperInfo>
        <div className={styles.BadgeEmojiListWrapper}>
          <BadgeEmojiList emojis={emojiData} isVisibleButton={false} />
        </div>
      </div>
    </div>
  );
};

export default CardListItem;
