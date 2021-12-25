import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';
import { News } from '../Sections/News';
import { Mobile } from '../Sections/Mobile';
import { PC } from '../Sections/PC';
import { Laptops } from '../Sections/Laptops';
import { Tech } from '../Sections/Tech';
import { Films } from '../Sections/Films';
const App = ()=>(
<div>
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<div></div>} />
            <Route path="/news" element={<News/>} />
            <Route path="*" element={<div></div>} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/pc" element={<PC />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/tech" element={<Tech/>} />
            <Route path="/Films" element={<Films />} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>
);
export {App}