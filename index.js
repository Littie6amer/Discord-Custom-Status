const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: 'ipc',
});

const details = 'An amazing poll and suggestion bot';
const ID = '730778862203437068';

rpc.on("ready", () => {
    rpc.setActivity({
        details: `${details}`,
        buttons: [{
            label: "Invite the bot",
            url: "https://invite.mrpoll.xyz"
        },
        {
            label: "Get bot support",
            url: "https://support.mrpoll.xyz"
        }],
    });
    console.log("Rich Prescence is on: " + rpc.user.username)
});


rpc.login({
    clientId: `${ID}`,
})