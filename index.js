const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = 'LH/'

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    bot.user.setActivity("Si tu lis ce message, tu es un vrai.", {type: "PLAYING"})
   console.log('')
   console.log('')
   console.log('╔[═════════════════════════════════════════════════════════════════]╗')
   console.log(`[Start] ${new Date()}`);
   console.log('╚[═════════════════════════════════════════════════════════════════]╝')
   console.log('')
   console.log('╔[════════════════════════════════════]╗');
   console.log(`Connecté sur [ " ${bot.user.username} " ]`);
   console.log('')
   console.log('Informations :')
   console.log('')
   console.log(`servers : [ " ${bot.guilds.size} " ]`);
   console.log(`Users : [ " ${bot.users.size} " ]`);
   console.log(`channels : [ " ${bot.channels.size} " ]`);
   console.log('╚[════════════════════════════════════]╝')
   console.log('')
   console.log('╔[════════════]╗')
   console.log(' Bot Is Online')
   console.log('╚[════════════]╝')
   console.log('')
   console.log('')
})

bot.on("message", message => {
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    let messageKick = message.content.split(" ");
    let args = messageKick.slice(1);
    if (message.content.startsWith("LH/kick")){
    if (message.channel.type === "dm") return;
    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("vous n'avez pas la permission")
    
    if (message.mentions.users.size === 0) {
        var nomention = new Discord.RichEmbed()
        .setColor("E46525")
        .setTitle(":x: Il faut mentionner un utilisateur ! :x:")

        message.channel.send(nomention)
        return
    }
    let raison = args.join(" ").slice(22)
    if (!raison){
        var noraison = new Discord.RichEmbed()
        .setColor("E46525")
        .setTitle(":x: Il faut mettre une raison au kick ! :x:")

        message.channel.send(noraison)
        return
    }
    let bUser = message.guild.member(message.mentions.users.first())
    var ban = message.guild.member(message.mentions.users.first());
    if (!ban) {
        return message.reply("l'utilisateur mentionné est introuvable ou n'existe pas !")
    }
    if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        var pasperm = new Discord.RichEmbed()
        .setColor("E46525")
        .setTitle(":x: Je n'ai pas la permission ! :x:")

        message.channel.send(pasperm)
        return
    }
    
    ban.kick().then(member => {
        var kick_embed = new Discord.RichEmbed()
            .setColor("E46525")
            .addField("[Kick]", `${member.user} a été kick par ${message.author} !`)
            .addField("Raison :","${raison}")
    
        message.channel.send(kick_embed)
    })
    
    }
      let messageBan = message.content.split(" ");
            let arge = messageBan.slice(1);
            if (message.content.startsWith("LH/ban")){
                if (message.channel.type === "dm") return;
                if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("vous n'avez pas la permission !")
    
                if (message.mentions.users.size === 0) {
                    var nomention = new Discord.RichEmbed()
                    .setColor("E46525")
                    .setTitle(":x: Il faut mentionner un utilisateur ! :x:")
            
                    message.channel.send(nomention)
                    return
                }
                let raison = arge.join(" ").slice(22)
                if (!raison){
                    var noraison = new Discord.RichEmbed()
                    .setColor("E46525")
                    .setTitle(":x: Il faut mettre une raison au ban ! :x:")
            
                    message.channel.send(noraison)
                    return
                }
                let bUser = message.guild.member(message.mentions.users.first())
    
                var ban = message.guild.member(message.mentions.users.first());
                if (!ban) {
                    return message.reply("l'utilisateur mentionné est introuvable ou n'existe pas !")
                }
                if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                    var pasperm = new Discord.RichEmbed()
                    .setColor("E46525")
                    .setTitle(":x: Je n'ai pas la permission ! :x:")
            
                    message.channel.send(pasperm)
                    return
                }
    
                ban.ban().then(member => {
                    var ban_embed = new Discord.RichEmbed()
                        .setColor("E46525")
                        .addField("[Ban]", `${member.user} a été banni par ${message.author} !`)
                        .addField("Raison :",`\`${raison}\``)
                
                    message.channel.send(ban_embed)
                    })
            }
      if(message.content.startsWith("LH/clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permissions !");
    
        let args = message.content.split(" ").slice(1);
    
        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messags à surpprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été surpprimés !:recycle:`).then(message => message.delete(2000));
        })
    }
    if(message.content === prefix + 'mute'){
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
		var member = message.mentions.members.first();
		if(!member) {
			var msgA = [];
			msgA.push(`= **Personnes Mutes** =\n`)

			message.guild.members.forEach(async (m) => {
				if(m.roles.find("name", "Muted")) {
					msgA.push(`${m.user.username} <${m.user.id}>`)
				}
			});
			console.log(msgA)
			if(msgA == `= **Personnes Mutes** =\n`){
					msgA.push(`== **Personne n'est mute pour l'instant**==`)
			}
			message.channel.send(msgA).then(m => m.delete(25000));
			return;
		}
		let arg = message.content.split(" ").slice(1);
		let time = arg[1]
		let rarg = message.content.split(" ").slice(3)
		let reason = rarg.join(" ")
		let id = member.user.id
		let musername = member.user.username
		if(!reason){reason = "No reason given."}
		if(!time) {time = 0}
		let muteRole = message.guild.roles.find("name", "Muted");
		if(!muteRole){
			muteRole = message.guild.createRole({"name": "Muted", "hoist": false, "position":0, "permissions": 0}, "Je n'ai pas trouvé le rôle pour mute...")
			message.guild.channels.forEach(async (channel, i) => {
				channel.overwritePermissions(muteRole.id, {SEND_MESSAGES: false, TALK: false}, "Ajouté ceci pour continer")
			});
		}

		if(member.roles.find("name", "Muted")) return message.channel.send(`:x: ${member.user.username}, est déjà mute !`).then(m => m.delete(2500))
		 if(time == 0) {
			 member.addRole(muteRole.id);
	 		message.channel.send(`${member.user.username}, est maintenant mute.`).then(m => m.delete(2500))
	 		let muteds = new Discord.RichEmbed()
	         .setColor(`#FF0000`)
	         .setAuthor(`Bonsoir, ${member.user.username}!`)
	 				 .setDescription(`:mute: Vous êtes mute dans ${message.guild.name}.`)
	         .addField(`Mute par:`, `${message.author.username}#${message.author.discriminator}`)
	         .setFooter(`MUTED`)
	         .setTimestamp()
	 	 member.user.send({embed: muteds});
		 return;
		 }
		member.addRole(muteRole.id);
		message.channel.send(`${member.user.username}, est maintenant mute pour ${ms(ms(time), {long: true})}`).then(m => m.delete(2500))
		let muteds = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setAuthor(`Bonsoir, ${member.user.username}!`)
				.setDescription(`:mute: Vous êtes mute dans ${message.guild.name}.`)
      	.addField(`Temps :`, `${ms(ms(time), {long: true})}`)
        .addField(`Mute par:`, `${message.author.username}#${message.author.discriminator}`)
        .addField(`Raison:`, `${reason}`)
        .setFooter(`MUTED`)
        .setTimestamp()
	 member.user.send({embed: muteds}).then(m => m.delete(ms(time)))
		setTimeout(function() {

			let mutede = new Discord.RichEmbed()
	        .setColor(`#00FF00`)
	        .setAuthor(`Bonsoir, ${member.user.username}!`)
					.setDescription(`:speaker: Vous êtes mute dans ${message.guild.name}.`)
	      	.addField(`Temps :`, `${ms(ms(time), {long: true})}`)
	        .addField(`Raison:`, `${reason}`)
	        .setFooter(`UNMUTED`)
	        .setTimestamp()
		  member.user.send({embed: mutede});
			member.removeRole(muteRole.id);
			message.channel.send(`${member.user.username}, est maintenant mute pendant ${ms(ms(time), {long: true})}`).then(m => m.delete(2500))
		}, ms(time))
 } else {
 	message.channel.send("Désolé, mais vous n'avez pas la permission.")
 }
}


    
      if(message.content.startsWith("LH/info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.bot == true){
              var checkbot = "L'utilisateur est un bot";
          } else {
              var checkbot = "N'est pas un bot";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: '👥 Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: '🆔 User id',
                value: getvalueof.id,
                inline: true
              },{
                name: '🏷️ Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: '🌍 Status',
                value: status,
                inline: true
            },{
                name: '📅 Créer le',
                value: getvalueof.createdAt.toLocaleString(),
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0x0fff0f,
              footer: {
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
        });
    }
    bot.on('message', message => {
        if (message.content.startsWith("LH/hacked")) {
          if (message.author.bot) return
               message.delete();
                 let args = message.content.split(' ').slice(1);
                       let virusname = args.join(' ');
                     if (virusname < 1) {
                         return message.channel.send("``Veuillez mettre le nom du hack``");
                                         }
                     message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
                 setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
                 }, 1000)
                setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
                 }, 2000)
               setTimeout(function() {     
                   m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
                 }, 3000)
                    setTimeout(function() {
                   m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
                 }, 4000)
                  setTimeout(function() {
                   m.delete()
               }, 5000)
                 setTimeout(function() {
                   message.channel.send('écrivez le nom de la perssonne que vous voulez hacker')
               }, 6000)
               });
             }
     });
    if(message.content === prefix + "si") {
        let serverinfo = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("**🆔 Serveur ID:**", `**${message.guild.id}**`,true)
        .addField("**📅 Créer le**", `**${message.guild.createdAt.toLocaleString()}**`,true)
        .addField("**👑 Créateur**",`**${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        .addField("**👥 Membres**",`**${message.guild.memberCount}**`,true)
        .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
        .addField("**🌍 Région **" , `**${message.guild.region}**`,true)
        .setColor('RANDOM')
        message.channel.sendEmbed(serverinfo)
        console.log(`server info par ${message.author.tag}`)
        console.error();
    };
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
    let day = message.guild.createdAt.getDate()
    let month = 1 + message.guild.createdAt.getMonth()
    let year = message.guild.createdAt.getFullYear()
     let sicon = message.guild.iconURL;
     if(message.content.includes(prefix + 'si')){
    let serverembed = new Discord.RichEmbed()
     .setAuthor(message.guild.name, sicon)
     .setFooter(`Server Created • ${day}.${month}.${year}`)
     .setColor("RANDOM")
     .setThumbnail(sicon)
     .addField("**🆔 ID**", message.guild.id, true)
     .addField("**📛 Nom**", message.guild.name, true)
     .addField("**👑 Créateur**", message.guild.owner.user.tag, true)
     .addField("**🌍 Region**", message.guild.region, true)
     .addField("**💬 Channels**", message.guild.channels.size, true)
     .addField("**👥 Membres**", message.guild.memberCount, true)
     .addField("**👦 Humains**", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
     .addField("**🤖 Bots**", message.guild.members.filter(m => m.user.bot).size, true)
     .addField("**📱 Online**", online.size, true)
     .addField("**🏆 Rôles**", message.guild.roles.size, true);
     message.channel.send(serverembed);
     }
  if (message.content.startsWith(prefix + "sondage")) {
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    var embed = new Discord.RichEmbed()
        embed.setDescription("Sondage")
        embed.addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
        embed.setColor('#01A1FE')
    message.channel.sendEmbed(embed)
    .then(function (message){
        message.react("✅")
        message.react("❌")
    }).catch(function() {
    });
    };
    var argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith('LH/setg')) {
        bot.user.setGame(argresult);
          message.channel.send(`**✅   ${argresult}**`)
      } else 
      if (message.content.startsWith('LH/setw')) {
      bot.user.setActivity(argresult, {type:'WATCHING'});
          message.channel.send(`**✅   ${argresult}**`)
      } else 
      if (message.content.startsWith('LH/setl')) {
      bot.user.setActivity(argresult , {type:'LISTENING'});
          message.channel.send(`**✅   ${argresult}**`)
      } else 
      if (message.content.startsWith('LH/sets')) {
        bot.user.setGame(argresult, "https://www.twitch.tv/abdoufersaoui_");
          message.channel.send(`**✅**`)
      };
      if(!message.channel.guild) return;
      if(message.content.startsWith(prefix + 'set')) {//to create the rainbow role
          let role = message.guild.roles.find('name', 'Rainbow')
        if(role) return message.channel.send(`**Rôle créer (Rainbow) !**`)//if the role already created return with this message
      //start of create role
      if(!role){
        rainbow =  message.guild.createRole({
       name: "Rainbow",//the role will create name
       color: "#000000",//the default color
       permissions:[]//the permissions
     //end of create role
    })
     
    }
    message.channel.send('**etape déjà faites**')//if the step completed
    }});
    bot.on('ready', () => {//new ready event
      setInterval(function(){
          bot.guilds.forEach(g => {
                      var role = g.roles.find('name', 'Rainbow');//rainbow role name
                      if (role) {
                          role.edit({color : "RANDOM", position: 1});
                      };
          });
      }, 2000);
})

bot.login("TOKEN")
