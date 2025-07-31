function decimalToHexColor(decimal) {
    if(decimal === 0) return "#000000"

    let hex = decimal.toString(16);
    while (hex.length < 6) {
      hex = '0' + hex;
    }
    return `#${hex}`;
}

function monthsLevel(level){
    const month = 30 * 24 * 60 * 60 * 1000

    const monthsLevelOBJ = {
        2: month * 2,
        3: month * 3,
        4: month * 6,
        5: month * 9,
        6: month * 12,
        7: month * 15,
        8: month * 18,
        9: month * 24
    }

    return monthsLevelOBJ[level]
}

module.exports = {
    decimalToHexColor,
    monthsLevel,
    getInfosFromUser
}

const { findProfileEffect } = require('./effectsDatabase');
const axios = require("axios")

async function getInfosFromUser(id){
    id = id.split(".")[0];

    const response = await axios({
        method: 'get',
        url: `https://discord.com/api/v9/users/${id}/profile`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.SELFBOT,
        }
    }).catch(e=>{}) || await axios({
        method: 'get',
        url: `https://discord.com/api/v9/users/${id}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.SELFBOT,
        }
    }).catch(e=>{})
    console.log(response)
    let { data: infos } = response
    if(!infos?.user) infos = { user: infos }
    return {
        apiStatusResponse: 200,
        user: {
            id: infos.user.id,
            username: infos.user.username,
            globalName: infos.user.global_name,
            legacyUsername: infos.legacy_username || null,
            flags: infos.user.flags,
        },
        userProfile: {
            avatar: infos.user.avatar ? {
                icon: infos.user.avatar,
                iconURL: `https://cdn.discordapp.com/avatars/${infos.user.id}/${infos.user.avatar}.${infos.user.avatar.startsWith("a_") ? "gif" : "png"}?size=2048`,
                decoration: infos.user.avatar_decoration_data ? {
                    asset: infos.user.avatar_decoration_data.asset,
                    assetURL: `https://cdn.discordapp.com/avatar-decoration-presets/${infos.user.avatar_decoration_data.asset}.png?size=96`
                } : null
            } : null,
            banner: infos.user.banner || infos.user.banner_color ? {
                icon: infos.user.banner || null,
                iconURL: infos.user.banner ? `https://cdn.discordapp.com/banners/${infos.user.id}/${infos.user.banner}.${infos.user.banner.startsWith("a_") ? "gif" : "png"}?size=2048` : null,
                color: infos.user.banner_color,
            } : null,
            bio: infos.user_profile?.bio || null,
            pronouns: infos.user_profile?.pronouns || null,
            profileColor: infos.user.accent_color ? decimalToHexColor(infos.user.accent_color) : null,
            profileEffect: infos.user_profile?.profile_effect ? findProfileEffect(infos.user_profile.profile_effect.id) : null,
            profileThemeColors: infos.user_profile?.theme_colors ? {
                upProfile: decimalToHexColor(infos.user_profile.theme_colors[0]),
                downProfile: decimalToHexColor(infos.user_profile.theme_colors[1])
            } : null
        },
        badges: infos.badges?.map(badge=>{
            return {
                name: badge.id,  
                iconURL: `https://cdn.discordapp.com/badge-icons/${badge.icon}.png`
            }
        }) || null,
        nitro: {
            since: infos.premium_since ? new Date(infos.premium_since) : null,
            type: infos.premium_type,
            guildBoost: infos.premium_guild_since ? {
                since: infos.premium_guild_since,
                badgeLevel: Number(infos.badges.find(badge=> badge.id.includes("guild_booster_")).id[17]),
                nextBadgeLevel: infos.badges.find(badge=> badge.id.includes("guild_booster_")).id[17] == 9 ? null : (Number(infos.badges.find(badge=> badge.id.includes("guild_booster_")).id[17]) + 1),
                nextBadgeUpdate: infos.badges.find(badge=> badge.id.includes("guild_booster_")).id[17] == 9 ? null : new Date((new Date(infos.premium_guild_since)).getTime() + monthsLevel(1 + Number(infos.badges.find(badge=> badge.id.includes("guild_booster_")).id[17])))
            } : null
        },
        connections: infos.connected_accounts?.map(account=>{
            return {
                plataform: account.type,
                accountName: account.name,
                accountId: account.id
            }
        }) || null
    }
}