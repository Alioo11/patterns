import { func1 } from "./file1";
import { func2 } from "./file2";
import StoreRegistry from "./state_registery";

const BUSINESS_STORE = "BUSINESS_STORE"
const USER_STORE = "USER_STORE"

const UPDATE_BUSINESS_NAME = "UPDATE_BUSINESS_NAME"

const updateBusinessName = (newBusinessName: string) => {
  return {
    type: UPDATE_BUSINESS_NAME,
    name: newBusinessName,
  };
};

const rootReducer = (action, state) => {
  const { type } = action;
  switch (type) {
    case UPDATE_BUSINESS_NAME: {
      return { ...state, name: action.name };
    }
  }
};


StoreRegistry.createStore({ key: BUSINESS_STORE, reducer: rootReducer });
StoreRegistry.createStore({ key: USER_STORE, reducer: rootReducer });

const businessStore = StoreRegistry.getStore(BUSINESS_STORE);

const userStore = StoreRegistry.getStore(USER_STORE);


businessStore.dispatch(updateBusinessName("ali"))
userStore.dispatch(updateBusinessName("shit"))

console.log(businessStore.getState)
console.log(userStore.getState);

func1()
func2()