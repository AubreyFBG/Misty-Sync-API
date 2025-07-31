const axios = require("axios");
const Count = require("../..");

module.exports = (req, res) => {
    Count.addToCounter()
    const invite = req.params.invite;

    axios({
        method: 'get',
        url: `https://discordapp.com/api/v9/invites/${invite}?with_counts=true`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.SELFBOT,
        },
      })
        .then((response) => {
            const { data: infos } = response

            res.json({
                apiStatusResponse: 200,
                inviteURL: infos.code,
                expiresAt: infos.expires_at,
                guild: {
                    name: infos.guild.name,
                    id: infos.guild.id,
                    icon: infos.guild.icon,
                    iconURL: infos.guild.icon ? `https://cdn.discordapp.com/icons/${infos.guild.id}/${infos.guild.icon}.${infos.guild.icon.startsWith("a_") ? "gif" : "png"}?size=2048` : null,
                    banner: infos.guild.banner,
                    bannerURL: infos.guild.banner ? `https://cdn.discordapp.com/banners/${infos.guild.id}/${infos.guild.banner}.${infos.guild.banner.startsWith("a_") ? "gif" : "png"}?size=2048` : null,
                    membersCount: infos.approximate_member_count,
                    memberOnlineCount: infos.approximate_presence_count,
                    verificationLevel: infos.guild.verification_level,
                    verifiedInviteCode: infos.guild.vanity_url_code,
                    nsfw: infos.guild.nsfw,
                    boostsCount: infos.guild.premium_subscription_count,
                    features: infos.guild.features
                },
                inviter: infos.inviter ? {
                    username: infos.inviter.username,
                    id: infos.inviter.id
                } : null
            })
        }, err=>{
            res.json({
                apiStatusResponse: 404,
                message: "Invite not found in the Discord database."
            })
        });
}