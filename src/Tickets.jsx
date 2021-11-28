import { useEffect, useState } from "react";
import axios from "axios";
import './Tickets.css';
import Ticket from './Ticket';

function Tickets() {
    const config = {
        auth: {
            username: process.env.REACT_APP_USERNAME,
            password: process.env.REACT_APP_PASSWORD
        }
    };

    const url = '/api/v2/tickets.json?page[size]=25';
    const [tickets, setTickets] = useState([]);
    const [links, setLinks] = useState([]);
    const [meta, setMeta] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTickets(url)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getTickets(url) {
        axios.get(url, config)
        .then(res => {
            setTickets(res.data.tickets);
            setLinks(res.data.links)
            if (res.data.tickets[0].id === 1) {
                res.data.meta.prev = false;
            } else {
                res.data.meta.prev = true;
            }
            setMeta(res.data.meta)
        })
        .catch(err => {
            console.log("error = " + err)
            setError(err);
        })
        
    }

    function previousPage() {
        let prevUrl = new URL(links.prev);
        getTickets(prevUrl.pathname + prevUrl.search)
    }

    function retryAction() {
        getTickets(url)
    }

    function nextPage() {
        let nextUrl = new URL(links.next);
        getTickets(nextUrl.pathname + nextUrl.search)
    }
    
    return <div className="tickets">
        <div className='next-previous-buttons'>
            <button className='previous-button' disabled={!meta.prev} onClick={() => previousPage()}>
                Previous
            </button>
            <button className='next-button' disabled={!meta.has_more} onClick={() => nextPage()}>
                Next   
            </button>
        </div>
        {
            (error === null)
            ? (<ul>{tickets.map(t => <li key={t.id}><Ticket ticket={t}/></li>)}</ul>)
            : (<div className='error-view'>
                <p>Oops. Error Occured</p>
                <button className='retry-button' onClick={() => retryAction()}>
                    Retry
                </button>
            </div>)
        }
    </div>
}

export default Tickets;