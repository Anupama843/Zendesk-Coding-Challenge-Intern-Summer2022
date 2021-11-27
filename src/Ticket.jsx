import { useState } from "react";
import './Tickets.css';
import Moment from 'moment';

function Ticket({ ticket }) {

    const [showDetails, setShowDetails] = useState(false);

    function showHideDetail() {
        setShowDetails(!showDetails);
    }

    return (
        <div className="ticket">
            <div className='compact-view'>
                <div>
                    <div className='ticket-no'>
                        <p className='ticket-no-label'><strong>Ticket#:</strong></p>
                        <p className='ticket-no-value'>{ticket.id}</p>
                    </div>
                    <div className='subject'>
                        <p className='subject-label'><strong>Subject:</strong></p>
                        <p className='subject-value'>{ticket.subject}</p>
                    </div>
                    <div className='status'>
                        <p className='status-label'><strong>Status:</strong></p>
                        <p className='status-value'>{ticket.status}</p>
                    </div>
                    <div className='priority'>
                        <p className='priority-label'><strong>Priority:</strong></p>
                        <p className='priority-value'>{ticket.priority ?? 'n/a'}</p>
                    </div>
                </div>
                <div>
                    <button className='show-hide' 
                        onClick={() => showHideDetail()}
                    > {!showDetails ? 'Show Details' : 'Hide Details'}
                    </button>
                </div>
            </div>
            { showDetails 
                ? (<div className='details-view'>
                    <div className='requester'>
                        <p className='requester-label'><strong>Requester:</strong></p>
                        <p className='requester-value'>{ticket.requester_id}</p>
                    </div>
                    <div className='assignee'>
                        <p className='assignee-label'><strong>Assignee:</strong></p>
                        <p className='assignee-value'>{ticket.assignee_id}</p>
                    </div>
                    <div className='created'>
                        <p className='created-label'><strong>Created:</strong></p>
                        <p className='created-value'>{Moment(ticket.created_at).format('LLL')}</p>
                    </div>
                    <div className='last-updated'>
                        <p className='last-updated-label'><strong>Updated:</strong></p>
                        <p className='last-updated-value'>{Moment(ticket.updated_at).format('LLL')}</p>
                    </div>
                    <div className='tags'>
                        <p className='tags-label'><strong>Tags:</strong></p>
                        <p className='tags-value'>{ticket.tags.map(tag => '#'+tag+' ')}</p>
                    </div>
                    <div className='description'>
                        <p className='description-label'><strong>Description:</strong></p>
                        <p className='description-value'>{ticket.description}</p>
                    </div>
                 </div>) 
                : null
            }
        </div>
    )
}


export default Ticket;