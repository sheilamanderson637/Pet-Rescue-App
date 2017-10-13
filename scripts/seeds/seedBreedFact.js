const mongoose = require("mongoose");
const db = require("../../models");
mongoose.Promise = global.Promise;

//This file seeds the database

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petrescuers",
  {
    useMongoClient: true
  }
);

//breedDescription: obj.queryresult.pods[4].subpods[0].plaintext,
//breedTemperment: obj.queryresult.pods[5].subpods[0].plaintext,
//breedCharacteristics (properties): obj.queryresult.pods[2].subpods[0].plaintext,  
//breedHistory: String, //obj.queryresult.pods[6].subpods[0].plaintext
 
const breedFact = [
  {
    animalType: 'dog',
    breedName: 'American Bulldog',
    breedDescription: 'Athletic and agile working and guardian dog\nBroad, large head with strong jaws and muscular cheeks\nUncropped ears\nStocky and muscular body', 
    breedTemperament: 'alert  |  assertive with other dogs  |  courageous  |  friendly  |  hardy  |  hunting  |  independent  |  loyal  |  outgoing  |  serious  |  tough  |  willful',
    breedCharacteristics: 'female height | (20 to 25) inches\nmale height | (22 to 27) inches\nfemale weight | (59.9 to 100) lb  (pounds)\nmale weight | (74.9 to 125) lb  (pounds)\nsize | large  |  extra large\nlife span | (10 to 15) years\nlitter size | (6 to 16)\nhair length | short\nshedding | moderate\nAKC recognition year | (not recognized)',
    breedHistory: 'A descendant of the English Bulldog used for the sport of bullbaiting \nNearly extinct following World War II until John D. Johnson and Alan Scott interbred the remaining dogs from across the American South\nUsed by farmers to guard against feral pigs',
  },
  {
    animalType: 'dog',
    breedName: 'Beagle',
    breedDescription: 'Small to medium-sized sturdy scenthound\nLarge soft eyes set apart\nDeep broad chest with well-sprung ribs\nHard medium-length coat is usually tricolor\nLong, wide, pendant ears',
    breedTemperament: 'affectionate  |  alert  |  cheerful  |  courageous  |  gentle  |  intelligent  |  loyal  |  social',
    breedCharacteristics: 'female height | (13 to 15) inches\nmale height | (13 to 15) inches\nfemale weight | (18 to 23) lb  (pounds)\nmale weight | (22 to 35.1) lb  (pounds)\nsize | medium\nlife span | (12 to 15) years\nlitter size | (2 to 14)\nhair length | medium\nshedding | moderate\nAKC recognition year | 1885  (132 years ago)\norigin | United Kingdom',
    breedHistory: 'Popular scenthound used for pack hunting for centuries in Great Britain\nKing Edward III of England kept a pack of up to 120 on the battlefield during the Hundred Years\' War\nName may come from a French term meaning \"open throat\" in reference to their baying sounds\nFound in popular culture, most famously as Snoopy, from Charles Schulz\'s comic \"Peanuts\"',
  },
  {
    animalType: 'dog',
    breedName: 'Border Collie',
    breedDescription: 'Medium-sized livestock herding dog\nTapered muzzle with a black nose\nBlack and white coat is most common, but also comes many patterns including tricolors, merle, or solid\nCarries its feathered tail up when it is excited\nUsually has its ears perked',
    breedTemperament: 'affectionate  |  alert  |  intelligent  |  loyal  |  responsive',
    breedCharacteristics: 'female height | (18 to 21) inches\nmale height | (19 to 22) inches\nfemale weight | (27 to 42.1) lb  (pounds)\nmale weight | (30 to 45.1) lb  (pounds)\nsize | medium\nlife span | (12 to 15) years\nlitter size | (4 to 8)\nhair length | long  |  medium\nshedding | moderate\nAKC recognition year | 1995  (22 years ago)\nUKC recognition year | 1961  (56 years ago)\norigin | United Kingdom',
    breedHistory: 'Named for its likely origin along the border of England and Scotland\nKnown as a breed as early as the 1570s, but only given its current name in 1915\nQueen Victoria of England owned and helped popularize the breed',
  },
  {
    animalType: 'dog',
    breedName: 'Boxer',
    breedDescription: 'Mid-sized stocky hunting dog\nMuzzle is short and jaw is undershot\nLong legs and deep chest\nEars and tail are often cropped or docked\nOften has dark markings on its face and around its eyes',
    breedTemperament: 'affectionate  |  alert  |  diligent  |  intelligent  |  lively  |  loyal  |  relaxed  |  responsive  |  social',
    breedCharacteristics: 'female height | (21.5 to 23.5) inches\nmale height | (23 to 25) inches\nfemale weight | (52.9 to 65.1) lb  (pounds)\nmale weight | (59.9 to 72.1) lb  (pounds)\nsize | large\nlife span | (9 to 12) years\nlitter size | (3 to 8)\nhair length | short\nshedding | moderate\nAKC recognition year | 1904  (113 years ago)\nUKC recognition year | 1948  (69 years ago)\norigin | Germany',
    breedHistory: 'Developed in Germany in the late 19th century from a now extinct breed called the Bullenbeisser\nEnglish Bulldogs mixed into the breed in the 1890s\nName comes from a propensity to fight on while standing on its hind legs\nUsed as guards and couriers by the Germans during World Wars I and II'
  },
  {
    animalType: 'dog',
    breedName: 'Bulldog',
    breedDescription: 'Stout medium-sized dog with characteristic skin folds\nBroad body gives it the impression of power and maturity\nMuzzle is very short\nFeatures folds of skin and wrinkles across the forehead, on the neck, and around the tail\nLoose upper lips hang down past its underbite',
    breedTemperament: 'aggressive towards other dogs  |  intelligent  |  loyal  |  quiet  |  serious  |  social  |  tough',
    breedCharacteristics: 'female height | (12 to 16) inches\nmale height | (12 to 16) inches\nfemale weight | (48.9 to 51.1) lb  (pounds)\nmale weight | (52.9 to 55.1) lb  (pounds)\nsize | medium\nlife span | (8 to 10) years\nlitter size | (4 to 5)\nhair length | short\nshedding | moderate\nAKC recognition year | 1886  (131 years ago)\nUKC recognition year | 1935  (82 years ago)',
    breedHistory: 'Breed descended from dogs used for the sport of bullbaiting in the medieval period\nBred to remove its more aggressive traits in the wake of the ban on bullbaiting in England by the Cruelty to Animals Act of 1835\nBreed popularly used as a symbolic representation of England and Great Britain\nOfficial mascot of the United States Marine Corps\nUsed as a sports mascot for at least 39 American universities',
  },
  {
    animalType: 'dog',
    breedName: 'Chihuahua',
    breedDescription:  'Very small member of the toy breed family\nHead is very round\nMuzzle is proportionally very small\nEars are large and held up, hanging to the sides when the dog is relaxed\nCoat can be either short or long, and wavy or flat when long\nEyes are large and round',
    breedTemperament: 'affectionate  |  aggressive  |  alert  |  courageous  |  gentle  |  intelligent  |  loyal',
    breedCharacteristics: 'female height | (5.99 to 9.02) inches\nmale height | (5.99 to 9.02) inches\nfemale weight | (3 to 6.01) lb  (pounds)\nmale weight | (3 to 6.01) lb  (pounds)\nsize | toy  |  small\nlife span | (14 to 18) years\nlitter size | (1 to 4)\nhair length | long  |  short\nshedding | moderate\nAKC recognition year | 1904  (113 years ago)\norigin | Mexico',
    breedHistory: 'Breed originating in Mexico, probably descended from the Techichi, companion dogs in the Toltec civilization\nRemains found from the time of the Aztecs in the modern-day Chihuahua region of Mexico\nRegarded as sacred by members of the Aztec nobility\nRediscovered centuries after the fall of the Aztec empire in 1850 and introduced to the United States\nOne of several theories suggests this breed originated in Europe, based on a dog in a 1480 fresco by Sandro Botticelli'
  },
  {
    animalType: 'dog',
    breedName: 'Chow Chow',
    breedDescription: 'Large stocky dog with a blue-black tongue\nDensity and amount of fur make it able to survive very cold weather\nFur is thicker and longer around the neck, making a ruff like a lion\'s mane\nGait is stilted because of its nearly straight hind legs',
    breedTemperament: 'aggressive  |  detached  |  independent  |  intelligent  |  loyal  |  quiet  |  willful',
    breedCharacteristics: 'female height | (17 to 20) inches\nmale height | (18 to 22) inches\nfemale weight | (44.9 to 70.1) lb  (pounds)\nmale weight | (44.9 to 70.1) lb  (pounds)\nsize | large\nlife span | (9 to 15) years\nlitter size | (3 to 6)\nhair length | long\nshedding | heavy\nAKC recognition year | 1903  (114 years ago)\nUKC recognition year | 1934  (83 years ago)\norigin | China',
    breedHistory: 'Breed from the cold regions of Mongolia, Siberia, and China\nChinese name means \"puffy-lion dog\"\nAppeared in Han Dynasty imagery, including a relief dated to 105 BC\nCharacteristic blue tongue legendarily acquired by licking up blue drops left from the gods painting the sky\nEnglish name may derive from slang for \"miscellaneous\" ship\'s cargo\nPopular during orientalist fads in late 19th-century Europe and early 20th-century United States\nBreed spread around the world on ships traveling along spice trade routes'    
  },
  {
    animalType: 'dog',
    breedName: 'Corgi',
    breedDescription: 'Small dog with short legs\nTail is long and low-set\nDouble coat is short, thick, straight, and weather-proof\nFur is longer around its neck, at the back of its legs, and the underside of its tail',
    breedTemperament: 'active  |  affectionate  |  alert  |  friendly  |  hardy  |  intelligent  |  loyal  |  social  |  tough',
    breedCharacteristics: 'female height | (10.5 to 12.5) inches\nmale height | (10.5 to 12.5) inches\nfemale weight | (25 to 34.1) lb  (pounds)\nmale weight | (30 to 38.1) lb  (pounds)\nsize | medium\nlife span | (12 to 15) years\nlitter size | (5 to 7)\nhair length | medium\nshedding | light\nAKC recognition year | 1935  (82 years ago)\nUKC recognition year | 1959  (58 years ago)\norigin | United Kingdom',
    breedHistory: 'Cattle herding breed known in Wales since at least 1000 BC\nOriginated with Celts around Cardiganshire, Wales\nOriginal dogs probably crossbred with Spitz dogs brought by Vikings during invasions around 1000 AD\nBreed separated from its close relative, the Pembroke Welsh Corgi, in the 1930s\nName taken from phrase \"cor gi\", translated from Welsh as \"dwarf dog\"'    
  },
  {
    animalType: 'dog',
    breedName: 'Dachshund',
    breedDescription: 'Long and short hound dog\nExists in two sizes, standard or miniature\nCoat may be smooth, long, or wire\nHolds its head high\nBody is muscular\nRound, moderately-long ears flop down',
    breedTemperament: 'affectionate  |  aggressive  |  alert  |  courageous  |  intelligent  |  loyal  |  social  |  vigilant  |  willful',
    breedCharacteristics: 'female height | (4.99 to 11) inches\nmale height | (4.99 to 11) inches\nfemale weight | (16 to 32.1) lb  (pounds)\nmale weight | (16 to 32.1) lb  (pounds)\nsize | toy  |  small\nlife span | (12 to 15) years\nlitter size | (1 to 4)\nhair length | long  |  short\nshedding | moderate\nAKC recognition year | 1885  (132 years ago)\nUKC recognition year | 1993  (24 years ago)\norigin | United Kingdom',
    breedHistory: 'German breed developed for hunting badger\nFirst mentioned by name in the 17th century, may descend from dogs known in ancient Egypt\nBreed has smooth- and long-haired varieties with a third variety, wire-haired, recognized in 1890\nNumbers declined during World War I before being imported into the United States from Germany'
  },
  {
    animalType: 'dog',
    breedName: 'German Shepherd',
    breedDescription: 'Long and short hound dog\nExists in two sizes, standard or miniature\nCoat may be smooth, long, or wire\nHolds its head high\nBody is muscular\nRound, moderately-long ears flop down',
    breedTemperament: 'affectionate  |  aggressive  |  alert  |  courageous  |  intelligent  |  loyal  |  social  |  vigilant  |  willful',
    breedCharacteristics: 'female height | (4.99 to 11) inches\nmale height | (4.99 to 11) inches\nfemale weight | (16 to 32.1) lb  (pounds)\nmale weight | (16 to 32.1) lb  (pounds)\nsize | toy  |  small\nlife span | (12 to 15) years\nlitter size | (1 to 4)\nhair length | long  |  short\nshedding | moderate\nAKC recognition year | 1885  (132 years ago)\nUKC recognition year | 1993  (24 years ago)\norigin | United Kingdom',
    breedHistory: 'German breed developed for hunting badger\nFirst mentioned by name in the 17th century, may descend from dogs known in ancient Egypt\nBreed has smooth- and long-haired varieties with a third variety, wire-haired, recognized in 1890\nNumbers declined during World War I before being imported into the United States from Germany'    
  },
  {
    animalType: 'dog',
    breedName: 'Great Dane',
    breedDescription: 'Giant shorthaired breed of dog\nSize, build, and carriage make it look noble\nHead is broad with a rectangular muzzle\nCoat can be harlequin, solid-colored, mantled, merle, or fawn with black points\nTaller at its withers than its hindquarters',
    breedTemperament: 'active  |  alert  |  detached  |  gentle  |  loyal  |  social',
    breedCharacteristics: 'female height | (28 to 32.1) inches\nmale height | (30 to 34.1) inches\nfemale weight | (100 to 130) lb  (pounds)\nmale weight | (120 to 200) lb  (pounds)\nsize | extra large\nlife span | (6 to 10) years\nlitter size | (5 to 15)\nhair length | short\nshedding | moderate\nAKC recognition year | 1887  (130 years ago)\nUKC recognition year | 1923  (94 years ago)\norigin | Germany',
    breedHistory: 'Developed in Germany as a cross between Mastiffs and Irish Wolfhounds\nBred as war dogs and for hunting large game\nExhibited at the first German dog show in 1863\nAppearances in popular culture include the television cartoon dog, Scooby-Doo, and the comic strip character, Marmaduke'    
  },
  {
    animalType: 'dog',
    breedName: 'Greyhound',
    breedDescription: 'Very fast sighthound and racing dog\nHead and ears are proportionally small\nHead is long, narrow, and tapering, with no stop\nCoat is very short and comes in 30 recognized color options',
    breedTemperament: 'affectionate  |  calm  |  gentle  |  intelligent  |  quiet  |  relaxed  |  responsive  |  social',
    breedCharacteristics: 'female height | (26 to 28) inches\nmale height | (27 to 29) inches\nfemale weight | (59.9 to 65.1) lb  (pounds)\nmale weight | (64.9 to 70.1) lb  (pounds)\nsize | large\nlife span | (10 to 13) years\nlitter size | (6 to 9)\nhair length | short\nshedding | moderate\nAKC recognition year | 1885  (132 years ago)\nUKC recognition year | 1914  (103 years ago)\norigin | United Kingdom',
    breedHistory: 'Breed once thought to derive from ancient Egyptian and Persian hunting dogs\nLikely developed from other ancient European sighthounds\nKnown in England since the 5th century BC\nBred for speed in the hunt, later popular as racing dogs\nOrigins of the name unclear, but does not refer to the color of the coat'     
  },
  {
    animalType: 'dog',
    breedName: 'Hound',
    breedDescription: 'Tall noble-looking hunting dog\nLight but strong in structure\nCoat of short hard fur is usually tricolored with colors ranging between red to yellow, a black mantle, and white \"bracken\" markings\nUpper lips hang down somewhat\nNose has light-colored center strip',
    breedTemperament: 'affectionate  |  hunting  |  serious',
    breedCharacteristics: 'female height | (16 to 21) inches\nmale height | (16 to 21) inches\nfemale weight | (34.9 to 40.1) lb  (pounds)\nmale weight | (34.9 to 40.1) lb  (pounds)\nlife span | (10 to 12) years\nAKC recognition year | (not recognized)\nUKC recognition year | 1996  (21 years ago)',
    breedHistory: 'Breed resulting from combining a variety of regional hound breeds in Germany in the late 19th century\nFirst recognized by the German Kennel Club in 1886\nUsed for hunting and known for its distinct call while on the chase'    
  },
  {
    animalType: 'dog',
    breedName: 'Jack Russell Terrier',
    breedDescription: 'Small and agile working terrier\nDense coat can be smooth or wire and is usually white with brown markings\nHead is tapered, with a well-defined stop\nVery mobile ears may be button or drop\nTail is usually docked and is carried high',
    breedTemperament: 'active  |  affectionate  |  aggressive towards other animals  |  alert  |  courageous  |  feisty  |  friendly  |  fun-loving  |  hardy  |  hunting  |  independent  |  social',
    breedCharacteristics: 'female height | (10 to 12) inches\nmale height | (10 to 12) inches\nfemale weight | (14 to 18) lb  (pounds)\nmale weight | (14 to 18) lb  (pounds)\nsize | toy  |  small\nlife span | (9 to 15) years\nlitter size | (4 to 8)\nhair length | medium\nshedding | moderate\nAKC recognition year | 1997  (20 years ago)\nUKC recognition year | 1991  (26 years ago)\norigin | United States',
    breedHistory: 'Breed developed around Oxford, England by the Reverend John Russell in the early 19th century\nBred for aggressiveness in the hunt from larger Fox Terriers\nSeparated from the Parson Russell Terrier breed in 2003'    
  },
  {
    animalType: 'dog',
    breedName: 'Labrador Retriever',
    breedDescription: 'Medium-large retrieving gundog\nLegs are long in proportion to its heavy body\nShort coat is straight and water-resistant\nOtter-like tail and webbed feet help it swim\nHead is broad, with a somewhat long and wide muzzle\nEars hang down and are pendant in shape',
    breedTemperament: 'active  |  aggressive  |  alert  |  cheerful  |  friendly  |  gentle  |  hunting  |  independent  |  intelligent  |  loyal  |  responsive  |  serious  |  shy  |  social  |  tough',
    breedCharacteristics: 'female height | (21 to 24) inches\nmale height | (22 to 25) inches\nfemale weight | (54.9 to 70.1) lb  (pounds)\nmale weight | (64.9 to 80.1) lb  (pounds)\nsize | large\nlife span | (10 to 12) years\nlitter size | (7 to 12)\nhair length | short\nshedding | moderate\nAKC recognition year | 1917  (100 years ago)\nUKC recognition year | 1947  (70 years ago)\norigin | Canada',
    breedHistory: 'Breed derived from the now extinct St. John\'s Dogs used by fishermen in Newfoundland since the 16th century\nResulted from St. John\'s Dogs taken to England and trained as gundogs in the late 19th century\nIntelligent breed frequently used in the military and as service and rescue dogs\nRecognized in a yellow-coated variety in 1899 and chocolate-coated in the 1930s'
  },
  {
    animalType: 'dog',
    breedName: 'Mastiff',
    breedDescription: 'Large, muscular, heavily-boned, robust dog\nSlightly longer than tall\nBroad head with wrinkles above its eyes\nEars are wide set and proportionally small\nFawn-colored coat always has black on the nose, muzzle, ears, and around the eyes',
    breedTemperament: 'active  |  alert  |  courageous  |  gentle  |  intelligent  |  loyal  |  quiet  |  serious  |  social  |  tough',
    breedCharacteristics: 'female height | (27.5 to 37.1) inches\nmale height | (30 to 34.1) inches\nfemale weight | (150 to 250) lb  (pounds)\nmale weight | (160 to 250) lb  (pounds)\nsize | extra large\nlife span | (7 to 14) years\nlitter size | (2 to 5)\nhair length | short\nshedding | heavy shed\nAKC recognition year | 1885  (132 years ago)\norigin | United Kingdom',
    breedHistory: 'Large English breed descended from ancient European war dogs\nName thought to derive from an Anglo-Saxon word meaning \"powerful\" or an Old French word meaning \"tame\"\nFrequently used for blood sports such as dog fighting, bullbaiting and bearbaiting\nLess popular in England after the 1835 ban on animal blood sports\nBreed numbers revived in North America beginning in 1918'
  },
  {
    animalType: 'dog',
    breedName: 'Pit Bull',
    breedDescription: 'Strong mid-size terrier\nCoat is short, stiff, and glossy\nBlock-like head with wrinkles on top and powerful jaws\nShort tail is not usually docked, but ears are often cropped',
    breedTemperament: 'active  |  aggressive towards other animals  |  friendly  |  gentle  |  goofy  |  intelligent  |  tough',
    breedCharacteristics: 'female height | (14 to 24) inches\nmale height | (16 to 24) inches\nfemale weight | (30 to 60.1) lb  (pounds)\nmale weight | (34.9 to 65.1) lb  (pounds)\nsize | medium  |  large\nlife span | (12 to 15) years\nlitter size | (6 to 10)\nhair length | short\nshedding | moderate\nAKC recognition year | (not recognized)\nUKC recognition year | 1898  (119 years ago)',
    breedHistory: 'Exported to the United States from England and Ireland in the 19th century as a mix of existing pit bull and terrier breeds\nFarm work dogs frequently also trained for fighting\nNot originally recognized by the American Kennel Club, leading to founding of the United Kennel Club in 1898\nSometimes regarded as a dangerous breed due to its fighting history\nSelling this breed is banned in some places, including the United Kingdom'
  },
  {
    animalType: 'dog',
    breedName: 'Poodle',
    breedDescription: 'Medium to large in size gundog\nCoat is dense and curly, and can be groomed in many different ways\nHead is long and lean\nLong drop ears are well-feathered\nLight in structure, weighing less than other dogs of similar size\nTail is often docked to about half its original length\nConsidered non-shedding and odorless',
    breedTemperament: 'active  |  alert  |  gentle  |  hunting  |  independent  |  intelligent  |  lively  |  loyal  |  quiet  |  responsive  |  serious  |  social  |  tough',
    breedCharacteristics: 'female height | (15 to 24) inches\nmale height | 15 inches\nfemale weight | (44.9 to 60.1) lb  (pounds)\nmale weight | (44.9 to 70.1) lb  (pounds)\nsize | large\nlife span | (12 to 15) years\nlitter size | (3 to 8)\nhair length | short\nshedding | light\nAKC recognition year | 1887  (130 years ago)',
    breedHistory: 'Oldest of three poodle varieties known in Europe since around 1600\nProbably originated in Germany, though the breed was standardized in France\nName comes from the German word meaning \"to splash in water\"\nUsed as a gundog and water fowl retriever'
  },
  {
    animalType: 'dog',
    breedName: 'Pug',
    breedDescription: 'Compact and heavyset member of the Toy group\nHead is large and round\nFace is flat in profile, with a short muzzle and prominent eyes\nTail is set high and may have one or two tight curls\nEars, muzzle mask, and trace are black\nEars are thin and small, and may be rose or button in shape',
    breedTemperament: 'aggressive  |  alert  |  cheerful  |  friendly  |  gentle  |  independent  |  quiet  |  willful',
    breedCharacteristics: 'female height | (10 to 14) inches\nmale height | (12 to 14) inches\nfemale weight | (14 to 18) lb  (pounds)\nmale weight | (14 to 18) lb  (pounds)\nsize | toy  |  small\nlife span | (12 to 15) years\nlitter size | (4 to 8)\nhair length | short\nshedding | heavy\nAKC recognition year | 1885  (132 years ago)\nUKC recognition year | 1918  (99 years ago)\norigin | China',
    breedHistory: 'Small Chinese breed mentioned by Confucius in 551 BC, later spreading to Buddhist monasteries in Tibet\nTaken to Europe in the 16th century by the Dutch East India Company\nBreed became the official dog of the House of Orange in 1572 after one belonging to William, Prince of Orange, barked a lifesaving alert\nPopularized in the 1790s by Josephine, wife of Napoleon, whose dog carried messages between the couple\nBred by Queen Victoria of England in the 19th century'
  },
  {
    animalType: 'dog',
    breedName: 'Shar Pei',
    breedDescription: 'Medium-sized dog with wrinkled, loose skin\nWrinkles become less prominent with age\nMuzzle is short and wide like that of a hippopotamus\nTail is very high set, tapered, and curls to one side over its back\nTongue is blue-black\nCoat may be a horse-coat, brush-coat, or a rare bear-coat type',
    breedTemperament: 'aggressive  |  alert  |  aloof with strangers  |  gentle  |  independent  |  intelligent  |  loyal  |  quiet  |  social',
    breedCharacteristics: 'female height | (18 to 20) inches\nmale height | (18 to 20) inches\nfemale weight | (44.9 to 60.1) lb  (pounds)\nmale weight | (44.9 to 60.1) lb  (pounds)\nsize | medium\nlife span | (7 to 12) years\nlitter size | (4 to 6)\nhair length | short\nshedding | moderate\nAKC recognition year | 1992  (25 years ago)\nUKC recognition year | 1985  (32 years ago)\norigin | China',
    breedHistory: 'Working breed kept for centuries by peasants in the southern Chinese province of Guangdong\nName comes from a Cantonese phrase translated as \"sand skin\"\nDepicted on pottery as far back as the Han Dynasty around 206 BC\nSometimes used in the past for pit fighting\nNearly wiped out during the Communist Revolution in China\nSeveral surviving dogs were smuggled to the United States by Hong Kong businessman Matgo Law in the 1970s'
  },
  {
    animalType: 'dog',
    breedName: 'Shih Tzu',
    breedDescription: 'Small and compact companion dog\nCoat is silky and profuse, with a long outer layer\nUpward-growing hair on its nasal bridge, plus its beard and mustache, give it a \"chrysanthemum\" look\nHead is round, with a short and square muzzle\nLarge hanging ears have long straight hair that reaches past its shoulders\nCarries its long tail over its back, level with the top of its head\nCoat colors can be solid, or combinations such as white and brown, gold with black mask, or brindle',
    breedTemperament: 'active  |  affectionate  |  alert  |  cheerful  |  friendly  |  gentle  |  hardy  |  lively  |  loyal  |  quiet  |  serious  |  tough',
    breedCharacteristics: 'female height | (7.98 to 11) inches\nmale height | (7.98 to 11) inches\nfemale weight | (8.98 to 16) lb  (pounds)\nmale weight | (8.98 to 16) lb  (pounds)\nsize | toy  |  small\nlife span | (12 to 18) years\nlitter size | (1 to 5)\nhair length | long\nshedding | light\nAKC recognition year | 1969  (48 years ago)\nUKC recognition year | 1966  (51 years ago)\norigin | China',
    breedHistory: 'Ancient breed originating in Tibet\nGiven as gifts to Chinese emperors during the 17th century\nName means \"lion dog\" in Chinese\nDog presented to Queen Elizabeth in the 1930s, popularizing the breed in England\nThought to result from crossing Pekingese and Lhasa Apso breeds'
  },
  {
    animalType: 'cat',
    breedName: 'American Shorthair',
    breedDescription: 'Considered medium in size, proportions, musculature, and boning\nCoat is short, hard, smooth, dense, and requires almost no grooming\nAdapts to a wide range of living situations\nMatures fully at around three or four years of age',
    breedTemperament: 'active  |  curious  |  gentle  |  intelligent  |  playful  |  tolerant',
    breedCharacteristics: 'size | medium  |  large\nweight | (8 to 15) lb  (pounds)\nhair length | short\ngrooming | moderate\norigin | United States',
    breedHistory: 'Developed from cats used to catch mice on ships carrying European settlers to North America\nSelective breeding in the United States in the early 20th century emphasized the desirable characteristics of the breed'
  },
  {
    animalType: 'cat',
    breedName: 'Bombay',
    breedDescription: 'Burmese-type medium-sized cat that is always black, including its paw pads and nose\nShort-haired with a close and shiny coat that sheds little\nEyes are large and wide-set\nMuscular, making them heavier than they look',
    breedTemperament: 'affectionate  |  gentle  |  inquisitive  |  intelligent  |  playful  |  social',
    breedCharacteristics: 'type of breed | hybrid\nsize | medium\nweight | (6 to 12) lb  (pounds)\nhair length | short\nshedding | minimal\ngrooming | minimal\norigin | Thailand',
    breedHistory: 'Developed in the 1960s and named for the city of Bombay due to its intended resemblance to the black leopards of India\nResulted from combining American Shorthairs with black fur with Burmese cats'
  },
  {
    animalType: 'cat',
    breedName: 'Maine Coon',
    breedDescription: 'Large cat regarded as having a somewhat wild and rugged appearance\nLonghaired or semi-longhaired, with a shiny, water-resistant coat\nFur is longer around its neck, on its stomach, and on its hind legs\nEyes are large and round, set at an angle',
    breedTemperament: 'active  |  affectionate  |  docile  |  gentle  |  independent  |  lively  |  loyal  |  not dependent  |  playful  |  relaxed',
    breedCharacteristics: 'type of breed | natural\nsize | large\nweight | (9 to 22) lb  (pounds)\nhair length | long\nshedding | minimal\ngrooming | moderate\norigin | United States',
    breedHistory: 'Breed long found in the northeastern United States, sometimes fancifully claimed to descend from cats sent by Marie Antoinette\nProbably resulted from mixtures of domestic shorthaired cats with longhaired cats brought to New England by sailors\nPopular as a show cat in the late 19th century, named as the State Cat of Maine in 1985'
  },
  {
    animalType: 'cat',
    breedName: 'Manx',
    breedDescription:'Round cat that is often born tailless\nFur is short and dense, with harder guard hairs that give a glossy look\nTail can be entirely missing to normal length\nLong hind legs give it a hopping gait',
    breedTemperament: 'agile  |  calm  |  docile  |  gentle  |  intelligent  |  loyal  |  playful  |  social  |  strong',
    breedCharacteristics: 'type of breed | mutation\nsize | medium\nweight | (7.7 to 12) lb  (pounds)\nhair length | long  |  medium  |  short\nshedding | minimal\ngrooming | minimal\norigin | Isle of Man',
    breedHistory: 'Originated before 1750 on the Isle of Man and also known as the Stubbin, for their distinctive lack of a tail\nShown beginning in the late 19th century and became the subject of many folktales about its origins and appearance'
  },
  {
    animalType: 'cat',
    breedName: 'Oriental',
    breedDescription: 'Member of the Siamese group of breeds with a semi-long coat\nLong and thin in its body, head, feet, and tail\nHead is wedge-shaped, straight in profile, and features ears and eyes set at an angle\nFine-boned but muscular',
    breedTemperament: 'curious  |  inquisitive  |  intelligent  |  interactive  |  lively  |  athletic  |  social  |  strong',
    breedCharacteristics: 'type of breed | natural\nsize | large\nweight | (10 to 13) lb  (pounds)\nhair length | long\nshedding | minimal\ngrooming | minimal\norigin | United States',
    breedHistory: 'First bred in England beginning in the 1950s by mixing Siamese with various domestic cats including British Shorthairs\nKnown until 2002 as the British Angora'
  },
  {
    animalType: 'cat',
    breedName: 'Persian',
    description: 'Medium or large in size cat with a long coat and a round face\nCoat may be long enough to reach the floor, and can be silky or cottony in texture, depending on the color\nHead is round, with a short muzzle\nShort and square in shape, with a muscular build',
    breedTemperament: 'affectionate  |  calm  |  docile  |  gentle  |  independent  |  intelligent  |  playful  |  relaxed  |  shy  |  sweet',
    breedCharacteristics: 'type of breed | natural\nsize | medium  |  large\nweight | (8 to 15) lb  (pounds)\nhair length | long\nshedding | constant\ngrooming | frequent\norigin | Iranian Plateau',
    breedHistory: 'Old breed first documented in the western world by an Italian traveler who brought them back from Persia around 1620\nOriginal cats from Persia and Afghanistan interbred with various longhaired varieties for centuries\nFirst shown at the Crystal Palace cat show in London in 1871 and imported to North America beginning around 1900'
  },
  {
    animalType: 'cat',
    breedName: 'Russian Blue',
    breedCharacteristics: 'Medium-sized cat whose short coat is always silver-tipped blue\nFur is dense and stands away from its body, appearing to shimmer in movement\nEars are proportionally large and flared\nAppears to smile\nFine boned, with long legs',
    breedTemperament: 'active  |  affectionate  |  agile  |  calm  |  gentle  |  graceful  |  intelligent  |  loyal  |  playful  |  shy',
    breedCharacteristics: 'type of breed | natural\nsize | medium\nweight | (5.5 to 12) lb  (pounds)\nhair length | short\nshedding | minimal\ngrooming | minimal\norigin | Russia',
    breedHistory: 'Breed brought from the area of Arkhangel in northwestern Russia to England in the 1860s, and shown at the Crystal Palace in 1875\nReduced in numbers after World War II when the breed was revived by mixing with Siamese or British Shorthairs with blue coloration'
  },
  {
    animalType: 'cat',
    breedName: 'Siamese',
    breedDescription: 'Shorthair cat with moderate proportions and angles\nFur has a colorpoint pattern, with dark extremities and a light body\nForehead is wide, flat, and rounded on the sides, along with its cheeks and muzzle',
    breedTemperament: 'affectionate  |  active  |  curious  |  dependent  |  independent  |  intelligent',
    breedCharacteristics: 'size | medium  |  large\nweight | (7.5 to 11) lb  (pounds)\nhair length | short\nshedding | minimal\ngrooming | minimal\norigin | Thailand',
    breedHistory: 'Known in Thailand for centuries as the Wichien-Maat, imported by the British to Europe in the 19th century\nLikely first brought to the United States as a gift from the American Consul in Bangkok to President Rutherford B. Hayes\nBred for show in Great Britain from the beginning of the 20th century'
  },
  {
    animalType: 'cat',
    breedName: 'Turkish Van',
    breedDescription: 'Large cat whose waterproof coat allows it to swim and play in the water\nSemi-longhair coat is mostly white, with patches of color on its head and tail\nCoat is longer in the winter, including between its paw pads\nEyes are often non-matching in color\nHolds its plumed tail upright when running\nMay not reach full maturity until it is three to five years old',
    breedTemperament: 'active  |  affectionate  |  busy  |  curious  |  intelligent  |  loyal  |  playful',
    breedCharacteristics: 'type of breed | natural\nsize | large\nweight | (7 to 19) lb  (pounds)\nhair length | long  |  medium\nshedding | seasonal\ngrooming | minimal\norigin | Turkey',
    breedHistory: 'Breed native to the mountainous region of eastern Turkey, though further developed in England after the 1950s\nRare breed certified for show by The International Cat Association in 1979'
  }
];

db.BreedFact
.remove({})
.then(() => db.BreedFact.collection.insertMany(breedFact))
.then(data => {
  console.log(data.insertedIds.length + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});