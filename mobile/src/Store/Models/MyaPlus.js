import { Queries } from '../../Utils';
import auth from '@react-native-firebase/auth';

export default {
  state: { user: {} },
  reducers: {
    setUserDetails (state, user) {
      return { ...state, user };
    }
  },
  effects: (dispatch) => ({
    // Signup
    async signup ({ email, password, callback }, state) {
      try {
        callback({ success: true, user: {} });
      } catch (error) {
        callback({ success: false, error: error.message });
      }
    },

    async getUserDetails ({ uid, callback }) {
      try {
        await Queries.getSingleDoc('Users', uid, (resp) => {
          const { email, uid } = auth().currentUser;
          dispatch.MyaPlus.setUserDetails({ email, uid, ...resp.doc });
          callback(resp);
        });
      } catch (error) {
        return callback({ error });
      }
    }
  })
};
