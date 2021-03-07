import React, { useState } from 'react';
import './SearchDestination.css'
import { Col, Form, FormControl, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

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
                    <FormControl className="p-4 border-0 search_input" list="datalistOptions" type="text" name="searchBox"
                        ref={register({ required: true })}
                        placeholder="Add city, Landmark, or address" />
                    <datalist id="datalistOptions">
                        <option value="San Francisco" />
                        <option value="New York" />
                        <option value="Seattle" />
                        <option value="Los Angeles" />
                        <option value="Chicago" />
                        <option value="Bangladesh" />
                    </datalist>
                    {errors.searchBox && <span classNane="text-danger">feild is required</span>}
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
                {/* <div className="multi_select_box"> */}
                {/* <select className="multi_select px-3" multiple>
                       <option>rakib</option>
                       <option>raju</option>
                       <option>rakhi</option>
                       <option>polash</option>
                       <option>faruk</option>
                       <option>rihan</option>
                    </select> */}
                {/* </div> */}
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
                <div className="container-fluid p-3 shadow count_content">
                    <div className="d-flex pt-5">
                        <h5 className="">ADULTS</h5>
                        <div className="btn_items">
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                            <label className="px-4 label_item" htmlFor="">1</label>
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                    <div className="d-flex pt-5">
                        <div>
                            <h5>CHILD</h5>
                            <h6 className="text-muted">Age 2-12</h6>
                        </div>
                        <div className="btn_items ml-3">
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                            <label className="px-4 label_item" htmlFor="">2</label>
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                    <div className="d-flex pt-5">
                        <div>
                            <h5>BABIES</h5>
                            <h6 className="text-muted">Younger tha 2</h6>
                        </div>
                        <div className="btn_item ml-2">
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faMinus} /></button>
                            <label className="px-4 label_item" htmlFor="">3</label>
                            <button className="border-0 bg-white"> <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
                <button className="p-2 px-5 my-3 mr-2 apply_btn">APPLY</button>
                <button
                    type="submit"
                    className="border-0 px-5 py-3 text-white"
                    id="search_btn">
                    <FontAwesomeIcon className="mr-2" icon={faSearch} /> Search
                 </button>
            </form>
        </>
    );
};

export default SearchDestination;