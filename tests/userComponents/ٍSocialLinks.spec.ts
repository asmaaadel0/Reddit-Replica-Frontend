import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import SocialLinks from '../../src/components/UserComponents/BaseUserComponents/SocialLinksComponents/SocialLinks.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

import { describe, it, expect } from 'vitest';
describe('SocialLinkStatic.vue', () => {
	it('should renders if show is true ', () => {
		const wrapper = mount(SocialLinks, {
			props: {
				show: true,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});
	it('should not renders if show is false ', async () => {
		const wrapper = mount(SocialLinks, {
			props: {
				show: false,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#static-social-links');
		expect(byId.exists()).toBe(false);
	});
	it('check for rendering social link items ', async () => {
		const wrapper = mount(SocialLinks, {
			props: {
				show: true,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#static-Facebook');
		expect(byId.text()).toBe('Facebook');
	});
	it('check for rendering social link items ', async () => {
		const wrapper = mount(SocialLinks, {
			props: {
				show: true,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#static-Twitter');
		expect(byId.text()).toBe('Twitter');
	});
	it('check for rendering social link items ', async () => {
		const wrapper = mount(SocialLinks, {
			props: {
				show: true,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#static-Twitter');
		await byId.trigger('click');
		expect(wrapper.exists()).toBe(true);
	});
});
