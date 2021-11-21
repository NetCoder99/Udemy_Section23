// our-domain.com/new-meetup
import Layout from '../../components/layout/Layout';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage() {

  function addMeetingHandler(data) {
    //console.table('NewMeetupPage.addMeetingHandler:' + {...data});
    console.log('NewMeetupPage.addMeetingHandler:', data);
  }

  return (
    <>
      <h1>Create a new meeting</h1>
      <NewMeetupForm onAddMeetup={addMeetingHandler} />
    </>
  );
}

export default NewMeetupPage;
