import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';
import { News } from '../News';

const App = ()=>(
<div>
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<div></div>} />
            <Route path="/news" element={<News/>} />
            <Route path="*" element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>
);
export {App}