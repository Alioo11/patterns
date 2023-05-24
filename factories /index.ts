// enum os {
//   android,
//   windows,
//   linux,
// }

// interface ui_component {
//   render: () => void;
// }

// interface button extends ui_component {
//   onClick: () => void;
//   text: string;
// }


// class WindowsButton implements button {
//   constructor (public text: string){}

//   render= () => {
//     console.log(`rendering button in windows context with text : ${this.text}...`);
//   };

//   onClick= () => {
//     console.log('button clicked in windows OS')
//   };
// }

// class AndroidButton implements button {
//   constructor (public text: string){}

//   render= () => {
//     console.log(`rendering button in android context with text : ${this.text}...`);
//   };

//   onClick= () => {
//     console.log('button clicked in android OS')
//   };
// }

// interface MUI {
//   createButton: (args: any) => button;
// }


// class WindowsMUI implements MUI {
//   createButton = (text: string) => {
//     return new WindowsButton(text);
//   };
// }


// class AndroidMUI implements MUI {
//   createButton = (text: string) => {
//     return new AndroidButton(text);
//   };
// }

// function App (operatingSystem:os) {
//   const builder = operatingSystem === os.android ? new AndroidMUI() : new WindowsMUI()

//   const windowsComponents = [builder.createButton("submit"), builder.createButton("cancel")];

//   const renderUI = (ui_components:button[])=>{
//     ui_components.forEach((i) => i.render());
//   }

//   renderUI([...windowsComponents ])

// }

// App(os.windows);