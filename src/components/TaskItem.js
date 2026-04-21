import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/TaskItem.scss';

function TaskItem({ task, onDelete, onToggle }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <Form.Check 
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="task-checkbox"
        />
        <div className="task-info">
          <div className="task-name">{task.name}</div>
          {task.dueDate && (
            <div className="task-date">Vence: {formatDate(task.dueDate)}</div>
          )}
        </div>
      </div>
      <Button 
        variant="danger" 
        size="sm"
        className="task-delete-btn"
        onClick={onDelete}
        title="Eliminar tarea"
      >
        ×
      </Button>
    </div>
  );
}

export default TaskItem;
