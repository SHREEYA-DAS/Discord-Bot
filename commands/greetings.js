module.exports = {
    name: 'greetings',
    description: "Welcomes new members!",
    execute(member, RichEmbed, colour)
    {
        const channel = member.guild.channels.find(channel => channel.name === 'welcome-channel');
        const channel2= member.guild.channels.find(channel => channel.name === '');
        const channel3= member.guild.channels.find(channel => channel.name === '');
        const channel4= member.guild.channels.find(channel => channel.name === 'role-menu');
        channel.send(`${member} just now joined **The Server*! You are the ${member.guild.memberCount} member!\n🌱 Get Roles from Role Menu → ${channel4}\n🌿`);      

        const embed7 =new RichEmbed()
        .setTitle(`Hello I am Serene-Sonex!🌱`)
        .addField(`Welcome to The Server!\nHave a great time here in The Server!, Feel free to invite your firends and play games over here!\nStay with us and help the community to grow!🌿`)
        .setColor(colour)
        member.send(embed7);
        
    }
}