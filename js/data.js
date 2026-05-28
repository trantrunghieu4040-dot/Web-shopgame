const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    tags: ["RPG", "Open World", "Sci-Fi"],
    price: 299000,
    discount: 20,
    image: "https://4kwallpapers.com/images/wallpapers/cyberpunk-2077-2560x1440-13543.jpg",
    screenshots: [
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/cyberpunk-2077-night-city-2.jpg",
      "https://images.wallpapersden.com/image/download/cyberpunk-2077-hd-poster_bWxsZ2aUmZqaraWkpJRmbmdlrWZlbWU.jpg",
      "https://areajugones.sport.es/wp-content/uploads/2022/09/cyberpunk-edgerunners-official-trailer-netflix-anime-1-26-screenshot1.jpg"
    ],
    description: "Khám phá thế giới tương lai rộng lớn với hệ thống chiến đấu độc đáo và cốt truyện hấp dẫn. Bạn sẽ đóng vai một thám tử mạng trong thành phố neon rực rỡ, đối mặt với những âm mưu tội phạm công nghệ cao.",
    developer: "CD Projekt Red",
    publisher: "CD Projekt Red",
    releaseDate: "2020-12-10",
    rating: 4.7
  },
  {
    id: 2,
    title: "WarHammer 40,000: Space Marine 2",
    genre: "Action",
    tags: ["Action", "Dark Fantasy", "Multiplayer"],
    price: 199000,
    discount: 0,
    image: "https://pressakey.com/gfxgames/boxart/full/Warhammer-40K-Space-Marine-2-7582-1670758566.jpg",
    screenshots: [
      "https://images7.alphacoders.com/131/1319953.jpeg",
      "https://cdn.wccftech.com/wp-content/uploads/2024/06/space-marine-2-group-HD-scaled.jpg",
      "https://dotesports.com/wp-content/uploads/2024/09/Warhammer-Space-Marine-2-Chainsword-1.jpg"
    ],
    description: "Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes.",
    developer: "Saber Interactive",
    publisher: "Focus Entertainment",
    releaseDate: "2024-09-09",
    rating: 4.9
  },
  {
    id: 3,
    title: "HELLDIVERS™ 2",
    genre: "Strategy",
    tags: ["Strategy", "Space", "Real-time"],
    price: 149000,
    discount: 30,
    image: "https://cdn.wccftech.com/wp-content/uploads/2025/05/Helldivers-2-Heart-of-Democracy-HD-scaled.jpeg",
    screenshots: [
      "https://www.svg.com/img/gallery/why-youd-never-want-to-play-helldivers-2-in-front-of-your-parents/dont-try-to-explain-managed-democracy-1715883195.jpg",
      "https://cdn.mos.cms.futurecdn.net/HGPd4zyLF4BvghVWHTjCPE.jpg",
      "https://www.dexerto.com/cdn-image/wp-content/uploads/2024/02/13/helldivers-2-dlc.jpg?width=1200&quality=60&format=auto"
    ],
    description: "Tuyến tấn công cuối cùng của Thiên Hà. Gia nhập Helldivers để đấu tranh giành tự do trong một thiên hà đầy rẫy kẻ địch với những pha bắn súng góc nhìn thứ ba đầy mãnh liệt, hung bạo và dữ dội.",
    developer: "Arrowhead Game Studios",
    publisher: "PlayStation Publishing LLC",
    releaseDate: "2024-02-08",
    rating: 4.3
  },
  {
    id: 4,
    title: "Stardew Valley",
    genre: "Simulation",
    tags: ["Simulation", "Casual", "Relaxing"],
    price: 0,
    discount: 0,
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/09/stardew-valley.jpg",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg?t=1754692865",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg?t=1754692865",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/ss_10628b4a811c0a925a1433d4323f78c7017dbbe4.1920x1080.jpg?t=1754692865"
    ],
    description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
    developer: "ConcernedApe",
    publisher: "ConcernedApe",
    releaseDate: "2016-02-26",
    rating: 4.9
  },
  {
    id: 5,
    title: "Forza Horizon 6",
    genre: "Racing",
    tags: ["Racing", "Arcade", "Cars"],
    price: 99000,
    discount: 50,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/27abb1584a118d50d0e3950fd48d557c51981db7/header.jpg?t=1779912021",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/383ace7815eaa8f8f5128a58fd8ca7df911d3e14/ss_383ace7815eaa8f8f5128a58fd8ca7df911d3e14.1920x1080.jpg?t=1779912021",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/ffea3efe4e67b24ceb6f9bd0919b1ebac344b61b/ss_ffea3efe4e67b24ceb6f9bd0919b1ebac344b61b.1920x1080.jpg?t=1779912021",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2483190/945a08124625ffa26ec0077761fcbe19df07dad5/ss_945a08124625ffa26ec0077761fcbe19df07dad5.1920x1080.jpg?t=1779912021"
    ],
    description: "Discover the breathtaking landscapes of Japan in over 550 real-world cars and become a racing Legend in Forza Horizon's biggest open world driving adventure yet.",
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    releaseDate: "2026-05-19",
    rating: 4.2
  },
  {
    id: 6,
    title: "Sekiro™: Shadows Die Twice - GOTY Edition",
    genre: "Adventure",
    tags: ["Adventure", "Puzzle", "Horror"],
    price: 129000,
    discount: 0,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1762888662",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/ss_0f7b0f8ed9ffc49aba26f9328caa9a1d59ad60f0.1920x1080.jpg?t=1762888662",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/ss_2685dd844a2a523b6c7ec207d46a538db6a908cd.1920x1080.jpg?t=1762888662",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/ss_15f0e9982621aed44900215ad283811af0779b1d.1920x1080.jpg?t=1762888662"
    ],
    description: "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
    developer: "FromSoftware",
    publisher: "Activision",
    releaseDate: "2019-03-22",
    rating: 5.0
  },
  {
    id: 7,
    title: "Counter-Strike 2",
    genre: "FPS",
    tags: ["FPS", "Multiplayer", "Competitive"],
    price: 0,
    discount: 0,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/ss_796601d9d67faf53486eeb26d0724347cea67ddc.1920x1080.jpg?t=1749053861",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/ss_d830cfd0550fbb64d80e803e93c929c3abb02056.1920x1080.jpg?t=1749053861",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/ss_ef82850f036dac5772cb07dbc2d1116ea13eb163.1920x1080.jpg?t=1749053861"
    ],
    description: "Counter-Strike 2 is the next iteration of the iconic FPS franchise, bringing enhanced graphics, new gameplay features, and improved performance to the battlefield. (but anti cheat still sick LOL) ",
    developer: "Valve",
    publisher: "Valve",
    releaseDate: "2023-04-15",
    rating: 4.4
  },
  {
    id: 8,
    title: "Hades II",
    genre: "RPG",
    tags: ["RPG", "Dungeon", "Roguelike"],
    price: 179000,
    discount: 15,
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg?t=1779901265",
    screenshots: [
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_ef0f63061d0a0a9a7e46f3b84f125d25330e8f19.1920x1080.jpg?t=1779901265",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_f28befd916e59b8bf0a8a801b8a498b8adaa01eb.1920x1080.jpg?t=1779901265",
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/ss_b88cb7b48a86f07a7288bf37141f6558279f9bfc.1920x1080.jpg?t=1779901265"
    ],
    description: "Battle beyond the Underworld using dark sorcery to take on the Titan of Time in this bewitching sequel to the award-winning rogue-like dungeon crawler.",
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    releaseDate: "2025-09-25",
    rating: 4.5
  }
];

// Tính giá sau giảm
function getFinalPrice(game) {
  if (game.price === 0) return 0;
  return Math.round(game.price * (1 - game.discount / 100));
}

// Format tiền VND
function formatPrice(price) {
  if (price === 0) return "Miễn phí";
  return price.toLocaleString("vi-VN") + " ₫";
}

// Lấy game theo ID
function getGameById(id) {
  return games.find(g => g.id === parseInt(id));
}

// Lấy tất cả thể loại
function getAllGenres() {
  const genres = [...new Set(games.map(g => g.genre))];
  return genres;
}