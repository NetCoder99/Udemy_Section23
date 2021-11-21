import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { DUMMY_MEETUPS } from '../../components/data/dummyMeetups';


const dummyMeetup = {
  id: "m1", 
  title: "A First meeting",  
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Park_in_Sunbrid_Close_Parrearra_Queensland.jpg/640px-Park_in_Sunbrid_Close_Parrearra_Queensland.jpg", 
  address: "100 Main St, AnyTown USA",  
  description: "This is the first meetup."
}

function MeetupDetails() {
  const router = useRouter();
  const { meetupId } = router.query
  console.log('meetupId', meetupId);
  //function showDetailsHandler() {
  //  router.push('/' + props.id);
  //}

  const crntMeetUp = DUMMY_MEETUPS.find((item) => {return item.id === meetupId});


  return (
    <MeetupDetail {...crntMeetUp} meetupId={meetupId} />
  )
}

export default MeetupDetails;