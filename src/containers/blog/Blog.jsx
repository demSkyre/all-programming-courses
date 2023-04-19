import React from 'react';
import Article from '../../components/article/Article';
import { jsbanner, htmlbanner, cssbanner, csharpbanner, sqlbanner } from './imports';
import './blog.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToastMessage = () => {
  toast.info('Este curso aún no esta disponible', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
};

const Blog = () => (
  <div className="gpt3__blog section__padding" id="cursos">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Los cursos que brindamos, <br /> Todo sobre programación.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={jsbanner} date="Sep 26, 2021" text="Curso de JavaScript ES6. Lo necesario para empezar." onClickFunction={showToastMessage} />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={htmlbanner} date="Sep 26, 2021" text="Curso de HTML básico" onClickFunction={showToastMessage} />
        <Article imgUrl={cssbanner} date="Sep 26, 2021" text="Curso de CSS básico" onClickFunction={showToastMessage} />
        <Article imgUrl={csharpbanner} date="Sep 26, 2021" text="¿Qué habrá en el curso de C# y porqué tomarlo?" onClickFunction={showToastMessage} />
        <Article imgUrl={sqlbanner} date="Sep 26, 2021" text="¿Qué habrá en el curso de SQL y porque tomarlo?" toastonClickFunctionMessage={showToastMessage} />
      </div>
    </div>
    <ToastContainer
    position="bottom-center"
    autoClose={5000}
    limit={1}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
  </div>
);

export default Blog;
