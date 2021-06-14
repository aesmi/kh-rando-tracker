import { IconStyle } from "../../settings";
import { item, Items, mapItems } from "../state";

export const items: Items = {
  // Worlds
  "worlds/kh1/destiny_islands": item({
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/traverse_town": item({
    total: 4,
    secondary: ["leon", "guard_armor", "opposite_armor"].map(i => `kh1/traverse_town/${i}`),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/wonderland": item({
    secondary: ["card_soldiers", "trickmaster"].map(i => `kh1/wonderland/${i}`),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/olympus_coliseum": item({
    data: ["ice_titan", "sephiroth"],
    secondary: [
      "cerberus",
      "phil_cup",
      "pegasus_cup",
      "hercules_cup",
      "hades_cup",
      "ice_titan",
      "sephiroth",
    ].map(i => `kh1/olympus_coliseum/${i}`),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/deep_jungle": item({
    secondary: ["sabor", "clayton", "black_fruit"].map(i => `kh1/deep_jungle/${i}`),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/agrabah": item({
    minimal: "worlds/agrabah",
    data: "kurt_zisa",
    secondary: ["pot_centipede", "cave_of_wonders", "jafar", "kurt_zisa"].map(
      i => `kh1/agrabah/${i}`,
    ),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/monstro": item({
    secondary: ["parasite_cage", "pinocchio_cage"].map(i => `kh1/monstro/${i}`),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/halloween_town": item({
    minimal: "worlds/halloween_town",
    secondary: ["masked_children", "oogie_boogie", "oogie's_manor"].map(
      i => `kh1/halloween_town/${i}`,
    ),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/atlantica": item({
    secondary: ["shark", "ursula", "giant_ursula"].map(i => `kh1/atlantica/${i}`),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/neverland": item({
    data: "phantom",
    secondary: ["anti_sora", "captain_hook", "phantom"].map(i => `kh1/neverland/${i}`),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/hollow_bastion": item({
    data: "xemnas",
    secondary: ["riku", "maleficent", "riku_ansem", "behemoth"].map(i => `kh1/hollow_bastion/${i}`),
    minimal: "worlds/hollow_bastion",
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/end_of_the_world": item({
    secondary: ["behemoth", "chernabog", "final_rest"].map(i => `kh1/end_of_the_world/${i}`),
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/100_acre_wood": item({
    total: 6,
    minimal: "worlds/100_acre_wood",
    secondary: "100_acre_wood/torn_pages",
    secondaryTotal: 5,
    cls: "hundred_acre",
    category: "worlds",
    categoryExclude: IconStyle.CLASSIC,
  }),
  "worlds/kh1/olympus_cups": item({
    total: 4,
    category: "cups",
    categoryExclude: IconStyle.CLASSIC,
  }),

  // Level
  "other/sora's_level": item({
    total: 27,
    level: 1,
    showFirst: true,
    numbers: [
      ...[...Array(15).keys()].map(i => i + 1),
      ...[...Array(6).keys()].map(i => 20 + i * 5),
      ...[...Array(6).keys()].map(i => 50 + i * 10),
    ],
    secondary: ["other/once_more", "other/second_chance", "other/survival_abilities"],
    cls: "levels",
    category: "levels",
  }),

  // Magic
  ...mapItems(
    ["magic/fire", "magic/blizzard", "magic/thunder", "magic/cure"],
    item({ total: 3, category: "magic", secondary: "other/duck", cls: "magic" }),
  ),
  ...mapItems(["magic/aero", "magic/gravity", "magic/stop"], item({ total: 3, category: "magic" })),

  // Summons
  ...mapItems(
    [
      "summons/simba",
      ["summons/genie_kh1", { minimal: "summons/genie" }],
      "summons/bambi",
      "summons/dumbo",
      "summons/tinkerbell",
      "summons/mushu",
    ],
    item({ category: "summons" }),
  ),

  "other/postcards": item({
    category: "postcards",
  }),

  "other/dalmatians": item({
    total: 33,
    showFirst: true,
    numbers: [...Array(33).keys()].map(i => (i + 1) * 3),
    category: "dalmatians",
  }),

  ...mapItems(
    [
      ["trinities/blue", { total: 17 }],
      ["trinities/red", { total: 6 }],
      ["trinities/green", { total: 9 }],
      ["trinities/yellow", { total: 4 }],
      ["trinities/white", { total: 10 }],
    ],
    item({ category: "trinities" }),
  ),

  // Other
  "other/ansem's_reports": item({
    total: 13,
    minimal: "other/secret_reports",
    category: "reports",
  }),

  "other/raft_supplies": item({
    total: 8,
    category: "raft_supplies",
    dontShow: "expandRaftSupplies",
  }),
  "other/logs": item({
    category: "raft_supplies",
    show: "expandRaftSupplies",
  }),
  "other/cloth": item({
    category: "raft_supplies",
    show: "expandRaftSupplies",
  }),
  "other/rope": item({
    category: "raft_supplies",
    show: "expandRaftSupplies",
  }),
  "other/seagull_egg": item({
    category: "raft_supplies",
    show: "expandRaftSupplies",
  }),
  "other/mushrooms": item({
    category: "raft_supplies",
    show: "expandRaftSupplies",
  }),
  "other/coconuts": item({
    category: "raft_supplies",
    show: "expandRaftSupplies",
  }),
  "other/fish": item({
    category: "raft_supplies",
    show: "expandRaftSupplies",
  }),
  "other/drinking_water": item({
    category: "raft_supplies",
    show: "expandRaftSupplies",
  }),
  "other/jack_in_the_box": item({
    isMinimal: true,
    category: "jackInTheBox",
  }),
  "other/crystal_trident": item({
    category: "crystalTrident",
  }),
  "other/library_books": item({
    isMinimal: true,
    category: "libraryBooks",
  }),
  "other/navi_pieces": item({
    category: "navi",
  }),
  "other/emblem_pieces": item({
    category: "emblem_pieces",
  }),
  "other/navi_gummi": item({
    category: "navi",
  }),
};