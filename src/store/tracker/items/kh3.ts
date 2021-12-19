import { IconStyle } from "../../settings";
import { item, levels, magic, world } from "../factories";
import { Items, mapItems } from "../state";

export const items: Items = {
  "worlds/kh3/olympus": world({
    minimal: "worlds/kh1/olympus_coliseum",
    secondary: ["flame_core", "giant_troll", "rock_titan", "tornado_titan"].map(
      i => `olympus_coliseum/${i}`,
    ),
  }),
  "worlds/kh3/twilight_town": world({
    minimal: "worlds/twilight_town",
    secondary: ["keyblade_graveyard/demon_tide", "twilight_town/grand_bistrot"],
  }),
  "worlds/kh3/toy_box": world({
    secondary: ["gigas_mechs", "angelic_amber", "cactuar", "king_of_toys"].map(i => `toy_box/${i}`),
  }),
  "worlds/kh3/kingdom_of_corona": world({
    secondary: ["chaos_carriage", "reaper", "grim_guardianess"].map(i => `kingdom_of_corona/${i}`),
  }),
  "worlds/kh3/monstropolis": world({
    secondary: ["door_vault", "laugh_station", "lump_of_horror"].map(i => `monstropolis/${i}`),
  }),
  "worlds/kh3/arendelle": world({
    secondary: [
      "olympus_coliseum/giant_troll",
      ...["ice_labyrinth", "frost_serpents", "marshmallow", "skoll"].map(i => `arendelle/${i}`),
    ],
  }),
  "worlds/kh3/caribbean": world({
    secondary: ["lightning_angler", "crabs", "davy_jones"].map(i => `port_royal/${i}`),
  }),
  "worlds/kh3/san_fransokyo": world({
    secondary: [
      "olympus_coliseum/giant_troll",
      ...["flash_tracer", "catastrochorus", "darkubes", "dark_baymax"].map(
        i => `san_fransokyo/${i}`,
      ),
    ],
  }),
  "worlds/kh3/dark_world": world(),
  "worlds/kh3/final_world": world(),
  "worlds/kh3/keyblade_graveyard": world({
    secondary: [
      "hollow_bastion/1000_heartless",
      ...[
        "fragmented_sora",
        "demon_tide",
        "skein_of_severance",
        "twist_of_isolation",
        "true_kingdom_hearts",
      ].map(i => `keyblade_graveyard/${i}`),
    ],
  }),
  "worlds/kh3/scala_ad_caelum": world(),
  "worlds/kh3/100_acre_wood": world({
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh3/data_seekers": item({ total: 13, category: "data" }),
  "other/sora's_level": levels(),
  ...mapItems(
    ["fire", "blizzard", "thunder", "cure", "aero", "water"].map(i => `magic/${i}`),
    magic(),
  ),
  ...mapItems(
    [
      "summons/meow_wow",
      "summons/ralph",
      ["summons/pride", { minimal: "summons/simba" }],
      "summons/ariel",
      "summons/ohana",
    ],
    item({ category: "summons" }),
  ),
  "other/data_reports": item({ total: 13, category: "reports" }),
  "other/flantastic_seven": item({ total: 7, category: "flan" }),
  "other/lucky_emblems": item({
    total: 26,
    numbers: [
      ...[...Array(15).keys()].map(i => i + 1),
      ...[...Array(6).keys()].map(i => 20 + i * 5),
      ...[...Array(5).keys()].map(i => 50 + i * 10),
    ],
    category: "lucky_emblems",
  }),
  ...mapItems(
    ["other/proof_of_fantasy", "other/proof_of_promises", "other/proof_of_times_past"],
    item({
      secondary: ["bronze", "silver", "gold"].map(i => `other/${i}`),
      category: "proofs",
    }),
  ),
};

// preload all the number images we use
const nums = [];
for (let i = 1; i <= 15; i++) nums.push(i);
for (let i = 25; i <= 50; i += 5) nums.push(i);
for (let i = 60; i < 100; i += 10) nums.push(i);
nums.push(99);

nums.forEach(i => {
  // Apparently creating an image object like this loads it even if it's not added to the page
  const image = new Image();
  image.src = `/img/progression/numbers/${i}.webp`;
});
