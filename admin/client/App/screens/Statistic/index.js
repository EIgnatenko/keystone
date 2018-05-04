import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	loadStatistic,
} from './actions';
import {
	InlineGroup as Group,
	InlineGroupSection as Section,
	Container
} from '../../elemental';
import moment from 'moment';

class Statistic extends Component {
	state = {
	}
   
	componentDidMount () {
		this.props.dispatch(loadStatistic());
	}


   
	render() {
        const { general, byAge, byDate } = this.props.statistic.data;
        const sortedDate = Object.keys(byDate).sort((a,b) => moment(a) - moment(b))
        const regPerDayBody = sortedDate.map(key => (
            <tr>
                <th scope="row">{key}</th>
                <td>{byDate[key].total}</td>
                <td>{byDate[key].en}</td>
                <td>{byDate[key].fr}</td>
            </tr>
        ))
		return (
            <Group block>
                <Section grow>
                    <Container style={{ paddingTop: '2em' }}>
                        <h2>Statistic</h2>
                        <div className="mt-4 mb-4">
                            <h3>General statistic</h3>
                            <div className="row">
                                <div className="col-sm">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">EN registrations/ballots: <span className="badge badge-primary badge-pill">{general.en}</span></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">FR registrations/ballots: <span className="badge badge-primary badge-pill">{general.fr}</span></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">Total: <span className="badge badge-primary badge-pill">{general.total}</span></li>
                                </ul>
                                </div>
                                <div className="col-sm">
                                </div>
                            </div>                        
                        </div>
                        <div className="mb-4">
                            <h3>By age range</h3>
                            <div className="row">
                                <div className="col-sm">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">18-29 <span className="badge badge-primary badge-pill">{byAge.firstG}</span></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">30-49 <span className="badge badge-primary badge-pill">{byAge.secondG}</span></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">50-79 <span className="badge badge-primary badge-pill">{byAge.thirdG}</span></li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">80+ <span className="badge badge-primary badge-pill">{byAge.fourthG}</span></li>
                                </ul>
                                </div>
                                <div className="col-sm">
                                </div>
                            </div>                        
                        </div>
                        <div className="mb-4">
                            <h3>Registration per day</h3>
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">En</th>
                                        <th scope="col">Fr</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {regPerDayBody}
                                </tbody>
                            </table>                    
                        </div>
                    </Container>
                </Section>
            </Group>
		)
	}
}


module.exports = connect((state) => {
	return {
		statistic: state.statistic,
	};
})(Statistic);