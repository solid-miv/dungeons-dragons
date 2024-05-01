# Dungeons and Dragons Bot

This is a Dungeons&Dragons chatbot. You can try playing with it by replying with the appropriate commands. ALl the essential information is placed in the first message of the bot.

## Local deployment 
You need to follow these steps in order to start the bot:
1) Clone the repository
2) `cd` to `front` directory
3) Run `npm install --force` in terminal to download all dependencies
4) Run `npm run build` to build static frontend
5) Create `back/public` directory and move all what is inside the `front/build` into it
6) `cd` to the root and run `back/server.js`
7) Open the corresponding page in your browser (the default is `localhost:5001`)

## Chatbot preview
Below you can see the design and general view of the bot:
![Bot preview](/assets/preview1.png)