export type Video = {
    id: number,
    name: string,
    thumbnail: string,
    champion: string[],
    year: number,
    winscreen: boolean,
    rating: number | null,
    type: string
}

export const videos: Video[] = [
    {
        id : 982,
        name : "I played AP Lucian so you don't have to",
        thumbnail : "aplucian.jpg",
        champion : ["Lucian"],
        year : 2023,
        winscreen : true,
        rating : null,
        type: "AP Offmeta"
    },
    {
        id : 983,
        name : "Full Movespeed Warwick",
        thumbnail : "movespeedwarwick.jpg",
        champion : ["Warwick"],
        year : 2023,
        winscreen : true,
        rating : 4,
        type: "Other"
    },
    {
        id : 984,
        name : "The Most Annoying Botlane in League of Legends",
        thumbnail : "neekomorg2.jpg",
        champion : ["Morgana", "Neeko"],
        year : 2023,
        winscreen : true,
        rating : null,
        type: "Other"
    },
    {
        id : 985,
        name : "Statikk Shiv AP Ezreal is Ridiculous",
        thumbnail : "shivapezreal.jpg",
        champion : ["Ezreal"],
        year : 2023,
        winscreen : true,
        rating : 6,
        type: "AP Offmeta"
    },
    {
        id : 986,
        name : "Thermonuclear Teemo",
        thumbnail : "oppenheimerteemo.jpg",
        champion : ["Teemo"],
        year : 2023,
        winscreen : true,
        rating : 5,
        type: "AP Offmeta"
    },
    {
        id : 987,
        name : "AP Hybrid Tryndamere is Ridiculous (pre 13.10)",
        thumbnail : "hybridtrynd.jpg",
        champion : ["Tryndamere"],
        year : 2023,
        winscreen : true,
        rating : 3,
        type: "Other"
    },
    {
        id : 988,
        name : "AP Pantheon POWERSLIDES through your adc",
        thumbnail : "appantheon.jpg",
        champion : ["Pantheon"],
        year : 2023,
        winscreen : true,
        rating : 3,
        type: "AP Offmeta"
    },
    {
        id : 989,
        name : "Full AP Jax is Ridiculous",
        thumbnail : "apjax.jpg",
        champion : ["Jax"],
        year : 2023,
        winscreen : true,
        rating : 5,
        type: "AP Offmeta"
    },
    {
        id : 990,
        name : "The Tales of Full AP Gangplank",
        thumbnail : "apgp.jpg",
        champion : ["Gangplank"],
        year : 2023,
        winscreen : true,
        rating : 2,
        type: "AP Offmeta"
    },
    {
        id : 991,
        name : "This Akshan tech was so OP it was removed in a day",
        thumbnail : "akshantrundle.jpg",
        champion : ["Akshan", "Trundle"],
        year : 2022,
        winscreen : true,
        rating : 5,
        type: "Other"
    },
    {
        id : 992,
        name : "Minged (Midlane Singed)",
        thumbnail : "minged.jpg",
        champion : ["Singed"],
        year : 2022,
        winscreen : true,
        rating : 4.5,
        type: "AP Offmeta"
    },
    {
        id : 993,
        name : "Upgrading my Favorite Builds with Ultimate Spellbook ⬢",
        thumbnail : "spellbook.jpg",
        champion : ["Blitzcrank", "Jhin", "Kindred", "Lillia", "Miss Fortune", "Warwick", "Xin Zhao"],
        year : 2022,
        winscreen : true,
        rating : null,
        type: "Other"
    },
    {
        id : 994,
        name : "I played AP Vi so you don't have to ⬢ Filler Episode",
        thumbnail : "apvi.jpg",
        champion : ["Vi"],
        year : 2022,
        winscreen : false,
        rating : null,
        type: "AP Offmeta"
    },
    {
        id : 995,
        name : "the perfect excuse to play Miss Fortune mid ⬢ Liandry's/Manamune Hybrid Build",
        thumbnail : "hybridmf.jpg",
        champion : ["Miss Fortune"],
        year : 2022,
        winscreen : true,
        rating : 4,
        type: "Other"
    },
    {
        id : 996,
        name : "Galeforce/First Strike Garen Jungle is so bad it's good ⬢ 3 Minute Build",
        thumbnail : "galeforcegaren.jpg",
        champion : ["Garen"],
        year : 2022,
        winscreen : false,
        rating : null,
        type: "AD Offmeta"
    },
    {
        id : 997,
        name : "I was cyberbullied into building Crit on Rell ⬢ Pick My Build",
        thumbnail : "crell.jpg",
        champion : ["Rell"],
        year : 2022,
        winscreen : true,
        rating : 1,
        type: "AD Offmeta"
    },
    {
        id : 998,
        name : "the botlane you can't escape from (because it kills you) ⬢ J4/Galio Slam Dunk Botlane",
        thumbnail : "j4galio.jpg",
        champion : ["Galio", "Jarvan IV"],
        year : 2022,
        winscreen : true,
        rating : 3.5,
        type: "Other"
    },
    {
        id : 1000,
        name : "Money Shot Caitlyn | the point and click oneshot cannon",
        thumbnail : "moneyshot.jpg",
        champion : ["Caitlyn"],
        year : 2022,
        winscreen : false,
        rating : 5,
        type: "AD Offmeta"
    },
    {
        id : 1001,
        name : "The League of Legends Christmas Incident",
        thumbnail : "christmas.jpg",
        champion : ["Gragas"],
        year : 2021,
        winscreen : false,
        rating : null,
        type: "Other"
    },
    {
        id : 1002,
        name : "Two idiots attempting a 'high elo' botlane combo. (Zilean TF Botlane)",
        thumbnail : "zileantf.jpg",
        champion : ["Twisted Fate", "Zilean"],
        year : 2021,
        winscreen : true,
        rating : null,
        type: "Other"
    },
    {
        id : 1003,
        name : "This is an AP Varus video",
        thumbnail : "apvarus.jpg",
        champion : ["Varus"],
        year : 2021,
        winscreen : true,
        rating : 4,
        type: "AP Offmeta"
    },
    {
        id : 1003.1,
        name : "The Midlane Full AP Ashe Experience",
        thumbnail : "apashe.jpg",
        champion : ["Ashe"],
        year : 2021,
        winscreen : true,
        rating : 2.4,
        type: "AP Offmeta"
    },
    {
        id : 1003.2,
        name : "galeforce alistar.",
        thumbnail : "galeforcealistar.jpg",
        champion : ["Alistar"],
        year : 2021,
        winscreen : true,
        rating : 3,
        type: "AD Offmeta"
    },
    {
        id : 1004,
        name : "Hell's Midlane ⬢ A Xin Zhao Manifesto",
        thumbnail : "xinmid.jpg",
        champion : ["Xin Zhao"],
        year : 2021,
        winscreen : true,
        rating : 5,
        type: "Other"
    },
    {
        id : 1005,
        name : "AD Crit Viktor won a vote so I played it ⬢ Pick My Build",
        thumbnail : "adviktor.jpg",
        champion : ["Viktor"],
        year : 2021,
        winscreen : false,
        rating : 1,
        type: "AD Offmeta"
    },
    {
        id : 1006,
        name : "The Full AP Jhin \"Experience™\" ⬢ All Mid",
        thumbnail : "apjhin.jpg",
        champion : ["Jhin"],
        year : 2021,
        winscreen : false,
        rating : 2,
        type: "AP Offmeta"
    },
    {
        id : 1007,
        name : "These two champions are identical ⬢ Double Morgana Botlane",
        thumbnail : "neekomorg1.jpg",
        champion : ["Morgana", "Neeko"],
        year : 2021,
        winscreen : true,
        rating : null,
        type: "Other"
    },
    {
        id : 1008,
        name : "Blitzcrank Mid: Blitz of the North Star ⬢ All Mid",
        thumbnail : "blitzmid.jpg",
        champion : ["Blitzcrank"],
        year : 2021,
        winscreen : true,
        rating : 3,
        type: "AP Offmeta"
    },
    {
        id : 1009,
        name : "Scuffed Santas",
        thumbnail : "santa.jpg",
        champion : ["Gragas"],
        year : 2020,
        winscreen : false,
        rating : 2,
        type: "Other"
    },
    {
        id : 1010,
        name : "Breaking the Geneva Protocol with AP Twitch ⬢ All Mid",
        thumbnail : "aptwitch.jpg",
        champion : ["Twitch"],
        year : 2020,
        winscreen : false,
        rating : 3,
        type: "AP Offmeta"
    },
    {
        id : 1011,
        name : "Stacking Executes with Kindred Mid - for some reason ⬢ All Mid",
        thumbnail : "kindredmid.jpg",
        champion : ["Kindred"],
        year : 2020,
        winscreen : true,
        rating : 4,
        type: "AD Offmeta"
    },
    {
        id : 1012,
        name : "MF's Ult doesn't break sleeps ⬢ Sleepy Bullet Botlane Combo ⬢ Also More Udyr",
        thumbnail : "mflillia.jpg",
        champion : ["Lillia", "Miss Fortune", "Udyr"],
        year : 2020,
        winscreen : true,
        rating : null,
        type: "Other"
    },
    {
        id : 1013,
        name : "Full AP Udyr Mid is... interesting... ⬢ All Mid",
        thumbnail : "apudyr.jpg",
        champion : ["Udyr"],
        year : 2020,
        winscreen : false,
        rating : 2,
        type: "AP Offmeta"
    },
    {
        id : 1014,
        name : "MORE Midlane Warwick: Hygiene Police ⬢ All Mid Extras",
        thumbnail : "wwmid2.jpg",
        champion : ["Warwick"],
        year : 2020,
        winscreen : false,
        rating : null,
        type: "Other"
    },
    {
        id : 1015,
        name : "Warwick MID is actually really, really good ⬢ All Mid",
        thumbnail : "wwmid1.jpg",
        champion : ["Warwick"],
        year : 2020,
        winscreen : true,
        rating : 4,
        type: "Other"
    },
    {
        id : 1016,
        name : "the only bard mid guide you'll ever (not) need ⬢ All Mid",
        thumbnail : "bardmid.jpg",
        champion : ["Bard"],
        year : 2020,
        winscreen : true,
        rating : 2,
        type: "Other"
    },
    {
        id : 1017,
        name : "AP Miss Fortune: GAAPMF ⬢ All Mid",
        thumbnail : "gaapmf.jpg",
        champion : ["Miss Fortune"],
        year : 2020,
        winscreen : true,
        rating : 3,
        type: "AP Offmeta"
    },
    {
        id : 1018,
        name : "Theorycrafting the perfect lane Lillia Build ⬢ All Mid",
        thumbnail : "lilliamid.jpg",
        champion : ["Lillia"],
        year : 2020,
        winscreen : true,
        rating : 4,
        type: "Other"
    },
    {
        id : 1019,
        name : "Nexus Blitz is a buggy, hilarious mess ⬢ League of Legends",
        thumbnail : "nexusblitz.jpg",
        champion : ["Ekko", "Kog'Maw", "Lillia", "Syndra"],
        year : 2020,
        winscreen : true,
        rating : null,
        type: "Other"
    },
    {
        id : 1020,
        name : "I played AP Qiyana so you don't have to ⬢ All Mid",
        thumbnail : "apqiyana.jpg",
        champion : ["Qiyana"],
        year : 2020,
        winscreen : false,
        rating : 1,
        type: "AP Offmeta"
    },
    {
        id : 1021,
        name : "season 4 MIDALEE still kinda works in season 10 tho ⬢ All Mid",
        thumbnail : "midalee.jpg",
        champion : ["Nidalee"],
        year : 2020,
        winscreen : true,
        rating : 3,
        type: "AP Offmeta"
    },
    {
        id : 1022,
        name : "DEMACIAN ONE NIGHT STANDARD ⬢ Xin/J4 Birthday Botlane",
        thumbnail : "j4xin.jpg",
        champion : ["Jarvan IV", "Xin Zhao"],
        year : 2020,
        winscreen : true,
        rating : null,
        type: "Other"
    },
    {
        id : 1023,
        name : "Xin Zhao midlane is THE BEST dumb pick ⬢ All Mid",
        thumbnail : "xid.jpg",
        champion : ["Xin Zhao"],
        year : 2020,
        winscreen : true,
        rating : null,
        type: "AD Offmeta"
    }
]