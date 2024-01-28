


export const GettingStarted = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h1 className="text-3xl text-center">Getting Started</h1>
          <p>This article will help you get started playing the game from the point you've installed and started the game, and some general points to consider as you come across in a Q&A list format. Some terms will have descriptions when you hover over the words, these words are underlined, and will give you a tooltip with a short description. Please refer to the full Glossary article for more in-depth descriptions.</p>
          <p>Note that the game differs rather greatly whenever you've <em className="underline hover:no-underline" title="Free to play, not spending any money.">F2P</em>, <em className="underline hover:no-underline" title="Bought the Ad-removal package, but nothing else.">Ad-free</em>, <em className="underline hover:no-underline" title="Bought more than just Ad-removal, but not an insane amount.">dolphin</em>, or <em className="underline hover:no-underline" title="Spents several hundreds or thousands every month.">whaling</em>, and even these last two can differ within themselves depending to what degree. This article will try it's best to give general information that either applies to all of the above, or specify any differences.</p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl text-center">Starting off</h2>
          <p>After you start the game for the first time, you're welcomed by a rather cute introduction to the "story". This is the last time it is ever referred to. It's a good idea to follow the tutorial quests, as they give you a rough idea on how to progress the game. As you unlock more parts of the UI, you'll get more of these. They however rather quickly fall off with the absolute handholding, and instead only give you the quests in the middle of the screen which gives you a relatively fine idea on what to do to get stronger.</p>
          <h4 className="text-lg">If you're planning on playing with a friend:</h4>
          <p>It's important to know that the game automatically deligate you to a server, which you have no control over. Generally you will be placed in the newest server. You can see what server you're in by opening the menu at the top right, and going to "Setting". You'll then see what server you're in, formatted with an "S" followed by a number. If you're not on the same server, you can not join the same guild, and you do not share the ranking leaderboard. However Families are able to be formed across servers. We will go more indepth in this later, as well as Server merges. However, if you end up on a different server than your friend, delete your account if possible, and redownload the game to be placed in the newest server.</p>
        </section>
      </div>
    </>
  );
};