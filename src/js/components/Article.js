import React from 'react';

const maxPreviewLength = 400;

export const Article = ({data: { id, title, text, imgFormat, reversed, imgPath}}) => {
    let shortify = cont => {
        let deHTMLify = htmlCont => htmlCont.replace(/<.+?>/gi, '');
        let needsNewPage = (typeof(cont) === 'string' ? [cont] : cont).reduce((aggr, item) => aggr + deHTMLify(item).length, 0) > maxPreviewLength;
        if(needsNewPage) {
            let counter = 0;
            let done = false;
            if (typeof(cont) === 'string')
                return <p dangerouslySetInnerHTML={{__html: deHTMLify(cont).substring(0, maxPreviewLength) + `... <a href="/blog/${id}">Pokračovat ve čtení</a>`}}></p>;
            return cont.map(item => {
                if(!done) {
                    let plainItem = deHTMLify(item);
                    if (counter + plainItem.length < maxPreviewLength) {
                        counter += plainItem.length;
                        return <p>{plainItem}</p>;
                    }
                    done = true;
                    return <p dangerouslySetInnerHTML={{__html: plainItem.substring(0, maxPreviewLength) + `... <a href="/blog/${id}">Pokračovat ve čtení</a>`}}></p>;
                } return null;
            });
        }
        return (typeof(cont) === 'string' ? [cont] : cont).map(item => <p dangerouslySetInnerHTML={{__html: item}}></p>);
    };

    return (
        <section className={`article container${reversed ? ' reversed' : ''}`}>
            <article className={`col-${imgFormat === 'tall' ? 2 : 1}-${!imgPath ? 1 : (imgFormat === 'medium' ? 2 : 3)}`}>
                <div className="title"><h3>{title}</h3></div>
                <div className="article_innerWrapper">
                    {shortify(text)}
                </div>
            </article>
            {imgPath &&
                <a href={imgPath} className={`col-${imgFormat === 'wide' ? 2 : 1}-${imgFormat === 'medium' ? 2 : 3}`}><img src={imgPath} alt={title} /></a>
            }
        </section>
    );
};
