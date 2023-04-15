import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Los cursos que brindamos, <br /> Todo sobre programación.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Curso de JavaScript ES6. Lo necesario para empezar." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Curso de HTML básico" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Curso de CSS básico" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="¿Qué habrá en el curso de C# y porqué tomarlo?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="¿Qué habrá en el curso de SQL y porque tomarlo?" />
      </div>
    </div>
  </div>
);

export default Blog;
