import { createI18n } from "vue-i18n";

import en from "../locale/en.json";
import ru from "../locale/ru.json";
import uz from "../locale/uz.json";
import tr from "../locale/tr.json";

const i18n = createI18n({
  legacy: false, 
  locale: localStorage.getItem("lang") || "uz",
  fallbackLocale: "en",
  messages: { en, ru, uz, tr }
});

export default i18n;
