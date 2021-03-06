exports.wait = () => {
	return`*「 TUNGGU 」SABAR NGAB PESANAN BANYAK....*`
}

exports.succes = () => {
	return`*「 SUKSES✔️ 」*`
}

exports.lvlon = () => {
	return`*「 LEVELING 」 ON*`
}

exports.lvloff = () => {
	return`*「 LEVELING 」 OFF*`
}

exports.lvlnul = () => {
	return`*LEVEL KAMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN SAMA ADMIN*`
}

exports.noregis = () => {
	return`*「 DAFTAR AXCT  」*\n\n*━━━━━━━━━━━━━━━*\n*_Kamu belom menjadi teman AXCT  daftar untuk menjadi teman AXCT ,cara pendaftaran ${prefix}daftar nama|umur_* \n*_contoh= ${prefix}daftar AXCT|16_*\n*━━━━━━━━━━━━━━━*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di catatan AXCT 😉*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi lagi beb😘*`
}

exports.linkga = () => {
	return`*maaf link yang kamu berikan tidak valid❌*`
}

exports.groupo = () => {
	return`*「KHUSUS GRUP❗」*`
}

exports.ownerb = () => {
	return`*「KHUSUS OWNER AXCT ❗」*`
}

exports.ownerg = () => {
	return`*「KHUSUS OWNER GRUP❗」*`
}

exports.baned = () => {
	return`*「❗」KAMU TERBAN OLEH OWNER*`
}
exports.admin = () => {
	return`*「KHUSUS ADMIN GRUP❗」*`
}

exports.badmin = () => {
	return`*「AXCT  HARUS JADI ADMIN❗」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK DIHIDUPKAN OWNER/ADMIN*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner AXCT , laporan bohongan akan langsung di kick*`
}

exports.wrongf = () => {
	return`*huruf salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Sukses❗*`
}

