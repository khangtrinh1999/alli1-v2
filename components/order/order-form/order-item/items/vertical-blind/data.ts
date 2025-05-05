import { Selections } from "@/lib/interface";

export const controlTypes = [
  {
    value: "Wand",
    name: "Wand",
    image:
      "https://products-images-source.s3.ap-southeast-2.amazonaws.com/vertical-blinds/wand-control.png",
  },
  {
    value: "Cord",
    name: "Cord",
    image:
      "https://products-images-source.s3.ap-southeast-2.amazonaws.com/vertical-blinds/chain-control.png",
  },
] as Selections[];

export const controlColors = [
  {
    value: "White",
    name: "White",
    color: "#FFFFFF",
  },
  {
    value: "Black",
    name: "Black",
    color: "#000000",
  },
  {
    value: "Grey",
    name: "Grey",
    color: "#b0afa7",
  },
  {
    value: "Ivory",
    name: "Ivory",
    color: "#fefef2",
  },
  {
    value: "Driftwood",
    name: "Driftwood",
    color: "#c3b7a8",
  },
] as Selections[];

export const TrackColors = [
  {
    value: "White",
    name: "White",
    color: "#FFFFFF",
  },
  {
    value: "Black",
    name: "Black",
    color: "#000000",
  },
  {
    value: "Grey",
    name: "Grey",
    color: "#b0afa7",
  },
  {
    value: "Cream",
    name: "Cream",
    color: "#c3b7a8",
  },
];

export const VibeBlockout = [
  {
    value: "Alloy",
    name: "Alloy",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Alloy.jpg",
  },
  {
    value: "Birch",
    name: "Birch",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Birch.jpg",
  },
  {
    value: "Bistro",
    name: "Bistro",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Bistro.jpg",
  },
  {
    value: "Brulee Metallic",
    name: "Brulee Metallic",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Brulee-Metallic.jpg",
  },
  {
    value: "Chateau",
    name: "Chateau",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Chateau.jpg",
  },
  {
    value: "Clay",
    name: "Clay",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Clay.jpg",
  },
  {
    value: "Cloud",
    name: "Cloud",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Cloud.jpg",
  },
  {
    value: "Coal",
    name: "Coal",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Coal.jpg",
  },
  {
    value: "Dune",
    name: "Dune",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Dune.jpg",
  },
  {
    value: "Ice",
    name: "Ice",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Ice.jpg",
  },
  {
    value: "Lace",
    name: "Lace",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Lace.jpg",
  },
  {
    value: "Limestone",
    name: "Limestone",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Limestone.jpg",
  },
  {
    value: "Linen",
    name: "Linen",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Linen.jpg",
  },
  {
    value: "Loft",
    name: "Loft",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Loft.jpg",
  },
  {
    value: "Mercury Metallic",
    name: "Mercury Metallic",
    image:
      process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Mercury Metallic.jpg",
  },
  {
    value: "Mist",
    name: "Mist",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Mist.jpg",
  },
  {
    value: "Moon",
    name: "Moon",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Moon.jpg",
  },
  {
    value: "Nimbus",
    name: "Nimbus",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Nimbus.jpg",
  },
  {
    value: "Odessey",
    name: "Odessey",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Odessey.jpg",
  },
  {
    value: "Orient",
    name: "Orient",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Orient.jpg",
  },
  {
    value: "Porcelain",
    name: "Porcelain",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Porcelain.jpg",
  },
  {
    value: "Pure",
    name: "Pure",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Pure.jpg",
  },
  {
    value: "Spirit",
    name: "Spirit",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Spirit.jpg",
  },
  {
    value: "Stone",
    name: "Stone",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Stone.jpg",
  },
  {
    value: "Storm",
    name: "Storm",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Storm.jpg",
  },
  {
    value: "Surf",
    name: "Surf",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Surf.jpg",
  },
  {
    value: "Terrace",
    name: "Terrace",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Terrace.jpg",
  },
  {
    value: "Umber",
    name: "Umber",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Umber.jpg",
  },
  {
    value: "Tundra",
    name: "Tundra",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Tundra.jpg",
  },
  {
    value: "Whisper",
    name: "Whisper",
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Whisper.jpg",
  },
];

