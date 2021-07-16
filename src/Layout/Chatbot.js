import React, { useState } from "react";

const style = {
  width: "30%",
};

function Chatbot({ messageGroups, responseGroups }) {
  // const initialMessageGroup = {
  //   index: 0,
  //   messages: messageGroups[0].messages,
  // };

  // const initialResponseGroup = {
  //   index: 0,
  //   responseChoices: responseGroups[0].responseChoices,
  // };

  const [messageGroup, setMessageGroup] = useState(messageGroups[0]);

  const [responseGroup, setResponseGroup] = useState(responseGroups[0]);

  const botMessageLis = messageGroup.messages.map((botMessage) => (
    <li className="list-group-item my-2 rounded" key={botMessage.id}>
      <p>{botMessage.text}</p>
    </li>
  ));

  const clickResponseHandler = (id) => {
    const newMessageGroup = messageGroups[messageGroup.index + 1].messages;

    for (let message of newMessageGroup) {
      if (Array.isArray(message.message)) {
        const newMessages = [
          newMessageGroup[0].message[id],
          newMessageGroup[1],
        ];
        setMessageGroup({ messages: newMessages });
        return null;
      }
    }

    setMessageGroup({
      messages: newMessageGroup,
    });
  };

  const responseButtons = responseGroup.responseChoices.map((choice) => (
    <button
      type="button"
      className="btn btn-primary my-2 rounded"
      key={choice.id}
      onClick={() => clickResponseHandler(choice.id)}
    >
      {choice.response}
    </button>
  ));

  return (
    <main className="row bg-dark">
      <div className="row bg-dark">
        <div className="row bg-dark border-light text-white px-5 py-5">
          <div className="bot-messages">
            <ul className="list-group" style={style}>
              {botMessageLis}
            </ul>
          </div>
          <div className="response-choices">
            <div className="btn-group-vertical" role="group">
              {responseButtons}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Chatbot;
