import StoreRegistry from "./state_registery";

const func1 = () =>{
    const store = StoreRegistry.getStore("BUSINESS_STORE");
    console.log("file1", store.getState);
}

export { func1 };