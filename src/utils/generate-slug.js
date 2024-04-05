"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringToSlug(str) {
    // Converte para letras minúsculas
    str = str.toLowerCase();
    // Remove acentos
    str = str.replace(/á|à|ã|â/g, "a");
    str = str.replace(/é|è|ê/g, "e");
    str = str.replace(/í|ì|î/g, "i");
    str = str.replace(/ó|ò|õ|ô/g, "o");
    str = str.replace(/ú|ù|û/g, "u");
    // Remove espaços e caracteres especiais
    str = str.replace(/ /g, "-");
    str = str.replace(/[^a-z0-9-]+/g, "");
    // Remove hifens duplicados
    str = str.replace(/--+/g, "-");
    // Remove hifens no início e no fim
    str = str.replace(/^-+|-+$/g, "");
    return str;
}
exports.default = stringToSlug;
