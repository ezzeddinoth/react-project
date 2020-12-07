import React from 'react';
import Table from '../Component/Table';
import { getPerson, deletePerson, savePerson, updatePerson } from '../Service/PersonService'


export default class Person extends React.Component {
    state = {
        person: [], loading: true
    }

    async componentDidMount() {
        let person = await getPerson()
        this.setState({ person: person, loading: false })
    }


    render() {
        return (
            this.state.loading ? <div>laoding</div> :
                <div>People in System:
        <Table data={this.state.person}></Table>
                </div>)
    }

}