import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux'


const CatInfo = ({ catId }) => {
    const userId = useSelector((state) => state.user.uid)
    const [catData, setCatData] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const catRef = ref(db, 'user/' + userId);
    console.log(catData);

    onValue(catRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCatData(data);
      } else {
        setCatData(null);
      }
    });
  }, [userId, catId]);

  return (
    <div>
      {catData && Object.entries(catData).map(([key, value]) => (
        <div className="box-card" key={key}>
          <div className="list-li">{value.name}</div>
          <div className="list-li">{value.power}</div>
          <div className="list-li">{value.endurance}</div>
          <div className="list-li">{value.speed}</div>
          <div className='list-li'>{value.level}</div>
          <div className={`${value.rare === 'Простий' ? 'gray' : value.rare === 'Незвичайний' ? 'green' : value.rare === 'Рідкісний' ? 'blue' : value.rare === 'Епічний' ? 'purple' : value.rare === 'Легендарний' ? 'gold' : 'high-level'} list-li`}>{value.rare}</div>

        </div>
      ))}
    </div>
  );
};

export default CatInfo;
