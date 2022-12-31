import React from "react";
import Exam from './components/Exam/Exam'
import Instruction from "./components/Instruction/Instruction";
import "./App.css";
import {
	Create,
	Dashboard,
	Landing,
	Login,
	Register
} from './containers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Landing />} />
					<Route path="/register" element={<Register />} />
					<Route path="/create" element={<Create />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/instruction" element={<Instruction/>} />
					<Route path="/examination" element={<Exam/>} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
