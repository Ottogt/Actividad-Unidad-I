import React, { useState } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import '../styles/GoalCard.scss';

function GoalCard({ goal, onDeleteGoal, onAddTask, onDeleteTask, onToggleTask }) {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const tasks = goal.tasks || [];
  const completedCount = tasks.filter(t => t.completed).length;
  const progress = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;

  const formatDate = (dateString) => {
    if (!dateString) return 'Sin fecha';
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const handleAddTask = (taskData) => {
    onAddTask(goal.id, taskData);
    setShowTaskForm(false);
  };

  return (
    <div className="goal-card-wrapper">
      <Card className="goal-card">
        <Card.Header className="goal-card-header">
          <div className="goal-header-top">
            <h5 className="goal-title">{goal.name}</h5>
          </div>
        </Card.Header>

        <Card.Body className="goal-card-body">
          {/* Descripción */}
          <div className="goal-description-section">
            <div className="goal-description-label">Descripción</div>
            <p className="goal-description">{goal.description || 'Sin descripción'}</p>
          </div>

          {/* Fecha de Vencimiento */}
          <div className="goal-meta-section">
            <div className="meta-row">
              <span className="meta-label">Fecha de Vencimiento</span>
              <span className="meta-value">{formatDate(goal.dueDate)}</span>
            </div>
          </div>

          {/* Progreso */}
          {tasks.length > 0 && (
            <div className="goal-progress-section">
              <div className="progress-label">
                Progreso: {completedCount}/{tasks.length} tareas ({progress}%)
              </div>
              <ProgressBar now={progress} className="goal-progress-bar" />
            </div>
          )}

          {/* Lista de Tareas */}
          <div className="tasks-section">
            <div className="tasks-header">
              <span className="tasks-title">Tareas</span>
              <Button
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
                onAddTask={handleAddTask}
                onCancel={() => setShowTaskForm(false)}
              />
            )}

            {tasks.length === 0 && !showTaskForm ? (
              <p className="no-tasks-msg">No hay tareas aún.</p>
            ) : (
              <div className="tasks-list">
                {tasks.map(task => (
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

          {/* Botón Eliminar Meta */}
          <Button
            className="btn-eliminar"
            onClick={() => onDeleteGoal(goal.id)}
          >
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GoalCard;
