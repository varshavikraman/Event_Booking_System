import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddEvent from './pages/AddEvent';
import BookTicket from './pages/BookTicket';
import Payment from './pages/Payment';
import ConfirmTicket from './pages/ConfirmTicket';
import BookedTickets from './pages/Ticket';
import CancelTicket from './pages/CancelTicket'
import Profile from './pages/Profile'
import Signout from './components/Signout';
import SearchResult from './components/SearchResult';
import BookList from './pages/BookList';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/book/:eventName" element={<BookTicket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirm" element={<ConfirmTicket />} />
        <Route path="/booked-tickets" element={<BookedTickets />} />
        <Route path="/cancel-ticket" element={<CancelTicket />} />
        <Route path="/updateProfile" element={<Profile />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/booked-details" element={<BookList />} />

        {/* 404 Page */}
        <Route path="*" element={<h1 className='text-[#981D26] text-center text-5xl mt-80'>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
