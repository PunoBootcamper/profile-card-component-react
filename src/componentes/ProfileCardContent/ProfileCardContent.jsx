import profile_image from "/img/image-victor.jpg";
const ProfileCardContent = ({ person }) => {
  return (
    <section className="profile-card__content">
      <img src={profile_image} alt="" className="profile-car__image" />
      <h2 className="profile-card__name">
        {person.name}
        <span>{person.age}</span>
      </h2>
      <p className="profile-card__location">{person.location}</p>
      <footer className="profile-card__footer">
        <div className="profile-card__footer-item">
          <p className="profile-card__footer-number">
            {person.statistics.followers}
          </p>
          <p className="profile-card__footer-label">Followers</p>
        </div>
        <div className="profile-card__footer-item">
          <p className="profile-card__footer-number">
            {person.statistics.likes}
          </p>
          <p className="profile-card__footer-label">Likes</p>
        </div>
        <div className="profile-card__footer-item">
          <p className="profile-card__footer-number">
            {person.statistics.photos}
          </p>
          <p className="profile-card__footer-label">Photos</p>
        </div>
      </footer>
    </section>
  );
};

export default ProfileCardContent;
