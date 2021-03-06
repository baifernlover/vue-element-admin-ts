import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState } from './modules/app';
// import errorLog from './modules/errorLog';
// import permission from './modules/permission';
// import tagsView from './modules/tagsView';
import { IUserState } from './modules/user';
import { IPermissionState } from './modules/permission';

Vue.use(Vuex);

export interface IRootState {
  app: IAppState;
  user: IUserState;
  permission: IPermissionState;
}

// Declare empty store first, dynamically register all modules later.
const store = new Vuex.Store<IRootState>({
});

export default store;
