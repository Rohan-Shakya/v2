import React from 'react';
import blog1 from '../../img/blog/javascript-is-eating-the-world-20-638.jpg';
import blog2 from '../../img/blog/constructor.png';
import blog3 from '../../img/blog/regex.png';
import { BlogItem } from './BlogItem';

export const Blog = () => {
  return (
    <>
      <section className='blog section' id='blog'>
        <div className='container'>
          <div className='row'>
            <div className='section-title padd-15'>
              <h2>Latest Blog</h2>
            </div>
          </div>
          <div className='row'>
            <BlogItem
              title='Why Javascript is Eating the World?'
              date='23 April 2020'
              tag='Javascript'
              image={blog1}
              link='https://css-tricks.com/why-javascript-is-eating-html/'
              desc=' Web development is always changing. One trend in particular
              has become very popular lately, and it fundamentally goes
              against the conventional wisdom about how a web page should
              be made. It is exciting for some but frustrating for others,
              and the reasons for both are difficult to explain.'
            />

            <BlogItem
              title='UnderStanding Javascript Constructors'
              date='24 April 2020'
              tag='Javascript'
              image={blog2}
              link='https://css-tricks.com/understanding-javascript-constructors/'
              desc='Having a good understanding of constructors is crucial to
              truly understand the JavaScript language. Technically,
              JavaScript doesn’t have classes, but it has constructors
              and prototypes to bring similar functionality to JavaScript.
              In fact, the className declaration introduced in ES2015
              simply works as syntactic sugar over the existing
              prototype-based inheritance and does not really add any
              extra functionality to the language.'
            />

            <BlogItem
              title='Understanding Regex 101'
              date='22 April 2020'
              tag='RegExp'
              image={blog3}
              link='https://blog.usejournal.com/understanding-regex-101-204853651755'
              desc='As a software developer, you’ve probably encountered regular
              expressions several times. Regular expressions (Regex or RegExp) are extremely useful in stepping up your algorithm game and will make you a
              better problem solver.'
            />
          </div>
        </div>
      </section>
    </>
  );
};
