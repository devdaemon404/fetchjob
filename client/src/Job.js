import React from 'react';

export default function Job({ job,onClick }) {

    return (

        <div className="card-group text-center">
            <div className="card border-dark mb-3" style={{ marginTop: "5px", marginLeft: "5px", width: "18rem" }}>
                <div onClick= {onClick}className="jobs card-header">
                    <h5>{job.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{job.company}</li>
                    <li className="list-group-item">{job.location}</li>
                </ul>
                <div class="card-footer text-muted">
                    {job.created_at.split(' ').slice(0, 3).join(' ')}
                </div>
            </div>
        </div>


    )
}