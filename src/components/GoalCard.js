import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/GoalCard.scss';

function GoalCard({ goal, onDeleteGoal }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'Sin fecha';
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
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

          {/* Botón Eliminar */}
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
