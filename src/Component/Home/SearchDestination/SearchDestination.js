import React, { useState } from 'react';
import './SearchDestination.css'
import { Col, Form, FormControl, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
React.Bootstrap = require('react-bootstrap');
React.Bootstrap.Select = require('react-bootstrap-select');

const SearchDestination = () => {
    // date picker here ==============>
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    console.log(selectedStartDate, '[selectedStartDate]');
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    console.log(selectedEndDate, '[selectedEndDate]')

    const handleStartDate = startDate => {
        setSelectedStartDate(startDate);
    };

    const handleEndDate = endDate => {
        setSelectedEndDate(endDate)
    }

    // form func here ===================>
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <>
            <h3 className="mb-5 pb-2 item">Where do you want to go</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4 shadow-sm search_item">
                    <h5 className="pl-4 fw_bold">LOCATION</h5>
                    <FormControl className="p-4 border-0" list="datalistOptions" type="text" name="searchBox"
                        ref={register({ required: true })}
                        placeholder="Add city, Landmark, or address" />
                    {/* <datalist id="datalistOptions">
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                        <option value="Bangladesh" />
                    </datalist> */}
                    {errors.searchBox && <span>feild is required</span>}
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <Row className="mt-4">
                            <Col className="p-2 shadow search_item">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yy"
                                    margin="normal"
                                    label="Arrival"
                                    value={selectedStartDate}
                                    onChange={handleStartDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Col>
                            <Col className="p-2 ml-2 shadow search_item">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yy"
                                    margin="normal"
                                    label="Departure"
                                    value={selectedEndDate}
                                    onChange={handleEndDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </MuiPickersUtilsProvider>
                <br />
                <div className="multi_select_box">
                    {/* <select className="multi_select px-3" multiple>
                       <option>rakib</option>
                       <option>raju</option>
                       <option>rakhi</option>
                       <option>polash</option>
                       <option>faruk</option>
                       <option>rihan</option>
                    </select> */}
                    <React.Bootstrap.Select>
                        <option>Mustard</option>
                        <option>Ketchup</option>
                        <option>Barbecue</option>
                    </React.Bootstrap.Select>
                </div>
                {/* <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Custom select</Form.Label> */}
                {/* <Form.Control as="select" custom> */}
                {/* <select class="selectpicker" multiple data-max-options="2">
                        <optgroup label="Condiments" data-max-options="2">
                            <option>Mustard</option>
                            <option>Ketchup</option>
                            <option>Relish</option>
                        </optgroup>
                        <optgroup label="Breads" data-max-options="2">
                            <option>Plain</option>
                            <option>Steamed</option>
                            <option>Toasted</option>
                        </optgroup>
                        <optgroup label="Breads" data-max-options="2">
                            <option>Plain</option>
                            <option>Steamed</option>
                            <option>Toasted</option>
                        </optgroup>
                        </select> */}
                {/* </Form.Control> */}
                {/* </Form.Group> */}
                <button type="submit">Search</button>
            </form>
        </>
    );
};

export default SearchDestination;