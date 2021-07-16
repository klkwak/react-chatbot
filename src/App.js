import "./App.css";
import Layout from "./Layout/Layout";
import messageGroups from "./data/bot-messages";
import responseGroups from "./data/user-responses";

function App() {
  return (
    <div className="App">
      <Layout messageGroups={messageGroups} responseGroups={responseGroups} />
    </div>
  );
}

export default App;

// TO DO:
// consolidate data files into one large array in a file

// DEVELOPMENT ENV: create server (express and node) and make api calls to access data rather than storing in this repo's files
// postgres: development database
// PRODUCTION ENV:
// send node server code to a cloud server and connect to a cloud-based database OR one hosting instance
// create database and seed it with the .sql files that you used on your local machine
// heroku for deployment would be free

// careerjet
// stackoverflow
