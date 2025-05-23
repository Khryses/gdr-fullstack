
import React, { useEffect, useState } from "react";
import CharacterSheet from "../components/CharacterSheet";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/users/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className="profile-page">
      <h1>Profilo Personaggio</h1>
      {user ? <CharacterSheet user={user} /> : <p>Caricamento...</p>}
    </div>
  );
};

export default ProfilePage;
