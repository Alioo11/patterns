
type StoresDict = { [id: string]: Store };
type subscribersDisc = { [id: string]: Function };

interface getStore {
  key: string;
  reducer: Function;
}

class StoreRegistry {
  protected static stores: StoresDict = {};
  private constructor() {}

  protected static haveStore(key: string): Boolean {
    return !!StoreRegistry.stores[key];
  }

  public static createStore(props: getStore) {
    if (StoreRegistry.haveStore(props.key)) throw new Error(`already have a store with key: ${props.key}`);
    const newStore = new Store(props);
    StoreRegistry.stores[props.key] = newStore;
    return newStore;
  }

  public static getStore(key: string) {
    if (!StoreRegistry.haveStore(key)) throw new Error(`no Store have registered with key : ${key}`);
    return StoreRegistry.stores[key];
  }
}

class Store {
  private state: Object = {};
  private subscribers: subscribersDisc = {};
  private reducer;

  private idGenerator() {
    return Math.random().toString(36).substring(10);
  }

  private callSubscribers() {
    const subscribersList = Object.keys(this.subscribers);
    const currentState = this.getState;
    subscribersList.forEach((subscriberId) => {
      this.subscribers[subscriberId](currentState);
    });
  }

  public dispatch(action: Object) {
    const currentState = this.getState;
    const updatedState = this.reducer(action, currentState);
    this.state = updatedState;
    this.callSubscribers();
  }

  private unsubscribe(subscriptionId: string) {
    if (!this.subscribers[subscriptionId]) throw new Error("no subscription found with given id ")
      return () => {
        delete this.subscribers[subscriptionId];
      };
  }

  public subscribe(callback: Function) {
    const callbackId = this.idGenerator();
    this.subscribers[callbackId] = callback;
    return this.unsubscribe(callbackId);
  }

  public get getState() {
    return this.state;
  }

  constructor(props: getStore) {
    this.reducer = props.reducer;
  }
}

export default StoreRegistry;