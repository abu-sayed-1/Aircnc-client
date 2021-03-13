import React, { useReducer, useState } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import Shake from 'react-reveal/Shake';
import { useHistory } from 'react-router';
import uuid from 'react-uuid';

const initialState = {
    adults: 0,
    child: 0,
    babies: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT1':
            return { ...state, adults: state.adults + 1 };
        case 'DECREMENT1':
            const adults = state.adults < 1;
            return { ...state, adults: adults ? 0 : state.adults - 1 };
        case 'INCREMENT2':
            return { ...state, child: state.child + 1 };
        case 'DECREMENT2':
            const Child = state.child < 1;
            return { ...state, child: Child ? 0 : state.child - 1 };
        case 'INCREMENT3':
            return { ...state, babies: state.babies + 1 };
        case 'DECREMENT3':
            const babies = state.babies < 1;
            return { ...state, babies: babies ? 0 : state.babies - 1 };
        default: throw new Error('Unexpected action');
    };
};


const CountMembersAndSetDates = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const uniqueId = uuid();
    const history = useHistory();
    // date picker here ==============>
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const currentDate = new Date();
    const futureDate = currentDate.setDate(currentDate.getDate() + 3)
    const [selectedEndDate, setSelectedEndDate] = useState(currentDate);
    const handleStartDate = startDate => {
        setSelectedStartDate(startDate);
    };
    const handleEndDate = endDate => {
        setSelectedEndDate(endDate)
    };

    // handle Members And Dates
    const handleMembersAndDates = () => {
        const members = state.adults > 0 || state.child > 0;
        const startDateCheckout = selectedStartDate == "Invalid Date" || !selectedStartDate;
        const endDateCheckout = selectedEndDate == "Invalid Date" || !selectedEndDate;

        if (members && !startDateCheckout && !endDateCheckout) {
            const EndFullDate = selectedEndDate.toLocaleDateString();
            const startFullDate = selectedStartDate.toLocaleDateString();
            const longEndDay = selectedEndDate.toLocaleString('default', { weekday: 'long' });
            const longStartDay = selectedStartDate.toLocaleString('default', { weekday: 'long' });
            const numericEndDay = selectedEndDate.toLocaleString('default', { day: 'numeric' });
            const numericStartDay = selectedStartDate.toLocaleString('default', { day: 'numeric' });
            const month = selectedStartDate.toLocaleString('default', { month: 'short' });
            const gusts = state.adults + state.child + state.babies;
            const remaining = [
                {
                    id: uniqueId,
                    startFullDate: startFullDate,
                    EndFullDate: EndFullDate,
                    Month: month,
                    longStartDay: longStartDay,
                    longEndDay: longEndDay,
                    numericEndDay: numericEndDay,
                    numericStartDay: numericStartDay,
                    gusts: gusts,
                    ...state
                }
            ];
            fetch('http://localhost:4000/membersAndDates', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(remaining)
            })
                .then(result => {
                    sessionStorage.setItem('uniqueId', uniqueId)
                    if (result) {
                        history.push("/division");
                    }
                });
        };

    };


    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <Row className="mt-4">
                        <Col className="p-2 shadow search_item">
                            <div>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Arrival"
                                    value={selectedStartDate}
                                    onChange={handleStartDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                {
                                    selectedStartDate == null &&
                                    <Shake>
                                        <p className="text-danger">Start date is required</p>
                                    </Shake>
                                }
                            </div>
                        </Col>

                        <Col className="p-2 ml-2 shadow search_item">
                            <div>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Departure"
                                    value={selectedEndDate}
                                    onChange={handleEndDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                {
                                    selectedEndDate == null &&
                                    <Shake>
                                        <p className="text-danger">End date is required</p>
                                    </Shake>
                                }
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </MuiPickersUtilsProvider>
            <br />
            <div className="container-fluid px-3 shadow count_content">

                <div className="py-3 border-bottom">
                    <h6 className="text-muted mb-0">Guests</h6>
                    <label className="mr-2 members_count" htmlFor="">{state.adults} adults,</label>
                    <label className="mr-2 members_count" htmlFor="">{state.child} child,</label>
                    <label className="mr-2 members_count" htmlFor="">{state.babies} babies</label>
                </div>
                <div className="d-flex pt-5">
                    <h5 className="">ADULTS</h5>
                    <div className="btn_items">
                        <button onClick={() => dispatch({ type: 'DECREMENT1' })} className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                        <label className="px-4 label_item" htmlFor="">{state.adults}</label>
                        <button onClick={() => dispatch({ type: 'INCREMENT1' })} className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
                <div className="d-flex pt-5">
                    <div>
                        <h5>CHILD</h5>
                        <h6 className="text-muted">Age 2-12</h6>
                    </div>
                    <div className="btn_items ml-3">
                        <button onClick={() => dispatch({ type: 'DECREMENT2' })} className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                        <label className="px-4 label_item" htmlFor="">{state.child}</label>
                        <button onClick={() => dispatch({ type: 'INCREMENT2' })} className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
                <div className="d-flex pt-5">
                    <div>
                        <h5>BABIES</h5>
                        <h6 className="text-muted">Younger tha 2</h6>
                    </div>
                    <div className="btn_item ml-2">
                        <button onClick={() => dispatch({ type: 'DECREMENT3' })} className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                        <label className="px-4 label_item" htmlFor="">{state.babies}</label>
                        <button onClick={() => dispatch({ type: 'INCREMENT3' })} className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
                <button onClick={() => handleMembersAndDates()} className="p-2 px-5 mt-5 mr-2 apply_btn">APPLY</button>
            </div>
        </div>
    );
};

export default CountMembersAndSetDates;