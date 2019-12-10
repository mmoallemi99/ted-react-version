import React from 'react';
import '../assets/styles/home-page.scss'

function Description() {
    return (
        <section className="description">
            <div className="container">
                <h2 className="description__title">Hello "New" World</h2>
                <span className="underline_red"></span>
                <span className="underline_black"></span>
            </div>
            <div className="description__paragraph">
                <p>
                    Since Brian Kernighan wrote the "hello world" program in 1972 human life has been changed in many
                    ways. For years it was limited to the computer world but now, everything has been changed, in every
                    aspect of our life.
                    It has been a few years that scientists, researchers, futurists, and almost everyone, talking about
                    a new age that is yet to come. But now, at the edge of 2020; this is not something about tomorrow
                    anymore; It's today! So "hello NEW world"...
                </p>
                <p>
                    At TEDxUniversityOfIsfahan 2019, the first TEDx University event at Esfahan, we want to talk about
                    future challenges and changes. Speakers will share their ideas and thoughts about enturpership to
                    education, from history to philosophy, from architecture to data science.
                </p>
            </div>
        </section>
    )
}

export default Description;
