
import Footer from './components/Footer';
import { Header } from './components/Header';
import { HomeScreen } from './screens/HomeScreen';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Th11 } from './townhalls/Th11';
import { Th12} from './townhalls/Th12';
import { SubHeader } from './components/SubHeader';
import { Api } from './components/Api';
import { Th13 } from './townhalls/Th13';
import { Th14 } from './townhalls/Th14';
import { Th6 } from './townhalls/Th6';
import { Th7 } from './townhalls/Th7';
import { Th8 } from './townhalls/Th8';
import { Th9 } from './townhalls/Th9';
import { Th10 } from './townhalls/Th10';
import { Title } from './components/Title';
import { Bh6 } from './builderhall/Bh6';
import { Bh7 } from './builderhall/Bh7';
import { Bh8 } from './builderhall/Bh8';
import { Bh9 } from './builderhall/Bh9';
import { AboutScreen } from './screens/AboutScreen';
import { ContactScreen } from './screens/ContactScreen';
import { Helmet } from 'react-helmet'



function App() {
  return (
    <Router>
   <div>
     <Api />
     <Header/>
     <Helmet>
       <title>New CoC Bases | Latest CoC Clash Bases</title>
       <meta name="description" content="Get latest CoC War, Farm, Trophy bases in a single click. Also get best builder bases of all level" />
       <meta name="keywords" content="Get latest CoC War bases, clash bases, coc bases, builder hall bases, war bases, th11 war bases, th10 coc bases" />
     </Helmet>
     <Title />
     <SubHeader/>
     <Routes>
     <Route path='/' element={<HomeScreen />} exact />
     <Route path='/th6-base/' element={<Th6 />} />
     <Route path='/th7-base/' element={<Th7 />} />
     <Route path='/th8-base/' element={<Th8 />} />
     <Route path='/th9-base/' element={<Th9 />} />
     <Route path='/th10-base/' element={<Th10 />} />
     <Route path='/th11-base/' element={<Th11 />} />
     <Route path='/th12-base/' element={<Th12 />} />
     <Route path='/th13-base/' element={<Th13 />} />
     <Route path='/th14-base/' element={<Th14 />} />
     <Route path='/bh6-base/' element={<Bh6 />} />
     <Route path='/bh7-base/' element={<Bh7 />} />
     <Route path='/bh8-base/' element={<Bh8 />} />
     <Route path='/bh9-base/' element={<Bh9 />} />
     <Route path='/about' element={<AboutScreen />} />
     <Route path='/contact' element={<ContactScreen />} />
     </Routes>
     <Footer/>
   </div>
   </Router>
  );
}

export default App;
