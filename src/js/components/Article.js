import React from 'react';

export const Article = ({data: { title, text, imgFormat, reversed, imgPath}}) => (
    <section className="container" style={ reversed ? {flexDirection: 'row-reverse'} : {}}>
        <article className={`col-${imgFormat === 'tall' ? 2 : 1}-${imgFormat === 'medium' ? 2 : 3}`}>
            <div className="title"><h3>{title}</h3></div>
            <div className="article_innerWrapper">
                {(typeof(text) === 'string' ? [text] : text).map(par => <p dangerouslySetInnerHTML={{__html: par}} />)}
            </div>
        </article>
        <a href={imgPath} className={`col-${imgFormat === 'wide' ? 2 : 1}-${imgFormat === 'medium' ? 2 : 3}`}><img src={imgPath} alt={title} /></a>
    </section>
);
