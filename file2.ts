import StoreRegistry from "./state_registery";


const func2 = () =>{
    const userStore = StoreRegistry.getStore("USER_STORE");
    console.log("func2 is",userStore.getState)
}

export { func2 };