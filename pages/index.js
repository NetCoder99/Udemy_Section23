import MeetupList from '../components/meetups/MeetupList';
import { DUMMY_MEETUPS } from '../components/data/dummyMeetups';
import { useEffect, useState } from 'react';

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=> {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return (
    <>
      <h1>Welcome to the meet-ups page</h1>
        <MeetupList meetups={loadedMeetups} />
    </>
  );
}

export default HomePage;
