const quotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
  "Success is not how high you have climbed, but how you make a positive difference.- Roy T. Bennett",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Keep going. Everything you need will come to you at the perfect time.",
  "Push yourself, because no one else is going to do it for you.",
  "Failure is a great teacher and, if you are open to it, every mistake has a lesson to offer. - Oprah Winfrey",
  "If you don't like the road you're walking, start paving another one. - Dolly Parton",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
  "Be persistent and never give up hope. - George Lucas",
  "When we strive to become better than we are, everything around us becomes better too. - Paulo Coelho",
  "Believe and act as if it were impossible to fail. - Charles Kettering",
  "There are so many great things in life; why dwell on negativity? - Zendaya",
  "Happiness often sneaks in through a door you didn't know you left open. - John Barrymore",
  "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
  "Keep your face towards the sunshine and shadows will fall behind you. - Walt Whitman",
  "A problem is a chance for you to do your best. - Duke Ellington",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens. - Mandy Hale",
  "Nothing is impossible. The word itself says 'I'm possible!' - Audrey Hepburn",
  "Life does not have to be perfect to be wonderful. - Annette Funicello",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "The best way out is through. - Robert Frost",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Whether you think you can or you can't, you're right. - Henry Ford",
  "Don't take yourself too seriously. Know when to laugh at yourself, and find a way to laugh at obstacles that inevitably present themselves. - Halle Bailey",
  "Love the life you live. Live the life you love. - Bob Marley",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that. - Ava DuVernay",
  "If you change the way you look at things, the things you look at change. - Wayne Dyer",
  "I believe that if you'll just stand up and go, life will open up for you. Something just motivates you to keep moving. - Tina Turner",
  "Once you face your fear, nothing is ever as hard as you think. - Olivia Newton-John",
  "Next time, ask 'What's the worst that will happen?' Then push yourself a little further than you dare. - Audre Lorde",
  "Dreams do not come true just because you dream them. It's hard work that makes things happen. It's hard work that creates change. - Shonda Rhimes",
  "Let us make our future now, and let us make our dreams tomorrow's reality. - Malala Yousafzai"
];

document.getElementById("newQuote").addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
});
