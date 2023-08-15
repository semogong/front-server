import {createStore} from "vuex";

export default createStore({
    state: {
        selectedPostId: null, // 선택된 게시글 ID를 저장할 상태
    },
    mutations: {
        SET_SELECTED_POST_ID(state, postId) {
            state.selectedPostId = postId;
        },
    },
    actions: {
        setSelectedPostId({ commit }, postId) {
            commit('SET_SELECTED_POST_ID', postId);
        },
    },
    getters: {
        selectedPostId: state => state.selectedPostId,
    },
})
