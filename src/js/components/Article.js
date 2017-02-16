import React from 'react';

const maxPreviewLength = 400;

export const Article = ({data: { id, title, text, imgPath}}) => {
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
        <section className={`articleWrapper`}>
            <article className={`article`}>
                <div className="title"><h3>{title}</h3></div>
                {shortify(text)}
            </article>
            {imgPath &&
                <a href={imgPath} className={`articleImage`}><img src={imgPath} alt={title} /></a>
            }
        </section>
    );
};
