import React from 'react';
import Alert from '../Alert/Alert';
import Companies from '../Companies/Companies';
import Editor from '../Editor/Editor';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner';
import Menus from '../Header/Menus';

const Home = () => {
    return (
        <div>
            <Menus></Menus>
            <Banner></Banner>
            <Companies></Companies>
            <Alert></Alert>
            <Editor></Editor>
            <Footer></Footer>
        </div>
    );
};

export default Home;