---
sidebar_position: 0
---

# Overview

[Hyperfy](https://hyperfy.io) is a low-code metaverse platform that makes it easy for anyone to create and trade rich, immersive virtual worlds that can be accessed from any web browser on any device, including mobile and VR. Worlds can be collaboratively edited in real-time with permissioned access.
                                                                                                                          
![](/img/hyperfy.jpg)

---

## Features

- Import custom glTF 3D models and VRM avatars
  - Support for `vrm_url` in NFT metadata
- Real-time collaboratively editing
- Rendering powered by threejs and webgl
- SDK to create and upload your own apps
- VR support with IK (full body not yet supported)


---

## Quick Start                                                                                                             
                                                                                                                          
The easiest way to get started is by initializing a new project using `npx`:                                              
                                                                                                                          
```bash                                                                                                                   
npx hyperfy create <project>                                                                                              
```                                                                                                                       
                                                                                                                          
This will create a project with a demo environment to get you started.                                                    
                                                                                                                          
Launch the development server:                                                                                            
                                                                                                                          
```bash                                                                                                                   
cd <project>                                                                                                              
npm install                                                                                                               
npm run dev                                                                                                               
```                                                                                                                       
                                                                                                                          
Visit `http://localhost:4000` in your browser.                                                                            
                                                                                                                          
You now have a fully functional space running locally on your machine!                                                    
                                                                                                                          
Open `components/meadow/index.js` and change `NUM_OBJECTS` to another value and hit save. The browser will reload and show your changes. Play around with the `seed` value to get objects to spawn in different formations or try adding your own GLTF models to the environment.                                                                                             
                                                                                                                          
To test multiplayer, open the space in multiple browser tabs. Each tab will automatially use a unique guest account. 
