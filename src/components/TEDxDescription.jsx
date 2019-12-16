import React from 'react'
import '../assets/styles/home-page.scss'

function TEDxDescription() {
    return (
        <section className="what">
            <div className="container">
                <div className="what__explain">
                    <div className="what__explain_ted">
                        <h2 className="what__explain_ted_title">What is TED?</h2>
                        <span className="underline_red"></span>
                        <span className="underline_black"></span>
                        <p className="what__explain_ted_text">
                            TED (Technology, Entertainment, and Design) is a nonprofit devoted to spreading ideas,
                            usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a
                            conference where Technology, Entertainment and Design converged, and today covers almost all
                            topics — from science to business to global issues — in more than 100 languages.
                        </p>
                    </div>
                    <div className="what__explain_tedx">
                        <h2 className="what__explain_tedx_title">What is TEDx?</h2>
                        <span className="underline_red"></span>
                        <span className="underline_black"></span>
                        <p className="what__explain_tedx_text">
                            A TEDx event is a local gathering where live TED-like talks and performances are shared with
                            the community. TEDx events are fully planned and coordinated independently, on a
                            community-by-community basis. The content and design of each TEDx event is unique and
                            developed independently, but all of them have features in common.
                        </p>
                    </div>
                </div>
                <div className="what__about">
                    <h2 className="what__about_title">What is TEDx University of Isfahan?</h2>
                    <span className="underline_red"></span>
                    <span className="underline_black"></span>
                    <p className="what__about_text">
                        This is the first time that TEDxUniversityOfIsfahan is going to be held among the universities
                        of Isfahan. The whole point of this event is to spread the “Ideas Worth Spreading”; besides,
                        it’s going to connect the students from different fields of study and share their ideas with the
                        world. In this event, members of the faculty, Doctors of Philosophy and successful graduates of
                        the university are going to gather and share their ideas in 12 minutes or less. In Addition to
                        that there will be guests from the academic associations and the university staff.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TEDxDescription;
