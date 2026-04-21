import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/GoalCard.css';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function GoalCard({ goal, onDeleteGoal, onAddTask, onDeleteTask, onToggleTask }) {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const completedTasks = goal.tasks.filter(task => task.completed).length;
  const totalTasks = goal.tasks.length;
  const completionPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const formatDate = (dateString) => {
    if (!dateString) return 'Sin fecha';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <Card className="goal-card">
      <Card.Header className="goal-card-header">
        <div className="goal-header-content">
          <h5 className="goal-title">{goal.name}</h5>
          <Button 
            variant="danger" 
            size="sm" 
            className="delete-btn"
            onClick={() => onDeleteGoal(goal.id)}
            title="Eliminar meta"
          >
            ✕
          </Button>
        </div>
      </Card.Header>
      
      <Card.Body className="goal-card-body">
        <div className="goal-description mb-3">
          <p className="description-text">{goal.description || 'Sin descripción'}</p>
        </div>

        <div className="goal-meta mb-3">
          <div className="meta-item">
            <span className="meta-label">Fecha Límite:</span>
            <span className="meta-value">{formatDate(goal.dueDate)}</span>
          </div>
        </div>

        <div className="progress-section mb-3">
          <div className="progress-header">
            <span className="progress-label">Progreso</span>
            <span className="progress-percentage">{completionPercentage}%</span>
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <div className="progress-info">
            <small>{completedTasks} de {totalTasks} tareas completadas</small>
          </div>
        </div>

        <div className="tasks-section">
          <div className="tasks-header">
            <h6 className="tasks-title">Tareas</h6>
            <Button 
              variant="outline-primary" 
              size="sm"
              className="add-task-btn"
              onClick={() => setShowTaskForm(!showTaskForm)}
            >
              + Agregar Tarea
            </Button>
          </div>

          {showTaskForm && (
            <TaskForm 
              goalId={goal.id}
              onAddTask={(task) => {
                onAddTask(goal.id, task);
                setShowTaskForm(false);
              }}
              onCancel={() => setShowTaskForm(false)}
            />
          )}

          {goal.tasks.length === 0 ? (
            <div className="no-tasks">
              <p>No hay tareas. ¡Agrega una!</p>
            </div>
          ) : (
            <div className="tasks-list">
              {goal.tasks.map(task => (
                <TaskItem 
                  key={task.id}
                  task={task}
                  onDelete={() => onDeleteTask(goal.id, task.id)}
                  onToggle={() => onToggleTask(goal.id, task.id)}
                />
              ))}
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default GoalCard;
