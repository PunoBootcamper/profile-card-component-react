import ProfileCardContent from "../ProfileCardContent/ProfileCardContent";
import "./ProfileCard.css";
import bg_pattern_card from '/img/bg-pattern-card.svg'
const ProfileCard = () => {
    const person = {
      name: 'Victor Crest',
      age: '26',
      location: 'London',
      statistics:{
        followers: '80k',
        likes: '803k',
        photos: '1.4k'
      }
    } 

  
  return (
    <main className="profile-card">
      <figure className="profile-card__background">
        <img src={bg_pattern_card} alt="" />
      </figure>
      <ProfileCardContent person={person}/>
    </main>
  );
};
export default ProfileCard;
