//@flow

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from './actions'
import InnerComponent from './InnerComponent'

class Settings extends Component {
	constructor(props: {
		decrease: () => {},
		get: () => {},
		increase: () => {},
		set: () => {},

		settings: {
			counter: number
		},
	}) {
		super(props)
	}

	doSet() {
		this.props.set(10)
	}

	render() {
		//{increase, decrease, settings} = this.props
		return <div>
			<h1>Settings {this.props.settings.counter}</h1>
			<button onClick={this.props.increase}>+</button>
			<button onClick={this.props.decrease}>-</button>
			<button onClick={() => this.doSet()}>set</button>
			<InnerComponent increase={this.props.get} />
		</div>
	}
}

export default connect(
	state => ({
		settings: state.settings,
	}),

	dispatch => ({
		decrease: () => dispatch({type: 'DECREASE'}),
		get     : () => dispatch({type: 'SETTINGS_FETCH_REQUESTED'}),
		increase: () => dispatch({type: 'INCREASE'}),
		set     : id => dispatch(actions.dataSet(id)),
	})
)(Settings)
