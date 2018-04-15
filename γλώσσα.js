/*
Language: Γλώσσα
*/

// Language definition guide — highlight.js 9.8.0 documentation - https://goo.gl/jZzggF
var glossa = function(hljs) {
	var IDENT_RE_EL = '[a-zA-Zα-ωΑ-Ω][a-zA-Zα-ωΑ-Ω0-9_]*';
	var KEYWORDS = {
		keyword:
			'ΠΡΟΓΡΑΜΜΑ ΣΥΝΑΡΤΗΣΗ ΔΙΑΔΙΚΑΣΙΑ ΑΡΧΗ ΤΕΛΟΣ_ΠΡΟΓΡΑΜΜΑΤΟΣ ΤΕΛΟΣ_ΣΥΝΑΡΤΗΣΗΣ ΤΕΛΟΣ_ΔΙΑΔΙΚΑΣΙΑΣ ' +
			'ΣΤΑΘΕΡΕΣ ΜΕΤΑΒΛΗΤΕΣ ΑΚΕΡΑΙΕΣ ΠΡΑΓΜΑΤΙΚΕΣ ΧΑΡΑΚΤΗΡΕΣ ΛΟΓΙΚΕΣ ΑΚΕΡΑΙΑ ΠΡΑΓΜΑΤΙΚΗ ΧΑΡΑΚΤΗΡΑΣ ΛΟΓΙΚΗ ' +
			'ΔΙΑΒΑΣΕ ΓΡΑΨΕ ΚΑΛΕΣΕ ' +
			'ΑΝ ΤΟΤΕ ΑΛΛΙΩΣ_ΑΝ ΑΛΛΙΩΣ ΤΕΛΟΣ_ΑΝ ' +
			'ΟΣΟ ΕΠΑΝΑΛΑΒΕ ΜΕΧΡΙΣ_ΟΤΟΥ ΓΙΑ ΑΠΟ ΜΕΧΡΙ ΜΕ_ΒΗΜΑ ΜΕ ΒΗΜΑ ΑΡΧΗ_ΕΠΑΝΑΛΗΨΗΣ ΤΕΛΟΣ_ΕΠΑΝΑΛΗΨΗΣ ' +
			'DIV MOD ' +
			'ΚΑΙ Ή H ΟΧΙ '
		,
		literal:
			'ΑΛΗΘΗΣ ΨΕΥΔΗΣ',
		built_in:
			'ΗΜ ΣΥΝ ΕΦ Α_Τ Τ_Ρ Α_Μ ΛΟΓ Ε'
	};
	var COMMENT_MODES = [
		hljs.COMMENT('!', '$', {relevance: 10})
	];
	var STRING = {
		className: 'string',
		begin: /'/, end: /'/,
		contains: [{begin: /''/}]
	};
	var SUBST = {
		className: 'subst',
		begin: '\\<[^ -=>]', end: '\\>',
		contains: []
	};
	var FUNCTION = {
		className: 'function',
		beginKeywords: 'function constructor destructor procedure', end: /[:;]/,
		keywords: 'function constructor|10 destructor|10 procedure|10',
		contains: [
			hljs.TITLE_MODE,
			{
				className: 'params',
				begin: /\(/, end: /\)/,
				keywords: KEYWORDS,
				contains: [STRING].concat(COMMENT_MODES)
			}
		].concat(COMMENT_MODES)
	};
	return {
		aliases: ['glo', 'glossa'],
		case_insensitive: false,
		lexemes: IDENT_RE_EL,
		keywords: KEYWORDS,
	//	illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
		contains: [
			STRING,
			SUBST,
			hljs.NUMBER_MODE
		].concat(COMMENT_MODES)
	};
}