import React from 'react'
const feats = (
			<div>
				<h2 id="acrobatic">Acrobatic</h2>

				<p>You are skilled at leaping, jumping, and flying.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="437" href="skills/acrobatics.html#acrobatics">Acrobatics</a> and <a linkindex="438" href="skills/fly.html#fly">Fly</a> skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>
				<h2 id="acrobatic-steps">Acrobatic Steps</h2>
				<p>You can easily move over and through obstacles.</p>

				<p><b>Prerequisites</b>: <a linkindex="439" href="gettingStarted.html#dexterity">Dex</a> 15, <a linkindex="440" href="#nimble-moves">Nimble Moves</a>.</p>
				<p><b>Benefit</b>: Whenever you move, you may move through up to 15 feet of difficult terrain each round as if it were normal terrain. The effects of this feat stack with those provided by <a linkindex="441" href="#nimble-moves">Nimble Moves</a> (allowing you to move normally through a total of 20 feet of difficult terrain each round).</p>
				<h2 id="agile-maneuvers">Agile Maneuvers (Combat)</h2>

				<p>You've learned to use your quickness in place of brute force when performing combat maneuvers.</p>
				<p><b>Benefit</b>: You add your <a linkindex="442" href="gettingStarted.html#dexterity">Dexterity</a> bonus to your base attack bonus and size bonus when determining your <a linkindex="443" href="combat.html#combat-maneuver-bonus">Combat Maneuver Bonus</a> (see <a linkindex="444" href="combat.html">Combat</a>) instead of your Strength bonus.</p>
				<p><b>Normal</b>: You add your Strength bonus to your base attack bonus and size bonus when determining your <a linkindex="445" href="combat.html#combat-maneuver-bonus">Combat Maneuver Bonus</a>.</p>

				<h2 id="alertness">Alertness</h2>
				<p>You often notice things that others might miss.</p>
				<p><b>Benefit</b>: You get a +2 bonus on <a linkindex="446" href="skills/perception.html#perception">Perception</a> and <a linkindex="447" href="skills/senseMotive.html#sense-motive">Sense Motive</a> skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>
				<h2 id="alignment-channel">Alignment Channel</h2>

				<p>Choose chaos, evil, good, or law. You can channel divine energy to affect outsiders that possess this subtype.</p>
				<p><b>Prerequisites</b>: Ability to channel energy.</p>
				<p><b>Benefit</b>: Instead of its normal effect, you can choose to have your ability to channel energy heal or harm outsiders of the chosen alignment subtype. You must make this choice each time you channel energy. If you choose to heal or harm creatures of the chosen alignment subtype, your channel energy has no effect on other creatures. The amount of damage healed or dealt and the DC to halve the damage is otherwise unchanged.</p>
				<p><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take this feat, it applies to a new alignment subtype. Whenever you channel energy, you must choose which type to effect.</p>
				<h2 id="animal-affinity">Animal Affinity</h2>

				<p>You are skilled at working with animals and mounts.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="448" href="skills/handleAnimal.html#handle-animal">Handle Animal</a> and <a linkindex="449" href="skills/ride.html#ride">Ride</a> skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>
				<h2 id="arcane-armor-mastery">Arcane Armor Mastery (Combat)</h2>
				<p>You have mastered the ability to cast spells while wearing armor.</p>

				<p><b>Prerequisites</b>: <a linkindex="450" href="#arcane-armor-training">Arcane Armor Training</a>, Medium Armor Proficiency, caster level 7th.</p>
				<p><b>Benefit</b>: As a swift action, reduce the arcane spell failure chance due to the armor you are wearing by 20% for any spells you cast this round. This bonus replaces, and does not stack with, the bonus granted by <a linkindex="451" href="#arcane-armor-training">Arcane Armor Training</a>.</p>
				<h2 id="arcane-armor-training">Arcane Armor Training (Combat)</h2>
				<p>You have learned how to cast spells while wearing armor.</p>

				<p><b>Prerequisites</b>: Light Armor Proficiency, caster level 3rd.</p>
				<p><b>Benefit</b>: As a swift action, reduce the arcane spell failure chance due to the armor you are wearing by 10% for any spells you cast this round.</p>
				<h2 id="arcane-strike">Arcane Strike (Combat)</h2>
				<p>You draw upon your arcane power to enhance your weapons with magical energy.</p>
				<p><b>Prerequisite</b>: Ability to cast arcane spells.</p>

				<p><b>Benefit</b>: As a swift action, you can imbue your weapons with a fraction of your power. For 1 round, your weapons deal +1 damage and are treated as magic for the purpose of overcoming damage reduction. For every five caster levels you possess, this bonus increases by +1, to a maximum of +5 at 20th level.</p>
				<h2 id="armor-proficiency-heavy">Armor Proficiency, Heavy (Combat)</h2>
				<p>You are skilled at wearing heavy armor.</p>
				<p><b>Prerequisites</b>: Light Armor Proficiency, Medium Armor Proficiency.</p>
				<p><b>Benefit</b>: See Armor Proficiency, Light.</p>

				<p><b>Normal</b>: See Armor Proficiency, Light.</p>
				<p><b>Special</b>: Fighters and paladins automatically have Heavy Armor Proficiency as a bonus feat. They need not select it.</p>
				<h2 id="armor-proficiency-light">Armor Proficiency, Light (Combat)</h2>
				<p>You are skilled at wearing light armor.</p>
				<p><b>Benefit</b>: When you wear a type of armor with which you are proficient, the armor check penalty for that armor applies only to <a linkindex="452" href="gettingStarted.html#dexterity">Dexterity</a>- and Strength-based skill checks.</p>

				<p><b>Normal</b>: A character who is wearing armor with which he is not proficient applies its armor check penalty to attack rolls and to all skill checks that involve moving.</p>
				<p><b>Special</b>: All characters except monks, sorcerers, and wizards automatically have Light Armor Proficiency as a bonus feat. They need not select it.</p>
				<h2 id="armor-proficiency-medium">Armor Proficiency, Medium (Combat)</h2>
				<p>You are skilled at wearing medium armor.</p>
				<p><b>Prerequisite</b>: Light Armor Proficiency.</p>

				<p><b>Benefit</b>: See Armor Proficiency, Light.</p>
				<p><b>Normal</b>: See Armor Proficiency, Light.</p>
				<p><b>Special</b>: Barbarians, clerics, druids, fighters, paladins, and rangers automatically have Medium Armor Proficiency as a bonus feat. They need not select it.</p>
				<h2 id="athletic">Athletic</h2>
				<p>You possess inherent physical prowess.</p>

				<p><b>Benefit</b>: You get a +2 bonus on <a linkindex="453" href="skills/climb.html#climb">Climb</a> and <a linkindex="454" href="skills/swim.html#swim">Swim</a> skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>
				<h2 id="augment-summoning">Augment Summoning</h2>
				<p>Your summoned creatures are more powerful and robust.</p>
				<p><b>Prerequisite</b>: <a linkindex="455" href="#spell-focus">Spell Focus</a> (conjuration).</p>

				<p><b>Benefit</b>: Each creature you conjure with any <i>summon </i>spell gains a +4 enhancement bonus to Strength and <a linkindex="456" href="gettingStarted.html#constitution">Constitution</a> for the duration of the spell that summoned it.</p>
				<h2 id="bleeding-critical">Bleeding Critical (Combat, Critical)</h2>
				<p>Your critical hits cause opponents to bleed profusely.</p>
				<p><b>Prerequisites</b>: <a linkindex="457" href="#critical-focus">Critical Focus</a>, base attack bonus +11.</p>

				<p><b>Benefit</b>: Whenever you score a critical hit with a slashing or piercing weapon, your opponent takes 2d6 points of bleed damage (see <a linkindex="458" href="glossary.html#appendix-2-conditions">Conditions</a>) each round on his turn, in addition to the damage dealt by the critical hit. <a linkindex="459" href="glossary.html#bleed">Bleed</a> damage can be stopped by a DC 15 Heal skill check or through any magical healing. The effects of this feat stack.</p>
				<p><b>Special</b>: You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.</p>
				<h2 id="blind-fight">Blind-Fight (Combat)</h2>
				<p>You are skilled at attacking opponents that you cannot clearly perceive.</p>

				<p><b>Benefit</b>: In melee, every time you miss because of concealment (see <a linkindex="460" href="combat.html">Combat</a>), you can reroll your miss chance percentile roll one time to see if you actually hit.</p>
				<p>An <a linkindex="461" href="glossary.html#invisible">invisible</a> attacker gets no advantages related to hitting you in melee. That is, you don't lose your <a linkindex="462" href="gettingStarted.html#dexterity">Dexterity</a> bonus to <a linkindex="463" href="combat.html#armor-class">Armor Class</a>, and the attacker doesn't get the usual +2 bonus for being <a linkindex="464" href="glossary.html#invisible">invisible</a>. The <a linkindex="465" href="glossary.html#invisible">invisible</a> attacker's bonuses do still apply for ranged attacks, however.</p>

				<p>You do not need to make Acrobatics skill checks to move at full speed while blinded.</p>
				<p><b>Normal</b>: Regular attack roll modifiers for <a linkindex="466" href="glossary.html#invisible">invisible</a> attackers trying to hit you apply, and you lose your <a linkindex="467" href="gettingStarted.html#dexterity">Dexterity</a> bonus to <a linkindex="468" href="combat.html#armor-class">AC</a>. The speed reduction for darkness and poor visibility also applies.</p>
				<p><b>Special</b>: The Blind-Fight feat is of no use against a character who is the subject of a <i>blink </i>spell.</p>

				<h2 id="blinding-critical">Blinding Critical (Combat, Critical)</h2>
				<p>Your critical hits blind your opponents.</p>
				<p><b>Prerequisites</b>: <a linkindex="469" href="#critical-focus">Critical Focus</a>, base attack bonus +15.</p>
				<p><b>Benefit</b>: Whenever you score a critical hit, your opponent is permanently <a linkindex="470" href="glossary.html#blinded">blinded</a>. A successful <a linkindex="471" href="combat.html#fortitude">Fortitude</a> save reduces this to <a linkindex="472" href="glossary.html#dazzled">dazzled</a> for 1d4 rounds. The DC of this <a linkindex="473" href="combat.html#fortitude">Fortitude</a> save is equal to 10 + your base attack bonus. This feat has no effect on creatures that do not rely on eyes for sight or creatures with more than two eyes (although multiple critical hits might cause blindness, at the GM's discretion). Blindness can be cured by <i>heal, regeneration, remove blindness, </i>or similar abilities.</p>

				<p><b>Special</b>: You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.</p>
				<h2 id="brew-potion">Brew Potion (Item Creation)</h2>
				<p>You can create magic potions.</p>
				<p><b>Prerequisite</b>: Caster level 3rd.</p>
				<p><b>Benefit</b>: You can create a potion of any 3rd-level or lower spell that you know and that targets one or more creatures. Brewing a potion takes 2 hours if its base price is 250 gp or less, otherwise brewing a potion takes 1 day for each 1,000 gp in its base price. When you create a potion, you set the caster level, which must be sufficient to cast the spell in question and no higher than your own level. To brew a potion, you must use up raw materials costing one half this base price. See the magic item creation rules in <a linkindex="474" href="magicItems.html">Magic Items</a> for more information.</p>

				<p>When you create a potion, you make any choices that you would normally make when casting the spell. Whoever drinks the potion is the target of the spell.</p>
				<h2 id="catch-off-guard">Catch Off-Guard (Combat)</h2>
				<p>Foes are surprised by your skilled use of unorthodox and improvised weapons.</p>
				<p><b>Benefit</b>: You do not suffer any penalties for using an improvised melee weapon. Unarmed opponents are <a linkindex="475" href="glossary.html#flat-footed">flat-footed</a> against any attacks you make with an improvised melee weapon.</p>
				<p><b>Normal</b>: You take a -4 penalty on attack rolls made with an improvised weapon.</p>

				<h2 id="channel-smite">Channel Smite (Combat)</h2>
				<p>You can channel your divine energy through a melee weapon you wield.</p>
				<p><b>Prerequisite</b>: Channel energy class feature.</p>
				<p><b>Benefit</b>: Before you make a melee attack roll, you can choose to spend one use of your channel energy ability as a swift action. If you channel positive energy and you hit an undead creature, that creature takes an amount of additional damage equal to the damage dealt by your channel positive energy ability. If you channel negative energy and you hit a living creature, that creature takes an amount of additional damage equal to the damage dealt by your channel negative energy ability. Your target can make a <a linkindex="476" href="combat.html#will">Will</a> save, as normal, to halve this additional damage. If your attack misses, the channel energy ability is still expended with no effect.</p>

				<h2 id="cleave">Cleave (Combat)</h2>
				<p>You can strike two adjacent foes with a single swing.</p>
				<p><b>Prerequisites</b>: <a linkindex="477" href="gettingStarted.html#strength">Str</a> 13, <a linkindex="478" href="#power-attack">Power Attack</a>, base attack bonus +1.</p>
				<p><b>Benefit</b>: As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the first and also within reach. You can only make one additional attack per round with this feat. When you use this feat, you take a -2 penalty to your <a linkindex="479" href="combat.html#armor-class">Armor Class</a> until your next turn.</p>

				<h2 id="combat-casting">Combat Casting</h2>
				<p>You are adept at spellcasting when threatened or distracted.</p>
				<p><b>Benefit</b>: You get a +4 bonus on <a linkindex="480" href="magic.html#concentration">concentration checks</a> made to cast a spell or use a spell-like ability when casting on the defensive or while <a linkindex="481" href="glossary.html#grappled">grappled</a>.</p>
				<h2 id="combat-expertise">Combat Expertise (Combat)</h2>

				<p>You can increase your defense at the expense of your accuracy.</p>
				<p><b>Prerequisite</b>: <a linkindex="482" href="gettingStarted.html#intelligence">Int</a> 13.</p>
				<p><b>Benefit</b>: You can choose to take a -1 penalty on melee attack rolls and combat maneuver checks to gain a +1 <a linkindex="483" href="combat.html#dodge-bonuses">dodge bonus</a> to your <a linkindex="484" href="combat.html#armor-class">Armor Class</a>. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by -1 and the <a linkindex="485" href="combat.html#dodge-bonuses">dodge bonus</a> increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn.</p>

				<h2 id="combat-reflexes">Combat Reflexes (Combat)</h2>
				<p>You can make additional attacks of opportunity.</p>
				<p><b>Benefit</b>: You may make a number of additional attacks of opportunity per round equal to your <a linkindex="486" href="gettingStarted.html#dexterity">Dexterity</a> bonus. With this feat, you may also make attacks of opportunity while <a linkindex="487" href="glossary.html#flat-footed">flat-footed</a>.</p>
				<p><b>Normal</b>: A character without this feat can make only one attack of opportunity per round and can't make attacks of opportunity while <a linkindex="488" href="glossary.html#flat-footed">flat-footed</a>.</p>

				<p><b>Special</b>: The Combat Reflexes feat does not allow a rogue to use her opportunist ability more than once per round.</p>
				<h2 id="command-undead">Command Undead</h2>
				<p>Using foul powers of necromancy, you can command undead creatures, making them into your servants.</p>
				<p><b>Prerequisites</b>: Channel negative energy class feature.</p>
				<p><b>Benefit</b>: As a standard action, you can use one of your uses of channel negative energy to enslave undead within 30 feet. Undead receive a <a linkindex="489" href="combat.html#will">Will</a> save to negate the effect. The DC for this <a linkindex="490" href="combat.html#will">Will</a> save is equal to 10 + 1/2 your cleric level + your <a linkindex="491" href="gettingStarted.html#charisma-new">Charisma</a> modifier. Undead that fail their saves fall under your control, obeying your commands to the best of their ability, as if under the effects of <i>control undead</i>. Intelligent undead receive a new saving throw each day to resist your command. You can control any number of undead, so long as their total Hit Dice do not exceed your cleric level. If you use channel energy in this way, it has no other effect (it does not heal or harm nearby creatures). If an undead creature is under the control of another creature, you must make an opposed <a linkindex="492" href="gettingStarted.html#charisma-new">Charisma</a> check whenever your orders conflict.</p>

				<h2 id="craft-magic-arms-and-armor">Craft Magic Arms and Armor (Item Creation)</h2>
				<p>You can create magic armor, shields, and weapons.</p>
				<p><b>Prerequisite</b>: Caster level 5th.</p>
				<p><b>Benefit</b>: You can create magic weapons, armor, or shields. Enhancing a weapon, suit of armor, or shield takes 1 day for each 1,000 gp in the price of its magical features. To enhance a weapon, suit of armor, or shield, you must use up raw materials costing half of this total price. See the magic item creation rules in <a linkindex="493" href="magicItems.html">Magic Items</a> for more information.</p>

				<p>The weapon, armor, or shield to be enhanced must be a masterwork item that you provide. Its cost is not included in the above cost.</p>
				<p>You can also mend a broken magic weapon, suit of armor, or shield if it is one that you could make. Doing so costs half the raw materials and half the time it would take to craft that item in the first place.</p>
				<h2 id="craft-rod">Craft Rod (Item Creation)</h2>
				<p>You can create magic rods.</p>
				<p><b>Prerequisite</b>: Caster level 9th.</p>
				<p><b>Benefit</b>: You can create magic rods. Crafting a rod takes 1 day for each 1,000 gp in its base price. To craft a rod, you must use up raw materials costing half of its base price. See the magic item creation rules in <a linkindex="494" href="magicItems.html">Magic Items</a> for more information.</p>

				<h2 id="craft-staff">Craft Staff (Item Creation)</h2>
				<p>You can create magic staves.</p>
				<p><b>Prerequisite</b>: Caster level 11th.</p>
				<p><b>Benefit</b>: You can create any staff whose prerequisites you meet. Crafting a staff takes 1 day for each 1,000 gp in its base price. To craft a staff, you must use up raw materials costing half of its base price. A newly created staff has 10 charges. See the magic item creation rules in <a linkindex="495" href="magicItems.html">Magic Items</a> for more information.</p>

				<h2 id="craft-wand">Craft Wand (Item Creation)</h2>
				<p>You can create magic wands.</p>
				<p><b>Prerequisite</b>: Caster level 5th.</p>
				<p><b>Benefit</b>: You can create a wand of any 4th-level or lower spell that you know. Crafting a wand takes 1 day for each 1,000 gp in its base price. To craft a wand, you must use up raw materials costing half of this base price. A newly created wand has 50 charges. See the magic item creation rules in <a linkindex="496" href="magicItems.html">Magic Items</a> for more information.</p>

				<h2 id="craft-wondrous-item">Craft Wondrous Item (Item Creation)</h2>
				<p>You can create wondrous items, a type of magic item.</p>
				<p><b>Prerequisite</b>: Caster level 3rd.</p>
				<p><b>Benefit</b>: You can create a wide variety of magic wondrous items. Crafting a wondrous item takes 1 day for each 1,000 gp in its price. To create a wondrous item, you must use up raw materials costing half of its base price. See the magic item creation rules in <a linkindex="497" href="magicItems.html">Magic Items</a> for more information.</p>

				<p>You can also mend a broken wondrous item if it is one that you could make. Doing so costs half the raw materials and half the time it would take to craft that item.</p>
				<h2 id="critical-focus">Critical Focus (Combat)</h2>
				<p>You are trained in the art of causing pain.</p>
				<p><b>Prerequisites</b>: Base attack bonus +9.</p>
				<p><b>Benefit</b>: You receive a +4 circumstance bonus on attack rolls made to confirm critical hits.</p>

				<h2 id="critical-mastery">Critical Mastery (Combat)</h2>
				<p>Your critical hits cause two additional effects.</p>
				<p><b>Prerequisites</b>: <a linkindex="498" href="#critical-focus">Critical Focus</a>, any two critical feats, 14th-level fighter.</p>
				<p><b>Benefit</b>: When you score a critical hit, you can apply the effects of two critical feats in addition to the damage dealt.</p>
				<p><b>Normal</b>: You can only apply the effects of one critical feat to a given critical hit in addition to the damage dealt.</p>

				<h2 id="dazzling-display">Dazzling Display (Combat)</h2>
				<p>Your skill with your favored weapon can frighten enemies.</p>
				<p><b>Prerequisite</b>: <a linkindex="499" href="#weapon-focus">Weapon Focus</a>, proficiency with the selected weapon.</p>
				<p><b>Benefit</b>: While wielding the weapon in which you have <a linkindex="500" href="#weapon-focus">Weapon Focus</a>, you can perform a bewildering show of prowess as a full-round action. Make an <a linkindex="501" href="skills/intimidate.html#intimidate">Intimidate</a> check to demoralize all foes within 30 feet who can see your display. </p>

				<h2 id="deadly-aim">Deadly Aim (Combat)</h2>
				<p>You can make exceptionally deadly ranged attacks by pinpointing a foe's weak spot, at the expense of making the attack less likely to succeed.</p>
				<p><b>Prerequisites</b>: <a linkindex="502" href="gettingStarted.html#dexterity">Dex</a> 13, base attack bonus +1.</p>
				<p><b>Benefit</b>: You can choose to take a -1 penalty on all ranged attack rolls to gain a +2 bonus on all ranged damage rolls. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by -1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.</p>

				<h2 id="deadly-stroke">Deadly Stroke (Combat)</h2>
				<p>With a well-placed strike, you can bring a swift and painful end to most foes.</p>
				<p><b>Prerequisites</b>: <a linkindex="503" href="#dazzling-display">Dazzling Display</a>, <a linkindex="504" href="#greater-weapon-focus">Greater Weapon Focus</a>, <a linkindex="505" href="#shatter-defenses">Shatter Defenses</a>, <a linkindex="506" href="#weapon-focus">Weapon Focus</a>, proficiency with the selected weapon, base attack bonus +11.</p>

				<p><b>Benefit</b>: As a standard action, make a single attack with the weapon for which you have <a linkindex="507" href="#greater-weapon-focus">Greater Weapon Focus</a> against a <a linkindex="508" href="glossary.html#stunned">stunned</a> or <a linkindex="509" href="glossary.html#flat-footed">flat-footed</a> opponent. If you hit, you deal double the normal damage and the target takes 1 point of <a linkindex="510" href="gettingStarted.html#constitution">Constitution</a> <a linkindex="511" href="glossary.html#bleed">bleed</a> (see <a linkindex="512" href="glossary.html#appendix-2-conditions">Conditions</a>). The additional damage and <a linkindex="513" href="glossary.html#bleed">bleed</a> is not multiplied on a critical hit.</p>

				<h2 id="deafening-critical">Deafening Critical (Combat, Critical)</h2>
				<p>Your critical hits cause enemies to lose their hearing.</p>
				<p><b>Prerequisites</b>: <a linkindex="514" href="#critical-focus">Critical Focus</a>, base attack bonus +13.</p>
				<p><b>Benefit</b>: Whenever you score a critical hit against an opponent, the victim is permanently <a linkindex="515" href="glossary.html#deafened">deafened</a>. A successful <a linkindex="516" href="combat.html#fortitude">Fortitude</a> save reduces the deafness to 1 round. The DC of this <a linkindex="517" href="combat.html#fortitude">Fortitude</a> save is equal to 10 + your base attack bonus. This feat has no effect on deaf creatures. This deafness can be cured by <i>heal, regeneration, remove deafness, </i>or a similar ability.</p>

				<p><b>Special</b>: You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.</p>
				<h2 id="deceitful">Deceitful</h2>
				<p>You are skilled at deceiving others, both with the spoken word and with physical disguises.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="518" href="skills/bluff.html#bluff">Bluff</a> and <a linkindex="519" href="skills/disguise.html#disguise">Disguise</a> skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>

				<h2 id="defensive-combat-training">Defensive Combat Training (Combat)</h2>
				<p>You excel at defending yourself from all manner of combat maneuvers.</p>
				<p><b>Benefit</b>: You treat your total Hit Dice as your base attack bonus when calculating your <a linkindex="520" href="combat.html#combat-maneuver-defense">Combat Maneuver Defense</a> (see <a linkindex="521" href="combat.html">Combat</a>). </p>
				<h2 id="deflect-arrows">Deflect Arrows (Combat)</h2>

				<p>You can knock arrows and other projectiles off course, preventing them from hitting you.</p>
				<p><b>Prerequisites</b>: <a linkindex="522" href="gettingStarted.html#dexterity">Dex</a> 13, <a linkindex="523" href="#improved-unarmed-strike">Improved Unarmed Strike</a>.</p>
				<p><b>Benefit</b>: You must have at least one hand free (holding nothing) to use this feat. Once per round when you would normally be hit with an attack from a ranged weapon, you may deflect it so that you take no damage from it. You must be aware of the attack and not <a linkindex="524" href="glossary.html#flat-footed">flat-footed</a>. Attempting to deflect a ranged attack doesn't count as an action. Unusually massive ranged weapons (such as boulders or ballista bolts) and ranged attacks generated by natural attacks or spell effects can't be deflected.</p>

				<h2 id="deft-hands">Deft Hands</h2>
				<p>You have exceptional manual dexterity.</p>
				<p><b>Benefit</b>: You get a +2 bonus on <a linkindex="525" href="skills/disableDevice.html#disable-device">Disable Device</a> and <a linkindex="526" href="skills/sleightOfHand.html#sleight-of-hand">Sleight of Hand</a> skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>
				<h2 id="diehard">Diehard</h2>

				<p>You are especially hard to kill. Not only do your wounds automatically stabilize when grievously injured, but you can remain conscious and continue to act even at death's door.</p>
				<p><b>Prerequisite</b>: <a linkindex="527" href="#endurance">Endurance</a>.</p>
				<p><b>Benefit</b>: When your hit point total is below 0, but you are not dead, you automatically stabilize. You do not need to make a <a linkindex="528" href="gettingStarted.html#constitution">Constitution</a> check each round to avoid losing additional hit points. You may choose to act as if you were disabled, rather than <a linkindex="529" href="glossary.html#dying">dying</a>. You must make this decision as soon as you are reduced to negative hit points (even if it isn't your turn). If you do not choose to act as if you were disabled, you immediately fall <a linkindex="530" href="glossary.html#unconscious">unconscious</a>.</p>

				<p>When using this feat, you are <a linkindex="531" href="glossary.html#staggered">staggered</a>. You can take a move action without further injuring yourself, but if you perform any standard action (or any other action deemed as strenuous, including some swift actions, such as casting a quickened spell) you take 1 point of damage after completing the act. If your negative hit points are equal to or greater than your <a linkindex="532" href="gettingStarted.html#constitution">Constitution</a> score, you immediately die.</p>
				<p><b>Normal</b>: A character without this feat who is reduced to negative hit points is <a linkindex="533" href="glossary.html#unconscious">unconscious</a> and <a linkindex="534" href="glossary.html#dying">dying</a>.</p>

				<h2 id="disruptive">Disruptive (Combat)</h2>
				<p>Your training makes it difficult for enemy spellcasters to safely cast spells near you.</p>
				<p><b>Prerequisites</b>: 6th-level fighter.</p>
				<p><b>Benefit</b>: The DC to cast spells defensively increases by +4 for all enemies that are within your threatened area. This increase to casting spells defensively only applies if you are aware of the enemy's location and are capable of taking an attack of opportunity. If you can only take one attack of opportunity per round and have already used that attack, this increase does not apply.</p>
				<h2 id="dodge">Dodge (Combat)</h2>

				<p>Your training and reflexes allow you to react swiftly to avoid an opponents' attacks.</p>
				<p><b>Prerequisite</b>: <a linkindex="535" href="gettingStarted.html#dexterity">Dex</a> 13.</p>
				<p><b>Benefit</b>: You gain a +1 <a linkindex="536" href="combat.html#dodge-bonuses">dodge bonus</a> to your <a linkindex="537" href="combat.html#armor-class">AC</a>. A condition that makes you lose your <a linkindex="538" href="gettingStarted.html#dexterity">Dex</a> bonus to <a linkindex="539" href="combat.html#armor-class">AC</a> also makes you lose the benefits of this feat.</p>

				<h2 id="double-slice">Double Slice (Combat)</h2>
				<p>Your off-hand weapon while dual-wielding strikes with greater power.</p>
				<p><b>Prerequisite</b>: <a linkindex="540" href="gettingStarted.html#dexterity">Dex</a> 15, <a linkindex="541" href="#two-weapon-fighting">Two-Weapon Fighting</a>.</p>
				<p><b>Benefit</b>: Add your Strength bonus to damage rolls made with your off-hand weapon.</p>

				<p><b>Normal</b>: You normally add only half of your Strength modifier to damage rolls made with a weapon wielded in your off-hand.</p>
				<h2 id="elemental-channel">Elemental Channel</h2>
				<p>Choose one elemental subtype, such as air, earth, fire, or water. You can channel your divine energy to harm or heal outsiders that possess your chosen elemental subtype.</p>
				<p><b>Prerequisites</b>: Channel energy class feature.</p>
				<p><b>Benefit</b>: Instead of its normal effect, you can choose to have your ability to channel energy heal or harm outsiders of your chosen elemental subtype. You must make this choice each time you channel energy. If you choose to heal or harm creatures of your elemental subtype, your channel energy has no affect on other creatures. The amount of damage healed or dealt and the DC to halve the damage is otherwise unchanged.</p>

				<p><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take this feat, it applies to a new elemental subtype.</p>
				<h2 id="empower-spell">Empower Spell (Metamagic)</h2>
				<p>You can increase the power of your spells, causing them to deal more damage.</p>
				<p><b>Benefit</b>: All variable, numeric effects of an empowered spell are increased by half.</p>
				<p>Saving throws and opposed rolls are not affected, nor are spells without random variables. An empowered spell uses up a spell slot two levels higher than the spell's actual level.</p>

				<h2 id="endurance">Endurance</h2>
				<p>Harsh conditions or long exertions do not easily tire you.</p>
				<p><b>Benefit</b>: You gain a +4 bonus on the following checks and saves: Swim checks made to resist nonlethal damage from exhaustion; <a linkindex="542" href="gettingStarted.html#constitution">Constitution</a> checks made to continue running; <a linkindex="543" href="gettingStarted.html#constitution">Constitution</a> checks made to avoid nonlethal damage from a forced march; <a linkindex="544" href="gettingStarted.html#constitution">Constitution</a> checks made to hold your breath; <a linkindex="545" href="gettingStarted.html#constitution">Constitution</a> checks made to avoid nonlethal damage from starvation or thirst; <a linkindex="546" href="combat.html#fortitude">Fortitude</a> saves made to avoid nonlethal damage from hot or cold environments; and <a linkindex="547" href="combat.html#fortitude">Fortitude</a> saves made to resist damage from suffocation.</p>

				<p>You may sleep in light or medium armor without becoming <a linkindex="548" href="glossary.html#fatigued">fatigued</a>.</p>
				<p><b>Normal</b>: A character without this feat who sleeps in medium or heavier armor is <a linkindex="549" href="glossary.html#fatigued">fatigued</a> the next day.</p>
				<h2 id="enlarge-spell">Enlarge Spell (Metamagic)</h2>
				<p>You can increase the range of your spells.</p>

				<p><b>Benefit</b>: You can alter a spell with a range of close, medium, or long to increase its range by 100%. An enlarged spell with a range of close now has a range of 50 ft. + 5 ft./level, while medium-range spells have a range of 200 ft. + 20 ft./level and long-range spells have a range of 800 ft. + 80 ft./level. An enlarged spell uses up a spell slot one level higher than the spell's actual level.</p>
				<p>Spells whose ranges are not defined by distance, as well as spells whose ranges are not close, medium, or long, do not benefit from this feat.</p>
				<h2 id="eschew-materials">Eschew Materials</h2>
				<p>You can cast many spells without needing to utilize minor material components.</p>
				<p><b>Benefit</b>: You can cast any spell with a material component costing 1 gp or less without needing that component. The casting of the spell still provokes attacks of opportunity as normal. If the spell requires a material component that costs more than 1 gp, you must have the material component on hand to cast the spell, as normal.</p>

				<h2 id="exhausting-critical">Exhausting Critical (Combat, Critical)</h2>
				<p>Your critical hits cause opponents to become exhausted.</p>
				<p><b>Prerequisites</b>: <a linkindex="550" href="#critical-focus">Critical Focus</a>, <a linkindex="551" href="#tiring-critical">Tiring Critical</a>, base attack bonus +15.</p>
				<p><b>Benefit</b>: When you score a critical hit on a foe, your target immediately becomes <a linkindex="552" href="glossary.html#exhausted">exhausted</a>. This feat has no effect on exhausted creatures.</p>

				<p><b>Special</b>: You can only apply the effects of one critical feat to a given critical hit unless you possess the Critical Mastery feat.</p>
				<h2 id="exotic-weapon-proficiency">Exotic Weapon Proficiency (Combat)</h2>
				<p>Choose one type of exotic weapon, such as the spiked chain or whip. You understand how to use that type of exotic weapon in combat, and can utilize any special tricks or qualities that exotic weapon might allow.</p>
				<p><b>Prerequisite</b>: Base attack bonus +1.</p>
				<p><b>Benefit</b>: You make attack rolls with the weapon normally.</p>

				<p><b>Normal</b>: A character who uses a weapon with which he is not proficient takes a -4 penalty on attack rolls.</p>
				<p><b>Special</b>: You can gain Exotic Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of exotic weapon. </p>
				<h2 id="extend-spell">Extend Spell (Metamagic)</h2>
				<p>You can make your spells last twice as long.</p>
				<p><b>Benefit</b>: An extended spell lasts twice as long as normal. A spell with a duration of concentration, instantaneous, or permanent is not affected by this feat. An extended spell uses up a spell slot one level higher than the spell's actual level.</p>

				<h2 id="extra-channel">Extra Channel</h2>
				<p>You can channel divine energy more often.</p>
				<p><b>Prerequisite</b>: Channel energy class feature.</p>
				<p><b>Benefit</b>: You can channel energy two additional times per day.</p>
				<p><b>Special</b>: If a paladin with the ability to channel positive energy takes this feat, she can use lay on hands four additional times a day, but only to channel positive energy.</p>

				<h2 id="extra-ki">Extra Ki</h2>
				<p>You can use your <i>ki</i> pool more times per day than most.</p>
				<p><b>Prerequisite</b>: <i>Ki</i> pool class feature.</p>
				<p><b>Benefit</b>: Your <i>ki </i>pool increases by 2. </p>

				<p><b>Special</b>: You can gain Extra <i>Ki</i> multiple times. Its effects stack.</p>
				<h2 id="extra-lay-on-hands">Extra Lay On Hands</h2>
				<p>You can use your lay on hands ability more often.</p>
				<p><b>Prerequisite</b>: Lay on hands class feature.</p>

				<p><b>Benefit</b>: You can use your lay on hands ability two additional times per day. </p>
				<p><b>Special</b>: You can gain Extra Lay On Hands multiple times. Its effects stack.</p>
				<h2 id="extra-mercy">Extra Mercy</h2>
				<p>Your lay on hands ability adds an additional mercy.</p>
				<p><b>Prerequisites</b>: Lay on hands class feature, mercy class feature.</p>

				<p><b>Benefit</b>: Select one additional mercy for which you qualify. When you use lay on hands to heal damage to one target, it also receives the additional effects of this mercy.</p>
				<p><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take this feat, select a new mercy. </p>
				<h2 id="extra-performance">Extra Performance</h2>
				<p>You can use your bardic performance ability more often than normal.</p>
				<p><b>Prerequisite</b>: Bardic performance class feature.</p>

				<p><b>Benefit</b>: You can use bardic performance for 6 additional rounds per day.</p>
				<p><b>Special</b>: You can gain Extra Performance multiple times. Its effects stack.</p>
				<h2 id="extra-rage">Extra Rage</h2>
				<p>You can use your rage ability more than normal.</p>
				<p><b>Prerequisite</b>: Rage class feature.</p>

				<p><b>Benefit</b>: You can rage for 6 additional rounds per day.</p>
				<p><b>Special</b>: You can gain Extra Rage multiple times. Its effects stack.</p>
				<h2 id="far-shot">Far Shot (Combat)</h2>
				<p>You are more accurate at longer ranges.</p>
				<p><b>Prerequisites</b>: <a linkindex="553" href="#point-blank-shot">Point-Blank Shot</a>.</p>

				<p><b>Benefit</b>: You only suffer a -1 penalty per full range increment between you and your target when using a ranged weapon.</p>
				<p><b>Normal</b>: You suffer a -2 penalty per full range increment between you and your target.</p>
				<h2 id="fleet">Fleet</h2>
				<p>You are faster than most.</p>
				<p><b>Benefit</b>: While you are wearing light or no armor, your base speed increases by 5 feet. You lose the benefits of this feat if you carry a medium or heavy load.</p>

				<p><b>Special</b>: You can take this feat multiple times. The effects stack. </p>
				<h2 id="forge-ring">Forge Ring (Item Creation)</h2>
				<p>You can create magic rings.</p>
				<p><b>Prerequisite</b>: Caster level 7th.</p>
				<p><b>Benefit</b>: You can create magic rings. Crafting a ring takes 1 day for each 1,000 gp in its base price. To craft a ring, you must use up raw materials costing half of the base price. See the magic item creation rules in <a linkindex="554" href="magicItems.html">Magic Items</a> for more information.</p>

				<p>You can also mend a broken ring if it is one that you could make. Doing so costs half the raw materials and half the time it would take to forge that ring in the first place.</p>
				<h2 id="gorgon-s-fist">Gorgon's Fist (Combat)</h2>
				<p>With one well-placed blow, you leave your target reeling.</p>
				<p><b>Prerequisites</b>: <a linkindex="555" href="#improved-unarmed-strike">Improved Unarmed Strike</a>, <a linkindex="556" href="#scorpion-style">Scorpion Style</a>, base attack bonus +6.</p>

				<p><b>Benefit</b>: As a standard action, make a single unarmed melee attack against a foe whose speed is reduced (such as from <a linkindex="557" href="#scorpion-style">Scorpion Style</a>). If the attack hits, you deal damage normally and the target is <a linkindex="558" href="glossary.html#staggered">staggered</a> until the end of your next turn unless it makes a <a linkindex="559" href="combat.html#fortitude">Fortitude</a> saving throw (DC 10 + 1/2 your character level + your <a linkindex="560" href="gettingStarted.html#wisdom">Wis</a> modifier). This feat has no effect on targets that are staggered.</p>
				<h2 id="great-cleave">Great Cleave (Combat)</h2>

				<p>You can strike many adjacent foes with a single blow.</p>
				<p><b>Prerequisites</b>: <a linkindex="561" href="gettingStarted.html#strength">Str</a> 13, <a linkindex="562" href="#cleave">Cleave</a>, <a linkindex="563" href="#power-attack">Power Attack</a>, base attack bonus +4.</p>
				<p><b>Benefit</b>: As a standard action, you can make a single attack at your full base attack bonus against a foe within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against a foe that is adjacent to the previous foe and also within reach. If you hit, you can continue to make attacks against foes adjacent to the previous foe, so long as they are within your reach. You cannot attack an individual foe more than once during this attack action. When you use this feat, you take a -2 penalty to your <a linkindex="564" href="combat.html#armor-class">Armor Class</a> until your next turn.</p>

				<h2 id="great-fortitude">Great Fortitude</h2>
				<p>You are resistant to poisons, diseases, and other maladies.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="565" href="combat.html#fortitude">Fortitude</a> saving throws.</p>
				<h2 id="greater-bull-rush">Greater Bull Rush (Combat)</h2>
				<p>Your bull rush attacks throw enemies off balance.</p>

				<p><b>Prerequisites</b>: <a linkindex="566" href="#improved-bull-rush">Improved Bull Rush</a>, <a linkindex="567" href="#power-attack">Power Attack</a>, base attack bonus +6, <a linkindex="568" href="gettingStarted.html#strength">Str</a> 13.</p>
				<p><b>Benefit</b>: You receive a +2 bonus on checks made to <a linkindex="569" href="combat.html#bull-rush">bull rush</a> a foe. This bonus stacks with the bonus granted by <a linkindex="570" href="#improved-bull-rush">Improved Bull Rush</a>. Whenever you <a linkindex="571" href="combat.html#bull-rush">bull rush</a> an opponent, his movement provokes attacks of opportunity from all of your allies (but not you).</p>

				<p><b>Normal</b>: Creatures moved by <a linkindex="572" href="combat.html#bull-rush">bull rush</a> do not provoke attacks of opportunity.</p>
				<h2 id="greater-disarm">Greater Disarm (Combat)</h2>
				<p>You can knock weapons far from an enemy's grasp.</p>
				<p><b>Prerequisites</b>: <a linkindex="573" href="#combat-expertise">Combat Expertise</a>, <a linkindex="574" href="#improved-disarm">Improved Disarm</a>, base attack bonus +6, <a linkindex="575" href="gettingStarted.html#intelligence">Int</a> 13.</p>

				<p><b>Benefit</b>: You receive a +2 bonus on checks made to disarm a foe. This bonus stacks with the bonus granted by <a linkindex="576" href="#improved-disarm">Improved Disarm</a>. Whenever you successfully disarm an opponent, the weapon lands 15 feet away from its previous wielder, in a random direction.</p>
				<p><b>Normal</b>: Disarmed weapons and gear land at the feet of the disarmed creature.</p>
				<h2 id="greater-feint">Greater Feint (Combat)</h2>
				<p>You are skilled at making foes overreact to your attacks.</p>
				<p><b>Prerequisites</b>: <a linkindex="577" href="#combat-expertise">Combat Expertise</a>, <a linkindex="578" href="#improved-feint">Improved Feint</a>, base attack bonus +6, <a linkindex="579" href="gettingStarted.html#intelligence">Int</a> 13.</p>

				<p><b>Benefit</b>: Whenever you use feint to cause an opponent to lose his <a linkindex="580" href="gettingStarted.html#dexterity">Dexterity</a> bonus, he loses that bonus until the beginning of your next turn, in addition to losing his <a linkindex="581" href="gettingStarted.html#dexterity">Dexterity</a> bonus against your next attack.</p>
				<p><b>Normal</b>: A creature you feint loses its <a linkindex="582" href="gettingStarted.html#dexterity">Dexterity</a> bonus against your next attack.</p>

				<h2 id="greater-grapple">Greater Grapple (Combat)</h2>
				<p>Maintaining a grapple is second nature to you.</p>
				<p><b>Prerequisites</b>: <a linkindex="583" href="#improved-grapple">Improved Grapple</a>, <a linkindex="584" href="#improved-unarmed-strike">Improved Unarmed Strike</a>, base attack bonus +6, <a linkindex="585" href="gettingStarted.html#dexterity">Dex</a> 13.</p>

				<p><b>Benefit</b>: You receive a +2 bonus on checks made to <a linkindex="586" href="combat.html#grapple">grapple</a> a foe. This bonus stacks with the bonus granted by <a linkindex="587" href="#improved-grapple">Improved Grapple</a>. Once you have <a linkindex="588" href="glossary.html#grappled">grappled</a> a creature, maintaining the <a linkindex="589" href="combat.html#grapple">grapple</a> is a move action. This feat allows you to make two <a linkindex="590" href="combat.html#grapple">grapple</a> checks each round (to move, harm, or pin your opponent), but you are not required to make two checks. You only need to succeed at one of these checks to maintain the <a linkindex="591" href="combat.html#grapple">grapple</a>.</p>

				<p><b>Normal</b>: Maintaining a <a linkindex="592" href="combat.html#grapple">grapple</a> is a standard action.</p>
				<h2 id="greater-overrun">Greater Overrun (Combat)</h2>
				<p>Enemies must dive to avoid your dangerous move.</p>
				<p><b>Prerequisites</b>: <a linkindex="593" href="#improved-overrun">Improved Overrun</a>, <a linkindex="594" href="#power-attack">Power Attack</a>, base attack bonus +6, <a linkindex="595" href="gettingStarted.html#strength">Str</a> 13.</p>

				<p><b>Benefit</b>: You receive a +2 bonus on checks made to <a linkindex="596" href="combat.html#overrun">overrun</a> a foe. This bonus stacks with the bonus granted by <a linkindex="597" href="#improved-overrun">Improved Overrun</a>. Whenever you <a linkindex="598" href="combat.html#overrun">overrun</a> opponents, they provoke attacks of opportunity if they are knocked <a linkindex="599" href="glossary.html#prone">prone</a> by your <a linkindex="600" href="combat.html#overrun">overrun</a>.</p>

				<p><b>Normal</b>: Creatures knocked <a linkindex="601" href="glossary.html#prone">prone</a> by your <a linkindex="602" href="combat.html#overrun">overrun</a> do not provoke an attack of opportunity.</p>
				<h2 id="greater-penetrating-strike">Greater Penetrating Strike (Combat)</h2>
				<p>Your attacks penetrate the defenses of most foes. </p>
				<p><b>Prerequisites</b>: <a linkindex="603" href="#penetrating-strike">Penetrating Strike</a>, <a linkindex="604" href="#weapon-focus">Weapon Focus</a>, 16th-level fighter.</p>

				<p><b>Benefit</b>: Your attacks with weapons selected with <a linkindex="605" href="#weapon-focus">Weapon Focus</a> ignore up to 10 points of damage reduction. This amount is reduced to 5 points for damage reduction without a type (such as DR 10/-).</p>
				<h2 id="greater-shield-focus">Greater Shield Focus (Combat)</h2>
				<p>You are skilled at deflecting blows with your shield.</p>
				<p><b>Prerequisites</b>: <a linkindex="606" href="#shield-focus">Shield Focus</a>, <a linkindex="607" href="#shield-proficiency">Shield Proficiency</a>, base attack bonus +1, 8th-level fighter.</p>

				<p><b>Benefit</b>: Increase the <a linkindex="608" href="combat.html#armor-class">AC</a> bonus granted by any shield you are using by 1. This bonus stacks with the bonus granted by <a linkindex="609" href="#shield-focus">Shield Focus</a>.</p>
				<h2 id="greater-spell-focus">Greater Spell Focus</h2>
				<p>Choose a school of magic to which you have already applied the <a linkindex="610" href="#spell-focus">Spell Focus</a> feat. Any spells you cast of this school are very hard to resist. </p>

				<p><b>Prerequisite</b>: <a linkindex="611" href="#spell-focus">Spell Focus</a>.</p>
				<p><b>Benefit</b>: Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select. This bonus stacks with the bonus from <a linkindex="612" href="#spell-focus">Spell Focus</a>.</p>
				<p><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school to which you already have applied the <a linkindex="613" href="#spell-focus">Spell Focus</a> feat.</p>

				<h2 id="greater-spell-penetration">Greater Spell Penetration</h2>
				<p>Your spells break through spell resistance much more easily than most.</p>
				<p><b>Prerequisite</b>: <a linkindex="614" href="#spell-penetration">Spell Penetration</a>.</p>
				<p><b>Benefit</b>: You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature's spell resistance. This bonus stacks with the one from <a linkindex="615" href="#spell-penetration">Spell Penetration</a>.</p>

				<h2 id="greater-sunder">Greater Sunder (Combat)</h2>
				<p>Your devastating strikes cleave through weapons and armor and into their wielders, damaging both item and wielder alike in a single terrific strike.</p>
				<p><b>Prerequisites</b>: <a linkindex="616" href="#improved-sunder">Improved Sunder</a>, <a linkindex="617" href="#power-attack">Power Attack</a>, base attack bonus +6, <a linkindex="618" href="gettingStarted.html#strength">Str</a> 13.</p>

				<p><b>Benefit</b>: You receive a +2 bonus on checks made to <a linkindex="619" href="combat.html#sunder">sunder</a> an item. This bonus stacks with the bonus granted by <a linkindex="620" href="#improved-sunder">Improved Sunder</a>. Whenever you <a linkindex="621" href="combat.html#sunder">sunder</a> to destroy a weapon, shield, or suit of armor, any excess damage is applied to the item's wielder. No damage is transferred if you decide to leave the item with 1 hit point.</p>
				<h2 id="greater-trip">Greater Trip (Combat)</h2>
				<p>You can make free attacks on foes that you knock down.</p>

				<p><b>Prerequisites</b>: <a linkindex="622" href="#combat-expertise">Combat Expertise</a>, <a linkindex="623" href="#improved-trip">Improved Trip</a>, base attack bonus +6, <a linkindex="624" href="gettingStarted.html#intelligence">Int</a> 13.</p>
				<p><b>Benefit</b>: You receive a +2 bonus on checks made to <a linkindex="625" href="combat.html#trip">trip</a> a foe. This bonus stacks with the bonus granted by Improved Trip. Whenever you successfully <a linkindex="626" href="combat.html#trip">trip</a> an opponent, that opponent provokes attacks of opportunity.</p>

				<p><b>Normal</b>: Creatures do not provoke attacks of opportunity from being tripped.</p>
				<h2 id="greater-two-weapon-fighting">Greater Two-Weapon Fighting (Combat)</h2>
				<p>You are incredibly skilled at fighting with two weapons at the same time.</p>
				<p><b>Prerequisites</b>: <a linkindex="627" href="gettingStarted.html#dexterity">Dex</a> 19, <a linkindex="628" href="#improved-two-weapon-fighting">Improved Two-Weapon Fighting</a>, <a linkindex="629" href="#two-weapon-fighting">Two-Weapon Fighting</a>, base attack bonus +11.</p>

				<p><b>Benefit</b>: You get a third attack with your off-hand weapon, albeit at a -10 penalty.</p>
				<h2 id="greater-vital-strike">Greater Vital Strike (Combat)</h2>
				<p>You can make a single attack that deals incredible damage.</p>
				<p><b>Prerequisites</b>: <a linkindex="630" href="#improved-vital-strike">Improved Vital Strike</a>, <a linkindex="631" href="#vital-strike">Vital Strike</a>, base attack bonus +16.</p>

				<p><b>Benefit</b>: When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon's damage dice for the attack four times and add the results together before adding bonuses from Strength, weapon abilities (such as <a linkindex="632" href="./magicItems/weapons.html#flaming"><i>flaming</i></a>), precision based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total.</p>
				<h2 id="greater-weapon-focus">Greater Weapon Focus (Combat)</h2>
				<p>Choose one type of weapon (including unarmed strike or <a linkindex="633" href="combat.html#grapple">grapple</a>) for which you have already selected <a linkindex="634" href="#weapon-focus">Weapon Focus</a>. You are a master at your chosen weapon.</p>
				<p><b> Prerequisites</b>: Proficiency with selected weapon, <a linkindex="635" href="#weapon-focus">Weapon Focus</a> with selected weapon, base attack bonus +1, 8th-level fighter.</p>

				<p><b>Benefit</b>: You gain a +1 bonus on attack rolls you make using the selected weapon. This bonus stacks with other bonuses on attack rolls, including those from <a linkindex="636" href="#weapon-focus">Weapon Focus</a>.</p>
				<p><b>Special</b>: You can gain Greater Weapon Focus multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p>
				<h2 id="greater-weapon-specialization">Greater Weapon Specialization (Combat)</h2>
				<p>Choose one type of weapon (including unarmed strike or <a linkindex="637" href="combat.html#grapple">grapple</a>) for which you possess the <a linkindex="638" href="#weapon-specialization">Weapon Specialization</a> feat. Your attacks with the chosen weapon are more devastating than normal.</p>

				<p><b> Prerequisites</b>: Proficiency with selected weapon, <a linkindex="639" href="#greater-weapon-focus">Greater Weapon Focus</a> with selected weapon, <a linkindex="640" href="#weapon-focus">Weapon Focus</a> with selected weapon, <a linkindex="641" href="#weapon-specialization">Weapon Specialization</a> with selected weapon, 12th-level fighter.</p>
				<p><b>Benefit</b>: You gain a +2 bonus on all damage rolls you make using the selected weapon. This bonus to damage stacks with other damage roll bonuses, including any you gain from <a linkindex="642" href="#weapon-specialization">Weapon Specialization</a>.</p>

				<p><b>Special</b>: You can gain Greater Weapon Specialization multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p>
				<h2 id="heighten-spell">Heighten Spell (Metamagic)</h2>
				<p>You can cast spells as if they were a higher level.</p>
				<p><b>Benefit</b>: A heightened spell has a higher spell level than normal (up to a maximum of 9th level). Unlike other metamagic feats, Heighten Spell actually increases the effective level of the spell that it modifies. All effects dependent on spell level (such as saving throw DCs and ability to penetrate a <i>lesser globe of invulnerability</i>) are calculated according to the heightened level. The heightened spell is as difficult to prepare and cast as a spell of its effective level. </p>
				<h2 id="improved-bull-rush">Improved Bull Rush (Combat)</h2>

				<p>You are skilled at pushing your foes around.</p>
				<p><b>Prerequisite</b>: <a linkindex="643" href="gettingStarted.html#strength">Str</a> 13, <a linkindex="644" href="#power-attack">Power Attack</a>, base attack bonus +1.</p>
				<p><b>Benefit</b>: You do not provoke an attack of opportunity when performing a <a linkindex="645" href="combat.html#bull-rush">bull rush</a> combat maneuver. In addition, you receive a +2 bonus on checks made to <a linkindex="646" href="combat.html#bull-rush">bull rush</a> a foe. You also receive a +2 bonus to your <a linkindex="647" href="combat.html#combat-maneuver-defense">Combat Maneuver Defense</a> whenever an opponent tries to <a linkindex="648" href="combat.html#bull-rush">bull rush</a> you.</p>

				<p><b>Normal</b>: You provoke an attack of opportunity when performing a <a linkindex="649" href="combat.html#bull-rush">bull rush</a> combat maneuver.</p>
				<h2 id="improved-channel">Improved Channel</h2>
				<p>Your channeled energy is harder to resist.</p>
				<p><b>Prerequisite</b>: Channel energy class feature.</p>

				<p><b>Benefit</b>: Add 2 to the DC of saving throws made to resist the effects of your channel energy ability. </p>
				<h2 id="improved-counterspell">Improved Counterspell</h2>
				<p>You are skilled at countering the spells of others using similar spells.</p>
				<p><b>Benefit</b>: When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell.</p>
				<p><b>Normal</b>: Without this feat, you may counter a spell only with the same spell or with a spell specifically designated as countering the target spell.</p>

				<h2 id="improved-critical">Improved Critical (Combat)</h2>
				<p>Attacks made with your chosen weapon are quite deadly.</p>
				<p><b>Prerequisite</b>: Proficient with weapon, base attack bonus +8.</p>
				<p><b>Benefit</b>: When using the weapon you selected, your threat range is doubled.</p>
				<p><b>Special</b>: You can gain Improved Critical multiple times. The effects do not stack. Each time you take the feat, it applies to a new type of weapon. </p>

				<p>This effect doesn't stack with any other effect that expands the threat range of a weapon.</p>
				<h2 id="improved-disarm">Improved Disarm (Combat)</h2>
				<p>You are skilled at knocking weapons from a foe's grasp.</p>
				<p><b>Prerequisite</b>: <a linkindex="650" href="gettingStarted.html#intelligence">Int</a> 13, <a linkindex="651" href="#combat-expertise">Combat Expertise</a>.</p>

				<p><b>Benefit</b>: You do not provoke an attack of opportunity when performing a disarm combat maneuver. In addition, you receive a +2 bonus on checks made to disarm a foe. You also receive a +2 bonus to your <a linkindex="652" href="combat.html#combat-maneuver-defense">Combat Maneuver Defense</a> whenever an opponent tries to disarm you.</p>
				<p><b>Normal</b>: You provoke an attack of opportunity when performing a disarm combat maneuver.</p>
				<h2 id="improved-familiar">Improved Familiar</h2>
				<p>This feat allows you to acquire a powerful familiar, but only when you could normally acquire a new familiar.</p>

				<p><b>Prerequisites</b>: Ability to acquire a new familiar, compatible alignment, sufficiently high level (see below).</p>
				<p><b>Benefit</b>: When choosing a familiar, the creatures listed below are also available to you. You may choose a familiar with an alignment up to one step away on each alignment axis (lawful through chaotic, good through evil).</p><table>
<thead><tr><th>Familiar</th><th>Alignment</th><th>Arcane Spellcaster Level</th></tr></thead>
<tbody><tr class="odd"><td>Celestial hawk<sup>1</sup></td><td>Neutral good</td><td>3rd</td></tr>

<tr class="even"><td>Dire rat</td><td>Neutral</td><td>3rd</td></tr>
<tr class="odd"><td>Fiendish viper<sup>2</sup></td><td>Neutral evil</td><td>3rd</td></tr>
<tr class="even"><td>Elemental, Small (any type)</td><td>Neutral</td><td>5th</td></tr>
<tr class="odd"><td>Stirge</td><td>Neutral</td><td>5th</td></tr>

<tr class="even"><td>Homunculus<sup>3</sup></td><td>Any</td><td>7th</td></tr>
<tr class="odd"><td>Imp</td><td>Lawful evil</td><td>7th</td></tr>
<tr class="even"><td>Mephit (any type)</td><td>Neutral</td><td>7th</td></tr>
<tr class="odd"><td>Pseudodragon</td><td>Neutral good</td><td>7th</td></tr>

<tr class="even"><td>Quasit</td><td>Chaotic evil</td><td>7th</td></tr>
</tbody><tfoot><tr><td colspan="3">1 Or other celestial animal from the standard familiar list.</td></tr>
<tr><td colspan="3">2 Or other fiendish animal from the standard familiar list.</td></tr>
<tr><td colspan="3">3 The master must first create the homunculus.</td></tr></tfoot></table>

				<p>Improved familiars otherwise use the rules for regular familiars<i>, </i>with two exceptions: if the creature's type is something other than animal, its type does not change; and improved familiars do not gain the ability to speak with other creatures of their kind (although many of them already have the ability to communicate).</p>
				<h2 id="improved-feint">Improved Feint (Combat)</h2>

				<p>You are skilled at fooling your opponents in combat.</p>
				<p><b>Prerequisites</b>: <a linkindex="653" href="gettingStarted.html#intelligence">Int</a> 13, <a linkindex="654" href="#combat-expertise">Combat Expertise</a>.</p>
				<p><b>Benefit</b>: You can make a Bluff check to feint in combat as a move action.</p>
				<p><b>Normal</b>: Feinting in combat is a standard action.</p>

				<h2 id="improved-grapple">Improved Grapple (Combat)</h2>
				<p>You are skilled at grappling opponents.</p>
				<p><b>Prerequisite</b>: <a linkindex="655" href="gettingStarted.html#dexterity">Dex</a> 13, <a linkindex="656" href="#improved-unarmed-strike">Improved Unarmed Strike</a>.</p>
				<p><b>Benefit</b>: You do not provoke an attack of opportunity when performing a <a linkindex="657" href="combat.html#grapple">grapple</a> combat maneuver. In addition, you receive a +2 bonus on checks made to <a linkindex="658" href="combat.html#grapple">grapple</a> a foe. You also receive a +2 bonus to your <a linkindex="659" href="combat.html#combat-maneuver-defense">Combat Maneuver Defense</a> whenever an opponent tries to <a linkindex="660" href="combat.html#grapple">grapple</a> you.</p>

				<p><b>Normal</b>: You provoke an attack of opportunity when performing a <a linkindex="661" href="combat.html#grapple">grapple</a> combat maneuver.</p>
				<h2 id="improved-great-fortitude">Improved Great Fortitude</h2>
				<p>You can draw upon an inner reserve to resist diseases, poisons, and other grievous harm.</p>
				<p><b>Prerequisites</b>: <a linkindex="662" href="#great-fortitude">Great Fortitude</a>.</p>

				<p><b>Benefit</b>: Once per day, you may reroll a <a linkindex="663" href="combat.html#fortitude">Fortitude</a> save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse.</p>
				<h2 id="improved-initiative">Improved Initiative (Combat)</h2>
				<p>Your quick reflexes allow you to react rapidly to danger.</p>
				<p><b>Benefit</b>: You get a +4 bonus on initiative checks.</p>

				<h2 id="improved-iron-will">Improved Iron Will</h2>
				<p>Your clarity of thought allows you to resist mental attacks.</p>
				<p><b>Prerequisites</b>: <a linkindex="664" href="#iron-will">Iron Will</a>.</p>
				<p><b>Benefit</b>: Once per day, you may reroll a <a linkindex="665" href="combat.html#will">Will</a> save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse.</p>

				<h2 id="improved-lightning-reflexes">Improved Lightning Reflexes</h2>
				<p>You have a knack for avoiding danger all around you.</p>
				<p><b>Prerequisites</b>: <a linkindex="666" href="#lightning-reflexes">Lightning Reflexes</a>.</p>
				<p><b>Benefit</b>: Once per day, you may reroll a <a linkindex="667" href="combat.html#reflex">Reflex</a> save. You must decide to use this ability before the results are revealed. You must take the second roll, even if it is worse.</p>

				<h2 id="improved-overrun">Improved Overrun (Combat)</h2>
				<p>You are skilled at running down your foes.</p>
				<p><b>Prerequisite</b>: <a linkindex="668" href="gettingStarted.html#strength">Str</a> 13, <a linkindex="669" href="#power-attack">Power Attack</a>, base attack bonus +1.</p>
				<p><b>Benefit</b>: You do not provoke an attack of opportunity when performing an <a linkindex="670" href="combat.html#overrun">overrun</a> combat maneuver. In addition, you receive a +2 bonus on checks made to overrrun a foe. You also receive a +2 bonus to your <a linkindex="671" href="combat.html#combat-maneuver-defense">Combat Maneuver Defense</a> whenever an opponent tries to <a linkindex="672" href="combat.html#overrun">overrun</a> you. Targets of your <a linkindex="673" href="combat.html#overrun">overrun</a> attempt may not chose to avoid you.</p>

				<p><b>Normal</b>: You provoke an attack of opportunity when performing an <a linkindex="674" href="combat.html#overrun">overrun</a> combat maneuver.</p>
				<h2 id="improved-precise-shot">Improved Precise Shot (Combat)</h2>
				<p>Your ranged attacks ignore anything but total concealment and cover.</p>
				<p><b>Prerequisites</b>: <a linkindex="675" href="gettingStarted.html#dexterity">Dex</a> 19, <a linkindex="676" href="#point-blank-shot">Point-Blank Shot</a>, <a linkindex="677" href="#precise-shot">Precise Shot</a>, base attack bonus +11.</p>

				<p><b>Benefit</b>: Your ranged attacks ignore the <a linkindex="678" href="combat.html#armor-class">AC</a> bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment. Total cover and total concealment provide their normal benefits against your ranged attacks.</p>
				<p><b>Normal</b>: See the normal rules on the effects of cover and concealment in <a linkindex="679" href="combat.html">Combat</a>. </p>
				<h2 id="improved-shield-bash">Improved Shield Bash (Combat)</h2>
				<p>You can protect yourself with your shield, even if you use it to attack.</p>

				<p><b>Prerequisite</b>: <a linkindex="680" href="#shield-proficiency">Shield Proficiency</a>.</p>
				<p><b>Benefit</b>: When you perform a shield bash, you may still apply the shield's shield bonus to your <a linkindex="681" href="combat.html#armor-class">AC</a>.</p>
				<p><b>Normal</b>: Without this feat, a character that performs a shield bash loses the shield's shield bonus to <a linkindex="682" href="combat.html#armor-class">AC</a> until his next turn (see <a linkindex="683" href="equipment.html">Equipment</a>).</p>

				<h2 id="improved-sunder">Improved Sunder (Combat)</h2>
				<p>You are skilled at damaging your foes' weapons and armor.</p>
				<p><b>Prerequisite</b>: <a linkindex="684" href="gettingStarted.html#strength">Str</a> 13, <a linkindex="685" href="#power-attack">Power Attack</a>, base attack bonus +1.</p>
				<p><b>Benefit</b>: You do not provoke an attack of opportunity when performing a <a linkindex="686" href="combat.html#sunder">sunder</a> combat maneuver. In addition, you receive a +2 bonus on checks made to <a linkindex="687" href="combat.html#sunder">sunder</a> an item. You also receive a +2 bonus to your <a linkindex="688" href="combat.html#combat-maneuver-defense">Combat Maneuver Defense</a> whenever an opponent tries to <a linkindex="689" href="combat.html#sunder">sunder</a> your gear. </p>

				<p><b>Normal</b>: You provoke an attack of opportunity when performing a <a linkindex="690" href="combat.html#sunder">sunder</a> combat maneuver.</p>
				<h2 id="improved-trip">Improved Trip (Combat)</h2>
				<p>You are skilled at sending your opponents to the ground.</p>
				<p><b>Prerequisite</b>: <a linkindex="691" href="gettingStarted.html#intelligence">Int</a> 13, <a linkindex="692" href="#combat-expertise">Combat Expertise</a>.</p>

				<p><b>Benefit</b>: You do not provoke an attack of opportunity when performing a <a linkindex="693" href="combat.html#trip">trip</a> combat maneuver. In addition, you receive a +2 bonus on checks made to <a linkindex="694" href="combat.html#trip">trip</a> a foe. You also receive a +2 bonus to your <a linkindex="695" href="combat.html#combat-maneuver-defense">Combat Maneuver Defense</a> whenever an opponent tries to <a linkindex="696" href="combat.html#trip">trip</a> you. </p>
				<p><b>Normal</b>: You provoke an attack of opportunity when performing a <a linkindex="697" href="combat.html#trip">trip</a> combat maneuver.</p>

				<h2 id="improved-two-weapon-fighting">Improved Two-Weapon Fighting (Combat)</h2>
				<p>You are skilled at fighting with two weapons.</p>
				<p><b>Prerequisites</b>: <a linkindex="698" href="gettingStarted.html#dexterity">Dex</a> 17, <a linkindex="699" href="#two-weapon-fighting">Two-Weapon Fighting</a>, base attack bonus +6.</p>
				<p><b>Benefit</b>: In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a -5 penalty.</p>

				<p><b>Normal</b>: Without this feat, you can only get a single extra attack with an off-hand weapon.</p>
				<h2 id="improved-unarmed-strike">Improved Unarmed Strike (Combat)</h2>
				<p>You are skilled at fighting while unarmed.</p>
				<p><b>Benefit</b>: You are considered to be armed even when unarmed-you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes can deal lethal or nonlethal damage, at your choice.</p>
				<p><b>Normal</b>: Without this feat, you are considered unarmed when attacking with an unarmed strike, and you can deal only nonlethal damage with such an attack.</p>

				<h2 id="improved-vital-strike">Improved Vital Strike (Combat)</h2>
				<p>You can make a single attack that deals a large amount of damage.</p>
				<p><b>Prerequisites</b>: <a linkindex="700" href="#vital-strike">Vital Strike</a>, base attack bonus +11.</p>
				<p><b>Benefit</b>: When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon's damage dice for the attack three times and add the results together before adding bonuses from Strength, weapon abilities (such as <a linkindex="701" href="./magicItems/weapons.html#flaming"><i>flaming</i></a>), precision based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total.</p>

				<h2 id="improvised-weapon-mastery">Improvised Weapon Mastery (Combat)</h2>
				<p>You can turn nearly any object into a deadly weapon, from a razor-sharp chair leg to a sack of flour.</p>
				<p><b>Prerequisites</b>: <a linkindex="702" href="#catch-off-guard">Catch Off-Guard</a> or <a linkindex="703" href="#throw-anything">Throw Anything</a>, base attack bonus +8.</p>
				<p><b>Benefit</b>: You do not suffer any penalties for using an improvised weapon. Increase the amount of damage dealt by the improvised weapon by one step (for example, 1d4 becomes 1d6) to a maximum of 1d8 (2d6 if the improvised weapon is two-handed). The improvised weapon has a critical threat range of 19-20, with a critical multiplier of -2.</p>

				<h2 id="intimidating-prowess">Intimidating Prowess (Combat)</h2>
				<p>Your physical might is intimidating to others.</p>
				<p><b>Benefit</b>: Add your Strength modifier to <a linkindex="704" href="skills/intimidate.html#intimidate">Intimidate</a> skill checks in addition to your <a linkindex="705" href="gettingStarted.html#charisma-new">Charisma</a> modifier.</p>
				<h2 id="iron-will">Iron Will</h2>

				<p>You are more resistant to mental effects.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="706" href="combat.html#will">Will</a> saving throws.</p>
				<h2 id="leadership">Leadership</h2><div class="right"><table id="table-5-2-leadership"><caption>Table: Leadership</caption>
<thead><tr><th rowspan="2">Leadership Score</th><th rowspan="2">Cohort Level</th><th colspan="6">Number of Followers by Level</th></tr><tr><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th><th>5th</th><th>6th</th></tr></thead>

<tbody>
<tr class="odd"><td>1 or lower</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr class="even"><td>2</td><td>1st</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>3</td><td>2nd</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr class="even"><td>4</td><td>3rd</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>5</td><td>3rd</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr class="even"><td>6</td><td>4th</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>7</td><td>5th</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr class="even"><td>8</td><td>5th</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>9</td><td>6th</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr class="even"><td>10</td><td>7th</td><td>5</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>11</td><td>7th</td><td>6</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr class="even"><td>12</td><td>8th</td><td>8</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>13</td><td>9th</td><td>10</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
<tr class="even"><td>14</td><td>10th</td><td>15</td><td>1</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>15</td><td>10th</td><td>20</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>
<tr class="even"><td>16</td><td>11th</td><td>25</td><td>2</td><td>1</td><td>-</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>17</td><td>12th</td><td>30</td><td>3</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>
<tr class="even"><td>18</td><td>12th</td><td>35</td><td>3</td><td>1</td><td>1</td><td>-</td><td>-</td></tr>

<tr class="odd"><td>19</td><td>13th</td><td>40</td><td>4</td><td>2</td><td>1</td><td>1</td><td>-</td></tr>
<tr class="even"><td>20</td><td>14th</td><td>50</td><td>5</td><td>3</td><td>2</td><td>1</td><td>-</td></tr>

<tr class="odd"><td>21</td><td>15th</td><td>60</td><td>6</td><td>3</td><td>2</td><td>1</td><td>1</td></tr>
<tr class="even"><td>22</td><td>15th</td><td>75</td><td>7</td><td>4</td><td>2</td><td>2</td><td>1</td></tr>

<tr class="odd"><td>23</td><td>16th</td><td>90</td><td>9</td><td>5</td><td>3</td><td>2</td><td>1</td></tr>
<tr class="even"><td>24</td><td>17th</td><td>110</td><td>11</td><td>6</td><td>3</td><td>2</td><td>1</td></tr>

<tr class="odd"><td>25 or higher</td><td>17th</td><td>135</td><td>13</td><td>7</td><td>4</td><td>2</td><td>2</td></tr></tbody></table></div>
				<p>You attract followers to your cause and a companion to join you on your adventures.</p>
				<p><b>Prerequisite</b>: Character level 7th.</p>
				<p><b>Benefits</b>: This feat enables you to attract a loyal cohort and a number of devoted subordinates who assist you. A cohort is generally an NPC with class levels, while followers are typically lower level NPCs. See Table: Leadership for what level of cohort and how many followers you can recruit.</p>

				<p><b>Leadership Modifiers</b>: Several factors can affect your Leadership score, causing it to vary from the base score (character level + <a linkindex="707" href="gettingStarted.html#charisma-new">Cha</a> modifier). Your reputation (from the point of view of the cohort or follower you are trying to attract) raises or lowers your Leadership score:</p><table>
<thead><tr><th>Leader's Reputation</th><th>Modifier</th></tr></thead>
<tbody>
<tr class="odd"><td>Great renown</td><td>+2</td></tr>
<tr class="even"><td>Fairness and generosity</td><td>+1</td></tr>

<tr class="odd"><td>Special power</td><td>+1</td></tr>
<tr class="even"><td>Failure</td><td>-1</td></tr>
<tr class="odd"><td>Aloofness</td><td>-1</td></tr>
<tr class="even"><td>Cruelty</td><td>-2</td></tr></tbody></table>

				<p>Other modifiers may apply when you try to attract a cohort, as listed below.</p><thfoot></thfoot><table>
<thead><tr><th>The Leader... </th><th>Modifier</th></tr></thead>

<tbody><tr class="odd"><td>Has a familiar, special mount, or animal companion</td><td>-2</td></tr>
<tr class="even"><td>Recruits a cohort of a different alignment</td><td>-1</td></tr>
<tr class="odd"><td>Caused the death of a cohort</td><td>-2*</td></tr>
<tr><td colspan="2">* Cumulative per cohort killed.</td></tr></tbody></table>

				<p>Followers have different priorities from cohorts. When you try to attract a follower, use the following modifiers.</p><table>
<thead><tr><th>The Leader... </th><th>Modifier</th></tr></thead>

<tbody><tr class="odd"><td>Has a stronghold, base of operations, guildhouse, etc.</td><td>+2</td></tr>
<tr class="even"><td>Moves around a lot</td><td>-1</td></tr>
<tr class="odd"><td>Caused the death of other followers</td><td>-1</td></tr></tbody></table>

				<p><i>Leadership Score</i>: Your base Leadership score equals your level plus your <a linkindex="708" href="gettingStarted.html#charisma-new">Charisma</a> modifier. In order to take into account negative <a linkindex="709" href="gettingStarted.html#charisma-new">Charisma</a> modifiers, this table allows for very low Leadership scores, but you must still be 7th level or higher in order to gain the Leadership feat. Outside factors can affect your Leadership score, as detailed above.</p>

				<p><i>Cohort Level</i>: You can attract a cohort of up to this level. Regardless of your Leadership score, you can only recruit a cohort who is two or more levels lower than yourself. The cohort should be equipped with gear appropriate for its level (see <a linkindex="710" href="creatingNPCs.html">Creating NPCs</a>). A cohort can be of any race or class. The cohort's alignment may not be opposed to your alignment on either the law/chaos or good/evil axis, and you take a -1 penalty to your Leadership score if you recruit a cohort of an alignment different from your own.</p>
				<p>A cohort does not count as a party member when determining the party's XP. Instead, divide the cohort's level by your level. Multiply this result by the total XP awarded to you, then add that number of experience points to the cohort's total.</p>
				<p>If a cohort gains enough XP to bring it to a level one lower than your level, the cohort does not gain the new level-its new XP total is 1 less than the amount needed to attain the next level. </p>
				<p><i>Number of Followers by Level</i>: You can lead up to the indicated number of characters of each level. Followers are similar to cohorts, except they're generally low-level NPCs. Because they're usually 5 or more levels behind you, they're rarely effective in combat.</p>
				<p>Followers don't earn experience and thus don't gain levels. When you gain a new level, consult Table: Leadership to determine if you acquire more followers, some of whom may be higher level than the existing followers. Don't consult the table to see if your cohort gains levels, however, because cohorts earn experience on their own.</p>

				<h2 id="lightning-reflexes">Lightning Reflexes</h2>
				<p>You have faster reflexes than normal.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="711" href="combat.html#reflex">Reflex</a> saving throws.</p>
				<h2 id="lightning-stance">Lightning Stance (Combat)</h2>
				<p>The speed at which you move makes it nearly impossible for opponents to strike you.</p>

				<p><b>Prerequisites</b>: <a linkindex="712" href="gettingStarted.html#dexterity">Dex</a> 17, <a linkindex="713" href="#dodge">Dodge</a>, <a linkindex="714" href="#wind-stance">Wind Stance</a>, base attack bonus +11.</p>
				<p><b>Benefit</b>: If you take two actions to move or a withdraw action in a turn, you gain 50% concealment for 1 round.</p>
				<h2 id="lunge">Lunge (Combat)</h2>

				<p>You can strike foes that would normally be out of reach.</p>
				<p><b>Prerequisites</b>: Base attack bonus +6.</p>
				<p><b>Benefit</b>: You can increase the reach of your melee attacks by 5 feet until the end of your turn by taking a -2 penalty to your <a linkindex="715" href="combat.html#armor-class">AC</a> until your next turn. You must decide to use this ability before any attacks are made.</p>
				<h2 id="magical-aptitude">Magical Aptitude</h2>

				<p>You are skilled at spellcasting and using magic items.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="716" href="skills/spellcraft.html#spellcraft">Spellcraft</a> checks and <a linkindex="717" href="skills/useMagicDevice.html#use-magic-device">Use Magic Device</a> checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>
				<h2 id="manyshot">Manyshot (Combat)</h2>
				<p>You can fire multiple arrows at a single target.</p>

				<p><b>Prerequisites</b>: <a linkindex="718" href="gettingStarted.html#dexterity">Dex</a> 17, <a linkindex="719" href="#point-blank-shot">Point-Blank Shot</a>, <a linkindex="720" href="#rapid-shot">Rapid Shot</a>, base attack bonus +6.</p>
				<p><b>Benefit</b>: When making a full-attack action with a bow, your first attack fires two arrows. If the attack hits, both arrows hit. Apply precision-based damage (such as sneak attack) and critical hit damage only once for this attack. Damage bonuses from using a composite bow with a high Strength bonus apply to each arrow, as do other damage bonuses, such as a ranger's favored enemy bonus. Damage reduction and resistances apply separately to each arrow.</p>
				<h2 id="martial-weapon-proficiency">Martial Weapon Proficiency (Combat)</h2>

				<p>Choose a type of martial weapon. You understand how to use that type of martial weapon in combat.</p>
				<p><b>Benefit</b>: You make attack rolls with the selected weapon normally (without the non-proficient penalty).</p>
				<p><b>Normal</b>: When using a weapon with which you are not proficient, you take a -4 penalty on attack rolls.</p>
				<p><b>Special</b>: Barbarians, fighters, paladins, and rangers are proficient with all martial weapons. They need not select this feat.</p>
				<p>You can gain Martial Weapon Proficiency multiple times. Each time you take the feat, it applies to a new type of weapon. </p>

				<h2 id="master-craftsman">Master Craftsman</h2>
				<p>Your superior crafting skills allow you to create simple magic items.</p>
				<p><b>Prerequisites</b>: 5 ranks in any <a linkindex="721" href="skills/craft.html#craft">Craft</a> or <a linkindex="722" href="skills/profession.html#profession">Profession</a> skill.</p>
				<p><b>Benefit</b>: Choose one <a linkindex="723" href="skills/craft.html#craft">Craft</a> or <a linkindex="724" href="skills/profession.html#profession">Profession</a> skill in which you possess at least 5 ranks. You receive a +2 bonus on your chosen <a linkindex="725" href="skills/craft.html#craft">Craft</a> or <a linkindex="726" href="skills/profession.html#profession">Profession</a> skill. Ranks in your chosen skill count as your caster level for the purposes of qualifying for the <a linkindex="727" href="#craft-magic-arms-and-armor">Craft Magic Arms and Armor</a> and <a linkindex="728" href="#craft-wondrous-item">Craft Wondrous Item</a> feats. You can create magic items using these feats, substituting your ranks in the chosen skill for your total caster level. You must use the chosen skill for the check to create the item. The DC to create the item still increases for any necessary spell requirements (see the magic item creation rules in <a linkindex="729" href="magicItems.html">Magic Items</a>). You cannot use this feat to create any spell-trigger or spell-activation item.</p>

				<p><b>Normal</b>: Only spellcasters can qualify for the <a linkindex="730" href="#craft-magic-arms-and-armor">Craft Magic Arms and Armor</a> and <a linkindex="731" href="#craft-wondrous-item">Craft Wondrous Item</a> feats.</p>
				<h2 id="maximize-spell">Maximize Spell (Metamagic)</h2>
				<p>Your spells have the maximum possible effect.</p>
				<p><b>Benefit</b>: All variable, numeric effects of a spell modified by this feat are maximized. Saving throws and opposed rolls are not affected, nor are spells without random variables. A maximized spell uses up a spell slot three levels higher than the spell's actual level.</p>

				<p>An empowered, maximized spell gains the separate benefits of each feat: the maximum result plus half the normally rolled result.</p>
				<h2 id="medusa-s-wrath">Medusa's Wrath (Combat)</h2>
				<p>You can take advantage of your opponent's confusion, delivering multiple blows.</p>
				<p><b>Prerequisites</b>: <a linkindex="732" href="#improved-unarmed-strike">Improved Unarmed Strike</a>, <a linkindex="733" href="#gorgon-s-fist">Gorgon's Fist</a>, <a linkindex="734" href="#scorpion-style">Scorpion Style</a>, base attack bonus +11.</p>

				<p><b>Benefit</b>: Whenever you use the full-attack action and make at least one unarmed strike, you can make two additional unarmed strikes at your highest base attack bonus. These bonus attacks must be made against a <a linkindex="735" href="glossary.html#dazed">dazed</a>, <a linkindex="736" href="glossary.html#flat-footed">flat-footed</a>, <a linkindex="737" href="glossary.html#paralyzed">paralyzed</a>, <a linkindex="738" href="glossary.html#staggered">staggered</a>, <a linkindex="739" href="glossary.html#stunned">stunned</a>, or <a linkindex="740" href="glossary.html#unconscious">unconscious</a> foe.</p>

				<h2 id="mobility">Mobility (Combat)</h2>
				<p>You can easily move through a dangerous melee.</p>
				<p><b>Prerequisites</b>: <a linkindex="741" href="gettingStarted.html#dexterity">Dex</a> 13, <a linkindex="742" href="#dodge">Dodge</a>.</p>
				<p><b>Benefit</b>: You get a +4 <a linkindex="743" href="combat.html#dodge-bonuses">dodge bonus</a> to <a linkindex="744" href="combat.html#armor-class">Armor Class</a> against attacks of opportunity caused when you move out of or within a threatened area. A condition that makes you lose your <a linkindex="745" href="gettingStarted.html#dexterity">Dexterity</a> bonus to <a linkindex="746" href="combat.html#armor-class">Armor Class</a> (if any) also makes you lose <a linkindex="747" href="combat.html#dodge-bonuses">dodge bonus</a>es.</p>

				<p><a linkindex="748" href="combat.html#dodge-bonuses">Dodge bonus</a>es stack with each other, unlike most types of bonuses.</p>
				<h2 id="mounted-archery">Mounted Archery (Combat)</h2>
				<p>You are skilled at making ranged attacks while mounted.</p>
				<p><b>Prerequisites</b>: Ride 1 rank, <a linkindex="749" href="#mounted-combat">Mounted Combat</a>.</p>
				<p><b>Benefit</b>: The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running.</p>

				<h2 id="mounted-combat">Mounted Combat (Combat)</h2>
				<p>You are adept at guiding your mount through combat.</p>
				<p><b>Prerequisite</b>: Ride 1 rank.</p>
				<p><b>Benefit</b>: Once per round when your mount is hit in combat, you may attempt a Ride check (as an immediate action) to negate the hit. The hit is negated if your Ride check result is greater than the opponent's attack roll.</p>
				<h2 id="natural-spell">Natural Spell</h2>

				<p>You can cast spells even while in a form that cannot normally cast spells.</p>
				<p><b>Prerequisites</b>: <a linkindex="750" href="gettingStarted.html#wisdom">Wis</a> 13, wild shape class feature.</p>
				<p><b>Benefit</b>: You can complete the verbal and somatic components of spells while using wild shape. You substitute various noises and gestures for the normal verbal and somatic components of a spell.</p>
				<p>You can also use any material components or focuses you possess, even if such items are melded within your current form. This feat does not permit the use of magic items while you are in a form that could not ordinarily use them, and you do not gain the ability to speak while using wild shape.</p>

				<h2 id="nimble-moves">Nimble Moves</h2>
				<p>You can move across a single obstacle with ease.</p>
				<p><b>Prerequisites</b>: <a linkindex="751" href="gettingStarted.html#dexterity">Dex</a> 13.</p>
				<p><b>Benefit</b>: Whenever you move, you may move through 5 feet of difficult terrain each round as if it were normal terrain. This feat allows you to take a 5-foot step into difficult terrain.</p>

				<h2 id="penetrating-strike">Penetrating Strike (Combat)</h2>
				<p>Your attacks are capable of penetrating the defenses of some creatures.</p>
				<p><b>Prerequisites</b>: <a linkindex="752" href="#weapon-focus">Weapon Focus</a>, base attack bonus +1, 12th-level fighter, proficiency with weapon.</p>
				<p><b>Benefit</b>: Your attacks with weapons selected with <a linkindex="753" href="#weapon-focus">Weapon Focus</a> ignore up to 5 points of damage reduction. This feat does not apply to damage reduction without a type (such as DR 10/-).</p>

				<h2 id="persuasive">Persuasive</h2>
				<p>You are skilled at swaying attitudes and intimidating others into your way of thinking.</p>
				<p><b>Benefit</b>: You get a +2 bonus on <a linkindex="754" href="skills/diplomacy.html#diplomacy">Diplomacy</a> and <a linkindex="755" href="skills/intimidate.html#intimidate">Intimidate</a> skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>
				<h2 id="pinpoint-targeting">Pinpoint Targeting (Combat)</h2>

				<p>You can target the weak points in your opponent's armor.</p>
				<p><b>Prerequisites</b>: <a linkindex="756" href="gettingStarted.html#dexterity">Dex</a> 19, <a linkindex="757" href="#improved-precise-shot">Improved Precise Shot</a>, <a linkindex="758" href="#point-blank-shot">Point-Blank Shot</a>, <a linkindex="759" href="#precise-shot">Precise Shot</a>, base attack bonus +16.</p>
				<p><b>Benefit</b>: As a standard action, make a single ranged attack. The target does not gain any armor, natural armor, or shield bonuses to its <a linkindex="760" href="combat.html#armor-class">Armor Class</a>. You do not gain the benefit of this feat if you move this round.</p>

				<h2 id="point-blank-shot">Point-Blank Shot (Combat)</h2>
				<p>You are especially accurate when making ranged attacks against close targets.</p>
				<p><b>Benefit</b>: You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.</p>
				<h2 id="power-attack">Power Attack (Combat)</h2>
				<p>You can make exceptionally deadly melee attacks by sacrificing accuracy for strength.</p>
				<p><b>Prerequisites</b>: <a linkindex="761" href="gettingStarted.html#strength">Str</a> 13, base attack bonus +1.</p>

				<p><b>Benefit</b>: You can choose to take a -1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is increased by half (+50%) if you are making an attack with a two-handed weapon, a one handed weapon using two hands, or a primary natural weapon that adds 1-1/2 times your Strength modifier on damage rolls. This bonus to damage is halved (-50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonus reaches +4, and every 4 points thereafter, the penalty increases by -1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.</p>
				<h2 id="precise-shot">Precise Shot (Combat)</h2>
				<p>You are adept at firing ranged attacks into melee.</p>
				<p><b>Prerequisite</b>: <a linkindex="762" href="#point-blank-shot">Point-Blank Shot</a>.</p>
				<p><b>Benefit</b>: You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard -4 penalty on your attack roll.</p>

				<h2 id="quick-draw">Quick Draw (Combat)</h2>
				<p>You can draw weapons faster than most.</p>
				<p><b>Prerequisite</b>: Base attack bonus +1.</p>
				<p><b>Benefit</b>: You can draw a weapon as a free action instead of as a move action. You can draw a hidden weapon (see the <a linkindex="763" href="skills/sleightOfHand.html#sleight-of-hand">Sleight of Hand</a> skill) as a move action.</p>

				<p>A character who has selected this feat may throw weapons at his full normal rate of attacks (much like a character with a bow).</p>
				<p>Alchemical items, potions, scrolls, and wands cannot be drawn quickly using this feat.</p>
				<p><b>Normal</b>: Without this feat, you may draw a weapon as a move action, or (if your base attack bonus is +1 or higher) as a free action as part of movement. Without this feat, you can draw a hidden weapon as a standard action.</p>
				<h2 id="quicken-spell">Quicken Spell (Metamagic)</h2>
				<p>You can cast spells in a fraction of the normal time.</p>
				<p><b>Benefit</b>: Casting a quickened spell is a swift action. You can perform another action, even casting another spell, in the same round as you cast a quickened spell. A spell whose casting time is more than 1 full-round action cannot be quickened.</p>

				<p>A quickened spell uses up a spell slot four levels higher than the spell's actual level. Casting a quickened spell doesn't provoke an attack of opportunity.</p>
				<p><b>Special</b>: You can apply the effects of this feat to a spell cast spontaneously, so long as it has a casting time that is not more than 1 full-round action, without increasing the spell's casting time.</p>
				<h2 id="rapid-reload">Rapid Reload (Combat)</h2>
				<p>Choose a type of crossbow (hand, light, or heavy). You can reload such weapons quickly.</p>
				<p><b>Prerequisite</b>: Weapon Proficiency (crossbow type chosen).</p>

				<p><b>Benefit</b>: The time required for you to reload your chosen type of crossbow is reduced to a free action (for a hand or light crossbow) or a move action (for a heavy crossbow). Reloading a crossbow still provokes an attack of opportunity.</p>
				<p>If you have selected this feat for hand crossbow or light crossbow, you may fire that weapon as many times in a full-attack action as you could attack if you were using a bow.</p>
				<p><b>Normal</b>: A character without this feat needs a move action to reload a hand or light crossbow, or a full-round action to reload a heavy crossbow. </p>
				<p><b>Special</b>: You can gain Rapid Reload multiple times. Each time you take the feat, it applies to a new type of crossbow.</p>
				<h2 id="rapid-shot">Rapid Shot (Combat)</h2>

				<p>You can make an additional ranged attack.</p>
				<p><b>Prerequisites</b>: <a linkindex="764" href="gettingStarted.html#dexterity">Dex</a> 13, <a linkindex="765" href="#point-blank-shot">Point-Blank Shot</a>.</p>
				<p><b>Benefit</b>: When making a full-attack action with a ranged weapon, you can fire one additional time this round. All of your attack rolls take a -2 penalty when using Rapid Shot.</p>
				<h2 id="ride-by-attack">Ride-By Attack (Combat)</h2>

				<p>While mounted and charging, you can move, strike at a foe, and then continue moving.</p>
				<p><b>Prerequisites</b>: Ride 1 rank, <a linkindex="766" href="#mounted-combat">Mounted Combat</a>.</p>
				<p><b>Benefit</b>: When you are mounted and use the charge action, you may move and attack as if with a standard charge and then move again (continuing the straight line of the charge). Your total movement for the round can't exceed double your mounted speed. You and your mount do not provoke an attack of opportunity from the opponent that you attack.</p>
				<h2 id="run">Run</h2>
				<p>You are swift of foot.</p>

				<p><b>Benefit</b>: When running, you move five times your normal speed (if wearing medium, light, or no armor and carrying no more than a medium load) or four times your speed (if wearing heavy armor or carrying a heavy load). If you make a jump after a running start (see the Acrobatics skill description), you gain a +4 bonus on your Acrobatics check. While running, you retain your <a linkindex="767" href="gettingStarted.html#dexterity">Dexterity</a> bonus to your <a linkindex="768" href="combat.html#armor-class">Armor Class</a>.</p>
				<p><b>Normal</b>: You move four times your speed while running (if wearing medium, light, or no armor and carrying no more than a medium load) or three times your speed (if wearing heavy armor or carrying a heavy load), and you lose your <a linkindex="769" href="gettingStarted.html#dexterity">Dexterity</a> bonus to <a linkindex="770" href="combat.html#armor-class">AC</a>.</p>

				<h2 id="scorpion-style">Scorpion Style (Combat)</h2>
				<p>You can perform an unarmed strike that greatly hampers your target's movement.</p>
				<p><b>Prerequisite</b>: <a linkindex="771" href="#improved-unarmed-strike">Improved Unarmed Strike</a>.</p>
				<p><b>Benefit</b>: To use this feat, you must make a single unarmed attack as a standard action. If this unarmed attack hits, you deal damage normally, and the target's base land speed is reduced to 5 feet for a number of rounds equal to your <a linkindex="772" href="gettingStarted.html#wisdom">Wisdom</a> modifier unless it makes a <a linkindex="773" href="combat.html#fortitude">Fortitude</a> saving throw (DC 10 + 1/2 your character level + your <a linkindex="774" href="gettingStarted.html#wisdom">Wis</a> modifier).</p>

				<h2 id="scribe-scroll">Scribe Scroll (Item Creation)</h2>
				<p>You can create magic scrolls.</p>
				<p><b>Prerequisite</b>: Caster level 1st.</p>
				<p><b>Benefit</b>: You can create a scroll of any spell that you know. Scribing a scroll takes 2 hours if its base price is 250 gp or less, otherwise scribing a scroll takes 1 day for each 1,000 gp in its base price. To scribe a scroll, you must use up raw materials costing half of this base price. See the magic item creation rules in <a linkindex="775" href="magicItems.html">Magic Items</a> for more information.</p>

				<h2 id="selective-channeling">Selective Channeling</h2>
				<p>You can choose whom to affect when you channel energy.</p>
				<p><b>Prerequisite</b>: <a linkindex="776" href="gettingStarted.html#charisma-new">Cha</a> 13, channel energy class feature.</p>
				<p><b>Benefit</b>: When you channel energy, you can choose a number of targets in the area up to your <a linkindex="777" href="gettingStarted.html#charisma-new">Charisma</a> modifier. These targets are not affected by your channeled energy.</p>

				<p><b>Normal</b>: All targets in a 30-foot burst are affected when you channel energy. You can only choose whether or not you are affected.</p>
				<h2 id="self-sufficient">Self-Sufficient</h2>
				<p>You know how to get along in the wild and how to effectively treat wounds.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="778" href="skills/heal.html#heal">Heal</a> checks and <a linkindex="779" href="skills/survival.html#survival">Survival</a> checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>

				<h2 id="shatter-defenses">Shatter Defenses (Combat)</h2>
				<p>Your skill with your chosen weapon leaves opponents unable to defend themselves if you strike them when their defenses are already compromised.</p>
				<p><b>Prerequisites</b>: <a linkindex="780" href="#weapon-focus">Weapon Focus</a>, <a linkindex="781" href="#dazzling-display">Dazzling Display</a>, base attack bonus +6, proficiency with weapon.</p>
				<p><b>Benefit</b>: Any <a linkindex="782" href="glossary.html#shaken">shaken</a>, <a linkindex="783" href="glossary.html#frightened">frightened</a>, or <a linkindex="784" href="glossary.html#panicked">panicked</a> opponent hit by you this round is <a linkindex="785" href="glossary.html#flat-footed">flat-footed</a> to your attacks until the end of your next turn. This includes any additional attacks you make this round.</p>

				<h2 id="shield-focus">Shield Focus (Combat)</h2>
				<p>You are skilled at deflecting blows with your shield.</p>
				<p><b>Prerequisites</b>: <a linkindex="786" href="#shield-proficiency">Shield Proficiency</a>, base attack bonus +1.</p>
				<p><b>Benefit</b>: Increase the <a linkindex="787" href="combat.html#armor-class">AC</a> bonus granted by any shield you are using by 1.</p>

				<h2 id="shield-master">Shield Master (Combat)</h2>
				<p>Your mastery of the shield allows you to fight with it without hindrance.</p>
				<p><b>Prerequisites</b>: <a linkindex="788" href="#improved-shield-bash">Improved Shield Bash</a>, <a linkindex="789" href="#shield-proficiency">Shield Proficiency</a>, <a linkindex="790" href="#shield-slam">Shield Slam</a>, <a linkindex="791" href="#two-weapon-fighting">Two-Weapon Fighting</a>, base attack bonus +11.</p>

				<p><b>Benefit</b>: You do not suffer any penalties on attack rolls made with a shield while you are wielding another weapon. Add your shield's enhancement bonus to attacks and damage rolls made with the shield as if it was a weapon enhancement bonus.</p>
				<h2 id="shield-proficiency">Shield Proficiency (Combat)</h2>
				<p>You are trained in how to properly use a shield.</p>
				<p><b>Benefit</b>: When you use a shield (except a tower shield), the shield's armor check penalty only applies to Strength- and <a linkindex="792" href="gettingStarted.html#dexterity">Dexterity</a>-based skills.</p>
				<p><b>Normal</b>: When you are using a shield with which you are not proficient, you take the shield's armor check penalty on attack rolls and on all skill checks that involve moving.</p>

				<p><b>Special</b>: Barbarians, bards, clerics, druids, fighters, paladins, and rangers all automatically have Shield Proficiency as a bonus feat. They need not select it.</p>
				<h2 id="shield-slam">Shield Slam (Combat)</h2>
				<p>In the right position, your shield can be used to send opponents flying.</p>
				<p><b>Prerequisites</b>: <a linkindex="793" href="#improved-shield-bash">Improved Shield Bash</a>, <a linkindex="794" href="#shield-proficiency">Shield Proficiency</a>, <a linkindex="795" href="#two-weapon-fighting">Two-Weapon Fighting</a>, base attack bonus +6.</p>

				<p><b>Benefit</b>: Any opponents hit by your shield bash are also hit with a free <a linkindex="796" href="combat.html#bull-rush">bull rush</a> attack, substituting your attack roll for the combat maneuver check (see <a linkindex="797" href="combat.html">Combat</a>). This <a linkindex="798" href="combat.html#bull-rush">bull rush</a> does not provoke an attack of opportunity. Opponents who cannot move back due to a wall or other surface are knocked <a linkindex="799" href="glossary.html#prone">prone</a> after moving the maximum possible distance. You may choose to move with your target if you are able to take a 5-foot step or to spend an action to move this turn.</p>
				<h2 id="shot-on-the-run">Shot on the Run (Combat)</h2>

				<p>You can move, fire a ranged weapon, and move again before your foes can react.</p>
				<p><b>Prerequisites</b>: <a linkindex="800" href="gettingStarted.html#dexterity">Dex</a> 13, <a linkindex="801" href="#dodge">Dodge</a>, <a linkindex="802" href="#mobility">Mobility</a>, <a linkindex="803" href="#point-blank-shot">Point-Blank Shot</a>, base attack bonus +4.</p>
				<p><b>Benefit</b>: As a full-round action, you can move up to your speed and make a single ranged attack at any point during your movement.</p>

				<p><b>Normal</b>: You cannot move before and after an attack with a ranged weapon.</p>
				<h2 id="sickening-critical">Sickening Critical (Combat, Critical)</h2>
				<p>Your critical hits cause opponents to become sickened.</p>
				<p><b>Prerequisites</b>: <a linkindex="804" href="#critical-focus">Critical Focus</a>, base attack bonus +11.</p>
				<p><b>Benefit</b>: Whenever you score a critical hit, your opponent becomes <a linkindex="805" href="glossary.html#sickened">sickened</a> for 1 minute. The effects of this feat do not stack. Additional hits instead add to the effect's duration.</p>

				<p><b>Special</b>: You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.</p>
				<h2 id="silent-spell">Silent Spell (Metamagic)</h2>
				<p>You can cast your spells without making any sound.</p>
				<p><b>Benefit</b>: A silent spell can be cast with no verbal components. Spells without verbal components are not affected. A silent spell uses up a spell slot one level higher than the spell's actual level.</p>
				<p><b>Special</b>: Bard spells cannot be enhanced by this feat.</p>

				<h2 id="simple-weapon-proficiency">Simple Weapon Proficiency (Combat)</h2>
				<p>You are trained in the use of basic weapons.</p>
				<p><b>Benefit</b>: You make attack rolls with simple weapons without penalty.</p>
				<p><b>Normal</b>: When using a weapon with which you are not proficient, you take a -4 penalty on attack rolls.</p>
				<p><b>Special</b>: All characters except for druids, monks, and wizards are automatically proficient with all simple weapons. They need not select this feat.</p>

				<h2 id="skill-focus">Skill Focus</h2>
				<p>Choose a skill. You are particularly adept at that skill.</p>
				<p><b>Benefit</b>: You get a +3 bonus on all checks involving the chosen skill. If you have 10 or more ranks in that skill, this bonus increases to +6.</p>
				<p><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new skill.</p>
				<h2 id="snatch-arrows">Snatch Arrows (Combat)</h2>

				<p>Instead of knocking an arrow or ranged attack aside, you can catch it in mid-flight.</p>
				<p><b>Prerequisites</b>: <a linkindex="806" href="gettingStarted.html#dexterity">Dex</a> 15, <a linkindex="807" href="#deflect-arrows">Deflect Arrows</a>, <a linkindex="808" href="#improved-unarmed-strike">Improved Unarmed Strike</a>.</p>
				<p><b>Benefit</b>: When using the <a linkindex="809" href="#deflect-arrows">Deflect Arrows</a> feat you may choose to catch the weapon instead of just deflecting it. Thrown weapons can immediately be thrown back as an attack against the original attacker (even though it isn't your turn) or kept for later use.</p>

				<p>You must have at least one hand free (holding nothing) to use this feat.</p>
				<h2 id="spell-focus">Spell Focus</h2>
				<p>Choose a school of magic. Any spells you cast of that school are more difficult to resist.</p>
				<p><b>Benefit</b>: Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select.</p>
				<p><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic.</p>

				<h2 id="spell-mastery">Spell Mastery</h2>
				<p>You have mastered a small handful of spells, and can prepare these spells without referencing your spellbooks at all.</p>
				<p><b>Prerequisite</b>: 1st-level wizard</p>
				<p><b>Benefit</b>: Each time you take this feat, choose a number of spells that you already know equal to your <a linkindex="810" href="gettingStarted.html#intelligence">Intelligence</a> modifier. From that point on, you can prepare these spells without referring to a spellbook.</p>

				<p><b>Normal</b>: Without this feat, you must use a spellbook to prepare all your spells, except <i>read magic.</i></p>
				<h2 id="spell-penetration">Spell Penetration</h2>
				<p>Your spells break through spell resistance more easily than most.</p>
				<p><b>Benefit</b>: You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature's <a linkindex="811" href="glossary.html#spell-resistance">spell resistance</a>.</p>

				<h2 id="spellbreaker">Spellbreaker (Combat)</h2>
				<p>You can strike at enemy spellcasters who fail to cast defensively when you threaten them.</p>
				<p><b>Prerequisites</b>: <a linkindex="812" href="#disruptive">Disruptive</a>, 10th-level fighter.</p>
				<p><b>Benefit</b>: Enemies in your threatened area that fail their checks to cast spells defensively provoke attacks of opportunity from you.</p>
				<p><b>Normal</b>: Enemies that fail to cast spells defensively do not provoke attacks of opportunity.</p>

				<h2 id="spirited-charge">Spirited Charge (Combat)</h2>
				<p>Your mounted charge attacks deal a tremendous amount of damage.</p>
				<p><b>Prerequisites</b>: Ride 1 rank, <a linkindex="813" href="#mounted-combat">Mounted Combat</a>, Ride-By Attack.</p>
				<p><b>Benefit</b>: When mounted and using the charge action, you deal double damage with a melee weapon (or triple damage with a lance).</p>
				<h2 id="spring-attack">Spring Attack (Combat)</h2>

				<p>You can deftly move up to a foe, strike, and withdraw before he can react.</p>
				<p><b>Prerequisites</b>: <a linkindex="814" href="gettingStarted.html#dexterity">Dex</a> 13, <a linkindex="815" href="#dodge">Dodge</a>, <a linkindex="816" href="#mobility">Mobility</a>, base attack bonus +4.</p>
				<p><b>Benefit</b>: As a full-round action, you can move up to your speed and make a single melee attack without provoking any attacks of opportunity from the target of your attack. You can move both before and after the attack, but you must move at least 10 feet before the attack and the total distance that you move cannot be greater than your speed. You cannot use this ability to attack a foe that is adjacent to you at the start of your turn.</p>

				<p><b>Normal</b>: You cannot move before and after an attack.</p>
				<h2 id="staggering-critical">Staggering Critical (Combat, Critical)</h2>
				<p>Your critical hits cause opponents to slow down.</p>
				<p><b>Prerequisites</b>: <a linkindex="817" href="#critical-focus">Critical Focus</a>, base attack bonus +13.</p>
				<p><b>Benefit</b>: Whenever you score a critical hit, your opponent becomes <a linkindex="818" href="glossary.html#staggered">staggered</a> for 1d4+1 rounds. A successful <a linkindex="819" href="combat.html#fortitude">Fortitude</a> save reduces the duration to 1 round. The DC of this <a linkindex="820" href="combat.html#fortitude">Fortitude</a> save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration.</p>

				<p><b>Special</b>: You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.</p>
				<h2 id="stand-still">Stand Still (Combat)</h2>
				<p>You can stop foes that try to move past you.</p>
				<p><b>Prerequisites</b>: <a linkindex="821" href="#combat-reflexes">Combat Reflexes</a>.</p>
				<p><b>Benefit</b>: When a foe provokes an attack of opportunity due to moving through your adjacent squares, you can make a combat maneuver check as your attack of opportunity. If successful, the enemy cannot move for the rest of his turn. An enemy can still take the rest of his action, but cannot move. This feat also applies to any creature that attempts to move from a square that is adjacent to you if such movement provokes an attack of opportunity.</p>

				<h2 id="stealthy">Stealthy</h2>
				<p>You are good at avoiding unwanted attention and slipping out of bonds.</p>
				<p><b>Benefit</b>: You get a +2 bonus on all <a linkindex="822" href="skills/escapeArtist.html#escape-artist">Escape Artist</a> and <a linkindex="823" href="skills/stealth.html#stealth">Stealth</a> skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.</p>
				<h2 id="step-up">Step Up (Combat)</h2>

				<p>You can close the distance when a foe tries to move away.</p>
				<p><b>Prerequisite</b>: Base attack bonus +1.</p>
				<p><b>Benefit</b>: Whenever an adjacent foe attempts to take a 5-foot step away from you, you may also make a 5-foot step as an immediate action so long as you end up adjacent to the foe that triggered this ability. If you take this step, you cannot take a 5-foot step during your next turn. If you take an action to move during your next turn, subtract 5 feet from your total movement.</p>
				<h2 id="still-spell">Still Spell (Metamagic)</h2>
				<p>You can cast spells without moving.</p>

				<p><b>Benefit</b>: A stilled spell can be cast with no somatic components. Spells without somatic components are not affected. A stilled spell uses up a spell slot one level higher than the spell's actual level.</p>
				<h2 id="strike-back">Strike Back (Combat)</h2>
				<p>You can strike at foes that attack you using their superior reach, by targeting their limbs or weapons as they come at you.</p>
				<p><b>Prerequisite</b>: Base attack bonus +11.</p>
				<p><b>Benefit</b>: You can ready an action to make a melee attack against any foe that attacks you in melee, even if the foe is outside of your reach.</p>

				<h2 id="stunning-critical">Stunning Critical (Combat, Critical)</h2>
				<p>Your critical hits cause opponents to become stunned.</p>
				<p><b>Prerequisites</b>: <a linkindex="824" href="#critical-focus">Critical Focus</a>, <a linkindex="825" href="#staggering-critical">Staggering Critical</a>, base attack bonus +17.</p>
				<p><b>Benefit</b>: Whenever you score a critical hit, your opponent becomes <a linkindex="826" href="glossary.html#stunned">stunned</a> for 1d4 rounds. A successful <a linkindex="827" href="combat.html#fortitude">Fortitude</a> save reduces this to <a linkindex="828" href="glossary.html#staggered">staggered</a> for 1d4 rounds. The DC of this <a linkindex="829" href="combat.html#fortitude">Fortitude</a> save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration.</p>

				<p><b>Special</b>: You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.</p>
				<h2 id="stunning-fist">Stunning Fist (Combat)</h2>
				<p>You know just where to strike to temporarily stun a foe.</p>
				<p><b>Prerequisites</b>: <a linkindex="830" href="gettingStarted.html#dexterity">Dex</a> 13, <a linkindex="831" href="gettingStarted.html#wisdom">Wis</a> 13, <a linkindex="832" href="#improved-unarmed-strike">Improved Unarmed Strike</a>, base attack bonus +8.</p>

				<p><b>Benefit</b>: You must declare that you are using this feat before you make your attack roll (thus, a failed attack roll ruins the attempt). Stunning Fist forces a foe damaged by your unarmed attack to make a <a linkindex="833" href="combat.html#fortitude">Fortitude</a> saving throw (DC 10 + 1/2 your character level + your <a linkindex="834" href="gettingStarted.html#wisdom">Wis</a> modifier), in addition to dealing damage normally. A defender who fails this saving throw is <a linkindex="835" href="glossary.html#stunned">stunned</a> for 1 round (until just before your next turn). A <a linkindex="836" href="glossary.html#stunned">stunned</a> character can't take actions, loses any <a linkindex="837" href="gettingStarted.html#dexterity">Dexterity</a> bonus to <a linkindex="838" href="combat.html#armor-class">AC</a>, and takes a -2 penalty to <a linkindex="839" href="combat.html#armor-class">AC</a>. You may attempt a stunning attack once per day for every four levels you have attained (but see Special), and no more than once per round. Constructs, oozes, plants, undead, <a linkindex="840" href="glossary.html#incorporeal">incorporeal</a> creatures, and creatures immune to critical hits cannot be <a linkindex="841" href="glossary.html#stunned">stunned</a>.</p>

				<p><b>Special</b>: A monk receives Stunning Fist as a bonus feat at 1st level, even if he does not meet the prerequisites. A monk may attempt a stunning attack a number of times per day equal to his monk level, plus one more time per day for every four levels he has in classes other than monk.</p>
				<h2 id="throw-anything">Throw Anything (Combat)</h2>
				<p>You are used to throwing things you have on hand.</p>
				<p><b>Benefit</b>: You do not suffer any penalties for using an improvised ranged weapon. You receive a +1 circumstance bonus on attack rolls made with thrown splash weapons.</p>
				<p><b>Normal</b>: You take a -4 penalty on attack rolls made with an improvised weapon.</p>

				<h2 id="tiring-critical">Tiring Critical (Combat, Critical)</h2>
				<p>Your critical hits cause opponents to become fatigued.</p>
				<p><b>Prerequisites</b>: <a linkindex="842" href="#critical-focus">Critical Focus</a>, base attack bonus +13.</p>
				<p><b>Benefit</b>: Whenever you score a critical hit, your opponent becomes <a linkindex="843" href="glossary.html#fatigued">fatigued</a>. This feat has no additional effect on a <a linkindex="844" href="glossary.html#fatigued">fatigued</a> or <a linkindex="845" href="glossary.html#exhausted">exhausted</a> creature.</p>

				<p><b>Special</b>: You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.</p>
				<h2 id="toughness">Toughness</h2>
				<p>You have enhanced physical stamina.</p>
				<p><b>Benefit</b>: You gain +3 hit points. For every Hit Die you possess beyond 3, you gain an additional +1 hit point. If you have more than 3 Hit Dice, you gain +1 hit points whenever you gain a Hit Die (such as when you gain a level).</p>
				<h2 id="tower-shield-proficiency">Tower Shield Proficiency (Combat)</h2>

				<p>You are trained in how to properly use a tower shield.</p>
				<p><b>Prerequisite</b>: <a linkindex="846" href="#shield-proficiency">Shield Proficiency</a>.</p>
				<p><b>Benefit</b>: When you use a tower shield, the shield's armor check penalty only applies to Strength and <a linkindex="847" href="gettingStarted.html#dexterity">Dexterity</a>-based skills.</p>
				<p><b>Normal</b>: A character using a shield with which he is not proficient takes the shield's armor check penalty on attack rolls and on all skill checks that involve moving, including Ride.</p>

				<p><b>Special</b>: Fighters automatically have Tower Shield Proficiency as a bonus feat. They need not select it.</p>
				<h2 id="trample">Trample (Combat)</h2>
				<p>While mounted, you can ride down opponents and trample them under your mount.</p>
				<p><b>Prerequisites</b>: Ride 1 rank, <a linkindex="848" href="#mounted-combat">Mounted Combat</a>.</p>
				<p><b>Benefit</b>: When you attempt to <a linkindex="849" href="combat.html#overrun">overrun</a> an opponent while mounted, your target may not choose to avoid you. Your mount may make one hoof attack against any target you knock down, gaining the standard +4 bonus on attack rolls against prone targets.</p>

				<h2 id="turn-undead">Turn Undead</h2>
				<p>Calling upon higher powers, you cause undead to flee from the might of your unleashed divine energy.</p>
				<p><b>Prerequisites</b>: Channel positive energy class feature.</p>
				<p><b>Benefit</b>: You can, as a standard action, use one of your uses of channel positive energy to cause all undead within 30 feet of you to flee, as if <a linkindex="850" href="glossary.html#panicked">panicked</a>. Undead receive a <a linkindex="851" href="combat.html#will">Will</a> save to negate the effect. The DC for this <a linkindex="852" href="combat.html#will">Will</a> save is equal to 10 + 1/2 your cleric level + your <a linkindex="853" href="gettingStarted.html#charisma-new">Charisma</a> modifier. Undead that fail their save flee for 1 minute. Intelligent undead receive a new saving throw each round to end the effect. If you use channel energy in this way, it has no other effect (it does not heal or harm nearby creatures).</p>

				<h2 id="two-weapon-defense">Two-Weapon Defense (Combat)</h2>
				<p>You are skilled at defending yourself while dual-wielding.</p>
				<p><b>Prerequisites</b>: <a linkindex="854" href="gettingStarted.html#dexterity">Dex</a> 15, <a linkindex="855" href="#two-weapon-fighting">Two-Weapon Fighting</a>.</p>
				<p><b>Benefit</b>: When wielding a double weapon or two weapons (not including natural weapons or unarmed strikes), you gain a +1 shield bonus to your <a linkindex="856" href="combat.html#armor-class">AC</a>.</p>

				<p>When you are fighting defensively or using the total defense action, this shield bonus increases to +2.</p>
				<h2 id="two-weapon-fighting">Two-Weapon Fighting (Combat)</h2>
				<p>You can fight with a weapon wielded in each of your hands. You can make one extra attack each round with the secondary weapon.</p>
				<p><b>Prerequisite</b>: <a linkindex="857" href="gettingStarted.html#dexterity">Dex</a> 15.</p>
				<p><b>Benefit</b>: Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See Two-Weapon Fighting in <a linkindex="858" href="combat.html">Combat</a>.</p>

				<p><b>Normal</b>: If you wield a second weapon in your off hand, you can get one extra attack per round with that weapon. When fighting in this way you suffer a -6 penalty with your regular attack or attacks with your primary hand and a -10 penalty to the attack with your off hand. If your off-hand weapon is light, the penalties are reduced by 2 each. An unarmed strike is always considered light.</p>
				<h2 id="two-weapon-rend">Two-Weapon Rend (Combat)</h2>
				<p>Striking with both of your weapons simultaneously, you can use them to deliver devastating wounds.</p>
				<p><b>Prerequisites</b>: <a linkindex="859" href="gettingStarted.html#dexterity">Dex</a> 17, <a linkindex="860" href="#double-slice">Double Slice</a>, <a linkindex="861" href="#improved-two-weapon-fighting">Improved Two-Weapon Fighting</a>, <a linkindex="862" href="#two-weapon-fighting">Two-Weapon Fighting</a>, base attack bonus +11. </p>

				<p><b>Benefit</b>: If you hit an opponent with both your primary hand and your off-hand weapon, you deal an additional 1d10 points of damage plus 1-1/2 times your Strength modifier. You can only deal this additional damage once each round.</p>
				<h2 id="unseat">Unseat (Combat)</h2>
				<p>You are skilled at unseating your mounted opponents.</p>
				<p><b>Prerequisites</b>: <a linkindex="863" href="gettingStarted.html#strength">Str</a> 13, Ride 1 rank, <a linkindex="864" href="#mounted-combat">Mounted Combat</a>, <a linkindex="865" href="#power-attack">Power Attack</a>, <a linkindex="866" href="#improved-bull-rush">Improved Bull Rush</a>, base attack bonus +1.</p>

				<p><b>Benefits</b>: When charging an opponent while mounted and wielding a lance, resolve the attack as normal. If it hits, you may immediately make a free <a linkindex="867" href="combat.html#bull-rush">bull rush</a> attempt in addition to the normal damage. If successful, the target is knocked off his horse and lands <a linkindex="868" href="glossary.html#prone">prone</a> in a space adjacent to his mount that is directly away from you.</p>
				<h2 id="vital-strike">Vital Strike (Combat)</h2>
				<p>You make a single attack that deals significantly more damage than normal.</p>
				<p><b>Prerequisites</b>: Base attack bonus +6.</p>

				<p><b>Benefit</b>: When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon's damage dice for the attack twice and add the results together before adding bonuses from Strength, weapon abilities (such as <a linkindex="869" href="./magicItems/weapons.html#flaming"><i>flaming</i></a>), precision based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total.</p>
				<h2 id="weapon-finesse">Weapon Finesse (Combat)</h2>
				<p>You are trained in using your agility in melee combat, as opposed to brute strength.</p>
				<p><b>Benefit</b>: With a light weapon, rapier, whip, or spiked chain made for a creature of your size category, you may use your <a linkindex="870" href="gettingStarted.html#dexterity">Dexterity</a> modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls.</p>

				<p><b>Special</b>: Natural weapons are considered light weapons.</p>
				<h2 id="weapon-focus">Weapon Focus (Combat)</h2>
				<p>Choose one type of weapon. You can also choose unarmed strike or <a linkindex="871" href="combat.html#grapple">grapple</a> (or ray, if you are a spellcaster) as your weapon for the purposes of this feat.</p>
				<p><b>Prerequisites</b>: Proficiency with selected weapon, base attack bonus +1.</p>

				<p><b>Benefit</b>: You gain a +1 bonus on all attack rolls you make using the selected weapon.</p>
				<p><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p>
				<h2 id="weapon-specialization">Weapon Specialization (Combat)</h2>
				<p>You are skilled at dealing damage with one weapon. Choose one type of weapon (including unarmed strike or <a linkindex="872" href="combat.html#grapple">grapple</a>) for which you have already selected the <a linkindex="873" href="#weapon-focus">Weapon Focus</a> feat. You deal extra damage when using this weapon.</p>

				<p><b>Prerequisites</b>: Proficiency with selected weapon, <a linkindex="874" href="#weapon-focus">Weapon Focus</a> with selected weapon, fighter level 4th.</p>
				<p><b>Benefit</b>: You gain a +2 bonus on all damage rolls you make using the selected weapon.</p>
				<p><b>Special</b>: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.</p>
				<h2 id="whirlwind-attack">Whirlwind Attack (Combat)</h2>

				<p>You can strike out at every foe within reach.</p>
				<p><b>Prerequisites</b>: <a linkindex="875" href="gettingStarted.html#dexterity">Dex</a> 13, <a linkindex="876" href="gettingStarted.html#intelligence">Int</a> 13, <a linkindex="877" href="#combat-expertise">Combat Expertise</a>, <a linkindex="878" href="#dodge">Dodge</a>, <a linkindex="879" href="#mobility">Mobility</a>, <a linkindex="880" href="#spring-attack">Spring Attack</a>, base attack bonus +4.</p>

				<p><b>Benefit</b>: When you use the full-attack action, you can give up your regular attacks and instead make one melee attack at your highest base attack bonus against each opponent within reach. You must make a separate attack roll against each opponent.</p>
				<p>When you use the Whirlwind Attack feat, you also forfeit any bonus or extra attacks granted by other feats, spells, or abilities.</p>
				<h2 id="widen-spell">Widen Spell (Metamagic)</h2>
				<p>You can cast your spells so that they occupy a larger space.</p>
				<p><b>Benefit</b>: You can alter a burst, emanation, line, or spread-shaped spell to increase its area. Any numeric measurements of the spell's area increase by 100%. A widened spell uses up a spell slot three levels higher than the spell's actual level.</p>

				<p>Spells that do not have an area of one of these four sorts are not affected by this feat.</p>
				<h2 id="wind-stance">Wind Stance (Combat)</h2>
				<p>Your erratic movements make it difficult for enemies to pinpoint your location.</p>
				<p><b>Prerequisites</b>: <a linkindex="881" href="gettingStarted.html#dexterity">Dex</a> 15, <a linkindex="882" href="#dodge">Dodge</a>, base attack bonus +6.</p>

				<p><b>Benefit</b>: If you move more than 5 feet this turn, you gain 20% concealment for 1 round against ranged attacks.</p>
			</div>
);
export default feats;