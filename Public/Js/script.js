const codeSnippets = {
    users: `<b class="blue">const</b> <b class="yellow">axios</b> = require(<b class="green">"axios"</b>);

<b class="yellow">axios</b>({
    method: <b class="orange">"get",</b>
    url: <b class="orange">"http://mistysync.online/users/</b><b class="blue">500383265836892161</b><b class="orange">"</b>   
})<b class="yellow">.then</b>((<b class="green">response</b>) => {
    <b class="blue">console</b><b class="yellow">.log</b>(<b class="green">response.data</b>);
    <b class="greenShadow">/*
    {
        "apiStatusResponse": 200,
        "user": {
            "id": "500383265836892161",
            "username": "misss_aubrey",
            "globalName": "Aubrey",
            "legacyUsername": "Aubrey#2981",
            "flags": 64
        },
        "userProfile": {
            "avatar": {
                "icon": "322ac498fa6366f63ef8c0186d479b01",
                "iconURL": "https://cdn.discordapp.com/avatars/500383265836892161/322ac498fa6366f63ef8c0186d479b01.png?size=2048",
                "decoration": null
            },
            "banner": {
                "icon": "9fa3658f81b9abf19632e69581e29d96",
                "iconURL": "https://cdn.discordapp.com/banners/500383265836892161/9fa3658f81b9abf19632e69581e29d96.png?size=2048",
                "color": "#ffffff"
            },
            "bio": "<:hellobitch:1007095012590374973> Olá meu nobre macaco, diga logo o que queres... Mas seja breve.",
            "pronouns": "Bela Mãe",
            "profileColor": "#ffffff",
            "profileEffect": null,
            "profileThemeColors": {
            "upProfile": "#000000",
            "downProfile": "#ffffff"
        }
        },
        "badges": [
            {
                "name": "hypesquad_house_1",
                "iconURL": "https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png"
            },
            {
                "name": "premium",
                "iconURL": "https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png"
            },
            {
                "name": "guild_booster_lvl1",
                "iconURL": "https://cdn.discordapp.com/badge-icons/51040c70d4f20a921ad6674ff86fc95c.png"
            },
            {
                "name": "legacy_username",
                "iconURL": "https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png"
            }
        ],
        "nitro": {
            "since": "2024-07-10T23:51:59.941Z",
            "type": 2,
            "guildBoost": {
                "since": "2024-07-13T01:19:27.842000+00:00",
                "badgeLevel": 1,
                "nextBadgeLevel": 2,
                "nextBadgeUpdate": "2024-09-11T01:19:27.842Z"
            }
        },
        "connections": [
            {
                "plataform": "github",
                "accountName": "AubreyFBG",
                "accountId": "96559615"
            },
            {
                "plataform": "spotify",
                "accountName": "𝓐𝓾𝓫𝓻𝓮𝔂",
                "accountId": "29qc1xhsboty8s2ldx3nl0brj"
            }
        ]
        }
    */</b>
});`,
    banner: `> <b class="blue">http://mistysync.online/users/</b><b class="yellow">500383265836892161</b><b class="green">?createImage=true</b>
<ul class="colorful-list">
<li class="blue">URL</li>
<li class="yellow">User ID Param</li>
<li class="green">Query command</li>
</ul>
<img class="imgBanner" src="http://mistysync.online/users/500383265836892161?createImage=true" alt="">
                `,
    invite: `<b class="blue">const</b> <b class="yellow">axios</b> = require(<b class="green">"axios"</b>);

<b class="yellow">axios</b>({
    method: <b class="orange">"get",</b>
    url: <b class="orange">"http://mistysync.online/invite/</b><b class="blue">gifzada</b><b class="orange">"</b>   
})<b class="yellow">.then</b>((<b class="green">response</b>) => {
    <b class="blue">console</b><b class="yellow">.log</b>(<b class="green">response.data</b>);
    <b class="greenShadow">/*
    {
        "apiStatusResponse": 200,
        "inviteURL": "gifzada",
        "expiresAt": null,
        "guild": {
            "name": "GIFZADA",
            "id": "928341044351864902",
            "icon": "a_cd35fa5f0dcb55d531ce9d06be689401",
            "iconURL": "https://cdn.discordapp.com/icons/928341044351864902/a_cd35fa5f0dcb55d531ce9d06be689401.gif?size=2048",
            "banner": "f29bf10880a6661c08a4549a3696c70d",
            "bannerURL": "https://cdn.discordapp.com/banners/928341044351864902/f29bf10880a6661c08a4549a3696c70d.png?size=2048",
            "verificationLevel": 1,
            "verifiedInviteCode": "gifzada",
            "nsfw": false,
            "boostsCount": 31,
            "features": [
                "NEWS",
                "ANIMATED_BANNER",
                "ROLE_ICONS",
                "DISCOVERABLE",
                "BANNER",
                "PRIVATE_THREADS",
                "ENABLED_DISCOVERABLE_BEFORE",
                "ANIMATED_ICON",
                "INVITE_SPLASH",
                "SOUNDBOARD",
                "GUILD_WEB_PAGE_VANITY_URL",
                "PREVIEW_ENABLED",
                "VANITY_URL",
                "SEVEN_DAY_THREAD_ARCHIVE",
                "CHANNEL_ICON_EMOJIS_GENERATED",
                "MEMBER_PROFILES",
                "AUTO_MODERATION",
                "COMMUNITY",
                "THREE_DAY_THREAD_ARCHIVE"
            ]
        },
        "inviter": null
    }
    */</b>
});`
};

function showCode(type) {
    console.log(this)    
    document.getElementById('code-display').innerHTML = codeSnippets["users"];
}

const {
    usersButton,
    bannerButton,
    inviteButton
} = {
    usersButton: document.getElementById('users'),
    bannerButton: document.getElementById('banner'),
    inviteButton: document.getElementById('invite'),
}

usersButton.addEventListener('click', function() {
    this.classList.add('buttonSelected');
    bannerButton.classList.remove('buttonSelected');
    inviteButton.classList.remove('buttonSelected');
    document.getElementById('code-display').innerHTML = codeSnippets["users"];
});
bannerButton.addEventListener('click', function() {
    this.classList.add('buttonSelected');
    usersButton.classList.remove('buttonSelected');
    inviteButton.classList.remove('buttonSelected');
    document.getElementById('code-display').innerHTML = codeSnippets["banner"];
});
inviteButton.addEventListener('click', function() {
    this.classList.add('buttonSelected');
    bannerButton.classList.remove('buttonSelected');
    usersButton.classList.remove('buttonSelected');
    document.getElementById('code-display').innerHTML = codeSnippets["invite"];
});

showCode('users');
