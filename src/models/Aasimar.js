const Aasimar = {
    "dexterity": "10", 
    "ac": "15, touch 10, flat-footed 15 (+5 armor)", 
    "special_attacks": "channel positive energy (5/day, 1d6, DC 12), rebuke death (1d4+1, 6/day), touch of good (6/day)", 
    "intelligence": "13", 
    "racial_modifiers": "+2 Diplomacy, +2 Perception", 
    "resist": "acid 5, cold 5, electricity 5", 
    "melee": "heavy mace -1 (1d8-1)", 
    "cr": "1/2", 
    "xp": "200", 
    "speed": "30 ft. (20 ft. in armor)", 
    "alignment": "NG", 
    "size": "Medium", 
    "languages": "Celestial, Common, Draconic", 
    "strength": "8", 
    "constitution": "14", 
    "treasure": "NPC gear (scale mail, heavy mace, light crossbow with 10 bolts, other treasure)", 
    "init": "+0", 
    "environment": "any land", 
    "source": "Bestiary", 
    "charisma": "14", 
    "fortitude": "+4", 
    "spells": [
        {
            "spell-like abilities": "(CL 1st)<p class=\"stat-block-2\">1/day-<i>daylight</i></p>"
        }, 
        {
            "spells prepared": "(CL 1st)<p class=\"stat-block-2\">1st-<i>bless</i>, <i>command</i> (DC 14), <i>protection from evil</i><sup>D</sup></p><p class=\"stat-block-2\">0 (at will)-<i>detect magic, guidance, stabilize</i></p><p class=\"stat-block-2\"><b>D</b> domain spell; <b>Domains</b> Good, Healing</p>"
        }
    ], 
    "type": "creature", 
    "feats": "Turn Undead", 
    "senses": "darkvision 60 ft.; Perception +5", 
    "description": "This supernaturally beautiful woman looks human, yet emanates a strange sense of calm and benevolence.", 
    "sections": [
        {
            "body": "<p>Aasimars are humans with a significant amount of celestial or other good outsider blood in their ancestry. Aasimars are not always good, but it is a natural tendency for them, and they gravitate to good faiths or organizations associated with celestials. Aasimar heritage can hide for generations, only to appear suddenly in the child of two apparently human parents. Most societies interpret aasimar births as good omens. Aasimars look mostly human except for some minor physical trait that reveals their unusual heritage. Typical aasimar features are hair that shines like metal, unusual eye or skin color, or even glowing golden halos. </p>", 
            "source": "Bestiary", 
            "type": "section"
        }, 
        {
            "body": "<p>Aasimars are defined by class levels&mdash;they do not possess racial Hit Dice. Aasimars have the following racial traits.</p>", 
            "name": "Aasimar", 
            "source": "Bestiary", 
            "url": "pfsrd://Bestiary/Monsters/Aasimar/Aasimar", 
            "type": "race", 
            "subtype": "monster_race", 
            "sections": [
                {
                    "body": "<p>Aasimars are insightful, confident, and personable.</p>", 
                    "source": "Bestiary", 
                    "type": "section", 
                    "name": "+2 Charisma, +2 Wisdom"
                }, 
                {
                    "body": "<p>Aasimars have a base speed of 30 feet.</p>", 
                    "source": "Bestiary", 
                    "type": "section", 
                    "name": "Normal Speed"
                }, 
                {
                    "body": "<p>Aasimars can see in the dark up to 60 feet.</p>", 
                    "source": "Bestiary", 
                    "type": "section", 
                    "name": "Darkvision"
                }, 
                {
                    "body": "<p>Aasimars have a +2 racial bonus on Diplomacy and Perception checks.</p>", 
                    "url": "pfsrd://Bestiary/Monsters/Aasimar/Aasimar/Skilled", 
                    "type": "section", 
                    "name": "Skilled", 
                    "source": "Bestiary"
                }, 
                {
                    "body": "<p>Aasimars can use <i>daylight</i> once per day as a spell-like ability (caster level equals the aasimar's class level).</p>", 
                    "url": "pfsrd://Bestiary/Monsters/Aasimar/Aasimar/Spell-Like Ability", 
                    "type": "section", 
                    "name": "Spell-Like Ability", 
                    "source": "Bestiary"
                }, 
                {
                    "body": "<p>Aasimars have acid resistance 5, cold resistance 5, and electricity resistance 5.</p>", 
                    "url": "pfsrd://Bestiary/Monsters/Aasimar/Aasimar/Celestial Resistance", 
                    "type": "section", 
                    "name": "Celestial Resistance", 
                    "source": "Bestiary"
                }, 
                {
                    "body": "<p>Aasimars begin play speaking Common and Celestial. Aasimars with high Intelligence scores can choose any of the following bonus languages: Draconic, Dwarven, Elven, Gnome, Halfling, and Sylvan.</p>", 
                    "source": "Bestiary", 
                    "type": "section", 
                    "name": "Languages"
                }, 
                {
                    "type": "section", 
                    "sections": [
                        {
                            "body": "Aasimar Monster Entry", 
                            "source": "Bestiary", 
                            "type": "link"
                        }
                    ], 
                    "name": "See Also", 
                    "source": "Bestiary"
                }
            ]
        }
    ], 
    "hp": "11 (1d8+3)", 
    "wisdom": "17", 
    "creature_type": "Outsider", 
    "ranged": "light crossbow +0 (1d8/19-20)", 
    "name": "Aasimar", 
    "base_attack": "+0", 
    "level": "cleric 1", 
    "skills": "Diplomacy +8, Heal +7, Knowledge (religion) +5", 
    "reflex": "+0", 
    "cmd": "9", 
    "cmb": "-1", 
    "will": "+5", 
    "url": "pfsrd://Bestiary/Monsters/Aasimar", 
    "organization": "solitary, pair, or team (3-6)", 
    "creature_subtype": "native"
};

export default Aasimar;