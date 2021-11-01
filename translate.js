import ar from './ar';
import bg from './bg';
import cs from './cs';
import da from './da';
import de from './de';
import el from './el';
import en from './en';
import es from './es';
import fa from './fa';
import fr from './fr';
import he from './he';
import hi from './hi';
import it from './it';
import ja from './ja';
import ko from './ko';
import lv from './lv';
import nl from './nl';
import no from './no';
import pl from './pl';
import pt from './pt';
import ru from './ru';
import sv from './sv';
import th from './th';
import tr from './tr';
import uk from './uk';
import zh from './zh';
import hu from './hu';
let languages = {ar, bg, cs, da, de, el, en, es, fa, fr, he, hi, it, ja, ko, lv, nl, no, pl, pt, ru, sv, th, tr, uk, zh, hu};

let language =  'en';

export function t(word) {
    if(typeof window.currentLanguage != 'undefined' && window.currentLanguage != 'undefined'){
        language =  window.currentLanguage;
    }
    return (languages[language] && languages[language][word] ?  languages[language][word] : word);

}

export function langName(id) {
    let langs = ['en', 'da', 'de', 'es', 'fr', 'it', 'nl', 'no', 'pl', 'pt', 'ru', 'sv', 'ja', 'ko', 'tr', 'he', 'lv','cs','bg','el','uk','ar','fa','th','hi','zh','hu'];

    return langs[id];
}