exports.pc = () => {
	return`*「 AXCT  REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang AXCT  kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer AXCT admin AXCT *`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA INFO 」*\n\n\nkamu sudah terdaftar di buku AXCT  dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa save nomor admin AXCT ❗`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan didalam database AXCT \coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner bot AXCT *`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ya  ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ya  ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ya  ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ya  ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ya ${pushname} level kamu belum mencukupi*\n\n*┏⊱level kamu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : JANGAN SPAM UNTUK MENAIKAN LEVEL_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `🍁AXCT🍁
					
╔═══════════════════❍
║╭━━━━━━━━━━━━━➣ 
║┣✿➣ *Nama* : ${pushname}
║┣✿➣ *Nomer* : wa.me/${sender.split("@")[0]}
║┣✿➣ *Uang mu* : Rp${uangku}
║┣✿➣ *XP* : ${getLevelingXp(sender)}/${reqXp}
║┣✿➣ *Role* : ${role}
║┣✿➣ *Level* : ${getLevelingLevel(sender)}
║┣✿➣ *User register* : ${_registered.length}
║╰━━━━━━━━━━━━━➣ 
╚═══════════════════❍

╔═════════════════❍
║⸨𝐑𝐮𝐥𝐞𝐬 - 𝐒𝐢𝐦𝐩𝐥𝒆⸩
║▬▭▬▭▬▭▬▭▬▭
║⧐ ⸨ *Spam : Auto Block!* ⸩
║⧐ ⸨ *Beri Jeda 6detik!* ⸩
║⧐ ⸨ *Error Harap Cht Owner!* ⸩
║⧐ ⸨ *Jangan Bandingkan Bot* ⸩
║⧐ ⸨ *Ketik ${prefix}help* ⸩
║⧐ ⸨ *Jangan Vc/Call!* ⸩
║⧐ ⸨ *Gunakan Dengan Ramah* ⸩
║▬▭▬▭▬▭▬▭▬▭
╚═════════════════❍

╭──━─── ❀۝❀ ───━──╮
                           *AXCT*
╰──━─── ❀۝❀ ───━──╯

❍━━━━━━━━━━━━━❍
*SOSMED ADMIN*
*YOUTUBE: AIDIL TIPI*
*INSTAGRAM: @aidil.tipi*
*https://chat.whatsapp.com/ICh1ubyFMLUFSW3Ej3QuzL*
❍━━━━━━━━━━━━━❍
JOIN GC LAH ASU 
JANGAN MAIN BOT AJA TAPI GAK DONASI
╔════════════════════❤︎
┣❥︎ *${prefix}report <teks>*
┣❥︎ *${prefix}rulestext*
╚════════════════════❤︎

╔═════════════════════
║> *_Menu Bot_*
╠═════════════════════
║┏━━⊱ ❰ *MAKER* ❱ ⊰━━❤︎
║┣❥︎ *${prefix}sticker* 
║┣❥︎ *${prefix}ttp* <teks>
║┣❥︎ *${prefix}pornhub* <teks&teks>
║┣❥︎ *${prefix}avengers* <teks|teks>
║┣❥︎ *${prefix}summer* <teks>
║┣❥︎ *${prefix}sandwrite* <teks>
║┣❥︎ *${prefix}metaldark* <teks>
║┣❥︎ *${prefix}dropwater* <teks>
║┣❥︎ *${prefix}greenneon* <teks>
║┣❥︎ *${prefix}neontext* <teks>
║┣❥︎ *${prefix}sumery* <teks>
║┣❥︎ *${prefix}blood* <teks>
║┣❥︎ *${prefix}firework* <teks>
║┣❥︎ *${prefix}lava* <teks>
║┣❥︎ *${prefix}qrcode* <teks>
║┣━━⊱  ❰ *FUN* ❱  ⊰━━━❤︎
║┣❥︎ *${prefix}mining*
║┣❥︎ *${prefix}bisakah* <teks>
║┣❥︎ *${prefix}kapankah* <teks>
║┣❥︎ *${prefix}hartatahta* <teks>
║┣❥︎ *${prefix}apakah* <teks>
║┣❥︎ *${prefix}hartatahta* <teks>
║┣❥︎ *${prefix}rate* <teks>
║┣❥︎ *${prefix}slap*
║┣❥︎ *${prefix}tampar*
║┣❥︎ *${prefix}hobby*
║┣❥︎ *${prefix}moddroid* <teks>
║┣❥︎ *${prefix}happymod* <teks>
║┣❥︎ *${prefix}nangis*
║┣❥︎ *${prefix}cium*
║┣❥︎ *${prefix}peluk*
║┣❥︎ *${prefix}tebakin*
║┣❥︎ *${prefix}family100*
║┣❥︎ *${prefix}darkjokes*
║┣❥︎ *${prefix}memeindo*
║┣❥︎ *${prefix}jadwaltv*
║┣❥︎ *${prefix}dadu*
║┣❥︎ *${prefix}spamcall*
║┣❥︎ *${prefix}fakta*
║┣❥︎ *${prefix}spamsms*
║┣❥︎ *${prefix}caklontong*
║┣❥︎ *${prefix}randomgame*
║┣❥︎ *${prefix}infonomor* <nomor>
║┣❥︎ *${prefix}beritahoax*
║┣❥︎ *${prefix}seberapagay*
║┣❥︎ *${prefix}quotemaker*
║┣❥︎ *${prefix}truth*
║┣❥︎ *${prefix}dare*
║┣❥︎ *${prefix}hilih*
║┣❥︎ *${prefix}artinama*
║┣❥︎ *${prefix}nulis*
║┣❥︎ *${prefix}nulis2*
║┣❥︎ *${prefix}nulis3*
║┣━━⊱ ❰ *MUTUAL* ❱ ⊰━━━━━❤︎
║┣❥︎ *${prefix}mutual*
║┣❥︎ *${prefix}next*
║┣━━⊱ ❰ *MEDIA* ❱ ⊰━━❤︎
║┣❥︎ *${prefix}brainly* <teks>
║┣❥︎ *${prefix}pinterest*
║┣❥︎ *${prefix}map*
║┣❥︎ *${prefix}wait*
║┣❥︎ *${prefix}resepmasakan* <teks>
║┣❥︎ *${prefix}igstalk* <username>
║┣❥︎ *${prefix}bitly* <link>
║┣━━⊱ ❰ *YT & SONG* ❱ ⊰━━━❤︎
║┣❥︎ *${prefix}lirik* <teks>
║┣❥︎ *${prefix}ytmp4* <link>
║┣❥︎ *${prefix}joox* <judul>
║┣❥︎ *${prefix}play* <link>
║┣━━⊱ ❰ *NSFW MENU* ❱ ⊰━❤︎
║┣❥︎ *${prefix}hentai*
║┣❥︎ *${prefix}anjing*
║┣❥︎ *${prefix}blowjob*
║┣❥︎ *${prefix}randomanime*
║┣❥︎ *${prefix}loli*
║┣❥︎ *${prefix}randomhentai*
║┣❥︎ *${prefix}nekonime*
║┣❥︎ *${prefix}neko*
║┣❥︎ *${prefix}husbu*
║┣❥︎ *${prefix}wibu*
║┣❥︎ *${prefix}waifu*
║┣❥︎ *${prefix}bokep*
║┣❥︎ *${prefix}nsfwtrap*
║┣❥︎ *${prefix}nsfwblowjob*
║┣❥︎ *${prefix}nsfwneko*
║┣❥︎ *${prefix}kucing*
║┣━━⊱ ❰ *ANIME* ❱ ⊰━━━━━❤︎
║┣❥︎ *${prefix}boruto* 
║┣❥︎ *${prefix}rize* 
║┣❥︎ *${prefix}neko*
║┣❥︎ *${prefix}kaneki*
║┣❥︎ *${prefix}naruto* 
║┣❥︎ *${prefix}minato* 
║┣❥︎ *${prefix}miku* 
║┣❥︎ *${prefix}kurumi*
║┣❥︎ *${prefix}hinata* 
║┣❥︎ *${prefix}sasuke* 
║┣❥︎ *${prefix}sakura* 
║┣❥︎ *${prefix}akura* 
║┣❥︎ *${prefix}itori* 
║┣❥︎ *${prefix}touka* 
║┣❥︎ *${prefix}animesaran*
║┣❥︎ *${prefix}animesaran2*
║┣❥︎ *${prefix}rem*
║┣❥︎ *${prefix}chika*
║┣❥︎ *${prefix}kodenuklir*
║┣❥︎ *${prefix}kpop* 
║┣❥︎ *${prefix}blackpink*
║┣❥︎ *${prefix}nekopoi* <teks>
║┣❥︎ *${prefix}randomanime2*
║┣❥︎ *${prefix}randomanime3*
║┣❥︎ *${prefix}loli2*
║┣❥︎ *${prefix}randomhusbu*
║┣━━⊱ ❰ *LIMIT & UANG* ❱ ⊰━❤︎
║┣❥︎ *${prefix}limit* 
║┣❥︎ *${prefix}buylimit* <jumblah>
║┣❥︎ *${prefix}transfer* <tag |jumblah>
║┣❥︎ *${prefix}bank*
║┣━━⊱ ❰ *ISLAM MENU* ❱ ⊰━❤︎
║┣❥︎ *${prefix}randomquran*
║┣❥︎ *${prefix}listsurah*
║┣━━⊱ ❰ *GROUP MENU* ❱ ⊰━❤︎
║┣❥︎ *${prefix}hidetag*
║┣❥︎ *${prefix}antilinkgrup* [1/0]
║┣❥︎ *${prefix}grouplist*
║┣❥︎ *${prefix}level*
║┣❥︎ *${prefix}infogc*
║┣❥︎ *${prefix}kickbeban* <tag>
║┣❥︎ *${prefix}linkgc*
║┣❥︎ *${prefix}tagall*
║┣❥︎ *${prefix}setpp*
║┣❥︎ *${prefix}add* <tag>
║┣❥︎ *${prefix}kick* <tag>
║┣❥︎ *${prefix}setname* <teks>
║┣❥︎ *${prefix}setdesc* <teks>
║┣❥︎ *${prefix}demote* <tag>
║┣❥︎ *${prefix}promote* <tag>
║┣❥︎ *${prefix}listadmin*
║┣❥︎ *${prefix}jadian*
║┣❥︎ *${prefix}group* [buka/tutup]
║┣❥︎ *${prefix}leveling* [enable/disable]
║┣❥︎ *${prefix}nsfw* [1/0]
║┣❥︎ *${prefix}simih* [1/0]
║┣❥︎ *${prefix}welcome* [1/0]
║┣━━⊱ ❰ *OWNER MENU* ❱ ⊰━❤︎
║┣❥︎ *${prefix}bc* <teks>
║┣❥︎ *${prefix}asupan*
║┣❥︎ *${prefix}bcgc* <teks>
║┣❥︎ *${prefix}kickall* <rawan ban>
║┣❥︎ *${prefix}setreply* <teks>
║┣❥︎ *${prefix}setprefix* <symbol>
║┣❥︎ *${prefix}clearall*
║┣❥︎ *${prefix}setlimit* <jumlah>
║┣❥︎ *${prefix}ban* <tag>
║┣❥︎ *${prefix}antilinkgrup* [1/0]
║┣❥︎ *${prefix}block* <tag>
║┣❥︎ *${prefix}unblock* <tag>
║┣❥︎ *${prefix}leave*
║┣❥︎ *${prefix}event* [1/0]
║┣❥︎ *${prefix}clone* <tag>
║┣❥︎ *${prefix}setnamebot*
║┣❥︎ *${prefix}setppbot*
║┣━━⊱ ❰ *TQTO* ❱ ⊰━━❤︎
║┃
║┣➣ *RIU* <DEV>
║┣➣ *AXCT BOT*
║┣➣ *ՏᎪᏦႮᎡᎪ BOTZ* 
║┣➣ *ABDUR* 
║┣➣ *AMPIBI*
║┣➣ *Mr.A43G TEAM* 
║┃
║┃ *THANKS TO ALL AXCT BOT*
║┗━━⊱  ⸨ *AXCT* ⸩  ⊰━━━
╚═══════════════════>
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 OMEDETOU 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +1000
┣⊱ *Role* :  ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ya  ${pushname} limit kamu  hari ini habis*\n*beli limit untuk mendapatkan limit*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT BOT AXCT  」*
sisa limit kamu : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa dengan ,buylimit atau dengan bayar 5K per 20 limit info lebih lanjut ketik ,owner`
}

exports.satukos = () => {
	return`*Tambah huruf/nomor 1/enable atau 0/disable*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 BCA 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
