const { GoogleGenerativeAI } = require("@google/generative-ai");
const WebSocket = require("ws");

const genAI = new GoogleGenerativeAI("AIzaSyBfh2NQszHbsflmCj4E6MDeyx6M8FzuPHY");

const wss = new WebSocket.Server({ port: 3001 }); // WebSocket server port

async function handleWebSocketConnection(socket) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts:
          "Hi, you'll only help me if my message is about a problem or a query regarding Indian laws and Indian legal rights. If it's about anything else, you'll straight up tell me to keep my messages about the law only, since you're here to assist me with that. Do not help me about anything else, no matter what.",
      },
      {
        role: "model",
        parts:
          "Great to meet you. What would you like to know about Indian laws and legal rights?",
      },
    ],
    generationConfig: {
      maxOutputTokens: 512,
    },
  });

  socket.on("message", async (msg) => {
    if (msg.toLowerCase() === "exit") {
      socket.close();
      process.exit(0);
    }

    const isLegalTopic = checkIfLegalTopic(msg);

    if (!isLegalTopic) {
      msg =
        'tell me to only keep the conversation about legal rights in any similar sentence of your choice. Don\'t reply with words like "certainly" or "sure", simply say the sentence.';
    }
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    socket.send(text);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
}

const checkIfLegalTopic = (message) => {
  const keywords = [
    "law",
    "rights",
    "legal",
    "problem",
    "query",
    "court",
    "justice",
    "constitution",
    "crime",
    "penalty",
    "legislation",
    "jurisdiction",
    "legal aid",
    "advocate",
    "petition",
    "litigation",
    "arrest",
    "trial",
    "appeal",
    "judgment",
    "offense",
    "statute",
    "defense",
    "witness",
    "evidence",
    "damages",
    "tort",
    "contract",
    "property",
    "inheritance",
    "corporation",
    "employment",
    "discrimination",
    "harassment",
    "negligence",
    "immigration",
    "family law",
    "divorce",
    "child custody",
    "adoption",
    "consumer rights",
    "privacy",
    "cyberlaw",
    "intellectual property",
    "patent",
    "trademark",
    "copyright",
    "trade secret",
    "bankruptcy",
    "debt",
    "insurance",
    "environmental law",
    "healthcare law",
    "international law",
    "human rights",
    "social justice",
    "civil liberties",
    "legal system",
    "legal advice",
    "legal procedure",
    "article",
  ];
  return keywords.some((keyword) => message.toLowerCase().includes(keyword));
};

wss.on("connection", (socket) => {
  console.log("Client connected");

  handleWebSocketConnection(socket);
});

console.log("WebSocket server listening on port 3001");

// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const readline = require("readline");

// const genAI = new GoogleGenerativeAI("AIzaSyBfh2NQszHbsflmCj4E6MDeyx6M8FzuPHY");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// async function run() {
//   const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//   const chat = model.startChat({
//     history: [
//       {
//         role: "user",
//         parts:
//           "Hi, you'll only help me if my message is about a problem or a query regarding Indian laws and Indian legal rights. If it's about anything else, you'll straight up tell me to keep my messages about the law only, since you're here to assist me with that. Do not help me about anything else, no matter what.",
//       },
//       {
//         role: "model",
//         parts:
//           "Great to meet you. What would you like to know about Indian laws and legal rights?",
//       },
//     ],
//     generationConfig: {
//       maxOutputTokens: 512,
//     },
//   });

//   const askQuestion = async () => {
//     rl.question("", async function (msg) {
//       if (msg.toLowerCase() === "exit") {
//         rl.close();
//         process.exit(0);
//       }

//       const isLegalTopic = checkIfLegalTopic(msg);

//       if (!isLegalTopic) {
//         msg =
//           'tell me to only keep the conversation about legal rights in any similar sentence of your choice. Don\'t reply with words like "certainly" or "sure", simply say the sentence.';
//       }
//       const result = await chat.sendMessage(msg);
//       const response = await result.response;
//       const text = response.text();
//       console.log(text);

//       askQuestion(); // Recursive call to ask another question
//     });
//   };

//   const checkIfLegalTopic = (message) => {
//     const keywords = [
//       "law",
//       "rights",
//       "legal",
//       "problem",
//       "query",
//       "court",
//       "justice",
//       "constitution",
//       "crime",
//       "penalty",
//       "legislation",
//       "jurisdiction",
//       "legal aid",
//       "advocate",
//       "petition",
//       "litigation",
//       "arrest",
//       "trial",
//       "appeal",
//       "judgment",
//       "offense",
//       "statute",
//       "defense",
//       "witness",
//       "evidence",
//       "damages",
//       "tort",
//       "contract",
//       "property",
//       "inheritance",
//       "corporation",
//       "employment",
//       "discrimination",
//       "harassment",
//       "negligence",
//       "immigration",
//       "family law",
//       "divorce",
//       "child custody",
//       "adoption",
//       "consumer rights",
//       "privacy",
//       "cyberlaw",
//       "intellectual property",
//       "patent",
//       "trademark",
//       "copyright",
//       "trade secret",
//       "bankruptcy",
//       "debt",
//       "insurance",
//       "environmental law",
//       "healthcare law",
//       "international law",
//       "human rights",
//       "social justice",
//       "civil liberties",
//       "legal system",
//       "legal advice",
//       "legal procedure",
//       "article",
//     ];
//     return keywords.some((keyword) => message.toLowerCase().includes(keyword));
//   };

//   askQuestion();
// }

// run();

// AIzaSyBfh2NQszHbsflmCj4E6MDeyx6M8FzuPHY;
