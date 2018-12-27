const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", message => {
    if (message.content === "/estj") {
        message.reply("Lets see what C.S. Joseph thinks about ESTJs! https://cdn.discordapp.com/attachments/460862072138498048/463928638505746452/ESTJ.jpg");
    } else if (message.content === "/estp") {
        message.reply("Whats up with ESTPs today? https://cdn.discordapp.com/attachments/460862099766247434/463929677971718144/ESTP.jpg");
    } else if (message.content === "/entj") {
        message.reply("Whatcha wanna know about them ENTJs, hmm?! https://media.discordapp.net/attachments/460862118753730570/463928138020159509/ENTJ.jpg");
    } else if (message.content === "/enfj") {
        message.reply("i wonder what can ENFJs teach us today? https://cdn.discordapp.com/attachments/460862139394031636/463927976376008734/ENFJ.jpg");
    } else if (message.content === "/esfj") {
        message.reply("My hearty ESFJs! https://cdn.discordapp.com/attachments/460862269006413824/463931546617905152/ESFJ.jpg");
    } else if (message.content === "/esfp") {
        message.reply("Life of the party, aye? https://cdn.discordapp.com/attachments/460862285280313344/463932090841300992/ESFP.jpg");
    } else if (message.content === "/entp") {
        message.reply("Let's dig deep into an ENTPs mind, shall we? We shall! https://cdn.discordapp.com/attachments/460862313407315968/463932451895377920/ENTP.jpg");
    } else if (message.content === "/enfp") {
        message.reply("Inspire us ENFPs!! https://cdn.discordapp.com/attachments/460862342025183262/463932948102643713/ENFP.jpg");
    } else if (message.content === "/istj") {
        message.reply("Enter the ISTJ! https://cdn.discordapp.com/attachments/460862385121525773/463933360817831936/ISTJ.jpg");
    } else if (message.content === "/istp") {
        message.reply("That high Ti though...<3 https://cdn.discordapp.com/attachments/460862404855726080/463933652041072665/ISTP.jpg");
    } else if (message.content === "/intj") {
        message.reply("Here comes our lovable INTJs! (You are lovable!) https://cdn.discordapp.com/attachments/460862426750124044/463934345959178261/INTJ.jpg");
    } else if (message.content === "/infj") {
        message.reply("You INFJs make me cry of how complicated you are.. Sheeshhh. But I cannot get enough! https://cdn.discordapp.com/attachments/460862453899722785/463934733059883009/INFJ.jpg");
    } else if (message.content === "/isfj") {
        message.reply("We can learn a thing or two about perseverance from ISFJs guys. https://cdn.discordapp.com/attachments/460862804161724417/463935084743884800/ISFJ.jpg");
    } else if (message.content === "/esfj") {
        message.reply("Our great knight in shining armors: ESFJs! https://cdn.discordapp.com/attachments/460862269006413824/463931546617905152/ESFJ.jpg");
    } else if (message.content === "/isfp") {
        message.reply("Whatcha going to create today ISFPs? https://cdn.discordapp.com/attachments/460862823761707012/463281016199577602/ISFP.jpg");
    } else if (message.content === "/intp") {
        message.reply("How can my systematic architecture be better optimized, oh great INTP! https://cdn.discordapp.com/attachments/460862848151715841/463283784997928970/INTP.jpg");
    } else if (message.content === "/infp") {
        message.reply("My healers of the world, INFPs <3 https://cdn.discordapp.com/attachments/460862867680526337/463284830394646540/INFP.jpg");
    } else if (message.content === "/alltypes") {
        message.reply("https://cdn.discordapp.com/attachments/520412050380292116/520428163386572809/Grid_Comparison.png");
    } else if (message.content === "/ballin") {
        var myArray = ["http://gph.is/2dlGkTK", "http://gph.is/1gR6TLl","http://gph.is/2EzMeNI",
                    "http://gph.is/2jwd1ip","http://gph.is/2c3WnGB","http://gph.is/1481oPl","https://gph.is/2sQUguT",
                    "http://gph.is/2jSvOp7","http://gph.is/1afYL81","http://gph.is/16PaQvm", "http://gph.is/2jnQVUb",
                    "http://gph.is/1PFX8VC","http://gph.is/28WN6fK","https://gph.is/1hYUc3j","http://gph.is/2gfa5YZ",];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.reply(rand);
    } else if (message.content === "/ball") {
        var myArray = ["http://gph.is/2nQ2zXB","http://gph.is/2jan1zJ","http://gph.is/14llJ4m",
                    "http://gph.is/17BQ4QS","http://gph.is/1tNtbHr", "http://gph.is/1He0FWZ", "http://gph.is/1BZ1yvd",
                    "http://gph.is/1BmeL4l","http://gph.is/11uPhPJ","http://gph.is/2nHXhfS","http://gph.is/1J05az4",
                    "http://gph.is/1KNIpkT","http://gph.is/H6lSEa","http://gph.is/1cbCdXl","https://gph.is/XHu1pb"];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.reply(rand);
    } else if (message.content === "/bigman") {
        var myArray = ["http://gph.is/15cWh2q",
                    "http://gph.is/1cpvyWM","http://gph.is/1KuqgpI","http://gph.is/1h4OSsK","http://gph.is/1dJfzlL",
                    "http://gph.is/1dMPKkz","http://gph.is/1hGjS3u","http://gph.is/29P50my","http://gph.is/11jCUG3",
                    "http://gph.is/1Q4oGT6","http://gph.is/1d4wtzp","http://gph.is/2Ey7P9i","http://gph.is/2I5Kw95"];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.reply(rand);
    } else if (message.content === "/popcorn") {
        var myArray = ["http://gph.is/1maw8c4", "http://gph.is/2kNhZcX",
                    "http://gph.is/11wIvJe", "http://gph.is/28Nehcr","http://gph.is/2bf6WDj","https://gph.is/2rU2uEh",
                    "http://gph.is/16AKCRi", "http://gph.is/1pyI61i", "http://gph.is/24HSn1s", "http://gph.is/29IuioH",
                    "http://gph.is/14RlW1g","http://gph.is/25Gkrnn","http://gph.is/18lWpkb",
                    "http://gph.is/1aSIxlc","http://gph.is/19yQDcd","http://gph.is/2cTd59b","http://gph.is/19yQtl8",
                    "http://gph.is/1eezGa9","https://gph.is/1NeUCj9", "https://gph.is/2Axxtw1"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.reply(rand);
    } else if (message.content === "/doffy") {
        var myArray = ["Doffy! http://gph.is/28JRcfR","http://gph.is/1APHzNC","http://gph.is/291u1MC","http://gph.is/2qyRPiC",
                "Doffy, I missed you~!","Big Man ESTP is HERE!", "Hi doffy~", "You're the BEST!",
                "DOFFFFYYYY~!~!~!~!~!", "Doffy is in the houssseee!", "Whatcha up to today my good ESTP?"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.reply(rand);
    } else if (message.content === "/comfort") {
        var myArray = ["http://gph.is/2loY72U","http://gph.is/2ElfEDh","http://gph.is/2IAczO4","http://gph.is/2nq5i9T","https://gph.is/2mlqHRf","http://gph.is/2jeEDso",
                    "http://gph.is/2kuWelr","https://gph.is/2LgMIfd","http://gph.is/2eMVqmm","http://gph.is/2sRP2lL","http://gph.is/2dlboRM",
                    "https://gph.is/2NsKzy8","http://gph.is/2iSDc6Z","http://gph.is/2dbYlE2","http://gph.is/1f1Ibvp","https://gph.is/2IZ4a6Q",
                    "http://gph.is/1uQztDb","http://gph.is/2je4FfU","http://gph.is/2fYny9E","http://gph.is/2lK3poO","http://gph.is/2nwJKKu",
                    "http://gph.is/1tEpktQ","http://gph.is/2xEC7qz","http://gph.is/2FvkdYG","https://gph.is/2PvnwUr","https://gph.is/2JTZkaA",
                    "https://gph.is/2JTZezK","http://gph.is/2EpwD7j","http://gph.is/2A4ObjL","https://gph.is/2JswTkp","http://gph.is/2uL7Xxi",
                    "http://gph.is/XIcMnP","http://gph.is/2aiMrLg","http://gph.is/2fYErRF","http://gph.is/1NqlIW3","http://gph.is/2jn3slZ",
                    "https://gph.is/2BED83b","http://gph.is/2aA48C2","http://gph.is/2fMMXz2","http://gph.is/2g6wFlx","http://gph.is/2wcmmGn"];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        message.reply(rand);
    } else if (message.content === "/csj-grid") {
        message.reply("https://cdn.discordapp.com/attachments/521813298577014800/521813965324681292/Temperament_Matrix.png https://cdn.discordapp.com/attachments/521813298577014800/521814013051404317/Type_Grid.png");
    } else if (message.content === "/help") {
        message.embeds({
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
                    }
                ]
              }
        });
    } 





});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
