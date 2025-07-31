const Canvas = require("canvas")
const fs = require("fs")
const path = require("path")
Canvas.registerFont("./src/Fonts/geo.ttf", { family: "GEO"})

module.exports = async (infos, res) => {
    const width = 650;
    const height = 220;
    const opacity = 0.5;
    const radius = 30;

    const id = infos.user.id

    const canvas = Canvas.createCanvas(width, height)
    const ctx = canvas.getContext("2d")

    ctx.save()

    ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.fillRect(0, 0, width, height);
    
    if(infos.userProfile?.banner?.icon){
        ctx.restore()
    
        await Canvas.loadImage(`${infos.userProfile.banner.iconURL}`).then(userBanner=>{
            ctx.drawImage(userBanner, 0, -135, 650, 260)
        }, err=>{})
    
        ctx.save()
    }
    
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.arcTo(width, 0, width, height, radius);
    ctx.arcTo(width, height, 0, height, radius);
    ctx.arcTo(0, height, 0, 0, radius);
    ctx.arcTo(0, 0, width, 0, radius);
    ctx.closePath();
    ctx.fill();

    ctx.restore()

    ctx.font = '25px GEO';
    ctx.fillStyle = '#F8F8F8';
    ctx.fillText(`${infos.user.username}`, 160, 155)

    if(infos.userProfile.avatar?.icon){
        ctx.save()

        ctx.beginPath();
        ctx.arc(83, 110, 75, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.clip();

        await Canvas.loadImage(`${infos.userProfile.avatar.iconURL}`).then(userAvatar=>{
            ctx.drawImage(userAvatar, 8, 35, 150, 150)
        },err=>{})

        ctx.restore()
    }
    if(infos.badges?.length){
        await Promise.all(infos.badges.map(async (badge, i)=>{
            return await Canvas.loadImage(`${badge.iconURL}`).then(badgeIMG=>{
                ctx.drawImage(badgeIMG, 160 + (29 * i), 170, 29, 29)
            }, err=>{})
        }))
    }

    const buffer = canvas.toBuffer(`image/png`);
    fs.writeFileSync(`./src/savedimages/${id}.png`, buffer);
    res.sendFile(path.join(process.cwd() + `/src/savedimages`, `${id}.png`));
}