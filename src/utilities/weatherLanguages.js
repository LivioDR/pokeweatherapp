const weatherLanguages = {
    "ar": {
      "Clear sky": "سماء صافية",
      "Mainly clear": "واضحة بشكل رئيسي",
      "Partly cloudy": "غائم جزئيا",
      "Overcast": "غائم",
      "Fog": "ضباب",
      "Depositing rime fog": "ضباب ترسبي",
      "Light drizzle": "نقاط مطرية خفيفة",
      "Moderate drizzle": "نقاط مطرية معتدلة",
      "Dense intensity drizzle": "نقاط مطرية كثيفة الكثافة",
      "Freezing Drizzle: Light intensity": "نقاط مطرية تتجمد: خفيفة الكثافة",
      "Freezing Drizzle: dense intensity": "نقاط مطرية تتجمد: كثيفة الكثافة",
      "Slight rain": "أمطار خفيفة",
      "Moderate rain": "أمطار متوسطة",
      "Heavy intensity rain": "أمطار غزيرة الكثافة",
      "Freezing Rain: Light intensity": "أمطار متجمدة: خفيفة الكثافة",
      "Freezing Rain: heavy intensity": "أمطار متجمدة: غزيرة الكثافة",
      "Snow fall: slight intensity": "تساقط الثلوج: خفيف الكثافة",
      "Snow fall: moderate intensity": "تساقط الثلوج: متوسط الكثافة",
      "Snow fall: heavy intensity": "تساقط الثلوج: ثقيل الكثافة",
      "Snow grains": "حبيبات الثلوج",
      "Rain showers: Slight": "هطول الأمطار: خفيف",
      "Rain showers: moderate": "هطول الأمطار: معتدل",
      "Rain showers: violent": "هطول الأمطار: عنيف",
      "Snow showers: slight": "هطول الثلوج: خفيف",
      "Snow showers: heavy": "هطول الثلوج: ثقيل",
      "Thunderstorm: Slight or moderate": "عاصفة رعدية: خفيفة أو معتدلة",
      "Thunderstorm with slight hail": "عاصفة رعدية مع برد خفيف",
      "Thunderstorm with heavy hail": "عاصفة رعدية مع برد ثقيل"
    },
    "bg": {
      "Clear sky": "Ясно небе",
      "Mainly clear": "Предимно ясно",
      "Partly cloudy": "Частично облачно",
      "Overcast": "Покрито",
      "Fog": "Мъгла",
      "Depositing rime fog": "Осаждане на инеева мъгла",
      "Light drizzle": "Лека мъгла",
      "Moderate drizzle": "Умерена мъгла",
      "Dense intensity drizzle": "Плътна мъгла",
      "Freezing Drizzle: Light intensity": "Замръзваща мъгла: Лека интензивност",
      "Freezing Drizzle: dense intensity": "Замръзваща мъгла: Плътна интензивност",
      "Slight rain": "Лек дъжд",
      "Moderate rain": "Умерен дъжд",
      "Heavy intensity rain": "Силен дъжд",
      "Freezing Rain: Light intensity": "Замръзващ дъжд: Лека интензивност",
      "Freezing Rain: heavy intensity": "Замръзващ дъжд: Силна интензивност",
      "Snow fall: slight intensity": "Лек сняг",
      "Snow fall: moderate intensity": "Умерен сняг",
      "Snow fall: heavy intensity": "Силен сняг",
      "Snow grains": "Снежна къпка",
      "Rain showers: Slight": "Проливни дъждове: Леки",
      "Rain showers: moderate": "Проливни дъждове: Умерени",
      "Rain showers: violent": "Проливни дъждове: Яки",
      "Snow showers: slight": "Проливни снеговалежи: Леки",
      "Snow showers: heavy": "Проливни снеговалежи: Силни",
      "Thunderstorm: Slight or moderate": "Буря: Лека или умерена",
      "Thunderstorm with slight hail": "Буря с лек градушка",
      "Thunderstorm with heavy hail": "Буря със силен градушка"
    },
    "ca": {
      "Clear sky": "Cel clar",
      "Mainly clear": "Principalment clar",
      "Partly cloudy": "Parcialment nuvolat",
      "Overcast": "Tapiat",
      "Fog": "Boira",
      "Depositing rime fog": "Boira de ritme de dipòsit",
      "Light drizzle": "Lliscament lleuger",
      "Moderate drizzle": "Lliscament moderat",
      "Dense intensity drizzle": "Lliscament d'intensitat densa",
      "Freezing Drizzle: Light intensity": "Lliscament de congelació: intensitat lleugera",
      "Freezing Drizzle: dense intensity": "Lliscament de congelació: intensitat densa",
      "Slight rain": "Pluja lleugera",
      "Moderate rain": "Pluja moderada",
      "Heavy intensity rain": "Pluja intensa",
      "Freezing Rain: Light intensity": "Pluja congelada: intensitat lleugera",
      "Freezing Rain: heavy intensity": "Pluja congelada: intensitat intensa",
      "Snow fall: slight intensity": "Neu lleugera",
      "Snow fall: moderate intensity": "Neu moderada",
      "Snow fall: heavy intensity": "Neu intensa",
      "Snow grains": "Grans de neu",
      "Rain showers: Slight": "Amaneceres de pluja: lleugers",
      "Rain showers: moderate": "Amaneceres de pluja: moderats",
      "Rain showers: violent": "Amaneceres de pluja: violents",
      "Snow showers: slight": "Dues de neu: lleugers",
      "Snow showers: heavy": "Dues de neu: pesats",
      "Thunderstorm: Slight or moderate": "Tormenta elèctrica: lleugera o moderada",
      "Thunderstorm with slight hail": "Tormenta elèctrica amb pedra lleugera",
      "Thunderstorm with heavy hail": "Tormenta elèctrica amb pedra pesada"
    },
    "de": {
      "Clear sky": "Klarer Himmel",
      "Mainly clear": "Hauptsächlich klar",
      "Partly cloudy": "Teilweise wolkig",
      "Overcast": "Bewölkt",
      "Fog": "Nebel",
      "Depositing rime fog": "Nebel mit Ablagerungen",
      "Light drizzle": "Leichter Nieselregen",
      "Moderate drizzle": "Mäßiger Nieselregen",
      "Dense intensity drizzle": "Dichter Nieselregen",
      "Freezing Drizzle: Light intensity": "Gefrierender Nieselregen: Leichte Intensität",
      "Freezing Drizzle: dense intensity": "Gefrierender Nieselregen: Dichte Intensität",
      "Slight rain": "Leichter Regen",
      "Moderate rain": "Mäßiger Regen",
      "Heavy intensity rain": "Starker Regen",
      "Freezing Rain: Light intensity": "Gefrierender Regen: Leichte Intensität",
      "Freezing Rain: heavy intensity": "Gefrierender Regen: Starke Intensität",
      "Snow fall: slight intensity": "Leichter Schneefall",
      "Snow fall: moderate intensity": "Mäßiger Schneefall",
      "Snow fall: heavy intensity": "Starker Schneefall",
      "Snow grains": "Schneekörner",
      "Rain showers: Slight": "Regenschauer: Leicht",
      "Rain showers: moderate": "Regenschauer: Mäßig",
      "Rain showers: violent": "Regenschauer: Gewaltig",
      "Snow showers: slight": "Schneeschauer: Leicht",
      "Snow showers: heavy": "Schneeschauer: Schwer",
      "Thunderstorm: Slight or moderate": "Gewitter: Leicht oder mäßig",
      "Thunderstorm with slight hail": "Gewitter mit leichtem Hagel",
      "Thunderstorm with heavy hail": "Gewitter mit schwerem Hagel"
    },
    "el": {
      "Clear sky": "Καθαρός ουρανός",
      "Mainly clear": "Κυρίως καθαρό",
      "Partly cloudy": "Μερικώς συννεφιασμένο",
      "Overcast": "Αρκετά συννεφιασμένο",
      "Fog": "Ομίχλη",
      "Depositing rime fog": "Ομίχλη με παγωμένη υδρατμό",
      "Light drizzle": "Ελαφριά βροχή",
      "Moderate drizzle": "Μέτρια βροχή",
      "Dense intensity drizzle": "Πυκνή ένταση βροχής",
      "Freezing Drizzle: Light intensity": "Παγωμένη βροχή: Ελαφριά ένταση",
      "Freezing Drizzle: dense intensity": "Παγωμένη βροχή: Πυκνή ένταση",
      "Slight rain": "Ελαφριά βροχή",
      "Moderate rain": "Μέτρια βροχή",
      "Heavy intensity rain": "Βροχή μεγάλης έντασης",
      "Freezing Rain: Light intensity": "Παγωμένη βροχή: Ελαφριά ένταση",
      "Freezing Rain: heavy intensity": "Παγωμένη βροχή: Βαριά ένταση",
      "Snow fall: slight intensity": "Πολύ αδύνατη χιονόπτωση",
      "Snow fall: moderate intensity": "Μέτρια ένταση χιονόπτωσης",
      "Snow fall: heavy intensity": "Έντονη χιονόπτωση",
      "Snow grains": "Κόκκοι χιονιού",
      "Rain showers: Slight": "Νεροποντή: Ελαφριά",
      "Rain showers: moderate": "Νεροποντή: Μέτρια",
      "Rain showers: violent": "Νεροποντή: Βίαιη",
      "Snow showers: slight": "Χιονοπτώσεις: Ελαφριά",
      "Snow showers: heavy": "Χιονοπτώσεις: Βαριές",
      "Thunderstorm: Slight or moderate": "Καταιγίδα: Ελαφριά ή μέτρια",
      "Thunderstorm with slight hail": "Καταιγίδα με ελαφριά χαλαζόπτωση",
      "Thunderstorm with heavy hail": "Καταιγίδα με βαριά χαλαζόπτωση"
    },
    "en": {
      "Clear sky": "Clear sky",
      "Mainly clear": "Mainly clear",
      "Partly cloudy": "Partly cloudy",
      "Overcast": "Overcast",
      "Fog": "Fog",
      "Depositing rime fog": "Depositing rime fog",
      "Light drizzle": "Light drizzle",
      "Moderate drizzle": "Moderate drizzle",
      "Dense intensity drizzle": "Dense intensity drizzle",
      "Freezing Drizzle: Light intensity": "Freezing Drizzle: Light intensity",
      "Freezing Drizzle: dense intensity": "Freezing Drizzle: dense intensity",
      "Slight rain": "Slight rain",
      "Moderate rain": "Moderate rain",
      "Heavy intensity rain": "Heavy intensity rain",
      "Freezing Rain: Light intensity": "Freezing Rain: Light intensity",
      "Freezing Rain: heavy intensity": "Freezing Rain: heavy intensity",
      "Snow fall: slight intensity": "Snow fall: slight intensity",
      "Snow fall: moderate intensity": "Snow fall: moderate intensity",
      "Snow fall: heavy intensity": "Snow fall: heavy intensity",
      "Snow grains": "Snow grains",
      "Rain showers: Slight": "Rain showers: Slight",
      "Rain showers: moderate": "Rain showers: moderate",
      "Rain showers: violent": "Rain showers: violent",
      "Snow showers: slight": "Snow showers: slight",
      "Snow showers: heavy": "Snow showers: heavy",
      "Thunderstorm: Slight or moderate": "Thunderstorm: Slight or moderate",
      "Thunderstorm with slight hail": "Thunderstorm with slight hail",
      "Thunderstorm with heavy hail": "Thunderstorm with heavy hail"
    },
    "es": {
        "Clear sky": "Cielo despejado",
        "Mainly clear": "Mayormente despejado",
        "Partly cloudy": "Parcialmente nublado",
        "Overcast": "Nublado",
        "Fog": "Niebla",
        "Depositing rime fog": "Niebla con escarcha",
        "Light drizzle": "Llovizna ligera",
        "Moderate drizzle": "Llovizna moderada",
        "Dense intensity drizzle": "Llovizna intensa",
        "Freezing Drizzle: Light intensity": "Llovizna helada: Intensidad ligera",
        "Freezing Drizzle: dense intensity": "Llovizna helada: Intensidad densa",
        "Slight rain": "Lluvia ligera",
        "Moderate rain": "Lluvia moderada",
        "Heavy intensity rain": "Lluvia intensa",
        "Freezing Rain: Light intensity": "Lluvia helada: Intensidad ligera",
        "Freezing Rain: heavy intensity": "Lluvia helada: Intensidad fuerte",
        "Snow fall: slight intensity": "Nevada ligera",
        "Snow fall: moderate intensity": "Nevada moderada",
        "Snow fall: heavy intensity": "Nevada intensa",
        "Snow grains": "Copos de nieve",
        "Rain showers: Slight": "Chubascos: Ligeros",
        "Rain showers: moderate": "Chubascos: Moderados",
        "Rain showers: violent": "Chubascos: Violentos",
        "Snow showers: slight": "Chubascos de nieve: Ligeros",
        "Snow showers: heavy": "Chubascos de nieve: Fuertes",
        "Thunderstorm: Slight or moderate": "Tormenta: Ligera o moderada",
        "Thunderstorm with slight hail": "Tormenta con granizo ligero",
        "Thunderstorm with heavy hail": "Tormenta con granizo fuerte"
    },
    "fa": {
      "Clear sky": "آسمان صاف",
      "Mainly clear": "اصلیا صاف",
      "Partly cloudy": "تا حدی ابری",
      "Overcast": "ابری",
      "Fog": "مه",
      "Depositing rime fog": "مه رویایی",
      "Light drizzle": "نم نم باران سبک",
      "Moderate drizzle": "نم نم باران متوسط",
      "Dense intensity drizzle": "نم نم باران شدید",
      "Freezing Drizzle: Light intensity": "نم نم باران منجمد: شدت نور",
      "Freezing Drizzle: dense intensity": "نم نم باران منجمد: شدت متراکم",
      "Slight rain": "باران سبک",
      "Moderate rain": "باران متوسط",
      "Heavy intensity rain": "باران سنگین",
      "Freezing Rain: Light intensity": "باران منجمد: شدت نور",
      "Freezing Rain: heavy intensity": "باران منجمد: شدت سنگین",
      "Snow fall: slight intensity": "برف: شدت خفیف",
      "Snow fall: moderate intensity": "برف: شدت متوسط",
      "Snow fall: heavy intensity": "برف: شدت سنگین",
      "Snow grains": "دانه های برف",
      "Rain showers: Slight": "باران: شدت نور",
      "Rain showers: moderate": "باران: شدت متوسط",
      "Rain showers: violent": "باران: شدت خشونت",
      "Snow showers: slight": "برف: شدت نور",
      "Snow showers: heavy": "برف: شدت سنگین",
      "Thunderstorm: Slight or moderate": "طوفان: شدت نور یا متوسط",
      "Thunderstorm with slight hail": "طوفان با تگرگ کم",
      "Thunderstorm with heavy hail": "طوفان با تگرگ سنگین"
    },
    "fi": {
      "Clear sky": "Selkeä taivas",
      "Mainly clear": "Pääasiassa selkeä",
      "Partly cloudy": "Osittain pilvinen",
      "Overcast": "Pilvinen",
      "Fog": "Sumu",
      "Depositing rime fog": "Kosteus laskeutuva sumu",
      "Light drizzle": "Kevyt tihkusade",
      "Moderate drizzle": "Kohtalainen tihkusade",
      "Dense intensity drizzle": "Tiheä intensiteetti tihkusade",
      "Freezing Drizzle: Light intensity": "Jäätyvä tihkusade: kevyt intensiteetti",
      "Freezing Drizzle: dense intensity": "Jäätyvä tihkusade: tiheä intensiteetti",
      "Slight rain": "Vähäinen sade",
      "Moderate rain": "Kohtalainen sade",
      "Heavy intensity rain": "Voimakas sade",
      "Freezing Rain: Light intensity": "Jäätyvä sade: kevyt intensiteetti",
      "Freezing Rain: heavy intensity": "Jäätyvä sade: voimakas intensiteetti",
      "Snow fall: slight intensity": "Pieni lumi",
      "Snow fall: moderate intensity": "Kohtalainen lumi",
      "Snow fall: heavy intensity": "Voimakas lumi",
      "Snow grains": "Lumijyvät",
      "Rain showers: Slight": "Sateet: lievä",
      "Rain showers: moderate": "Sateet: kohtalainen",
      "Rain showers: violent": "Sateet: väkivaltainen",
      "Snow showers: slight": "Lumisateet: lievä",
      "Snow showers: heavy": "Lumisateet: raskas",
      "Thunderstorm: Slight or moderate": "Ukkonen: lievä tai kohtalainen",
      "Thunderstorm with slight hail": "Ukkonen ja pieni rakeet",
      "Thunderstorm with heavy hail": "Ukkonen ja suuret rakeet"
    },
    "fr": {
      "Clear sky": "Ciel dégagé",
      "Mainly clear": "Principalement clair",
      "Partly cloudy": "Partiellement nuageux",
      "Overcast": "Couvert",
      "Fog": "Brouillard",
      "Depositing rime fog": "Brouillard de rime de dépôt",
      "Light drizzle": "Bruine légère",
      "Moderate drizzle": "Bruine modérée",
      "Dense intensity drizzle": "Bruine d'intensité dense",
      "Freezing Drizzle: Light intensity": "Bruine verglaçante: Légère intensité",
      "Freezing Drizzle: dense intensity": "Bruine verglaçante: Intensité dense",
      "Slight rain": "Légère pluie",
      "Moderate rain": "Pluie modérée",
      "Heavy intensity rain": "Pluie forte",
      "Freezing Rain: Light intensity": "Pluie verglaçante: Légère intensité",
      "Freezing Rain: heavy intensity": "Pluie verglaçante: Intensité forte",
      "Snow fall: slight intensity": "Chute de neige: Légère intensité",
      "Snow fall: moderate intensity": "Chute de neige: Intensité modérée",
      "Snow fall: heavy intensity": "Chute de neige: Intensité forte",
      "Snow grains": "Grains de neige",
      "Rain showers: Slight": "Averses de pluie: Légères",
      "Rain showers: moderate": "Averses de pluie: Modérées",
      "Rain showers: violent": "Averses de pluie: Violentes",
      "Snow showers: slight": "Averses de neige: Légères",
      "Snow showers: heavy": "Averses de neige: Fortes",
      "Thunderstorm: Slight or moderate": "Orage: Léger ou modéré",
      "Thunderstorm with slight hail": "Orage avec grêle légère",
      "Thunderstorm with heavy hail": "Orage avec grêle importante"
    },
    "gl": {
      "Clear sky": "Ceo claro",
      "Mainly clear": "Principalmente claro",
      "Partly cloudy": "Parcialmente nubrado",
      "Overcast": "Encoberto",
      "Fog": "Neboeiro",
      "Depositing rime fog": "Neboeiro depositando neve rime",
      "Light drizzle": "Sirimiri leve",
      "Moderate drizzle": "Sirimiri moderado",
      "Dense intensity drizzle": "Sirimiri de intensidade densa",
      "Freezing Drizzle: Light intensity": "Sirimiri conxelante: intensidade leve",
      "Freezing Drizzle: dense intensity": "Sirimiri conxelante: intensidade densa",
      "Slight rain": "Chuvia lixeira",
      "Moderate rain": "Chuvia moderada",
      "Heavy intensity rain": "Chuvia intensa",
      "Freezing Rain: Light intensity": "Chuvia conxelante: intensidade leve",
      "Freezing Rain: heavy intensity": "Chuvia conxelante: intensidade intensa",
      "Snow fall: slight intensity": "Neve lixeira",
      "Snow fall: moderate intensity": "Neve moderada",
      "Snow fall: heavy intensity": "Neve intensa",
      "Snow grains": "Grãos de neve",
      "Rain showers: Slight": "Aguaceiros: ligeiros",
      "Rain showers: moderate": "Aguaceiros: moderados",
      "Rain showers: violent": "Aguaceiros: violentos",
      "Snow showers: slight": "Aguaceiros de neve: ligeiros",
      "Snow showers: heavy": "Aguaceiros de neve: intensos",
      "Thunderstorm: Slight or moderate": "Tormenta: ligeira ou moderada",
      "Thunderstorm with slight hail": "Tormenta con granizo ligeiro",
      "Thunderstorm with heavy hail": "Tormenta con granizo forte"
    },
    "he": {
      "Clear sky": "שמיים בהירים",
      "Mainly clear": "בעיקר בהיר",
      "Partly cloudy": "חלקית מעונן",
      "Overcast": "מכוסה",
      "Fog": "ערפל",
      "Depositing rime fog": "ערפל עם משאב רוק",
      "Light drizzle": "רדיד קל",
      "Moderate drizzle": "רדיד בינוני",
      "Dense intensity drizzle": "רדיד אינטנסיבי",
      "Freezing Drizzle: Light intensity": "רדיד קפוא: אינטנסיביות קלה",
      "Freezing Drizzle: dense intensity": "רדיד קפוא: אינטנסיביות גבוהה",
      "Slight rain": "גשם קל",
      "Moderate rain": "גשם בינוני",
      "Heavy intensity rain": "גשם חזק",
      "Freezing Rain: Light intensity": "גשם מתפוגג: אינטנסיביות קלה",
      "Freezing Rain: heavy intensity": "גשם מתפוגג: אינטנסיביות גבוהה",
      "Snow fall: slight intensity": "שלג קל",
      "Snow fall: moderate intensity": "שלג בינוני",
      "Snow fall: heavy intensity": "שלג חזק",
      "Snow grains": "גרעיני שלג",
      "Rain showers: Slight": "מקלקלי גשם: קלים",
      "Rain showers: moderate": "מקלקלי גשם: בינוניים",
      "Rain showers: violent": "מקלקלי גשם: אלים",
      "Snow showers: slight": "מקלקלי שלג: קלים",
      "Snow showers: heavy": "מקלקלי שלג: חזקים",
      "Thunderstorm: Slight or moderate": "סופה: קלה או בינונית",
      "Thunderstorm with slight hail": "סופה עם גשם קטן",
      "Thunderstorm with heavy hail": "סופה עם גשם כבד"
    },
    "hi": {
      "Clear sky": "स्पष्ट आसमान",
      "Mainly clear": "अधिकतर स्पष्ट",
      "Partly cloudy": "अंशत: बादली",
      "Overcast": "अधिकतर बादल छाया",
      "Fog": "कोहरा",
      "Depositing rime fog": "झिल्ली फोहटा जमाना",
      "Light drizzle": "हल्की बूँदाबाँदी",
      "Moderate drizzle": "मध्यम बूँदाबाँदी",
      "Dense intensity drizzle": "घनत्व बूँदाबाँदी",
      "Freezing Drizzle: Light intensity": "बारिश जमाना: हल्की घनत्व",
      "Freezing Drizzle: dense intensity": "बारिश जमाना: घनत्व",
      "Slight rain": "हल्की बारिश",
      "Moderate rain": "मध्यम बारिश",
      "Heavy intensity rain": "भारी बारिश",
      "Freezing Rain: Light intensity": "जमने वाली बारिश: हल्की घनत्व",
      "Freezing Rain: heavy intensity": "जमने वाली बारिश: भारी घनत्व",
      "Snow fall: slight intensity": "हल्की बर्फबारी",
      "Snow fall: moderate intensity": "मध्यम बर्फबारी",
      "Snow fall: heavy intensity": "भारी बर्फबारी",
      "Snow grains": "बर्फ की दानें",
      "Rain showers: Slight": "बारिश की झिल्लियाँ: हल्की",
      "Rain showers: moderate": "बारिश की झिल्लियाँ: मध्यम",
      "Rain showers: violent": "बारिश की झिल्लियाँ: हिंसक",
      "Snow showers: slight": "बर्फ की झिल्लियाँ: हल्की",
      "Snow showers: heavy": "बर्फ की झिल्लियाँ: भारी",
      "Thunderstorm: Slight or moderate": "आंधी: हल्की या मध्यम",
      "Thunderstorm with slight hail": "आंधी में हल्की बारिश",
      "Thunderstorm with heavy hail": "आंधी में भारी बारिश"
    },
    "id": {
      "Clear sky": "Langit cerah",
      "Mainly clear": "Sebagian besar cerah",
      "Partly cloudy": "Sebagian berawan",
      "Overcast": "Cerah",
      "Fog": "Kabut",
      "Depositing rime fog": "Kabut embun",
      "Light drizzle": "Gerimis ringan",
      "Moderate drizzle": "Gerimis sedang",
      "Dense intensity drizzle": "Gerimis intensitas padat",
      "Freezing Drizzle: Light intensity": "Gerimis beku: Intensitas ringan",
      "Freezing Drizzle: dense intensity": "Gerimis beku: Intensitas padat",
      "Slight rain": "Hujan ringan",
      "Moderate rain": "Hujan sedang",
      "Heavy intensity rain": "Hujan intensitas tinggi",
      "Freezing Rain: Light intensity": "Hujan beku: Intensitas ringan",
      "Freezing Rain: heavy intensity": "Hujan beku: Intensitas berat",
      "Snow fall: slight intensity": "Hujan salju: Intensitas ringan",
      "Snow fall: moderate intensity": "Hujan salju: Intensitas sedang",
      "Snow fall: heavy intensity": "Hujan salju: Intensitas tinggi",
      "Snow grains": "Biji salju",
      "Rain showers: Slight": "Hujan deras: Sedikit",
      "Rain showers: moderate": "Hujan deras: Sedang",
      "Rain showers: violent": "Hujan deras: Brutal",
      "Snow showers: slight": "Salju deras: Sedikit",
      "Snow showers: heavy": "Salju deras: Berat",
      "Thunderstorm: Slight or moderate": "Badai petir: Sedikit atau sedang",
      "Thunderstorm with slight hail": "Badai petir dengan hujan ringan",
      "Thunderstorm with heavy hail": "Badai petir dengan hujan besar"
    },
    "it": {
      "Clear sky": "Cielo sereno",
      "Mainly clear": "Prevalentemente sereno",
      "Partly cloudy": "Parzialmente nuvoloso",
      "Overcast": "Coperto",
      "Fog": "Nebbia",
      "Depositing rime fog": "Nebbia che deposita rime",
      "Light drizzle": "Pioggerellina leggera",
      "Moderate drizzle": "Pioggerellina moderata",
      "Dense intensity drizzle": "Pioggerellina intensa",
      "Freezing Drizzle: Light intensity": "Pioggerellina gelante: Intensità leggera",
      "Freezing Drizzle: dense intensity": "Pioggerellina gelante: Intensità densa",
      "Slight rain": "Pioggia leggera",
      "Moderate rain": "Pioggia moderata",
      "Heavy intensity rain": "Pioggia intensa",
      "Freezing Rain: Light intensity": "Pioggia ghiacciata: Intensità leggera",
      "Freezing Rain: heavy intensity": "Pioggia ghiacciata: Intensità pesante",
      "Snow fall: slight intensity": "Nevicata leggera",
      "Snow fall: moderate intensity": "Nevicata moderata",
      "Snow fall: heavy intensity": "Nevicata intensa",
      "Snow grains": "Granuli di neve",
      "Rain showers: Slight": "Rovescio di pioggia: Leggero",
      "Rain showers: moderate": "Rovescio di pioggia: Moderato",
      "Rain showers: violent": "Rovescio di pioggia: Violento",
      "Snow showers: slight": "Rovescio di neve: Leggero",
      "Snow showers: heavy": "Rovescio di neve: Pesante",
      "Thunderstorm: Slight or moderate": "Temporale: Leggero o moderato",
      "Thunderstorm with slight hail": "Temporale con grandine leggera",
      "Thunderstorm with heavy hail": "Temporale con grandine pesante"
    },
    "ja": {
      "Clear sky": "晴天",
      "Mainly clear": "大部分晴れ",
      "Partly cloudy": "一部曇り",
      "Overcast": "曇り",
      "Fog": "霧",
      "Depositing rime fog": "着氷性霧",
      "Light drizzle": "霧雨",
      "Moderate drizzle": "中程度の霧雨",
      "Dense intensity drizzle": "濃度の高い霧雨",
      "Freezing Drizzle: Light intensity": "軽い凍結霧雨",
      "Freezing Drizzle: dense intensity": "濃度の高い凍結霧雨",
      "Slight rain": "小雨",
      "Moderate rain": "中雨",
      "Heavy intensity rain": "大雨",
      "Freezing Rain: Light intensity": "軽い凍雨",
      "Freezing Rain: heavy intensity": "大雨の凍結",
      "Snow fall: slight intensity": "小雪",
      "Snow fall: moderate intensity": "中雪",
      "Snow fall: heavy intensity": "大雪",
      "Snow grains": "雪片",
      "Rain showers: Slight": "小雨のシャワー",
      "Rain showers: moderate": "中雨のシャワー",
      "Rain showers: violent": "激しい雨のシャワー",
      "Snow showers: slight": "小雪のシャワー",
      "Snow showers: heavy": "大雪のシャワー",
      "Thunderstorm: Slight or moderate": "雷雨: 軽いまたは中程度",
      "Thunderstorm with slight hail": "軽い雹の雷雨",
      "Thunderstorm with heavy hail": "大きな雹の雷雨"
    },
    "la": {
      "Clear sky": "Caelum clarum",
      "Mainly clear": "Maxime clarum",
      "Partly cloudy": "Partim nubilum",
      "Overcast": "Nubilum",
      "Fog": "Nebula",
      "Depositing rime fog": "Nebula pruina adfert",
      "Light drizzle": "Imber leviter",
      "Moderate drizzle": "Imber moderate",
      "Dense intensity drizzle": "Imber vehementer",
      "Freezing Drizzle: Light intensity": "Imber pruinosus: Leviter",
      "Freezing Drizzle: dense intensity": "Imber pruinosus: Vehementer",
      "Slight rain": "Pluvia leviter",
      "Moderate rain": "Pluvia moderate",
      "Heavy intensity rain": "Pluvia vehementer",
      "Freezing Rain: Light intensity": "Pluvia pruinosus: Leviter",
      "Freezing Rain: heavy intensity": "Pluvia pruinosus: Vehementer",
      "Snow fall: slight intensity": "Nix leviter",
      "Snow fall: moderate intensity": "Nix moderate",
      "Snow fall: heavy intensity": "Nix vehementer",
      "Snow grains": "Grana nivis",
      "Rain showers: Slight": "Aestus pluvius: Leviter",
      "Rain showers: moderate": "Aestus pluvius: Moderate",
      "Rain showers: violent": "Aestus pluvius: Vehementer",
      "Snow showers: slight": "Aestus nivis: Leviter",
      "Snow showers: heavy": "Aestus nivis: Vehementer",
      "Thunderstorm: Slight or moderate": "Tonitrus: Leviter vel moderate",
      "Thunderstorm with slight hail": "Tonitrus grandine levi"
    },
    "lt": {
      "Clear sky": "Giedras dangus",
      "Mainly clear": "Daugiausia giedra",
      "Partly cloudy": "Daugiausiai debesuota",
      "Overcast": "Debesuota",
      "Fog": "Rūkas",
      "Depositing rime fog": "Dulkinuotas rūkas",
      "Light drizzle": "Debesuotas dulksnas",
      "Moderate drizzle": "Vidutinio debesumo dulksnas",
      "Dense intensity drizzle": "Tankus debesumo dulksnas",
      "Freezing Drizzle: Light intensity": "Dulkinas lietus: šviesus intensyvumas",
      "Freezing Drizzle: dense intensity": "Dulkinas lietus: tankus intensyvumas",
      "Slight rain": "Lengvas lietus",
      "Moderate rain": "Vidutinis lietus",
      "Heavy intensity rain": "Smarkus lietus",
      "Freezing Rain: Light intensity": "Dulkinas lietus: šviesus intensyvumas",
      "Freezing Rain: heavy intensity": "Dulkinas lietus: sunkus intensyvumas",
      "Snow fall: slight intensity": "Sniegas: lengvas intensyvumas",
      "Snow fall: moderate intensity": "Sniegas: vidutinio intensyvumo",
      "Snow fall: heavy intensity": "Sniegas: sunkus intensyvumas",
      "Snow grains": "Sniego grūdeliai",
      "Rain showers: Slight": "Lengvi lietaus dušai",
      "Rain showers: moderate": "Vidutiniai lietaus dušai",
      "Rain showers: violent": "Smarkūs lietaus dušai",
      "Snow showers: slight": "Lengvi sniego dušai",
      "Snow showers: heavy": "Smarkūs sniego dušai",
      "Thunderstorm: Slight or moderate": "Griaustinis: švelnus ar vidutinis",
      "Thunderstorm with slight hail": "Griaustinis su lengvu kruša",
      "Thunderstorm with heavy hail": "Griaustinis su sunkiu kruša"
    },
    "pt": {
      "Clear sky": "Céu limpo",
      "Mainly clear": "Principalmente limpo",
      "Partly cloudy": "Parcialmente nublado",
      "Overcast": "Encoberto",
      "Fog": "Nevoeiro",
      "Depositing rime fog": "Nevoeiro depositante de geada",
      "Light drizzle": "Chuvisco leve",
      "Moderate drizzle": "Chuvisco moderado",
      "Dense intensity drizzle": "Chuvisco de intensidade densa",
      "Freezing Drizzle: Light intensity": "Chuva congelante: Intensidade leve",
      "Freezing Drizzle: dense intensity": "Chuva congelante: Intensidade densa",
      "Slight rain": "Chuva leve",
      "Moderate rain": "Chuva moderada",
      "Heavy intensity rain": "Chuva intensa",
      "Freezing Rain: Light intensity": "Chuva congelante: Intensidade leve",
      "Freezing Rain: heavy intensity": "Chuva congelante: Intensidade pesada",
      "Snow fall: slight intensity": "Queda de neve: Intensidade leve",
      "Snow fall: moderate intensity": "Queda de neve: Intensidade moderada",
      "Snow fall: heavy intensity": "Queda de neve: Intensidade pesada",
      "Snow grains": "Grãos de neve",
      "Rain showers: Slight": "Chuva: Leve",
      "Rain showers: moderate": "Chuva: Moderada",
      "Rain showers: violent": "Chuva: Violenta",
      "Snow showers: slight": "Neve: Leve",
      "Snow showers: heavy": "Neve: Pesada",
      "Thunderstorm: Slight or moderate": "Trovoada: Leve ou moderada",
      "Thunderstorm with slight hail": "Trovoada com granizo leve",
      "Thunderstorm with heavy hail": "Trovoada com granizo forte"
    },
    "ru": {
      "Clear sky": "Ясное небо",
      "Mainly clear": "В основном ясно",
      "Partly cloudy": "Переменная облачность",
      "Overcast": "Пасмурно",
      "Fog": "Туман",
      "Depositing rime fog": "Туман с осаждением иней",
      "Light drizzle": "Легкий мелкий дождь",
      "Moderate drizzle": "Умеренный дождь",
      "Dense intensity drizzle": "Интенсивный мелкий дождь",
      "Freezing Drizzle: Light intensity": "Легкий замораживающий дождь",
      "Freezing Drizzle: dense intensity": "Интенсивный замораживающий дождь",
      "Slight rain": "Небольшой дождь",
      "Moderate rain": "Умеренный дождь",
      "Heavy intensity rain": "Сильный дождь",
      "Freezing Rain: Light intensity": "Легкий замораживающий дождь",
      "Freezing Rain: heavy intensity": "Сильный замораживающий дождь",
      "Snow fall: slight intensity": "Легкий снегопад",
      "Snow fall: moderate intensity": "Умеренный снегопад",
      "Snow fall: heavy intensity": "Сильный снегопад",
      "Snow grains": "Снежные зерна",
      "Rain showers: Slight": "Дождь: легкий",
      "Rain showers: moderate": "Дождь: умеренный",
      "Rain showers: violent": "Дождь: сильный",
      "Snow showers: slight": "Снег: легкий",
      "Snow showers: heavy": "Снег: сильный",
      "Thunderstorm: Slight or moderate": "Гроза: легкая или умеренная",
      "Thunderstorm with slight hail": "Гроза с небольшим градом",
      "Thunderstorm with heavy hail": "Гроза с сильным градом"
    },
    "sr": {
      "Clear sky": "Чисто небо",
      "Mainly clear": "Већином чисто",
      "Partly cloudy": "Делимично облачно",
      "Overcast": "Облачно",
      "Fog": "Магла",
      "Depositing rime fog": "Магла са леденкама",
      "Light drizzle": "Слаба росуља",
      "Moderate drizzle": "Умерена росуља",
      "Dense intensity drizzle": "Јака росуља",
      "Freezing Drizzle: Light intensity": "Слаб замрзавајућа росуља",
      "Freezing Drizzle: dense intensity": "Јака замрзавајућа росуља",
      "Slight rain": "Слаба киша",
      "Moderate rain": "Умерена киша",
      "Heavy intensity rain": "Јака киша",
      "Freezing Rain: Light intensity": "Слаб замрзавајући дожд",
      "Freezing Rain: heavy intensity": "Јак замрзавајући дожд",
      "Snow fall: slight intensity": "Слаб снег",
      "Snow fall: moderate intensity": "Умерен снег",
      "Snow fall: heavy intensity": "Јак снег",
      "Snow grains": "Снежни зрнци",
      "Rain showers: Slight": "Кишни плјускови: Слабо",
      "Rain showers: moderate": "Кишни плјускови: Умерено",
      "Rain showers: violent": "Кишни плјускови: Јако",
      "Snow showers: slight": "Снежни плјускови: Слабо",
      "Snow showers: heavy": "Снежни плјускови: Јако",
      "Thunderstorm: Slight or moderate": "Грмотеви: Слаби или умерени",
      "Thunderstorm with slight hail": "Грмотеви са слабим градом",
      "Thunderstorm with heavy hail": "Грмотеви са јаким градом"
    },
    "th": {
      "Clear sky": "ฟ้าใส",
      "Mainly clear": "ใส่มาก",
      "Partly cloudy": "มีเมฆบางส่วน",
      "Overcast": "มีเมฆทั้งหมด",
      "Fog": "หมอก",
      "Depositing rime fog": "หมอกลาก",
      "Light drizzle": "ฝนหยดเล็กน้อย",
      "Moderate drizzle": "ฝนหยดกลาง",
      "Dense intensity drizzle": "ฝนหยดหนา",
      "Freezing Drizzle: Light intensity": "ฝนหยดแข็ง: ความหนาแหน่งเบา",
      "Freezing Drizzle: dense intensity": "ฝนหยดแข็ง: ความหนาแหน่งหนา",
      "Slight rain": "ฝนเล็กน้อย",
      "Moderate rain": "ฝนกลาง",
      "Heavy intensity rain": "ฝนหนัก",
      "Freezing Rain: Light intensity": "ฝนแข็ง: ความหนาแหน่งเบา",
      "Freezing Rain: heavy intensity": "ฝนแข็ง: ความหนาแหน่งหนา",
      "Snow fall: slight intensity": "หิมะตก: ความหนาแหน่งเบา",
      "Snow fall: moderate intensity": "หิมะตก: ความหนาแหน่งกลาง",
      "Snow fall: heavy intensity": "หิมะตก: ความหนาแหน่งหนา",
      "Snow grains": "เมล็ดหิมะ",
      "Rain showers: Slight": "ฝนฉีด: เล็กน้อย",
      "Rain showers: moderate": "ฝนฉีด: กลาง",
      "Rain showers: violent": "ฝนฉีด: รุนแรง",
      "Snow showers: slight": "หิมะฉีด: เล็กน้อย",
      "Snow showers: heavy": "หิมะฉีด: หนัก",
      "Thunderstorm: Slight or moderate": "พายุฟ้าคะนอง: เล็กน้อยหรือกลาง",
      "Thunderstorm with slight hail": "พายุฟ้าคะนองด้วยลูกเห็บเล็กน้อย",
      "Thunderstorm with heavy hail": "พายุฟ้าคะนองด้วยลูกเห็บหนัก"
    },
    "tr": {
      "Clear sky": "Açık gökyüzü",
      "Mainly clear": "Çoğunlukla açık",
      "Partly cloudy": "Kısmen bulutlu",
      "Overcast": "Kapalı",
      "Fog": "Sis",
      "Depositing rime fog": "Kırağı düşen sis",
      "Light drizzle": "Hafif çiseleme",
      "Moderate drizzle": "Orta şiddette çiseleme",
      "Dense intensity drizzle": "Yoğun şiddetli çiseleme",
      "Freezing Drizzle: Light intensity": "Hafif yoğunlukta donan çiseleme",
      "Freezing Drizzle: dense intensity": "Yoğun yoğunlukta donan çiseleme",
      "Slight rain": "Hafif yağmur",
      "Moderate rain": "Orta şiddetli yağmur",
      "Heavy intensity rain": "Yoğun şiddetli yağmur",
      "Freezing Rain: Light intensity": "Hafif yoğunlukta donan yağmur",
      "Freezing Rain: heavy intensity": "Yoğun yoğunlukta donan yağmur",
      "Snow fall: slight intensity": "Hafif yoğunlukta kar yağışı",
      "Snow fall: moderate intensity": "Orta yoğunlukta kar yağışı",
      "Snow fall: heavy intensity": "Yoğun yoğunlukta kar yağışı",
      "Snow grains": "Kar taneleri",
      "Rain showers: Slight": "Hafif yağmur duşları",
      "Rain showers: moderate": "Orta yoğunlukta yağmur duşları",
      "Rain showers: violent": "Şiddetli yağmur duşları",
      "Snow showers: slight": "Hafif kar duşları",
      "Snow showers: heavy": "Yoğun kar duşları",
      "Thunderstorm: Slight or moderate": "Hafif veya orta şiddetli fırtına",
      "Thunderstorm with slight hail": "Hafif dolu eşliğinde fırtına",
      "Thunderstorm with heavy hail": "Yoğun dolu eşliğinde fırtına"
    },
    "vi": {
      "Clear sky": "Bầu trời quang đãng",
      "Mainly clear": "Chủ yếu là trời quang đãng",
      "Partly cloudy": "Trời có mây phần nào",
      "Overcast": "Trời âm u",
      "Fog": "Sương mù",
      "Depositing rime fog": "Sương muối",
      "Light drizzle": "Mưa phùn nhẹ",
      "Moderate drizzle": "Mưa phùn vừa",
      "Dense intensity drizzle": "Mưa phùn mạnh",
      "Freezing Drizzle: Light intensity": "Mưa phùn đóng băng: Mức độ nhẹ",
      "Freezing Drizzle: dense intensity": "Mưa phùn đóng băng: Mức độ mạnh",
      "Slight rain": "Mưa nhỏ",
      "Moderate rain": "Mưa vừa",
      "Heavy intensity rain": "Mưa nặng hạt",
      "Freezing Rain: Light intensity": "Mưa đá đóng băng: Mức độ nhẹ",
      "Freezing Rain: heavy intensity": "Mưa đá đóng băng: Mức độ mạnh",
      "Snow fall: slight intensity": "Tuyết rơi: Mức độ nhẹ",
      "Snow fall: moderate intensity": "Tuyết rơi: Mức độ vừa",
      "Snow fall: heavy intensity": "Tuyết rơi: Mức độ nặng",
      "Snow grains": "Hạt tuyết",
      "Rain showers: Slight": "Cơn mưa nhỏ",
      "Rain showers: moderate": "Cơn mưa vừa",
      "Rain showers: violent": "Cơn mưa mạnh",
      "Snow showers: slight": "Cơn tuyết rơi nhỏ",
      "Snow showers: heavy": "Cơn tuyết rơi nặng",
      "Thunderstorm: Slight or moderate": "Bão giông: Nhẹ hoặc vừa",
      "Thunderstorm with slight hail": "Bão giông với mưa đá nhỏ",
      "Thunderstorm with heavy hail": "Bão giông với mưa đá lớn"
    },
    "zu": {
      "Clear sky": "Isikhathi esihle",
      "Mainly clear": "Okwesikhathi esiningi",
      "Partly cloudy": "Kancane ukuthutha",
      "Overcast": "Owesikhathi ongathuthuzeli",
      "Fog": "Umkhonto",
      "Depositing rime fog": "Umkhonto okuthuthuza rime",
      "Light drizzle": "Ukufula okunomvula",
      "Moderate drizzle": "Ukufula okuthuthuza",
      "Dense intensity drizzle": "Ukufula okuthuthuza okufanayo",
      "Freezing Drizzle: Light intensity": "Ukufula okuyehlisa: Ukhathazekile okuthuthuza",
      "Freezing Drizzle: dense intensity": "Ukufula okuyehlisa: Ukhathazekile okufanayo",
      "Slight rain": "Inyathuko enesifuba",
      "Moderate rain": "Inyathuko okuthuthuza",
      "Heavy intensity rain": "Inyathuko enkulu",
      "Freezing Rain: Light intensity": "Induku ehlukile: Ukhathazekile okuthuthuza",
      "Freezing Rain: heavy intensity": "Induku ehlukile: Ukhathazekile okufanayo",
      "Snow fall: slight intensity": "Ukudla okunomvula okuhambayo",
      "Snow fall: moderate intensity": "Ukudla okuthuthuza",
      "Snow fall: heavy intensity": "Ukudla okufanayo",
      "Snow grains": "Amazambane omkaka",
      "Rain showers: Slight": "Amagqoko angaphansi",
      "Rain showers: moderate": "Amagqoko okuthuthuza",
      "Rain showers: violent": "Amagqoko okufanayo",
      "Snow showers: slight": "Izithutha ezincane",
      "Snow showers: heavy": "Izithutha ezikhulu",
      "Thunderstorm: Slight or moderate": "Isibamba: Esehlise kahle noma ekuthuthukeni",
      "Thunderstorm with slight hail": "Isibamba nesile nesilinganiso esinomoya",
      "Thunderstorm with heavy hail": "Isibamba nesile nesilinganiso esikhulu"
    }
  }
  export default weatherLanguages