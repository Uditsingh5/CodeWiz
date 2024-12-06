const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chats");
const sendMessageButton = document.querySelector("#sendButton");
var x;
const textArea = document.querySelector(".resize");
textArea.addEventListener("input", autoResize);
function autoResize() {
    x = textArea.style.height;
    textArea.style.height = 'auto';
    if (textArea.style.height > x) {
        textArea.style.height = textArea.scrollHeight + 'px';
        x = textArea.style.height;
    }
    else {
        textArea.style.height = textArea.style.height - textArea.scrollHeight + 'px';
        x = textArea.style.height;
    }
}

//API setup
const API_KEY = "AIzaSyDvKyxgHu1lPrW6HkuwvvJaGgZPf6-b8pY"; // Your API key here
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;


// Initialize user message and file data

const userData = {
    message: null,
    file: {
        data: null,
        mime_type: null,
    },
};


// const userData = {
//     message: null
// };

//added recent
const chatHistory = [];
const initialInputHeight = messageInput.scrollHeight;

// creating msg elements and adding classes 
const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("msg", ...classes);
    div.innerHTML = content;
    return div;
}

//generate bot response using api
const generateBotResponse = async (incomingMessageDiv) => {
    const MessageElement = incomingMessageDiv.querySelector("p");

    //recently added
    // Add user message to chat history
    chatHistory.push({
        role: "user",
        parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: userData.file }] : [])],
    });

    //api request options
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            //contents: [{
            //parts: [{ text: userData.message }]
            //}]
            contents: chatHistory,
        })
    }
    try {
        //fetch response from api
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);

        //extract data from response text of bot
        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        // console.log(data);
        const parsedApiResponse = marked.parse(apiResponseText);
        MessageElement.innerHTML = parsedApiResponse;
        // showTypingEffect(apiResponseText, MessageElement, incomingMessageDiv);
        console.log(apiResponseText);


        // Add bot response to chat history
        chatHistory.push({
            role: "model",
            parts: [{ text: apiResponseText }],
        });

        //adding language detection & highlighting
        document.querySelectorAll("pre code").forEach((block) => {
            //syntax highlighting
            hljs.highlightBlock(block);
            addCopyButtonToCodeBlocks();

        });






        //             const parsedApiResponse = marked.parse(responseText);
        //             const rawApiResponse = responseText;
        //             console.log(responseText);

        //             showTypingEffect(rawApiResponse, parsedApiResponse, messageTextElement, incomingMessageElement);


    } catch (error) {
        console.log(error);
        MessageElement.innerText = error.message;
        MessageElement.style.color = "#ff0000";
    } finally {
        userData.file = {};
        incomingMessageDiv.classList.remove("thinking");
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

    }
}

// handle outgoing user message
const handleOutgoingMessage = (e) => {
    e.preventDefault();


    userData.message = messageInput.value.trim();
    messageInput.value = "";
    autoResize();
    //create user message and display it
    const messageContect = `<div class="usermsg"><p></p></div>`;

    const outgoingMessageDiv = createMessageElement(messageContect, "usermsg");
    outgoingMessageDiv.querySelector(".usermsg p").textContent = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

    //stimulating bot response after delay
    setTimeout(() => {

        const messageContect = `<div class="botmsg"><p>Thinking...</p></div>`;
        const incomingMessageDiv = createMessageElement(messageContect, "botmsg", "thinking");
        chatBody.appendChild(incomingMessageDiv);
        chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
        generateBotResponse(incomingMessageDiv);

    }, 600);
}

//preventing enter to send

// send on enter key handling
// messageInput.addEventListener("keydown", (e) => {
//     const userMessage = e.target.value.trim();
//     if (e.key === "Enter" && userMessage) {
//         handleOutgoingMessage(e);
//     }
// });



//click arrow button to send the message
sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e));






// Show typing effect

// const typingContainer = document.getElementsByClassName("botmsg");

// const text = "Hello, welcome to the typing animation demo!";
// const typingSpeed = 100; // Milliseconds per character

// let charIndex = 0;

// function typeText() {
//     if (charIndex < text.length) {
//         typingContainer.textContent += text[charIndex];
//         charIndex++;
//         setTimeout(typeText, typingSpeed);
//     }
// }

// typeText();

// const showTypingEffect = (rawText, htmlText, MessageElement, incomingMessageElement, skipEffect = false) => {
//     const copyIconElement = incomingMessageElement.querySelector(".message__icon");
//     copyIconElement.classList.add("hide"); // Initially hide copy button

//     if (skipEffect) {
//         // Display content directly without typing
//         MessageElement.innerHTML = htmlText;
//         hljs.highlightAll();
//         addCopyButtonToCodeBlocks();
//         copyIconElement.classList.remove("hide"); // Show copy button
//         isGeneratingResponse = false;
//         return;
//     }

//     const wordsArray = rawText.split(' ');
//     let wordIndex = 0;

//     const typingInterval = setInterval(() => {
//         MessageElement.innerText += (wordIndex === 0 ? '' : ' ') + wordsArray[wordIndex++];
//         if (wordIndex === wordsArray.length) {
//             clearInterval(typingInterval);
//             isGeneratingResponse = false;
//             MessageElement.innerHTML = htmlText;
//             hljs.highlightAll();
//             addCopyButtonToCodeBlocks();
//             copyIconElement.classList.remove("hide");
//         }
//     }, 75);
// };

//// copy and label


// Add copy button to code blocks
const addCopyButtonToCodeBlocks = () => {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach((block) => {
        const codeElement = block.querySelector('code');
        let language = [...codeElement.classList].find(cls => cls.startsWith('language-'))?.replace('language-', '') || 'Text';

        const languageLabel = document.createElement('div');
        languageLabel.innerText = language.charAt(0).toUpperCase() + language.slice(1);
        languageLabel.classList.add('code_language-label');
        block.appendChild(languageLabel);

        const copyButton = document.createElement('button');
        copyButton.innerHTML = `<i class='bx bx-copy'></i>`;
        copyButton.classList.add('code_copy-btn');
        block.appendChild(copyButton);

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(codeElement.innerText).then(() => {
                copyButton.innerHTML = `<i class='bx bx-check'></i>`;
                setTimeout(() => copyButton.innerHTML = `<i class='bx bx-copy'></i>`, 2000);
            }).catch(err => {
                console.error("Copy failed:", err);
                alert("Unable to copy text!");
            });
        });
    });
};