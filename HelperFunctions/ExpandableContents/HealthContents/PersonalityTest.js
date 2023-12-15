import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LineBreak } from "../../../components/HealthStyles";

const PersonalityTest = () => {
  const questions = [
    "1. You regularly make new friends.",
    "2. You spend a lot of your free time exploring various random topics that pique your interest.",
    "3. Seeing other people cry can easily make you feel like you want to cry too.",
    "4. You often make a backup plan for a backup plan.",
    "5. You usually stay calm, even under a lot of pressure.",
    "6. At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know.",
    "7. You are more inclined to follow your head than your heart.",
    "8. You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine.",
    "9. You rarely worry about whether you make a good impression on people you meet.",
    "10. You enjoy participating in group activities.",
    "11. You like books and movies that make you come up with your own interpretation of the ending.",
    "12. Your happiness comes more from helping others accomplish things than your own accomplishments.",
    "13. You are interested in so many things that you find it difficult to choose what to try next.",
    "14. You are prone to worrying that things will take a turn for the worse.",
    "15. You avoid leadership roles in group settings.",
    "16. You are definitely not an artistic type of person.",
    "17. You think the world would be a better place if people relied more on rationality and less on their feelings.",
    "18. You prefer to do your chores before allowing yourself to relax.",
    "19. You usually prefer to be around others rather than on your own.",
    "20. You become bored or lose interest when the discussion gets highly theoretical.",
    "21. You find it easy to empathize with a person whose experiences are very different from yours.",
    "22. You usually postpone finalizing decisions for as long as possible.",
    "23. You rarely second-guess the choices that you have made.",
    "24. After a long and exhausting week, a lively social event is just what you need.",
    "25. You enjoy going to art museums.",
    "26. You often have a hard time understanding other people's feelings.",
    "27. You like to have a to-do list for each day.",
    "28. You rarely feel insecure.",
    "29. You avoid making phone calls.",
    "30. You often spend a lot of time trying to understand views that are very different from your own.",
  ];

  const choices = [
    "Strongly Agree",
    "Somewhat Agree",
    "Somewhat Disagree",
    "Disagree",
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (questionIndex, choiceIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = choices[choiceIndex];
    setAnswers(newAnswers);
  };

  const renderChoices = (questionIndex) => {
    return choices.map((choice, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => handleAnswer(questionIndex, index)}
        style={{
          padding: 10,
          backgroundColor:
            answers[questionIndex] === choices[index] ? "#3498db" : "#4C4C4C",
          borderRadius: 10,
          marginVertical: 5,
        }}
      >
        <Text style={{ color: "#fff", fontStyle: "italic", fontWeight: 400 }}>
          {choice}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView>
      {questions.map((question, index) => (
        <View
          key={index}
          style={{
            marginTop: 10,
            padding: 15,
            paddingLeft: 25,
            paddingRight: 25,
            backgroundColor: "#4C4C4C",
            borderRadius: 25,
          }}
        >
          <Text style={{ color: "#FFFAF0", fontWeight: 900, fontSize: 16 }}>
            {question}
          </Text>
          <LineBreak />
          {renderChoices(index)}
        </View>
      ))}

      {/* display the personality type */}
      <View
        style={{
          marginTop: 10,
          padding: 15,
          paddingLeft: 25,
          paddingRight: 25,
          backgroundColor: "aqua",
          borderRadius: 25,
        }}
      >
        <Text style={{ fontWeight: 900, fontSize: 18, color: "#222" }}>
          Your Personality Type: {calculatePersonalityType(answers)}
        </Text>
      </View>
    </ScrollView>
  );
};

// Function to calculate personality type based on answers
const calculatePersonalityType = (answers) => {
  let points = 0;

  answers.forEach((answer) => {
    switch (answer) {
      case "Strongly Agree":
        points += 2;
        break;
      case "Somewhat Agree":
        points += 1;
        break;
      case "Somewhat Disagree":
        points -= 1;
        break;
      case "Disagree":
        points -= 2;
        break;
      default:
        break;
    }
  });

  const personalityTypes = [
    { type: "ENTJ", threshold: 20 },
    { type: "INTJ", threshold: 16 },
    { type: "ENTP", threshold: 12 },
    { type: "INTP", threshold: 8 },
    { type: "ENFJ", threshold: 4 },
    { type: "INFJ", threshold: 0 },
    { type: "ENFP", threshold: -4 },
    { type: "INFP", threshold: -8 },
    { type: "ESTJ", threshold: -12 },
    { type: "ISTJ", threshold: -16 },
    { type: "ESFJ", threshold: -20 },
    { type: "ISFJ", threshold: -24 },
    { type: "ESTP", threshold: -28 },
    { type: "ISTP", threshold: -32 },
    { type: "ESFP", threshold: -36 },
    { type: "ISFP", threshold: -Infinity }, // default
  ];

  return personalityTypes.find((type) => points >= type.threshold).type;
};

export default PersonalityTest;
