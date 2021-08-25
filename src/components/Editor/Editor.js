import React from 'react';
import { Container } from 'react-bootstrap';
import editor from "../../Assets/Text Editor.png";

const Editor = () => {
    return (
        <div className="editor mb-5">
            <Container>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <img style={{width: '100%'}} src={editor} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1>A text editor like no other.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ipsum libero similique inventore qui minima velit doloremque ipsa provident natus.</p>
                        <a href="https://www.google.com/">Text Editor Live Demo</a> 

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Editor;