import React, { Component } from 'react';
import {Form, FormGroup, Label, Col, Input, FormFeedback, Button} from 'reactstrap';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';
import CSVReader from 'react-csv-reader';


class Upload extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            csvfile:'',
            data:'',
          
           
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFiles= this.handleFiles.bind(this);
        

        
    }

    handleInputChange(event)
    {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        console.log(target);
        this.setState({
            [name]: value,
        });

    }
    
    handleBlur = (field) => (evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]:true }
        });
    }


    handleSubmit(event) {
        console.log(event.target.csvfile.value);
        event.preventDefault();
    }

    handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function(e) {
            alert(reader.result);
        }
        reader.readAsText(files[0]);

    }
 
    render()
    {
        //Sample try
        const Data = `ID,Client Name,Amount,Risk Category
        0, Aryan Raj, "$1000000.00", HIGH
        1, Ram Gopal, "$65000000.00", MEDIUM
        2, Ravichandran, "$1000000000.00", MEDIUM
        3, Ramesh Raghav, "$5333244.00", LOW
        4, Kiran Chaturvedi, "$1750234123.00", LOW
        5, Praveen Vishwa Kumar, "$9999999.00", HIGH`; 
        
        
        return(
            <div className="container">
                <div className="row row-content" >
                    <div className="col-12">
                        <h2>File Analysis</h2>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Upload your CSV File Here</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <FormGroup row className="p-4">
                            <Label htmlFor="csvfile" md={4}>CSV FILE</Label>
                            <Col md={8}>
                                    <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                                        <button className='btn'>Upload Your Files Here</button>
                                    </ReactFileReader>
                                </Col>
                        </FormGroup>
                    </div>
                </div>
                <CsvToHtmlTable data={Data} csvDelimiter="," tableClassName="table table-striped table-hover" />


            </div>

        );
    }
}

export default Upload;