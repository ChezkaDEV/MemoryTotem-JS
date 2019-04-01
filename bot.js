const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

// Create an event listener for new members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
    var myArray = [`ALREADY DISTURBED. Proceed with caution ${member}.`,`You better have tacos ${member}.`,`Welcome to the INFJ residence, ${member}.`,`Home is where the pants aren't. Am I right or am I right, ${member}? `,`If you forgot the wine.. just go home ${member}.. Just.. Go home.`,`As you entered this server, I already know everything about you. I mean.. Welcome, ${member}.`,`Welcome aboard ${member}! Go to #get-roles to set your roles and go to #get-to-know-people to stalk everyones information!`,`New server, who dis? ${member}`,`${member} is kind. ${member} is smart. ${member} is welcome.`,`Come in ${member}, we're awesome.`,`Welcome ${member}, it's lit!`,`Wizards Welcome, Muggles Tolerated. Which one are you, ${member}?`,`Welcome ${member}, just don't except much.`,`How You Doin' ${member}?`,`Welcome to the server, ${member}`, `HOL' UP, ${member} IS HERE.`, `You might be new here.. ${member}.. but I'm watching you.`, `Sorry about the mess ${member}, but we kinda live here. Welcome I guess.`, `YAY! ${member} is here!`, `${member}, My Ni says that you shall love it here.`, `Welcome to the dark side ${member}, where all the fun happens.`, `I hope you like hot messes and cactuses ${member}, because it's a mess inside.`, `${member}, you just walked into something you can never get out of :3`, `Welcome to the shitshow, ${member}.`, `Welcome to our group ${member}. Leaving is not an option :3`, `Welcome to my world ${member}! Where we put the FUN in dysfunctional!!`, `Welcome to the real Internet ${member}! where the men are men, the women are men, and the children are the FBI.`, `Oh you're here ${member}. I see the assassins have failed.`, `Welcome to the INFJ Dugeon ${member}. Take some of our complimentary slippers. Cookies and milk are at the back, free spa treatments so long as you're here <3 `, `'Welcome ${member} you are.' - Yoda`, `Welcome ${member}, I hope you brought wine.`, `Well shit ${member}, it's about time you got here!`];
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    channel.send(rand);
});

