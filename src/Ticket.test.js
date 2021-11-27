import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ticket from './Ticket';
Enzyme.configure({ adapter: new Adapter() });

const mockTicket = {
    "id": 1,
    "created_at": "2021-11-21T03:51:29Z",
    "updated_at": "2021-11-21T03:51:30Z",
    "type": "incident",
    "subject": "Sample ticket: Meet the ticket",
    "description": "Hi there, I’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
    "priority": "normal",
    "status": "open",
    "tags": [
        "sample",
        "support",
        "zendesk"
    ]
}

describe('Ticket', () => {
    it('Ticket non expanded state', () => {

        const ticketInstance = shallow(<Ticket ticket={mockTicket}/>);
        
        const element = ticketInstance.find('div div div p');
        expect(element.length).toBe(8);

        const ticketLabel = ticketInstance.find('.ticket-no-label');
        expect(ticketLabel.text()).toBe('Ticket#:');
        const ticket = ticketInstance.find('.ticket-no-value');
        expect(ticket.text()).toBe('1');

        const subject = ticketInstance.find('.subject-value');
        expect(subject.text()).toBe('Sample ticket: Meet the ticket');

        const priority = ticketInstance.find('.priority-value');
        expect(priority.text()).toBe('normal');

        const status = ticketInstance.find('.status-value');
        expect(status.text()).toBe('open');
    });

    it('Ticket in expanded state', () => {

        const ticketInstance = shallow(<Ticket ticket={mockTicket}/>);
        
        const showMoreButton = ticketInstance.find('button');
        showMoreButton.simulate('click');

        const element = ticketInstance.find('div div');
        expect(element.length).toBe(14);
        
        const description = ticketInstance.find('.description-value');
        expect(description.text()).toBe('Hi there, I’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n');

        const created = ticketInstance.find('.created-value');
        expect(created.text()).toBe('November 20, 2021 7:51 PM');

        const lastUpdated = ticketInstance.find('.last-updated-value');
        expect(lastUpdated.text()).toBe('November 20, 2021 7:51 PM');

        const tags = ticketInstance.find('.tags-value');
        expect(tags.text()).toBe('#sample #support #zendesk ');

    });
 });