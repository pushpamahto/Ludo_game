import React from "react";
import Login from './components/Login'

import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Register from "./components/Register";

import Navbar from "./components/Navbar";

import Dice3D from "./components/Dice3D";
import Canvas from "./components/Canvas";
import ProfileCard from "./ProfileCard/ProfileCard";
import TicTac from "./Games/TicTacGame/TicTac";
import Playzone from "./components/Playzone";
import Friends from "./Friends/Friends";
import LadderSnake from "./SnakeLadder/LadderSnake";

import Mainpage from "./GameSnakeLadder/MainPage";

import EarnSection from "./Friends/EarnSection";

import EkycPage from "./EkycVerification/EkycPage";



const App = () => {
  return (
    <>
    
      <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path ="/profile" element={<Profile/>}/>
      <Route path ="register" element={<Register/>}/>
      
      <Route path ="navbar" element={<Navbar/>}/>
      <Route path ="dice3d" element={<Dice3D/>}/>
      <Route path ="canvas" element={<Canvas/>}/>

      <Route path ="profilecard" element={<ProfileCard/>}/>

      <Route path="tictac" element={<TicTac/>}/>
      <Route path="/playzone" element={<Playzone />} />

      <Route path="/friends" element={<Friends />} />

      <Route path="/laddersnake" element={<LadderSnake />} />
      <Route path="/mainpage" element={<Mainpage />} />

      <Route path="/earnsection" element={<EarnSection />} />

      <Route path="/ekycpage" element={<EkycPage />} />








      
      
     
    </Routes>
    </>
  )
}

export default App



