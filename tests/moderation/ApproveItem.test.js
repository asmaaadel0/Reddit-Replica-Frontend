import {mount} from '@vue/test-utils';
import ApprovedItem from '../../src/components/moderation/ApprovedItem.vue';
import {describe, it, expect} from 'vitest';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

describe ('ApprovedItem.vue', () => {
  const approve = {
    username: 'asmaa',
    avatar: '',
    dateOfApprove: '12-12-2002',
  };
  const index = 0;
  let count = 2;
  let handleTime = '2 years ago';

  //Mocking the store
  let store = new Vuex.Store ({
    modules: {
      userModule: {
        namespaced: true,
        state: {
          userData: {
            displayName: '',
            about: '',
            banner: '',
            picture: '',
            karma: 0,
            cakeDate: '2019-08-24',
            socialLinks: [
              {
                type: 'Reddit',
                displayText: 'medo',
                link: '11',
              },
            ],
            nsfw: true,
            followed: true,
            blocked: true,
            moderatorOf: [
              {
                subredditName: '',
                numOfMembers: 0,
                nsfw: true,
              },
            ],
          },
          socialLinkItems: [
            {
              text: 'Custom URL',
              imgSrc: 'img',
              alt: 'custom url',
              type: 'link' /* link or username */,
              baseurl: '',
            },
          ],
        },
      },
    },
  });
  //--------------------------------------------------------
  //                     Rendering
  //--------------------------------------------------------
  it ('should render', () => {
    const wrapper = mount (ApprovedItem, {
      props: {
        approve,
        index,
      },
      computed: {
        handleTime,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
  });

  //--------------------------------------------------------
  //                     Testing content page
  //--------------------------------------------------------

  it ('Testing input user approve is correct', () => {
    const wrapper = mount (ApprovedItem, {
      props: {
        approve,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.text ()).contain ('asmaa');
  });

  it ('Testing button remove approve is correct', () => {
    const wrapper = mount (ApprovedItem, {
      props: {
        approve,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#button-remove-0').text ()).contain ('Remove');
  });

  it ('Testing button remove approve is correct', () => {
    const wrapper = mount (ApprovedItem, {
      props: {
        approve,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    expect (wrapper.find ('#button-remove-0').text ()).contain ('Remove');
  });

  it ('Testing button remove approve button', () => {
    const wrapper = mount (ApprovedItem, {
      props: {
        approve,
        index,
      },
      global: {
        // OR:
        mocks: {
          $store: store,
        },
      },
    });
    const spamBtn = wrapper.find ('#button-remove-0');
    spamBtn
      .trigger ('click')
      .then (() => {
        expect (wrapper.text ()).contain ('Are you sure you want to remove asmaaadel0 as an approved user?');
        expect (wrapper.text ()).contain ('Remove');
        expect (wrapper.text ()).contain ('Cancel');
      })
      .catch (function () {
        console.log ('Promise Rejected');
      });
  });
});
