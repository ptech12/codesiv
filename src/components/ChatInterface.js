import React, { useState } from 'react';
import '../App.css'; // import your CSS file here
import axios from 'axios';

function ChatInterface() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(text)
    // send the user's input to the server using a fetch request
    // fetch('/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ text })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
    axios.post('https://api.openai.com/v1/engine/davinci-codex/completions', {
      prompt: text,
      max_tokens: 50,
      temperature: 0.5,
      n: 1,
      stop: '\n'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CHAT_GPT_API_KEY}`
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });


    // clear the text area
    setText('');

    // close the modal
    handleCloseModal();
  }

  return (
    <div>
      <button onClick={handleOpenModal}>Ask Me Anything</button>
      {showModal &&
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <form onSubmit={handleSubmit}>
              <textarea
                value={text}
                onChange={handleTextChange}
                className="text-area"
                placeholder="Enter some text"
              />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      }
    </div>
  );
}

export default ChatInterface;



// import React, { useState } from 'react'


// import '../App.css'
// import axios from 'axios';
// import ReactModal from 'react-modal';

// ReactModal.setAppElement('#root')

// function ChatInterface() {
//   // userState
//   const [promptText, setPromptText] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleTextChange = event => {
//     setPromptText(event.target.value);
//   }
//   const handleSubmit = () => {
//     setIsLoading(true);
//     axios.post('https', { promptText })
//       .then(response => {
//         console.log(response.data);
//         setIsLoading(false);
//         setIsOpen(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setIsLoading(false);
//       });
//   }

//   return (
//     <div>
//       <button onClick={() => setIsOpen(true)}>Ask Me</button>
//       <ReactModal
//         isOpen={isOpen}
//         onRequestClose={() => setIsOpen(false)}
//         contentLabel="Ask me Anything"
//       >
//         <h2>Ask me Anything</h2>
//         <textarea
//           value={promptText}
//           onChange={handleTextChange}
//           className="text-area"
//           placeholder="Enter some text"
//         />
//         <button onClick={handleSubmit} disabled={isLoading}>Submit</button>
//         {isLoading && <p>Loading...</p>}
//       </ReactModal>
//     </div>
//     // <div>
//     //   <textarea value={promptText}
//     //     className="text-area"
//     //     id='textarea'
//     //     placeholder="Ask Me Anything"
//     //     onChange={handleTextChange} />
//     // </div>
//   )
// }

// export default ChatInterface