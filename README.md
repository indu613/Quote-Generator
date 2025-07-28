# Chrome Extension Using JavaScript
#### Video Demo: https://youtu.be/FNhAoC0X2Ck?si=l2ozFlwe1S5qMZmg
#### Description:

## Preview:
A chrome extension that displays random motivational quotes on button click. It brings motivation whenever you feel lacking of it, just with a button click.

## Description:
This is a lightweight Chrome extension designed to lift your spirits and motivate you through thoughtfully selected quotes. At the core, it is a simple tool that generates a random inspirational quote every time you click a button. This extension is perfect for students, professionals, or anyone who needs a small dose of encouragement throughout the day. Rather than browsing websites or using an app, this extension gives you access to motivational words right from your browser.
It’s built with ease of use in mind. The interface is minimal, the experience is smooth, and the content is always fresh. Whether you're preparing for a task, winding down after a long session, or just need a mental refresh, “Inspire Me” gives you a reason to keep going. The quotes are sourced from well-known authors, historical figures, and cultural icons - all carefully chosen to be encouraging, uplifting, and relevant.

## Features:
Random quote generation: Each time you click the “Inspire Me” button, a new motivational quote appears.
Dark theme interface: A clean, modern design with comfortable dark background and vibrant highlights.
Offline functionality: Works entirely without an internet connection. All quotes are stored locally.
Custom icon: The extension has a unique icon so it’s easy to find in your Chrome toolbar.
Fast and efficient: Loads instantly with no lags or performance delays.
Expandable: Easy to add or replace quotes for personalization or future updates.

## Technologies used:
HTML5 – Used to build the popup layout and structure the user interface.
CSS3 – Styles the popup with a modern dark theme, responsive design, and interactive button elements.
JavaScript (Vanilla) – Powers the quote generation logic and handles dynamic updates in the popup.
Chrome Extension APIs – Enables the extension to integrate with the browser environment.

## Project Structure
quote-extension/
|-- icon.png
|-- manifest.json
|-- popup.html
|-- popup.js
|-- styles.css

## Working:
The extension operates on a simple principle: fetch a random quote from a local array and display it. Here's a breakdown of the logic:
When the extension icon is clicked, Chrome opens a popup window using popup.html.
This popup contains a text area for displaying the quote and a button labeled “Inspire Me”.
When the button is clicked, JavaScript selects a random quote from a predefined array in popup.js.
The chosen quote is then inserted into the DOM dynamically and displayed in the popup window.
Since all quotes are stored directly in the JavaScript file, the extension doesn’t require an internet connection to function. This also makes loading times nearly instant.

## Sample Quotes:
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
"Nothing is impossible. The word itself says 'I'm possible!' - Audrey Hepburn".
