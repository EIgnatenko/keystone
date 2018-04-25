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

class Statistic extends Component {
	state = {
	}
   
	componentDidMount () {
		this.props.dispatch(loadStatistic());
	}


   
	render() {
        const {
            total,
            en,
            fr
        } = this.props.statistic;
		return (
            <Group block>
            <Section grow>
                <Container style={{ paddingTop: '2em' }}>
                    <h2>Statistic</h2>
                    <ul className="general-statistic-list">
                        <li className="general-statistic-item">EN registrations/ballots: <span>{en}</span></li>
                        <li className="general-statistic-item">FR registrations/ballots: <span>{fr}</span></li>
                        <li className="general-statistic-item">Total: <span>{total}</span></li>
                    </ul>
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