export const SkyBlockout = [
  {
    value: "Blazer",
    name: "Blazer",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Blazer.jpg",
  },
  {
    value: "Chiffon",
    name: "Chiffon",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Chiffon.jpg",
  },
  {
    value: "Chrome",
    name: "Chrome",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Chrome.jpg",
  },
  {
    value: "Earl Grey",
    name: "Earl Grey",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Earl_Grey.jpg",
  },
  {
    value: "Oyster",
    name: "Oyster",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Oyster.jpg",
  },
  {
    value: "Porcelain",
    name: "Porcelain",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Porcelain.jpg",
  },
  {
    value: "Raven",
    name: "Raven",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Raven.jpg",
  },
  {
    value: "Sail",
    name: "Sail",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Sail.jpg",
  },
  {
    value: "Swan",
    name: "Swan",
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-Block-Out/Swan.jpg",
  },
];

export const KamarBlockOut = [
  {
    value: "Cliff",
    name: "Cliff",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Cliff.jpg",
  },
  {
    value: "Dew",
    name: "Dew",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Dew.jpg",
  },
  {
    value: "Frost",
    name: "Frost",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Frost.jpg",
  },
  {
    value: "Glade",
    name: "Glade",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Glade.jpg",
  },
  {
    value: "Haze",
    name: "Haze",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Haze.jpg",
  },
  {
    value: "Magma",
    name: "Magma",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Magma.jpg",
  },
  {
    value: "Moonscape",
    name: "Moonscape",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Moonscape.jpg",
  },
  {
    value: "Ocean",
    name: "Ocean",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Ocean.jpg",
  },
  {
    value: "Petrol",
    name: "Petrol",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Petrol.jpg",
  },
  {
    value: "Rock",
    name: "Rock",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Rock.jpg",
  },
  {
    value: "Sandstone",
    name: "Sandstone",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Sandstone.jpg",
  },
  {
    value: "Shell",
    name: "Shell",
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Shell.jpg",
  },
];

export const MandalayBlockOut = [
  {
    value: "Abalone",
    name: "Abalone",
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Abalone.jpg",
  },
  {
    value: "Alabaster",
    name: "Alabaster",
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Alabaster.jpg",
  },
  {
    value: "Alpaca",
    name: "Alpaca",
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Alpaca.jpg",
  },
  {
    value: "Cement",
    name: "Cement",
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Cement.jpg",
  },
  {
    value: "Cloud",
    name: "Cloud",
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Cloud.jpg",
  },
  {
    value: "Donkey",
    name: "Donkey",
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Donkey.jpg",
  },
  {
    value: "Ivory",
    name: "Ivory",
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Ivory.jpg",
  },
  {
    value: "Muslin",
    name: "Muslin",
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Muslin.jpg",
  },
];

export const TapestryBlockOut = [
  {
    value: "Buff",
    name: "Buff",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Buff.jpg",
  },
  {
    value: "Cloud",
    name: "Cloud",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Cloud.jpg",
  },
  {
    value: "Concrete",
    name: "Concrete",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Concrete.jpg",
  },
  {
    value: "Dove",
    name: "Dove",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Dove.jpg",
  },
  {
    value: "Gunmetal",
    name: "Gunmetal",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Gunmetal.jpg",
  },
  {
    value: "Portland",
    name: "Portland",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Portland.jpg",
  },
  {
    value: "Seagull",
    name: "Seagull",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Seagull.jpg",
  },
  {
    value: "Tuxedo",
    name: "Tuxedo",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Tuxedo.jpg",
  },
  {
    value: "White Wash",
    name: "White Wash",
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/White Wash.jpg",
  },
];

export const DawnBlockOut = [
  {
    value: "Beige",
    name: "Beige",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Beige.jpg",
  },
  {
    value: "Bison",
    name: "Bison",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Bison.jpg",
  },
  {
    value: "Caviar",
    name: "Caviar",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Caviar.jpg",
  },
  {
    value: "Custom Cream",
    name: "Custom Cream",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Custom Cream.jpg",
  },
  {
    value: "Earthen",
    name: "Earthen",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Earthen.jpg",
  },
  {
    value: "Ivory",
    name: "Ivory",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Ivory.jpg",
  },
  {
    value: "Macchiato",
    name: "Macchiato",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Machiato.jpg",
  },
  {
    value: "Mid Grey",
    name: "Mid Grey",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Mid Grey.jpg",
  },
  {
    value: "Natural",
    name: "Natural",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Natural.jpg",
  },
  {
    value: "Nutmeg",
    name: "Nutmeg",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Nutmeg.jpg",
  },
  {
    value: "Pewter",
    name: "Pewter",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Pewter.jpg",
  },
  {
    value: "Royal Blue",
    name: "Royal Blue",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Royal Blue.jpg",
  },
  {
    value: "Sesame",
    name: "Sesame",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Sesame.jpg",
  },
  {
    value: "Shale",
    name: "Shale",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Shale.jpg",
  },
  {
    value: "Taupe",
    name: "Taupe",
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/Taupe.jpg",
  },
];

