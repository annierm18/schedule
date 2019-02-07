import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course_title">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course_description">
                    <label>Problem Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim vulputate nisi. Morbi ut tincidunt risus, eu fringilla libero. Sed eget tincidunt tellus. Suspendisse ut blandit purus.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;