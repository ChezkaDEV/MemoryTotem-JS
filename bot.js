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
    var myArray = [`ALREADY DISTURBED. Proceed with caution ${member}. @everyone`,`You better have tacos ${member}. @everyone`,`Welcome to the INFJ residence, ${member}. @everyone`,`Home is where the pants aren't. Am I right or am I right, ${member}? @everyone`,`If you forgot the wine.. just go home ${member}.. Just.. Go home. @everyone`,`As you entered this server, I already know everything about you. I mean.. Welcome, ${member}. @everyone`,`Welcome aboard ${member}! Go to #get-roles to set your roles and go to #get-to-know-people to stalk everyones information! @everyone`,`New server, who dis? ${member}. @everyone`,`${member} is kind. ${member} is smart. ${member} is welcome. @everyone`,`Come in ${member}, we're awesome. @everyone`,`Welcome ${member}, it's lit! @everyone`,`Wizards Welcome, Muggles Tolerated. Which one are you, ${member}? @everyone`,`Welcome ${member}, just don't except much. @everyone`,`How You Doin' ${member}? @everyone`,`Welcome to the server, ${member} @everyone`, `HOL' UP, ${member} IS HERE. @everyone`, `You might be new here.. ${member}.. but I'm watching you. @everyone`, `Sorry about the mess ${member}, but we kinda live here. Welcome I guess. @everyone`, `YAY! ${member} is here! @everyone`, `${member}, My Ni says that you shall love it here. @everyone`, `Welcome to the dark side ${member}, where all the fun happens. @everyone`, `I hope you like hot messes and cactuses ${member}, because it's a mess inside. @everyone`, `${member}, you just walked into something you can never get out of :3 @everyone`, `Welcome to the shitshow, ${member}. @everyone`, `Welcome to our group ${member}. Leaving is not an option :3 @everyone`, `Welcome to my world ${member}! Where we put the FUN in dysfunctional!! @everyone`, `Welcome to the real Internet ${member}! where the men are men, the women are men, and the children are the FBI. @everyone` , `Oh you're here ${member}. I see the assassins have failed. @everyone`, `Welcome to the INFJ Dugeon ${member}. Take some of our complimentary slippers. Cookies and milk are at the back, free spa treatments so long as you're here <3 @everyone`, `'Welcome ${member} you are.' - Yoda @everyone`, `Welcome ${member}, I hope you brought wine. @everyone`, `Well shit ${member}, it's about time you got here! @everyone`];
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
    }  else if (message.content.indexOf("/anxiety") >- 1) {
        var myArray = ["https://media.tenor.com/images/bd03fd9eca6282b87a238b04b517d239/tenor.gif","https://media.tenor.com/images/7efd5d32f943b826aba3f59d834771ce/tenor.gif","https://media.tenor.com/images/f501c9a561bdc1f5cab6a4c1cc082ac0/tenor.gif","https://media.tenor.com/images/0c966ef4ba4dd4dd3b80d0c066959387/tenor.gif","https://media.tenor.com/images/b940ab74cdfe1a08d0eead6166cd01e9/tenor.gif","https://media.tenor.com/images/2e6595abff18bb582fdc63912d9101b7/tenor.gif","https://media.tenor.com/images/e566bdfc2708bfa31d2420747c64dd31/tenor.gif","https://media.tenor.com/images/f79924ac552115b71977fa13873cc561/tenor.gif","https://media.tenor.com/images/a087a58a227ca8fb3efbe114f5103a64/tenor.gif","https://media.tenor.com/images/aa7138dd3b6b0b3e9c9caaf82aba73bc/tenor.gif","https://media.tenor.com/images/5126fda32e2687e6d2f5e9e92a2cdd09/tenor.gif","https://media.tenor.com/images/ace98712c4d05d667fa70da872120788/tenor.gif","https://media.tenor.com/images/6dbe6dc12039a3e0dddd17641a132de9/tenor.gif","https://media.tenor.com/images/4dc2fa710ee908db3931e011753796ff/tenor.gif","https://media.tenor.com/images/08329c58303cb5d47619c4e22c0108f5/tenor.gif","https://media.tenor.com/images/77de93a670db89477792e3ae5a9abbd5/tenor.gif","https://media.tenor.com/images/b8db8eceb8373d71bec3c04c56a96e11/tenor.gif","https://media.tenor.com/images/23bc3e4bc040e7d45f5db74d8fad2aa2/tenor.gif","https://media.tenor.com/images/2a5130a98768a713299d1f910e44be29/tenor.gif","https://media.tenor.com/images/35cfb456dbbeec5bb27ee4169ca8f374/tenor.gif","https://media.tenor.com/images/b1bf7652d5e6200674ba00dc3b41e77e/tenor.gif"];
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
        var myArray = ["https://media.tenor.com/images/351712ea03f78aa016f0874dbd45dbb5/tenor.gif","https://media.giphy.com/media/13sozYO4hmSMUw/giphy.gif","https://media.giphy.com/media/haEpZ7eLjtZM4/giphy.gif","https://gph.is/g/aQA3nba","http://gph.is/LF9JsP","http://gph.is/11WXB7F","http://gph.is/1heaaoC","http://gph.is/2mWzTNG","http://gph.is/1BSU9Tq","https://gph.is/2Hs9nCu","http://gph.is/ZouwHV","http://gph.is/11RS3RB","http://gph.is/VwATUb","https://imgur.com/a/rd9a8wD","https://tenor.com/view/devilman-crybaby-run-gif-10824304","http://gph.is/VwFBBn","http://gph.is/1sFQ956", "http://gph.is/1o8bWNB","http://gph.is/2c19tlH","https://gph.is/2KClbVk","http://gph.is/1JzLn0q","http://gph.is/Vx7IjP","http://gph.is/2a9u0IM","http://gph.is/2pBao24","http://gph.is/2gNYzpN","http://gph.is/2B1uYCu"];   
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
    }  else if (message.content.indexOf("/awks") >- 1) {
        var myArray = ["https://media.giphy.com/media/kaq6GnxDlJaBq/giphy.gif","https://media.giphy.com/media/unFLKoAV3TkXe/giphy.gif","https://media.giphy.com/media/AmDzMmCJZABsk/giphy.gif","https://media.giphy.com/media/mEqMknMZWh1Fm/giphy.gif","https://media.giphy.com/media/sl0ko2YmprL5m/giphy.gif","https://media.giphy.com/media/7zSzFBQwwGMC54c19q/giphy.gif","https://media.giphy.com/media/uX7LYCe5h3ggik4jBa/giphy.gif","https://media.giphy.com/media/qINsfDGI0z9yU/giphy.gif","https://media.giphy.com/media/l6JskfRsDnAud0SCAi/giphy.gif","https://media.giphy.com/media/qwhoLuIJiiGCQ/giphy.gif","https://media.giphy.com/media/idSnyh1gs1kly/giphy.gif","https://media.tenor.com/images/20f24ca1eff60a8295966b64071cf471/tenor.gif","https://media.tenor.com/images/7edd7124f6a673d47c40d45ed0815234/tenor.gif","https://media.tenor.com/images/0b0c586df4b0947ae898ba30ab48f9c2/tenor.gif","https://media.tenor.com/images/2d4acce9125a6a099d589c701ef4b6a0/tenor.gif","https://media.tenor.com/images/5c96b025e7769c7c69828f24fb72d699/tenor.gif","https://media.tenor.com/images/73b6b97cb0278b9e03ac8a7345be03a5/tenor.gif","https://media.tenor.com/images/4fd583233a1afa7f27fa7df7a486b79b/tenor.gif","https://media.tenor.com/images/dd473b7d8712e74d4c881149043490f3/tenor.gif","https://media.tenor.com/images/7a2e1e82d80910e18c1beed3fe7adf2c/tenor.gif","https://media.tenor.com/images/095a3bacb6e011a3a92a874996285349/tenor.gif","","","","",""];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
    } else if (message.content.indexOf("/yikes") >- 1) {
        var myArray = ["https://cdn.discordapp.com/attachments/527774000667951104/564121902017413120/unknown.gif","https://cdn.discordapp.com/attachments/527774000667951104/564121968589144084/unknown.gif","https://cdn.discordapp.com/attachments/527774000667951104/564122008510791684/unknown.gif","https://media.giphy.com/media/80TEu4wOBdPLG/giphy.gif","https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif","https://media.giphy.com/media/mwhLXQEKupENG/giphy.gif","https://media.giphy.com/media/xT0GqfvuVpNqEf3z2w/giphy.gif","https://media.giphy.com/media/xT9IgyuM7u3eOZ8AO4/giphy.gif","https://media.giphy.com/media/yy2lp8r2yIBrsqaQle/giphy.gif","https://media.giphy.com/media/l1J9yeYz7ktgWrHGw/giphy.gif","https://media.giphy.com/media/NUerTUMGyYyKoUl0pK/giphy.gif","https://media.giphy.com/media/EMTQ0Y4UgYzKM/giphy.gif","https://media.giphy.com/media/2sfHkpLao4jJUSYpBw/giphy.gif","https://media.giphy.com/media/l3V0nRGCDHliELAkg/giphy.gif","https://media.giphy.com/media/u24hPghx6dB1m/giphy.gif","https://media.giphy.com/media/jpOy7HTgWnFtK/giphy.gif","https://media.giphy.com/media/gOmfNDR45WAb6/giphy.gif"];   
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
        var myArray = ["https://giphy.com/gifs/arnold-schwarzenegger-predator-carl-weathers-BvsKJXGzqfNPq","https://i.kym-cdn.com/photos/images/original/001/435/923/182.gif"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.channel.send(rand);
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
                description: "The Reformer - Enneagram Type One",
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
                        name: "Overview:",
                        value: "Ones are conscientious and ethical, with a strong sense of right and wrong. They are teachers, crusaders, and advocates for change: always striving to improve things, but afraid of making a mistake. Well-organized, orderly, and fastidious, they try to maintain high standards, but can slip into being critical and perfectionistic. They typically have problems with resentment and impatience. At their Best: wise, discerning, realistic, and noble. Can be morally heroic."
                    },
                    {
                        name: "Basic Fear: ",
                        value: "Of being corrupt/evil, defective"
                    },
                    {
                        name: "Basic Desire: ",
                        value: "To be good, to have integrity, to be balanced"
                    },
                    {
                        name: "Enneagram One with a Nine-Wing:",
                        value: "'The Idealist'"
                    },
                    {
                        name: "Enneagram One with a Two-Wing:",
                        value: "'The Advocate'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to be right, to strive higher and improve everything, to be consistent with their ideals, to justify themselves, to be beyond criticism so as not to be condemned by anyone."
                    }
                ]
              }
            });
    } else if (message.content.indexOf("/core2") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The Helper - Enneagram Type Two",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-2"
                    },
                    {
                        name: "The Caring, Interpersonal Type: ",
                        value: "Generous, Demonstrative, People-Pleasing, and Possessive"
                    },
                    {
                        name: "Overview:",
                        value: "Twos are empathetic, sincere, and warm-hearted. They are friendly, generous, and self-sacrificing, but can also be sentimental, flattering, and people-pleasing. They are well-meaning and driven to be close to others, but can slip into doing things for others in order to be needed. They typically have problems with possessiveness and with acknowledging their own needs. At their Best: unselfish and altruistic, they have unconditional love for others."
                    },
                    {
                        name: "Basic Fear: ",
                        value: "Of being unwanted, unworthy of being loved"
                    },
                    {
                        name: "Basic Desire: ",
                        value: "To feel loved"
                    },
                    {
                        name: "Enneagram One with a One-Wing:",
                        value: "'Servant'"
                    },
                    {
                        name: "Enneagram One with a Three-Wing:",
                        value: "'The Host/Hostess'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to be loved, to express their feelings for others, to be needed and appreciated, to get others to respond to them, to vindicate their claims about themselves."
                    }
                ]
              }
            });
    } else if (message.content.indexOf("/core3") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The Achiever - Enneagram Type Three",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-3"
                    },
                    {
                        name: "The Success-Oriented, Pragmatic Type: ",
                        value: "Adaptable, Excelling, Driven, and Image-Conscious"
                    },
                    {
                        name: "Overview:",
                        value: "Threes are self-assured, attractive, and charming. Ambitious, competent, and energetic, they can also be status-conscious and highly driven for advancement. They are diplomatic and poised, but can also be overly concerned with their image and what others think of them. They typically have problems with workaholism and competitiveness. At their Best: self-accepting, authentic, everything they seem to be—role models who inspire others."
                    },
                    {
                        name: "Basic Fear: ",
                        value: "Of being worthless"
                    },
                    {
                        name: "Basic Desire: ",
                        value: "To feel valuable and worthwhile"
                    },
                    {
                        name: "Enneagram One with a Two-Wing:",
                        value: "'The Charmer'"
                    },
                    {
                        name: "Enneagram One with a Four-Wing:",
                        value: "'The Professional'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to be affirmed, to distinguish themselves from others, to have attention, to be admired, and to impress others."
                    }
                ]
              }
            });
    } else if (message.content.indexOf("/core4") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The Individualist - Enneagram Type Four",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-4"
                    },
                    {
                        name: "The Sensitive, Introspective Type: ",
                        value: "Expressive, Dramatic, Self-Absorbed, and Temperamental"
                    },
                    {
                        name: "Overview:",
                        value: "Fours are self-aware, sensitive, and reserved. They are emotionally honest, creative, and personal, but can also be moody and self-conscious. Withholding themselves from others due to feeling vulnerable and defective, they can also feel disdainful and exempt from ordinary ways of living. They typically have problems with melancholy, self-indulgence, and self-pity. At their Best: inspired and highly creative, they are able to renew themselves and transform their experiences."
                    },
                    {
                        name: "Basic Fear:",
                        value: "That they have no identity or personal significance"
                    },
                    {
                        name: "Basic Desire:",
                        value: "To find themselves and their significance (to create an identity)"
                    },
                    {
                        name: "Enneagram One with a Three-Wing:",
                        value: "'The Aristocrat'"
                    },
                    {
                        name: "Enneagram One with a Five-Wing:",
                        value: "'The Bohemian'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to express themselves and their individuality, to create and surround themselves with beauty, to maintain certain moods and feelings, to withdraw to protect their self-image, to take care of emotional needs before attending to anything else, to attract a 'rescuer.'"
                    }
                ]
              }
            });
    } else if (message.content.indexOf("/core5") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The Investigator - Enneagram Type Five",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-5"
                    },
                    {
                        name: "The Intense, Cerebral Type: ",
                        value: "Perceptive, Innovative, Secretive, and Isolated"
                    },
                    {
                        name: "Overview:",
                        value: "Fives are alert, insightful, and curious. They are able to concentrate and focus on developing complex ideas and skills. Independent, innovative, and inventive, they can also become preoccupied with their thoughts and imaginary constructs. They become detached, yet high-strung and intense. They typically have problems with eccentricity, nihilism, and isolation. At their Best: visionary pioneers, often ahead of their time, and able to see the world in an entirely new way."
                    },
                    {
                        name: "Basic Fear: ",
                        value: "Being useless, helpless, or incapable"
                    },
                    {
                        name: "Basic Desire: ",
                        value: "To be capable and competent"
                    },
                    {
                        name: "Enneagram One with a Four-Wing:",
                        value: "'The Iconoclast'"
                    },
                    {
                        name: "Enneagram One with a Six-Wing:",
                        value: "'The Problem Solver'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to possess knowledge, to understand the environment, to have everything figured out as a way of defending the self from threats from the environment."
                    }
                ]
              }
            });
    } else if (message.content.indexOf("/core6") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The Loyalist - Enneagram Type Six",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-6"
                    },
                    {
                        name: "The Committed, Security-Oriented Type: ",
                        value: "Engaging, Responsible, Anxious, and Suspicious"
                    },
                    {
                        name: "Overview:",
                        value: "The committed, security-oriented type. Sixes are reliable, hard-working, responsible, and trustworthy. Excellent 'troubleshooters,' they foresee problems and foster cooperation, but can also become defensive, evasive, and anxious—running on stress while complaining about it. They can be cautious and indecisive, but also reactive, defiant and rebellious. They typically have problems with self-doubt and suspicion. At their Best: internally stable and self-reliant, courageously championing themselves and others."
                    },
                    {
                        name: "Basic Fear: ",
                        value: "Of being without support and guidance"
                    },
                    {
                        name: "Basic Desire: ",
                        value: "To have security and support"
                    },
                    {
                        name: "Enneagram One with a Five-Wing:",
                        value: "'The Defender'"
                    },
                    {
                        name: "Enneagram One with a Seven-Wing:",
                        value: "'The Buddy'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to have security, to feel supported by others, to have certitude and reassurance, to test the attitudes of others toward them, to fight against anxiety and insecurity."
                    }
                ]
              }
            });
    } else if (message.content.indexOf("/core7") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The Enthusiast - Enneagram Type Seven",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-7"
                    },
                    {
                        name: "The Busy, Variety-Seeking Type:",
                        value: "Spontaneous, Versatile, Acquisitive, and Scattered"
                    },
                    {
                        name: "Overview:",
                        value: "Sevens are extroverted, optimistic, versatile, and spontaneous. Playful, high-spirited, and practical, they can also misapply their many talents, becoming over-extended, scattered, and undisciplined. They constantly seek new and exciting experiences, but can become distracted and exhausted by staying on the go. They typically have problems with impatience and impulsiveness. At their Best: they focus their talents on worthwhile goals, becoming appreciative, joyous, and satisfied."
                    },
                    {
                        name: "Basic Fear:",
                        value: "Of being deprived and in pain"
                    },
                    {
                        name: "Basic Desire:",
                        value: "To be satisfied and content—to have their needs fulfilled"
                    },
                    {
                        name: "Enneagram One with a Six-Wing:",
                        value: "'The Entertainer'"
                    },
                    {
                        name: "Enneagram One with a Eight-Wing:",
                        value: "'The Realist'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to maintain their freedom and happiness, to avoid missing out on worthwhile experiences, to keep themselves excited and occupied, to avoid and discharge pain."
                    }
                ]
              }
            });
    } else if (message.content.indexOf("/core8") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The Challenger - Enneagram Type Eight",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-8"
                    },
                    {
                        name: "The Powerful, Dominating Type: ",
                        value: "Self-Confident, Decisive, Willful, and Confrontational"
                    },
                    {
                        name: "Overview:",
                        value: "Eights are self-confident, strong, and assertive. Protective, resourceful, straight-talking, and decisive, but can also be ego-centric and domineering. Eights feel they must control their environment, especially people, sometimes becoming confrontational and intimidating. Eights typically have problems with their tempers and with allowing themselves to be vulnerable. At their Best: self- mastering, they use their strength to improve others' lives, becoming heroic, magnanimous, and inspiring."
                    },
                    {
                        name: "Basic Fear:",
                        value: "Of being harmed or controlled by others"
                    },
                    {
                        name: "Basic Desire: ",
                        value: "To protect themselves (to be in control of their own life and destiny)"
                    },
                    {
                        name: "Enneagram One with a Seven-Wing:",
                        value: "'The Maverick'"
                    },
                    {
                        name: "Enneagram One with a Nine-Wing:",
                        value: "'The Bear'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to be self-reliant, to prove their strength and resist weakness, to be important in their world, to dominate the environment, and to stay in control of their situation."
                    }
                ]
              }
            });
    } else if (message.content.indexOf("/core9") >- 1) {
        message.channel.send({
            embed: {
                color: 3447003,
                description: "The Peacemaker - Enneagram Type Nine",
                fields: [
                    {
                        name: "link:",                              
                        value: "https://www.enneagraminstitute.com/type-9"
                    },
                    {
                        name: "The Easygoing, Self-Effacing Type:",
                        value: "Receptive, Reassuring Agreeable, and Complacent"
                    },
                    {
                        name: "Overview:",
                        value: "Nines are accepting, trusting, and stable. They are usually creative, optimistic, and supportive, but can also be too willing to go along with others to keep the peace. They want everything to go smoothly and be without conflict, but they can also tend to be complacent, simplifying problems and minimizing anything upsetting. They typically have problems with inertia and stubbornness. At their Best: indomitable and all-embracing, they are able to bring people together and heal conflicts."
                    },
                    {
                        name: "Basic Fear: ",
                        value: "Of loss and separation"
                    },
                    {
                        name: "Basic Desire: ",
                        value: "To have inner stability 'peace of mind'"
                    },
                    {
                        name: "Enneagram One with a Eight-Wing:",
                        value: "'The Referee'"
                    },
                    {
                        name: "Enneagram One with a One-Wing:",
                        value: "'The Dreamer'"
                    },
                    {
                        name: "Key Motivations:",
                        value: "Want to create harmony in their environment, to avoid conflicts and tension, to preserve things as they are, to resist whatever would upset or disturb them."
                    }
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
                        value: "Bring up the Enneagram description for each core type. (1-9) e.g. /core5"
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
                    },
                    {
                        name: "/awks",
                        value: "Hand collected awkward gifs."
                    },
                    {
                        name: "/yikes",
                        value: "Hand collected yikes gifs."
                    }
                ]
              }
        });
    } 





});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