const sunsetBO = [
  {
    value: "Antique",
    name: "Antique",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Antique.jpg",
  },
  {
    value: "Ash Grey",
    name: "Ash Grey",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Ash Grey.jpg",
  },
  {
    value: "Bark",
    name: "Bark",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Bark.jpg",
  },
  {
    value: "Beaver",
    name: "Beaver",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Beaver.jpg",
  },
  {
    value: "Bone",
    name: "Bone",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Bone.jpg",
  },
  {
    value: "Cashew",
    name: "Cashew",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Cashew.jpg",
  },
  {
    value: "Ecru",
    name: "Ecru",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Ecru.jpg",
  },
  {
    value: "Flax",
    name: "Flax",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Flax.jpg",
  },
  {
    value: "Lace",
    name: "Lace",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Lace.jpg",
  },
  {
    value: "Lava",
    name: "Lava",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Lava.jpg",
  },
  {
    value: "Mushroom",
    name: "Mushroom",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Mushroom.jpg",
  },
  {
    value: "Natural",
    name: "Natural",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Natural.jpg",
  },
  {
    value: "Onyx",
    name: "Onyx",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Onyx.jpg",
  },
  {
    value: "Parchment",
    name: "Parchment",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Parchment.jpg",
  },
  {
    value: "Pepper",
    name: "Pepper",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Pepper.jpg",
  },
  {
    value: "Sahara",
    name: "Sahara",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Sahara.jpg",
  },
  {
    value: "Seal",
    name: "Seal",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Seal.jpg",
  },
  {
    value: "Silver",
    name: "Silver",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Silver.jpg",
  },
  {
    value: "Snow",
    name: "Snow",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Snow.jpg",
  },
  {
    value: "Stone",
    name: "Stone",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Stone.jpg",
  },
  {
    value: "Tuape",
    name: "Tuape",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Tuape.jpg",
  },
  {
    value: "Vanilla",
    name: "Vanilla",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Vanilla.jpg",
  },
  {
    value: "Warm Grey",
    name: "Warm Grey",
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Warm Grey.jpg",
  },
];

export const fabricBrandBlockOut127 = [
  {
    name: "Vibe Blockout",
    value: "1",
    description:
      "Featured PVC free acrylic coating has anti-fade, 100% blackout, easy clean and antifungal properties.",
    subItems: VibeBlockout,
    image: process.env.NEXT_PUBLIC_CFCDN + "vibe-block-out/Vibe_HERO.jpg",
  },
  {
    name: "Skye Blockout",
    value: "9",
    description:
      "Skye has a subtle texture enhanced with cationic yarn and a modern colour range.",
    subItems: SkyBlockout,
    image: process.env.NEXT_PUBLIC_CFCDN + "Skye-LF/Skye_HERO_LF.jpg",
  },
  {
    name: "Karma Blockout",
    value: "4",
    description: "Karma fabric is renowned for its sleek, modern appearance.",
    subItems: KamarBlockOut,
    image: process.env.NEXT_PUBLIC_CFCDN + "kamar-block-out/Karma_HERO_BO.jpg",
  },
  {
    name: "Dawn Blockout",
    value: "10",
    description: "",
    subItems: DawnBlockOut,
    image: process.env.NEXT_PUBLIC_CFCDN + "Dawn/DAWN-HERO-2.jpg",
  },
  {
    name: "Sunset Blockout",
    value: "11",
    description: "",
    subItems: sunsetBO,
    image: process.env.NEXT_PUBLIC_CFCDN + "Sunset/Sunset-HERO-2.jpeg",
  },
  {
    name: "Mandalay Blockout",
    value: "12",
    description: "",
    subItems: MandalayBlockOut,
    image: process.env.NEXT_PUBLIC_CFCDN + "Mandalay/Abalone.jpg",
  },
  {
    name: "Tapestry Blockout",
    value: "13",
    description: "",
    subItems: TapestryBlockOut,
    image: process.env.NEXT_PUBLIC_CFCDN + "Tapestry-BOLF/Tapestry-HERO.jpg",
  },
] as Selections[];
