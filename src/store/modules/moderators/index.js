import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			listOfModerators: [],
			listOfInvitedModerators: [],
			//////////////RULES/////////////////
			addRuleSuccessfully: false,
			listOfRules: [],
			updateRuleSuccessfully: false,
			deleteRuleSuccessfully: false,
			updateRulesSuccessfully: false,

			//////////////FLAIRS/////////////////
			listOfFlairs: [],
			addFlairSuccessfully: false,
			updateFlairSuccessfully: false,
			deleteFlairSuccessfully: false,

			//////////////////////BAN////////////////////////
			banUserSuccessfully: false,
		};
	},
	mutations,
	actions,
	getters,
};
