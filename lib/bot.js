const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./../lib/controller/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
    

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const data = msg.text;
    const numData = parseInt(data);
    if (!isNaN(numData)) {
        return ExplorerController.getFizzBuzzBot(chatId, bot, numData);
    } else {
        return ExplorerController.getUsernameBot(chatId, bot, data);
    }
});





/*      
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);
    const stringmission = msg.text.toLowerCase();
    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.getbotnumber(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    }
    else if( numberToApplyFb === stringmission){
        bot.sendMessage(chatId, "Escribe correctamente por favor"); 
    }
    
    else if((stringmission === "node")){
        const mission = ExplorerController.getExplorersUsernamesByMission(stringmission);
        const responseBo = `los explores en ${stringmission} son: ${mission}`;
        bot.sendMessage(chatId,responseBo);
    }
    else if((stringmission === "java")){
        const mission = ExplorerController.getExplorersUsernamesByMission(stringmission);
        const responseBo = `los explores en ${stringmission} son: ${mission}`;
        bot.sendMessage(chatId,responseBo);
    }
    else {
        bot.sendMessage(chatId, "Escribe correctamente por favor");
    }
  
});*/