client.on("message", message => {
    if (message.content === '/avatar') {
        message.reply(message.author.avatarURL);
  } else if (message.content.indexOf("/estj") >- 1) {
        message.channel.send("Lets see what C.S. Joseph thinks about ESTJs! https://cdn.discordapp.com/attachments/460862072138498048/463928638505746452/ESTJ.jpg");
    } else if (message.content.indexOf("/estp") >- 1) {
        message.channel.send("Whats up with ESTPs today? https://cdn.discordapp.com/attachments/460862099766247434/463929677971718144/ESTP.jpg");
    } else if (message.content.indexOf("/entj") >- 1) {
        message.channel.send("Whatcha wanna know about them ENTJs, hmm?! https://media.discordapp.net/attachments/460862118753730570/463928138020159509/ENTJ.jpg");
    } else if (message.content.indexOf("/enfj") >- 1) {
        message.channel.send("i wonder what can ENFJs teach us today? https://cdn.discordapp.com/attachments/460862139394031636/463927976376008734/ENFJ.jpg");
    } else if (message.content.indexOf("/esfj") >- 1) {
        message.channel.send("My hearty ESFJs! https://cdn.discordapp.com/attachments/460862269006413824/463931546617905152/ESFJ.jpg");
    } else if (message.content.indexOf("/esfp") >- 1) {
        message.channel.send("Life of the party, aye? https://cdn.discordapp.com/attachments/460862285280313344/463932090841300992/ESFP.jpg");
    } else if (message.content.indexOf("/entp") >- 1) {
        message.channel.send("Let's dig deep into an ENTPs mind, shall we? We shall! https://cdn.discordapp.com/attachments/460862313407315968/463932451895377920/ENTP.jpg");
    } else if (message.content.indexOf("/enfp") >- 1) {
        message.channel.send("Inspire us ENFPs!! https://cdn.discordapp.com/attachments/460862342025183262/463932948102643713/ENFP.jpg");
    } else if (message.content.indexOf("/istj") >- 1) {
        message.channel.send("Enter the ISTJ! https://cdn.discordapp.com/attachments/460862385121525773/463933360817831936/ISTJ.jpg");
    } else if (message.content.indexOf("/istp") >- 1) {
        message.channel.send("That high Ti though...<3 https://cdn.discordapp.com/attachments/460862404855726080/463933652041072665/ISTP.jpg");
    } else if (message.content.indexOf("/intj") >- 1) {
        message.channel.send("Here comes our lovable INTJs! (You are lovable!) https://cdn.discordapp.com/attachments/460862426750124044/463934345959178261/INTJ.jpg");
    } else if (message.content.indexOf("/infj") >- 1) {
        message.channel.send("You INFJs make me cry of how complicated you are.. Sheeshhh. But I cannot get enough! https://cdn.discordapp.com/attachments/460862453899722785/463934733059883009/INFJ.jpg");
    } else if (message.content.indexOf("/isfj") >- 1) {
        message.channel.send("We can learn a thing or two about perseverance from ISFJs guys. https://cdn.discordapp.com/attachments/460862804161724417/463935084743884800/ISFJ.jpg");
    } else if (message.content.indexOf("/esfj") >- 1) {
        message.channel.send("Our great knight in shining armors: ESFJs! https://cdn.discordapp.com/attachments/460862269006413824/463931546617905152/ESFJ.jpg");
    } else if (message.content.indexOf("/isfp") >- 1) {
        message.channel.send("Whatcha going to create today ISFPs? https://cdn.discordapp.com/attachments/460862823761707012/463281016199577602/ISFP.jpg");
    } else if (message.content.indexOf("/intp") >- 1) {
        message.channel.send("How can my systematic architecture be better optimized, oh great INTP! https://cdn.discordapp.com/attachments/460862848151715841/463283784997928970/INTP.jpg");
    } else if (message.content.indexOf("/infp") >- 1) {
        message.channel.send("My healers of the world, INFPs <3 https://cdn.discordapp.com/attachments/460862867680526337/463284830394646540/INFP.jpg");
    } else if (message.content.indexOf("/alltypes") >- 1) {
        message.channel.send("https://cdn.discordapp.com/attachments/520412050380292116/520428163386572809/Grid_Comparison.png");
    } else if (message.content.indexOf("/ballin") >- 1) {
        var myArray = ["http://gph.is/2dlGkTK", "http://gph.is/1gR6TLl","http://gph.is/2EzMeNI",
                    "http://gph.is/2jwd1ip","http://gph.is/2c3WnGB","http://gph.is/1481oPl","https://gph.is/2sQUguT",
                    "http://gph.is/2jSvOp7","http://gph.is/1afYL81","http://gph.is/16PaQvm", "http://gph.is/2jnQVUb",
                    "http://gph.is/1PFX8VC","http://gph.is/28WN6fK","https://gph.is/1hYUc3j","http://gph.is/2gfa5YZ",];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    }  else if (message.content.indexOf("/dipreject") >- 1) {
        var myArray = ["https://media.giphy.com/media/O0GsnJyMPE2kM/giphy.gif","https://media.giphy.com/media/KquIfOxOe2oAo/giphy.gif","https://media.giphy.com/media/5YXZorc7vxJ7i/giphy.gif5","https://media.giphy.com/media/12OLpSrTR4VSFy/giphy.gif","https://media.giphy.com/media/9rpip2cxHBdU36GyHN/giphy.gif","https://media.giphy.com/media/mIvrv5Qe0kHlu/giphy.gif","https://media.giphy.com/media/3osxYz9sSvPoM8IRva/giphy.gif","https://media.giphy.com/media/mZ4GocL1wyGjK/giphy.gif","https://media.giphy.com/media/3o85xLDcbiw2Gy7evu/giphy.gif","https://media.giphy.com/media/8c0m9WFwG450I/giphy.gif","https://imgur.com/E0SyWpA","https://media.giphy.com/media/3o85xCUeTihvzB0sXm/giphy.gif"];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/ball") >- 1) {
        var myArray = ["http://gph.is/2nQ2zXB","http://gph.is/2jan1zJ","http://gph.is/14llJ4m",
                    "http://gph.is/17BQ4QS","http://gph.is/1tNtbHr", "http://gph.is/1He0FWZ", "http://gph.is/1BZ1yvd",
                    "http://gph.is/1BmeL4l","http://gph.is/11uPhPJ","http://gph.is/2nHXhfS","http://gph.is/1J05az4",
                    "http://gph.is/1KNIpkT","http://gph.is/H6lSEa","http://gph.is/1cbCdXl","https://gph.is/XHu1pb"];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/bigman") >- 1) {
        var myArray = ["http://gph.is/15cWh2q",
                    "http://gph.is/1cpvyWM","http://gph.is/1KuqgpI","http://gph.is/1h4OSsK","http://gph.is/1dJfzlL",
                    "http://gph.is/1dMPKkz","http://gph.is/1hGjS3u","http://gph.is/29P50my","http://gph.is/11jCUG3",
                    "http://gph.is/1Q4oGT6","http://gph.is/1d4wtzp","http://gph.is/2Ey7P9i","http://gph.is/2I5Kw95"];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/popcorn") >- 1) {
        var myArray = ["http://gph.is/1maw8c4", "http://gph.is/2kNhZcX",
                    "http://gph.is/11wIvJe", "http://gph.is/28Nehcr","http://gph.is/2bf6WDj","https://gph.is/2rU2uEh",
                    "http://gph.is/16AKCRi", "http://gph.is/1pyI61i", "http://gph.is/24HSn1s", "http://gph.is/29IuioH",
                    "http://gph.is/14RlW1g","http://gph.is/25Gkrnn","http://gph.is/18lWpkb",
                    "http://gph.is/1aSIxlc","http://gph.is/19yQDcd","http://gph.is/2cTd59b","http://gph.is/19yQtl8",
                    "http://gph.is/1eezGa9","https://gph.is/1NeUCj9", "https://gph.is/2Axxtw1"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/doffy") >- 1) {
        var myArray = ["Doffy! http://gph.is/28JRcfR","http://gph.is/1APHzNC","http://gph.is/291u1MC","http://gph.is/2qyRPiC",
                "Doffy, I missed you~!","Big Man ESTP is HERE!", "Hi doffy~", "You're the BEST!",
                "DOFFFFYYYY~!~!~!~!~!", "Doffy is in the houssseee!", "Whatcha up to today my good ESTP?"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    }  else if (message.content.indexOf("/hide") >- 1) {
        var myArray = ["https://media.giphy.com/media/TNKIEN3GaoWpG/giphy.gif", "https://media.giphy.com/media/3o84U1BGsvE134xA9G/giphy.gif", "https://media.giphy.com/media/KxcxysGVErgfm/giphy.gif", "https://media.giphy.com/media/Ylm8EmwVCStyFM41Yd/giphy.gif", "https://media.giphy.com/media/GBwq4BjJnWF8I/giphy.gif", "https://media.giphy.com/media/usY7qEZ1W2ali/giphy.gif", "https://media.giphy.com/media/26gsbCBIgy3RcItgI/giphy.gif", "https://media.giphy.com/media/jbwsLn6OvdO80/giphy.gif", "https://media.giphy.com/media/12yBKshqZ28MRG/giphy.gif", "https://media.giphy.com/media/l0HlNyrvLKBMxjFzG/giphy.gif", "https://media.giphy.com/media/l3q2TeZAHGBgs9IDC/giphy.gif", "https://media.giphy.com/media/V1NxC1YoNEHBe/giphy.gif", "https://media.giphy.com/media/xT0xemn9kAM4F52NFK/giphy.gif", "https://media.giphy.com/media/l0MYF44K8NgPSYwRa/giphy.gif", "https://media.giphy.com/media/9GIFGeuuinRxgEj7Zq/giphy.gif", "https://media.giphy.com/media/3HELB2Qwfu9dV1ZGYY/giphy.gif", "https://media.giphy.com/media/Adqe9XUP3x9LO/giphy.gif", "https://media.giphy.com/media/nspvD8XYqUxP2/giphy.gif", "https://media.giphy.com/media/B37cYPCruqwwg/giphy.gif", "https://media.giphy.com/media/COYGe9rZvfiaQ/giphy.gif",];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/hackerman") >- 1) {
        message.channel.send("https://cdn.discordapp.com/attachments/525046526557421570/551080126213914624/4d7.png");
    } else if (message.content.indexOf("/comfort") >- 1) {
        var myArray = ["https://cdn.discordapp.com/attachments/521833712288268298/530617629577052170/6xx8ecfegb821.png","https://external-preview.redd.it/mp4/UNM6751zVnFZaXx3fZ6HvmRbx1JQNdxzdqHpuvVPwVo-source.mp4?s=cebdd9ae162142e5806c7ff569021372d9ab1141","http://gph.is/2loY72U","http://gph.is/2ElfEDh","http://gph.is/2IAczO4","http://gph.is/2nq5i9T","https://gph.is/2mlqHRf","http://gph.is/2jeEDso",
                    "http://gph.is/2kuWelr","https://gph.is/2LgMIfd","http://gph.is/2eMVqmm","http://gph.is/2sRP2lL","http://gph.is/2dlboRM",
                    "https://gph.is/2NsKzy8","http://gph.is/2iSDc6Z","http://gph.is/2dbYlE2","http://gph.is/1f1Ibvp","https://gph.is/2IZ4a6Q",
                    "http://gph.is/1uQztDb","http://gph.is/2je4FfU","http://gph.is/2fYny9E","http://gph.is/2lK3poO","http://gph.is/2nwJKKu",
                    "http://gph.is/1tEpktQ","http://gph.is/2xEC7qz","http://gph.is/2FvkdYG","https://gph.is/2PvnwUr","https://gph.is/2JTZkaA",
                    "https://gph.is/2JTZezK","http://gph.is/2EpwD7j","http://gph.is/2A4ObjL","https://gph.is/2JswTkp","http://gph.is/2uL7Xxi",
                    "http://gph.is/XIcMnP","http://gph.is/2aiMrLg","http://gph.is/2fYErRF","http://gph.is/1NqlIW3","http://gph.is/2jn3slZ",
                    "https://gph.is/2BED83b","http://gph.is/2aA48C2","http://gph.is/2fMMXz2","http://gph.is/2g6wFlx","http://gph.is/2wcmmGn"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/dip") >- 1) {
        var myArray = ["https://media.giphy.com/media/13sozYO4hmSMUw/giphy.gif","https://media.giphy.com/media/haEpZ7eLjtZM4/giphy.gif","https://gph.is/g/aQA3nba","http://gph.is/LF9JsP","http://gph.is/11WXB7F","http://gph.is/1heaaoC","http://gph.is/2mWzTNG","http://gph.is/1BSU9Tq","https://gph.is/2Hs9nCu","http://gph.is/ZouwHV","http://gph.is/11RS3RB","http://gph.is/VwATUb","https://imgur.com/a/rd9a8wD","https://tenor.com/view/devilman-crybaby-run-gif-10824304","http://gph.is/VwFBBn","http://gph.is/1sFQ956", "http://gph.is/1o8bWNB","http://gph.is/2c19tlH","https://gph.is/2KClbVk","http://gph.is/1JzLn0q","http://gph.is/Vx7IjP","http://gph.is/2a9u0IM","http://gph.is/2pBao24","http://gph.is/2gNYzpN","http://gph.is/2B1uYCu"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/compliment") >- 1) {
        var myArray = ["http://gph.is/2o3oEnP","http://gph.is/1ELmRUE","http://gph.is/2jn3slZ","http://gph.is/1YkOQEx","http://gph.is/XLpy51","http://gph.is/28K0w3i","http://gph.is/2of0ian","http://gph.is/2jWBwr8","http://gph.is/2kNsrCV","http://gph.is/1TIXwmJ","http://gph.is/2cuwW3I","http://gph.is/2GF9tao","http://gph.is/2jItST4","https://gph.is/Ktxwvq","http://gph.is/2lM9X3r","https://gph.is/2DAIJuh","http://gph.is/15MLKRw","http://gph.is/23gz95P","http://gph.is/2dMsHkX","http://gph.is/2dkW1fr","http://gph.is/2l0OAiD","http://gph.is/1rI9aeB","http://gph.is/2nqrqA7","https://gph.is/2JY2vir","http://gph.is/2d1OaGp","http://gph.is/2hdmZ9I","https://gph.is/2wWAoOo","http://gph.is/2kQz8EU","http://gph.is/2lL3q9j","http://gph.is/2vMfKPX","http://gph.is/2mXuLc1","http://gph.is/1sNlAKC","http://gph.is/29iPyQY","http://gph.is/2FhUXop","http://gph.is/2lu5baN","http://gph.is/2mu78ce","http://gph.is/2mchSeY"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/grats") >- 1) {
        var myArray = ["https://cdn.discordapp.com/attachments/521826889023881216/561768376687525888/DCmsyDq.png", "https://www.youtube.com/watch?v=wDajqW561KM","https://youtu.be/1Bix44C1EzY"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/smug") >- 1) {
        var myArray = ["https://i.imgur.com/Vb0Ii1n.jpg", "https://i.imgur.com/5vLmPj2.jpg","https://i.imgur.com/NxaAFjn.png", "https://i.imgur.com/06T923R.jpg", "https://i.imgur.com/OJwseAf.jpg", "https://i.imgur.com/OhKe78s.png", "https://i.imgur.com/BTwvHvi.png", "https://i.imgur.com/DmV9aUy.jpg", "https://i.imgur.com/ImevMlI.jpg", "https://i.imgur.com/DhLWpHL.png", "https://i.imgur.com/8hyHKnF.png", "https://i.imgur.com/1yITWlW.jpg", "https://i.imgur.com/5pfNGNV.jpg", "https://i.imgur.com/vKBhkNJ.png", "https://i.imgur.com/na9nJCk.png", "https://i.imgur.com/OAEkNCn.jpg", "https://i.imgur.com/YFyqF7i.jpg", "https://i.imgur.com/dVZdL0U.jpg", "https://i.imgur.com/rp3sx5Y.jpg", "https://i.imgur.com/DdlXGt0.jpg", "https://i.imgur.com/nQLaNxd.jpg", "https://i.imgur.com/B43fKuq.jpg", "https://i.imgur.com/IfiKMx3.jpg", "https://i.imgur.com/WmXfLIp.jpg", "https://i.imgur.com/qrHJXCW.jpg", "https://i.imgur.com/Ozp4AOw.jpg", "https://i.imgur.com/e05MPtH.jpg", "https://i.imgur.com/nramwf6.png", "https://i.imgur.com/oduddEx.jpg", "https://i.imgur.com/NwGj1Qb.png", "https://i.imgur.com/QzTTI1d.jpg", "https://i.imgur.com/vHedWVd.jpg", "https://i.imgur.com/JXhJG1L.jpg", "https://i.imgur.com/eID1jOj.jpg", "https://i.imgur.com/DiWS30Y.jpg", "https://i.imgur.com/5MXN7SX.jpg"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/ni") >- 1) {
        message.channel.send("https://youtu.be/pmvrl1OfELo?t=30");
    } else if (message.content.indexOf("/fax") >- 1) {
        message.channel.send("https://cdn.discordapp.com/attachments/525046526557421570/539605915310096394/Fax-Punch.png");
    }  else if (message.content.indexOf("/handshake") >- 1) {
        message.channel.send("https://giphy.com/gifs/arnold-schwarzenegger-predator-carl-weathers-BvsKJXGzqfNPq");
    } else if (message.content.indexOf("/zoop") >- 1) {
        message.channel.send("https://discordemoji.com/assets/emoji/fingergunz.gif");
    } else if (message.content.indexOf("/gf3") >- 1) {
        message.channel.send("https://tenor.com/view/godfather-the-godfather-the-godfather-part-iii-michael-corleone-they-pull-me-back-in-gif-5625954");
    } else if (message.content.indexOf("/csj-grid") >- 1) {
        message.channel.send("https://cdn.discordapp.com/attachments/521813298577014800/521813965324681292/Temperament_Matrix.png https://cdn.discordapp.com/attachments/521813298577014800/521814013051404317/Type_Grid.png");
    } else if (message.content.indexOf("/core1") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "THE Reformer - Enneagram Type One",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-1"
                    },
                    {
                        name: "The Rational, Idealistic Type:",
                        value: "Principled, Purposeful, Self-Controlled, and Perfectionistic"
                    },
                    {
                        name: "",
                        value: "Ones are conscientious and ethical, with a strong sense of right and wrong. They are teachers, crusaders, and advocates for change: always striving to improve things, but afraid of making a mistake. Well-organized, orderly, and fastidious, they try to maintain high standards, but can slip into being critical and perfectionistic. They typically have problems with resentment and impatience. At their Best: wise, discerning, realistic, and noble. Can be morally heroic."
                    },
                ]
              }
            });
    } else if (message.content.indexOf("/help") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "Whats up Fellas! Here's the list of commands I know so far! " + 
                            "If you want to teach me anymore commands, feel free to go to **#bytes-bot-request** channel~",
                fields: [
                    {
                        name: "/[type]",                              
                        value: "Brings up the type chart for a specific type. Replace `[type]` with the type you want (e.g. **/infj**)"
                    },
                    {
                        name: "/csj-grid",                              
                        value: "Brings up CSJ's typegrid"
                    },
                    {
                        name: "/alltypes",                               
                        value: "Brings up all 16 type charts."
                    },
                    {
                        name: "/core[x]",                              
                        value: "Bring up the Enneagram description for each core type."
                    },
                    {
                        name: "/hackerman",
                        value: "Brings up Hackerman image :D"
                    }, 
                    {
                        name: "/avatar",
                        value: "Check your avatar!"
                    }, 
                    {
                        name: "/hide",
                        value: "When you want to hide!"
                    },
                    {
                        name: "/popcorn",                            
                        value: "Brings up a popcorn GIF. HAND selected~"
                    },
                    {
                        name: "/ballin",                              
                        value: "Brings up a ballin GIF. HAND selected~"
                    },
                    {
                        name: "/ball",                              
                        value: "Brings up a ball GIF. HAND selected~"
                    }, 
                    {
                        name: "/dipreject",
                        value: "When someone wants to dip but failed.."
                    },
                    {
                        name: "/bigman",                              
                        value: "Brings up a bigman GIF. HAND selected~"
                    },
                    {
                        name: "/doffy",                            
                        value: "A command for me to talk to Doffy!"
                    },
                    {
                        name: "/comfort",                            
                        value: "A command to get some comfort from yours truly~"
                    },
                    {
                        name: "/dip",                            
                        value: "A command to dip the f outta here! HAND selected~"
                    },
                    {
                        name: "/compliment",                            
                        value: "A command to compliment someone. HAND selected~"
                    },
                    {
                        name: "/grats",                            
                        value: "A command to congratulate someone."
                    },
                    {
                        name: "/gf3",                            
                        value: "A command to one godfather command requested by Doffy."
                    },
                    {
                        name: "/ni",                            
                        value: "A command to let one know they have strong Ni requested by Syn."
                    },
                    {
                        name: "/zoop",                            
                        value: "A command to zoop."
                    },
                    {
                        name: "/handshake",
                        value: "A command to give a manly handshake with muscles."
                    },
                    {
                        name: "/fax",
                        value: "A command let someone know you agree with what they say. fax = facts."
                    },
                    {
                        name: "/smug",
                        value: "A command to smug"
                    }
                ]
              }
        });
    } 





});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
