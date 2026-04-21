import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/TaskForm.scss';

function TaskForm({ goalId, onAddTask, onCancel }) {
  const [taskData, setTaskData] = useState({
    name: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.name.trim()) {
      onAddTask(taskData);
      setTaskData({
        name: '',
        dueDate: ''
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="task-form">
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          name="name"
          value={taskData.name}
          onChange={handleChange}
          placeholder="Nombre de la tarea"
          className="task-input"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="date"
          name="dueDate"
          value={taskData.dueDate}
          onChange={handleChange}
          className="task-input"
        />
      </Form.Group>

      <div className="task-form-buttons">
        <Button 
          variant="secondary" 
          size="sm"
          onClick={onCancel}
          className="task-cancel-btn"
        >
          Cancelar
        </Button>
        <Button 
          variant="primary" 
          size="sm"
          type="submit"
          className="task-submit-btn"
        >
          Agregar
        </Button>
      </div>
    </Form>
  );
}

export default TaskForm;
