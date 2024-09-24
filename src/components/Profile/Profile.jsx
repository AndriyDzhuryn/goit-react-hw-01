import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile_box}>
      <div className={styles.profile_box_img}>
        <img className={styles.profile_avatar} src={image} alt="User avatar" />
        <p className={styles.profile_name}>{name}</p>
        <p className={styles.profile_email}>@{tag}</p>
        <p className={styles.profile_location}>{location}</p>
      </div>

      <ul className={styles.profile_list}>
        <li className={styles.profile_list_item}>
          <span>Followers</span>
          <span className={styles.profile_item_value}>{stats.followers}</span>
        </li>
        <li className={styles.profile_list_item}>
          <span>Views</span>
          <span className={styles.profile_item_value}>{stats.views}</span>
        </li>
        <li className={styles.profile_list_item}>
          <span>Likes</span>
          <span className={styles.profile_item_value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
