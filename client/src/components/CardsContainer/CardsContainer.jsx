import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
    // const videogames = [{
	// 	"id": 3498,
	// 	"name": "Grand Theft Auto V",
	// 	"released": "2013-09-17",
	// 	"rating": 4.47,
	// 	"platforms": [
	// 		{
	// 			"platform": {
	// 				"id": 187,
	// 				"name": "PlayStation 5",
	// 				"slug": "playstation5",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": 2020,
	// 				"games_count": 777,
	// 				"image_background": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg"
	// 			},
	// 			"released_at": "2013-09-17",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 186,
	// 				"name": "Xbox Series S/X",
	// 				"slug": "xbox-series-x",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": 2020,
	// 				"games_count": 699,
	// 				"image_background": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
	// 			},
	// 			"released_at": "2013-09-17",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 18,
	// 				"name": "PlayStation 4",
	// 				"slug": "playstation4",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 6555,
	// 				"image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
	// 			},
	// 			"released_at": "2013-09-17",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 4,
	// 				"name": "PC",
	// 				"slug": "pc",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 519287,
	// 				"image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
	// 			},
	// 			"released_at": "2013-09-17",
	// 			"requirements_en": {
	// 				"minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
	// 				"recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
	// 			},
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 16,
	// 				"name": "PlayStation 3",
	// 				"slug": "playstation3",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 3420,
	// 				"image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
	// 			},
	// 			"released_at": "2013-09-17",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 14,
	// 				"name": "Xbox 360",
	// 				"slug": "xbox360",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 2777,
	// 				"image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
	// 			},
	// 			"released_at": "2013-09-17",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 1,
	// 				"name": "Xbox One",
	// 				"slug": "xbox-one",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 5467,
	// 				"image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
	// 			},
	// 			"released_at": "2013-09-17",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		}
	// 	],
	// 	"image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
	// 	"created": false
	// },
	// {
	// 	"id": 3328,
	// 	"name": "The Witcher 3: Wild Hunt",
	// 	"released": "2015-05-18",
	// 	"rating": 4.66,
	// 	"platforms": [
	// 		{
	// 			"platform": {
	// 				"id": 186,
	// 				"name": "Xbox Series S/X",
	// 				"slug": "xbox-series-x",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": 2020,
	// 				"games_count": 699,
	// 				"image_background": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
	// 			},
	// 			"released_at": "2015-05-18",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 18,
	// 				"name": "PlayStation 4",
	// 				"slug": "playstation4",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 6555,
	// 				"image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
	// 			},
	// 			"released_at": "2015-05-18",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 7,
	// 				"name": "Nintendo Switch",
	// 				"slug": "nintendo-switch",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 5142,
	// 				"image_background": "https://media.rawg.io/media/games/63f/63f0e68688cad279ed38cde931dbfcdb.jpg"
	// 			},
	// 			"released_at": "2015-05-18",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 4,
	// 				"name": "PC",
	// 				"slug": "pc",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 519287,
	// 				"image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
	// 			},
	// 			"released_at": "2015-05-18",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 1,
	// 				"name": "Xbox One",
	// 				"slug": "xbox-one",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": null,
	// 				"games_count": 5467,
	// 				"image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
	// 			},
	// 			"released_at": "2015-05-18",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		},
	// 		{
	// 			"platform": {
	// 				"id": 187,
	// 				"name": "PlayStation 5",
	// 				"slug": "playstation5",
	// 				"image": null,
	// 				"year_end": null,
	// 				"year_start": 2020,
	// 				"games_count": 777,
	// 				"image_background": "https://media.rawg.io/media/games/2ae/2aedae90b1377a0f3e5ce54d24f8e41a.jpg"
	// 			},
	// 			"released_at": "2015-05-18",
	// 			"requirements_en": null,
	// 			"requirements_ru": null
	// 		}
	// 	],
	// 	"image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
	// 	"created": false
	// },]

    const videogames = useSelector(state=>state.videogames)

    return (
        <div className={style.container}>
            {videogames.map(game=>{
                return <Card 
                    id = {game.id}
                    name = {game.name}
                    rating = {game.rating}
                    image = {game.image}
                />
            })}
        </div>
    )
};

export default CardsContainer