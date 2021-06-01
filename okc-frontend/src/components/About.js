import React from 'react'

export const About = () => {
    return (
        <div>
             <div className="about">
                <div className="home-text">
                    <h3>Rescuing, Fostering, & Educating</h3>
                    <h1>Knittin' Kitten Foster</h1>
                    <p><a href="https://orphankittenclub.org/donate/" target="_blank">Donate</a></p>
                </div>
            </div>

            <div className="row">
                <div>
                    <img className="hero-img" src="https://images.unsplash.com/photo-1609074418406-d197af17b4b9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdHRlbnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Grey and White Tabby Kitten" />
                </div>
                <div>
                    <h3>Rescue & Fostering</h3>
                    <p>Every year, kitten season leaves thousands of kittens orphaned. On the streets or in a shelter, motherless kittens face impossible odds of survival. We are dedicated to saving those tiny lives. <br/><br/> Through rescue and fostering, we provide neonatal kittens specialzed care to give them a chance at a full and happy life.</p>
                </div>
            </div>

            <div className="row">
                <div>
                    <h3>Education & Outreach</h3>
                    <p>As part of our mission, we aim to educate the community on animal welfare, the importance of spay and neutering, and what to do when finding neonatal kittens outside.<br/><br/>By approaching the problem on both an individual and community level, we can make a significant difference and save tiny lives.</p>
                </div>
                <div>
                    <img className="hero-img" src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGtpdHRlbnN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Grey and White Tabby Kitten" />
                </div>
            </div>

        </div>
    )
}
