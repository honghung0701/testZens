import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";
import Cookies from "universal-cookie";
import VoteButton from "./components/VoteButton";

function App() {
  const cookies = new Cookies();
  const [jokesContentId, setJokesContentId] = useState(() => {
    if (cookies.get("lastVote")) {
      return Number(cookies.get("lastVote")) + 1;
    }
    return 0;
  });
  const HandleVote = (index, isFunny) => {
    if (data[jokesContentId].joke == "") {
      alert("That's all the jokes for today! Come back another day!");
      return;
    }
    isFunny ? cookies.set(index, true) : cookies.set(index, false);
    cookies.set("lastVote", index);
    setJokesContentId(jokesContentId + 1);
  };
  return (
    <div className="App">
      <Header />
      <Title />
      <Content title={data[jokesContentId].joke} />
      <hr className="line" />
      <div className="flex-button">
        <VoteButton
          className="funny"
          onClick={() => HandleVote(jokesContentId, true)}
          title="This is Funny!"
        />
        <VoteButton
          className="notFunny"
          onClick={() => HandleVote(jokesContentId, false)}
          title="This is not funny."
        />
      </div>
      {/* <button className="delCookie" onClick={() => cookies.remove("2")}>
        Delete Cookies
      </button> */}
      <hr />
      <Footer />
    </div>
  );
}

const data = [
  {
    joke: (
      <p>
        A child asked his father, "How were people born?" So his father said,
        "Adam and Eve made babies, then their babies became adults and made
        babies, and so on." The child then went to his mother, asked her the
        same question and she told him, "We were monkeys then we evolved to
        become like we are now." The child ran back to his father and said, "You
        lied to me!" His father replied, "No, your mom was talking about her
        side of the family."
      </p>
    ),
    index: "0",
  },
  {
    joke: (
      <p>
        Teacher: "Kids,what does the chicken give you?" Student: "Meat!"
        Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!"
        Teacher: "Great! And what does the fat cow give you?" Student:
        "Homework!"
      </p>
    ),
    index: "1",
  },
  {
    joke: (
      <p>
        The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy
        replied crying, "Because I heard my daddy tell my mommy, 'I am going to
        eat that pussy once Jimmy leaves for school today!'"
      </p>
    ),
    index: "2",
  },
  {
    joke: (
      <p>
        A housewife, an accountant and a lawyer were asked "How much is 2+2?"
        The housewife replies: "Four!". The accountant says: "I think it's
        either 3 or 4. Let me run those figures through my spreadsheet one more
        time." The lawyer pulls the drapes, dims the lights and asks in a hushed
        voice, "How much do you want it to be?"
      </p>
    ),
    index: "3",
  },
  {
    joke: "",
    index: "4",
  },
];

export default App;
