import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LineBreak } from "../../../components/HealthStyles";

const MeditationSteps = () => {
  return (
    <View
      style={{
        marginTop: 10,
        padding: 15,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: "#4C4C4C",
        borderRadius: 25,
      }}
    >
      <Text style={{ color: "#FFFAF0", fontWeight: 800 }}>
        <Text style={{ color: "aqua", fontWeight: 900 }}>
          <Feather name="arrow-right" size={15} color="aqua" /> What's a good
          meditation for beginners?
        </Text>
        {"\n"}
        {"\n"}
        One kind of meditation technique that's good for beginners is a body
        scan meditation, which helps us check in with our bodies by mentally
        scanning each part.{"\n"}
        Imagine a photocopier slowly moving over us, from our head to our toes,
        detecting any sensations in the body. As we scan down, we notice which
        parts feel relaxed or tense, comfortable or uncomfortable, light or
        heavy. And we do our best to recognize how we're feeling without judging
        ourselves or trying to change what we feel. Research shows that
        practicing regular body scans can help reduce stress-induced hormones.
        {"\n"}
        Want to give it a try? With our eyes closed, bring our focus to the top
        of our heads. Slowly, begin to scan down. Spend about 20 seconds
        noticing how each body part feels, then move on to the next. Move from
        the head to the eyebrows, eyes and ears, our nose, mouth, and throat.
        Keep scanning down the neck and shoulders, the chest and arms, down to
        the toes.{"\n"}
        When we get distracted by a thought, notice it, let it go, and return
        our focus to the area of the body we last left off. When we finish the
        body scan, open the eyes.{"\n"}
        {"\n"}
        {"\n"}
        <Text style={{ color: "aqua", fontWeight: 900 }}>
          <Feather name="arrow-right" size={15} color="aqua" /> How do I stick
          with meditation for beginners?
        </Text>
        {"\n"}
        {"\n"}
        The best way to to set ourselves up to keep meditating is knowing our
        intention. Why do we want to meditate? Being clear about what we want to
        get out of our practice — whether it's to feel happier, feel calmer, be
        more focused, or be less stressed — will be a big help in creating the
        right attitude going into it. When we start to feel bored, restless, or
        doubtful during practice, we can easily remind ourselves of our
        intention. It can be the motivation we need to keep our commitment.
        {"\n"}It might also be easier for beginners to make meditation a habit
        if we can remember there's no pressure to “get it right.” As long as we
        show up to take time for ourselves, we're doing great. Even if we've
        missed several planned sessions and start to think, “I'm not cut out for
        this.” Or we try it and think, “I'm not good at meditating.” Those are
        just thoughts. We can notice them, let them go, and get back to being
        kind to our mind.
      </Text>
    </View>
  );
};

export default MeditationSteps;
