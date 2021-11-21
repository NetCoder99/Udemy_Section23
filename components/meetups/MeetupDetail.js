//import { Fragment } from "react";
//import { useRouter } from 'next/router';
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  //const router = useRouter();
  //const { meetupId } = router.query
  //console.log('meetupId', meetupId);

  return (
    <section className={classes.detail}>
      <img src={props.image} alt="Image not found." className={classes.photo}></img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
