import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let provider1 = vscode.languages.registerCompletionItemProvider('hops', {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			// a simple completion item which inserts `Hello World!`
			const simpleCompletion = new vscode.CompletionItem('Hello World!');

			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which we will
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('Good part of the day');
			snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
			snippetCompletion.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('console');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');

			// a completion item that retriggers IntelliSense when being accepted,
			// the `command`-property is set which the editor will execute after 
			// completion has been inserted. Also, the `insertText` is set so that 
			// a space is inserted after `new`
			const commandCompletion = new vscode.CompletionItem('new');
			commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			commandCompletion.insertText = 'new ';
			commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			// return all completion items as array
			return [
				simpleCompletion,
				snippetCompletion,
				commitCharacterCompletion,
				commandCompletion
			];
		}
	});


    let callFunctions = [
		"_AufBogenBohrenHoriz_V6", 
		"_AufBogenBohren_V5", 
		"_ausklinken_V5", 
		"B2Punkte_V7", 
		"B_MC_cleaning_blower", 
		"B_MC_Config", 
		"B_MC_Corner_Mode", 
		"B_MC_M200", 
		"B_MC_M212", 
		"B_MC_M25_FLOATING", 
		"B_MC_M26_PRESSER", 
		"B_MC_M27_AIR_CUSHION", 
		"B_MC_M28_CLEANING_BLOWER", 
		"B_MC_Measure", 
		"B_MC_PCSG", 
		"B_MC_PDM", 
		"B_MC_PDS", 
		"B_MC_PMBA", 
		"B_MC_PMZS", 
		"B_MC_PUNI", 
		"B_MC_RUO", 
		"B_MC_suction_cleaning", 
		"B_MC_SuctionHood", 
		"B_MC_Tool_back_TC", 
		"B_MC_UseMeasuredPoint", 
		"_BoGr_HX_V5", 
		"_BoGr_HY_V5", 
		"_Bohgx_V5", 
		"_Bohgy_V5", 
		"BRadius_V7", 
		"BWinkel_V7", 
		"CAchsMillingOptions_V7", 
		"Deflector_V7", 
		"DH_Options_V7", 
		"DHOptiStop_V7", 
		"DHPathOptiStart_V7", 
		"_DrehenBBEnde", 
		"_DrehenBBStart_V7", 
		"_Ellipsenbogen02_V5", 
		"_Ellipsenbogen03_V5", 
		"EndViewgroup_V7", 
		"_G3P_V5", 
		"_Geradewx_V5", 
		"_GeradewY_V5", 
		"GLUEPROCESS_V7", 
		"GROUPEND_V7", 
		"GROUPSTART_V7", 
		"_HG2PunkteR_V5", 
		"_HG2RA2PTANG_V5", 
		"_HG_Korb_3R_V5", 
		"_HG_Korb_5R_V5", 
		"_hg_lot_V5", 
		"_hg_para_V5", 
		"_hg_para_winkel_V5", 
		"_KEllipsenbogen02_V5", 
		"_KEllipsenbogen03_V5", 
		"_KG02R_V5", 
		"_KG03R_V5", 
		"_KG3P_V5", 
		"_KGeradewx_V5", 
		"_KGeradewY_V5", 
		"_KKorb_3R_G02_V5", 
		"_KKorb_3R_G03_V5", 
		"_KKorb_5R_G02_V5", 
		"_KKorb_5R_G03_V5", 
		"_KWGerade_V5", 
		"MainGroup_V7", 
		"_nuten_frei_V5", 
		"_Nuten_X_V5", 
		"_Nuten_Y_V5", 
		"OPTISTOP_V7", 
		"_Rbohr_winkel_V5", 
		"_RBohX_einpass_Horz_V6", 
		"_Rbohx_einpass_V5", 
		"_Rbohy_einpass_Horz_V6", 
		"_Rbohy_einpass_V5", 
		"_saege_frei_V7", 
		"_saege_lae_wi_V7", 
		"_saege_x_V7", 
		"_saege_y_V7", 
		"_SchlitzenSaege_V7", 
		"_SFormat_sonder_V5", 
		"_Sformat_V5", 
		"_spiegeln_End_V7", 
		"_spiegeln_start_V7", 
		"StartViewgroup_V7", 
		"SubGroup_V7", 
		"TipARotAOtherSolution_V7", 
		"TOOLOPTIDEACTIVATE_V7", 
		"TOOLOPTIFASERRICHTUNG_V7", 
		"ToolOptiPathOptiStart_V7", 
		"ToolOptiPreferTools_V7", 
		"_Topf_V5", 
		"_Tvorschub_v5", 
		"_WGerade_V5", 
		"_ZKBCCWR_V7", 
		"_ZKBCWR_V7", 
		"_ZoomAll", 
		"_ZoomFertigteil", 
		"_ZRechteck_2P_V7"		
	];

	const provider2 = vscode.languages.registerCompletionItemProvider('hops',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				let linePrefix = document.lineAt(position).text.substr(0, position.character);
				if (!linePrefix.endsWith('CALL ')) {
					return undefined;
				}
				return callFunctions.map(it => new vscode.CompletionItem(it, vscode.CompletionItemKind.Method));
			}
		},
		' ' // triggered whenever a '_' is being typed
	);


	let jobVariables = [
		"_JOB_MIRX",
		"_JOB_MIRY",
		"_JOB_MIRX | _JOB_MIRY",
	]

	const provider3 = vscode.languages.registerCompletionItemProvider('hops',
	{
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
			let linePrefix = document.lineAt(position).text.substr(0, position.character);
			if (!linePrefix.endsWith('IF ')) {
				return undefined;
			}
			return jobVariables.map(it => new vscode.CompletionItem(it, vscode.CompletionItemKind.Method));
		}
	},
	' ' // triggered whenever a '_' is being typed
);

	context.subscriptions.push(provider1, provider2, provider3);
}

export function deactivate() { }
