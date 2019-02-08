import React, { Component } from 'react';

class ProgressTracker extends Component {
    render() {
        return (
            <div classname="progress-tracker">
                <label className="progress-tracker__label">Progress Tracker</label>
                <div className="progress-tracker__percentage">
                    0%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;