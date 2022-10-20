import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Task from "./Task";

const Tasks = () => {
  const task = [];
  const [startDate, setStartDate] = useState(new Date());
  const [inputValue, setinputValue] = useState("");

  console.log(task);

  // const tasksHandle = () => {
  //   task.push(inputTask);
  // };

  const inputHandle = (e) => {
    e.preventDefault();
    let inputTask = e.target.value;
    setinputValue(e.target.value);
    console.log(inputTask);

    task.push(inputTask);
  };

  return (
    <div>
      <Form>
        <Row>
          <Form.Label column="lg" lg={2}>
            Task
          </Form.Label>
          <Col>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Large text"
              value={inputValue}
              onChange={inputHandle}
            />
          </Col>
        </Row>
      </Form>
      <Form.Label column="lg" lg={2}>
        Day & Time
      </Form.Label>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      <Button className="my-4" type="submit" onClick={inputHandle}>
        Save Task
      </Button>
    </div>
  );
};

export default Tasks;
