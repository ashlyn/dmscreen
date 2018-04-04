const Behir = {
    "dexterity": "12", 
    "ac": "21, touch 9, flat-footed 20 (+1 Dex, +12 natural, -2 size)", 
    "special_attacks": "breath weapon (20-foot line, 7d6 electricity damage, Reflex DC 20 for half, usable every 1d4 rounds), constrict (2d6+9), rake (6 claws +14, 1d4+6), swallow whole (2d8+9 bludgeoning damage, AC 16, 10 hp)", 
    "intelligence": "7", 
    "melee": "bite +15 (2d6+9 plus grab)", 
    "cr": "8", 
    "xp": "4,800", 
    "speed": "40 ft., climb 20 ft.", 
    "alignment": "N", 
    "size": "Huge", 
    "languages": "Common", 
    "strength": "23", 
    "constitution": "21", 
    "space": "15 ft.", 
    "treasure": "double", 
    "init": "+1", 
    "environment": "warm hills and deserts", 
    "source": "Bestiary", 
    "charisma": "12", 
    "immune": "electricity", 
    "fortitude": "+12", 
    "type": "creature", 
    "feats": "Alertness, Cleave, Great Cleave, Power Attack, Weapon Focus (bite)", 
    "senses": "darkvision 60 ft., low-light vision; Perception +6", 
    "description": "This slithering, multilegged blue reptile has a fearsome head crowned with two large, curling horns.", 
    "sections": [
        {
            "name": "Special Abilities", 
            "source": "Bestiary", 
            "url": "pfsrd://Bestiary/Monsters/Behir/Special Abilities", 
            "type": "section", 
            "subtype": "special_abilities", 
            "sections": [
                {
                    "body": "A behir's grab attack works against creatures of any size category. It can constrict the same round it establishes a hold. On any round thereafter that it maintains its hold, the behir can choose to rake the grappled target or swallow it whole.", 
                    "name": "Grab", 
                    "url": "pfsrd://Bestiary/Monsters/Behir/Special Abilities/Grab", 
                    "ability_types": {
                        "ability_type": "Extraordinary"
                    }, 
                    "source": "Bestiary", 
                    "type": "ability"
                }
            ]
        }, 
        {
            "body": "<p>Temperamental and avaricious, the behir spends most of its time slithering through the sandy hills and desert cliffs that make up its territory, preying upon all creatures who dare to enter its hunting grounds. The creature's six pairs of powerful, clawed legs remain folded against its sides most of the time, only extending in combat to grapple foes or carry the behir forward in a terrifying, low-slung gallop, or else when climbing the sheer cliff faces common to behir lairs.</p>", 
            "source": "Bestiary", 
            "type": "section"
        }, 
        {
            "body": "<p>The average behir is 40 feet long and weighs 4,000 pounds. In addition to the two prominent horns on its head, many have additional decorative spines at regular intervals along the central ridges of their backs.</p>", 
            "source": "Bestiary", 
            "type": "section"
        }, 
        {
            "body": "<p>While territorial and bestial in its fury, the behir is neither stupid nor necessarily evil, though its self-centeredness and tendency to lay claim to everything visible from its high lairs frequently bring it into conflict with other races. As such, a behir can often be bought off or reasoned with by those brave negotiators willing to get close enough to make their pitch. In these cases, a behir's tendency to attack first and ask questions later (or not at all) means that anyone seeking to strike a deal must bring powerful incentives and impress the behir immediately with his offer.</p>", 
            "source": "Bestiary", 
            "type": "section"
        }, 
        {
            "body": "<p>It's often been speculated that behirs are somehow related to blue dragons, but the exact nature of this link remains unknown. Most dragons deny any such association and look down on the behir for its relative lack of intelligence&mdash;a snubbing that infuriates the already short-tempered behir. Thanks to this casual disparagement, many behirs carry deep grudges against dragons, and attack without pause any who cross into their territories.</p>", 
            "source": "Bestiary", 
            "type": "section"
        }
    ], 
    "hp": "105 (10d10+50)", 
    "reach": "10 ft.", 
    "wisdom": "14", 
    "creature_type": "Magical Beast", 
    "name": "Behir", 
    "base_attack": "+10", 
    "skills": "Climb +14, Perception +8, Stealth +5", 
    "reflex": "+8", 
    "cmd": "29 (can't be tripped)", 
    "cmb": "+18 (+22 grapple)", 
    "will": "+5", 
    "url": "pfsrd://Bestiary/Monsters/Behir", 
    "organization": "solitary or pair"
};

export default Behir;