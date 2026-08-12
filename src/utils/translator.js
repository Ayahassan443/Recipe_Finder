// قاموس المصطلحات للبحث والترجمة
export const translationMap = {
    // التصنيفات والبحث
    "دجاج": "Chicken",
    "لحم": "Beef",
    "لحم بقري": "Beef",
    "لحم غنم": "Lamb",
    "مأكولات بحرية": "Seafood",
    "سمك": "Fish",
    "بيتزا": "Pizza",
    "باستا": "Pasta",
    "معكرونة": "Pasta",
    "حلويات": "Dessert",
    "إفطار": "Breakfast",
    "نباتي": "Vegetarian",
    "أرز": "Rice",
    "سلطة": "Salad",

    // المكونات الشائعة
    "Water": "ماء",
    "Oil": "زيت",
    "Salt": "ملح",
    "Sugar": "سكر",
    "Pepper": "فلفل",
    "Onion": "بصل",
    "Garlic": "ثوم",
    "Flour": "دقيق",
    "Milk": "حليب",
    "Egg": "بيض",
    "Eggs": "بيض",
    "Butter": "زبدة",
    "Chicken": "دجاج",
    "Beef": "لحم بقري",
    "Rice": "أرز",
    "Tomato": "طماطم",
    "Potatoes": "بطاطس",
    "Potato": "بطاطس",
    "Bread": "خبز",
    "Cheese": "جبن",
    "Lemon": "ليمون",

    // القياسات
    "tsp": "ملعقة صغيرة",
    "tbsp": "ملعقة كبيرة",
    "cup": "كوب",
    "cups": "أكواب",
    "g": "جرام",
    "kg": "كيلو",
    "ml": "مل",
    "lb": "باوند",
    "oz": "أونصة",
    "pinch": "رشة",
    "to taste": "حسب الرغبة",

    // أفعال الطبخ (للتعليمات)
    "Mix": "اخلط",
    "Bake": "اخبز",
    "Cook": "اطبخ",
    "Heat": "سخن",
    "Add": "أضف",
    "Serve": "قدم",
    "Cut": "قطع",
    "Fry": "اقلي",
    "Boil": "اغلي",
    "Stir": "قلب",
    "Place": "ضع",
    "Pour": "صب"
};

// دالة لترجمة النصوص (تعتمد على ترجمة الكلمات المفتاحية)
export const translateText = (text) => {
    if (!text) return "";
    let translated = text;
    Object.keys(translationMap).forEach(key => {
        const regex = new RegExp(`\\b${translationMap[key]}\\b`, 'gi');
        translated = translated.replace(regex, key);
    });
    return translated;
};

// دالة لتحويل البحث من العربية للإنجليزية
export const getEnglishSearch = (term) => {
    return translationMap[term] || term;
};